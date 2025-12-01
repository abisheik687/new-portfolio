import dotenv from 'dotenv';
import path from 'path';
import { createClient } from '@supabase/supabase-js';
import { GoogleGenerativeAI } from '@google/generative-ai';

const envPath = path.resolve(process.cwd(), '.env.local');
dotenv.config({ path: envPath });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const geminiApiKey = process.env.GEMINI_API_KEY;

if (!supabaseUrl || !supabaseServiceKey || !geminiApiKey) {
    console.error('Missing credentials');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);
const genAI = new GoogleGenerativeAI(geminiApiKey);
const model = genAI.getGenerativeModel({ model: "text-embedding-004" });
const chatModel = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

async function testChat(query: string) {
    console.log(`Query: "${query}"`);

    // Embed query
    const result = await model.embedContent(query);
    const embedding = result.embedding.values;

    // Check embeddings count
    const { count, error: countError } = await supabase
        .from('embeddings')
        .select('*', { count: 'exact', head: true });

    console.log(`Total embeddings in DB: ${count}`);

    // Match documents
    const { data: documents, error } = await supabase.rpc('match_documents', {
        query_embedding: embedding,
        match_threshold: 0.1, // Lowered threshold
        match_count: 5
    });

    if (error) {
        console.error('Error matching documents:', error);
        return;
    }

    console.log(`Found ${documents.length} relevant documents.`);

    // Generate response
    const context = documents.map((doc: any) => doc.content).join('\n\n');
    const prompt = `Context:\n${context}\n\nQuestion: ${query}\n\nAnswer:`;

    const chatResult = await chatModel.generateContent(prompt);
    const response = chatResult.response.text();

    console.log('Response:', response);
}

testChat('What is IntelliFix?');
