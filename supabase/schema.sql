-- Enable the pgvector extension to work with embedding vectors
create extension if not exists vector;

-- Projects Table (Portfolio)
create table if not exists projects (
  id bigint primary key generated always as identity,
  title text not null,
  category text not null,
  year text not null,
  description text not null,
  href text not null,
  image_url text,
  tech_stack text[],
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Articles Table (Blog/Thoughts)
create table if not exists articles (
  id bigint primary key generated always as identity,
  title text not null,
  slug text not null unique,
  content text not null, -- Markdown content
  published boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Docs Table (Source of Truth for RAG)
create table if not exists docs (
  id bigint primary key generated always as identity,
  source_id text not null,
  content text,
  metadata jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Embeddings Table
create table if not exists embeddings (
  id bigint primary key generated always as identity,
  doc_id bigint references docs(id) on delete cascade,
  content text,
  embedding vector(768),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Match Documents Function
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
