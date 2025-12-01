import dotenv from 'dotenv';
import path from 'path';
import { createClient } from '@supabase/supabase-js';

// Load environment variables from .env.local
const envPath = path.resolve(process.cwd(), '.env.local');
console.log(`Loading env from: ${envPath}`);
dotenv.config({ path: envPath });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing environment variables.');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function testRpc() {
    console.log('Testing match_documents RPC...');

    // Dummy embedding (length needs to match what the RPC expects, usually 768 for text-embedding-004)
    // Actually text-embedding-004 has 768 dimensions.
    const dummyEmbedding = new Array(768).fill(0.1);

    const { data, error } = await supabase.rpc('match_documents', {
        query_embedding: dummyEmbedding,
        match_threshold: 0.1,
        match_count: 1,
    });

    if (error) {
        console.error('RPC Error:', error);
    } else {
        console.log('RPC Success:', data);
    }
}

testRpc();
