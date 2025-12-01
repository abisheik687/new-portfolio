-- Disable RLS on docs and embeddings to ensure API access
alter table docs disable row level security;
alter table embeddings disable row level security;

-- Grant access to anon and service_role
grant all on table docs to anon, service_role;
grant all on table embeddings to anon, service_role;
