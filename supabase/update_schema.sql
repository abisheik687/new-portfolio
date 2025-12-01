-- Run this in your Supabase SQL Editor to update the projects table
alter table projects add column if not exists image_url text;
alter table projects add column if not exists tech_stack text[];
