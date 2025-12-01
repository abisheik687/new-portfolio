```sql
-- Seed Projects
insert into projects (title, category, year, description, href, image_url, tech_stack)
values
  (
    'IntelliFix',
    'AI / DevTools',
    '2024',
    'AI-Powered Code Debugger that analyzes code, detects bugs, and suggests real-time fixes to streamline the development process.',
    '#', 
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
    ARRAY['Python', 'AI', 'NLP']
  ),
  (
    'Geospatial Intelligence System',
    'AI / ML / ISRO Hackathon',
    '2025',
    'A scalable AI-powered system that automatically detects and analyzes environmental and infrastructural changes from satellite imagery using advanced ML models.',
    '#',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    ARRAY['Python', 'Machine Learning', 'Full Stack']
  ),
  (
    'Portfolio V2',
    'Web Development',
    '2025',
    'A cinematic, art-driven portfolio website featuring 3D motion, RAG chatbot integration, and a custom design system.',
    '#',
    'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop',
    ARRAY['Next.js', 'TypeScript', 'Tailwind', 'Supabase', 'Framer Motion']
  );
```
