import dotenv from 'dotenv';
import path from 'path';
import { createClient } from '@supabase/supabase-js';
import { projects } from '../src/lib/data';

// Load environment variables
const envPath = path.resolve(process.cwd(), '.env.local');
dotenv.config({ path: envPath });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
    console.error('Missing Supabase credentials');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function populateProjects() {
    console.log('Clearing existing projects...');
    // Delete all rows. Since we can't easily select all IDs to delete, 
    // and 'delete()' without filters is often blocked, we might need a different approach.
    // However, for now, let's try to delete where id > 0 if possible, or just insert new ones.
    // Supabase JS often requires a filter for delete.
    const { error: deleteError } = await supabase
        .from('projects')
        .delete()
        .gt('id', 0);

    if (deleteError) {
        console.error('Error clearing projects:', deleteError);
    }

    console.log(`Inserting ${projects.length} projects...`);

    for (const project of projects) {
        const { error } = await supabase
            .from('projects')
            .insert({
                title: project.title,
                category: project.tags[0] || 'Development',
                year: '2025', // Default year
                description: project.shortDescription,
                href: project.githubUrl,
                image_url: project.imageUrl,
                tech_stack: project.techUsed
            });

        if (error) {
            console.error(`Error inserting ${project.title}:`, error);
        } else {
            console.log(`Inserted ${project.title}`);
        }
    }

    console.log('Population complete.');
}

populateProjects().catch(console.error);
