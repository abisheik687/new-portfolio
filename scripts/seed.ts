import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';

// Load env
const envPath = path.resolve(process.cwd(), '.env.local');
dotenv.config({ path: envPath });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseUrl || !supabaseServiceKey) {
    console.error('Missing Supabase credentials');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const projects = [
    {
        title: 'IntelliFix',
        category: 'AI / DevTools',
        year: '2024',
        description: 'AI-Powered Code Debugger that analyzes code, detects bugs, and suggests real-time fixes to streamline the development process.',
        href: '#',
        image_url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
        tech_stack: ['Python', 'AI', 'NLP']
    },
    {
        title: 'Geospatial Intelligence System',
        category: 'AI / ML / ISRO Hackathon',
        year: '2025',
        description: 'A scalable AI-powered system that automatically detects and analyzes environmental and infrastructural changes from satellite imagery using advanced ML models.',
        href: '#',
        image_url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
        tech_stack: ['Python', 'Machine Learning', 'Full Stack']
    },
    {
        title: 'Portfolio V2',
        category: 'Web Development',
        year: '2025',
        description: 'A cinematic, art-driven portfolio website featuring 3D motion, RAG chatbot integration, and a custom design system.',
        href: '#',
        image_url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop',
        tech_stack: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase', 'Framer Motion']
    }
];

async function seed() {
    console.log('Seeding projects...');

    // Clear existing projects
    const { error: deleteError } = await supabase.from('projects').delete().neq('id', 0);
    if (deleteError) console.error('Error clearing projects:', deleteError);

    // Insert new projects
    const { error: insertError } = await supabase.from('projects').insert(projects);

    if (insertError) {
        console.error('Error inserting projects:', insertError);
    } else {
        console.log('Projects seeded successfully!');
    }
}

seed();
