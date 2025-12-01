-- 1. Enable Vector Extension
create extension if not exists vector;

-- 2. Ensure Docs Table Exists (with correct columns)
create table if not exists docs (
  id bigint primary key generated always as identity,
  source_id text not null,
  content text,
  metadata jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. Ensure Embeddings Table Exists
create table if not exists embeddings (
  id bigint primary key generated always as identity,
  doc_id bigint references docs(id) on delete cascade,
  content text,
  embedding vector(768), -- Gemini uses 768 dimensions
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 4. Create Index for Performance
create index if not exists embeddings_embedding_idx on embeddings using hnsw (embedding vector_cosine_ops);

-- 5. Fix Match Documents Function
create or replace function match_documents (
  query_embedding vector(768),
  match_threshold float,
  match_count int
)
returns table (
  id bigint,
  content text,
  similarity float
)
language plpgsql
as $$
begin
  return query
  select
    embeddings.id,
    embeddings.content,
    1 - (embeddings.embedding <=> query_embedding) as similarity
  from embeddings
  where 1 - (embeddings.embedding <=> query_embedding) > match_threshold
  order by similarity desc
  limit match_count;
end;
$$;
