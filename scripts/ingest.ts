import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
// @ts-ignore
import pdf from 'pdf-parse';
import { createClient } from '@supabase/supabase-js';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Load environment variables from .env.local
const envPath = path.resolve(process.cwd(), '.env.local');
console.log(`Loading env from: ${envPath}`);
dotenv.config({ path: envPath });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const geminiApiKey = process.env.GEMINI_API_KEY;

console.log('Supabase URL:', supabaseUrl ? 'Present' : 'Missing');
console.log('Supabase Service Key:', supabaseServiceKey ? 'Present' : 'Missing');
console.log('Gemini Key:', geminiApiKey ? 'Present' : 'Missing');

if (!supabaseUrl || !supabaseServiceKey || !geminiApiKey) {
    console.error('Missing environment variables. Please check .env.local');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);
const genAI = new GoogleGenerativeAI(geminiApiKey);
const model = genAI.getGenerativeModel({ model: "text-embedding-004" });

async function ingestResume() {
    const resumePdfPath = path.join(process.cwd(), 'public', 'resume.pdf');
    const resumeTxtPath = path.join(process.cwd(), 'public', 'resume.txt');

    let text = '';
    let sourceId = 'resume';
    let filename = '';

    if (fs.existsSync(resumeTxtPath)) {
        console.log('Found resume.txt, parsing...');
        text = fs.readFileSync(resumeTxtPath, 'utf-8');
        filename = 'resume.txt';
    } else if (fs.existsSync(resumePdfPath)) {
        console.log('Found resume.pdf, parsing...');
        const dataBuffer = fs.readFileSync(resumePdfPath);
        const data = await pdf(dataBuffer);
        text = data.text;
        filename = 'resume.pdf';
    } else {
        console.error(`Resume not found. Please place 'resume.pdf' or 'resume.txt' in the public folder.`);
        return;
    }

    console.log(`Parsed ${text.length} characters.`);

    // Create Doc Entry
    const { data: doc, error: docError } = await supabase
        .from('docs')
        .insert({
            source_id: sourceId,
            content: text,
            metadata: { type: filename.endsWith('.pdf') ? 'pdf' : 'text', filename }
        })
        .select()
        .single();

    if (docError) {
        console.error('Error creating doc:', docError);
        return;
    }

    console.log(`Created doc with ID: ${doc.id}`);

    // Chunking
    const chunks = chunkText(text, 1000);
    console.log(`Generated ${chunks.length} chunks.`);

    // Embed and Store
    for (let i = 0; i < chunks.length; i++) {
        const chunk = chunks[i];
        console.log(`Embedding chunk ${i + 1}/${chunks.length}...`);

        try {
            const result = await model.embedContent(chunk);
            const embedding = result.embedding.values;

            const { error: embedError } = await supabase
                .from('embeddings')
                .insert({
                    doc_id: doc.id,
                    content: chunk,
                    embedding: embedding
                });

            if (embedError) {
                console.error(`Error storing embedding for chunk ${i}:`, embedError);
            }
        } catch (err) {
            console.error(`Error generating embedding for chunk ${i}:`, err);
        }
    }

    console.log('Ingestion complete!');
}

function chunkText(text: string, chunkSize: number): string[] {
    const chunks = [];
    for (let i = 0; i < text.length; i += chunkSize) {
        chunks.push(text.slice(i, i + chunkSize));
    }
    return chunks;
}

ingestResume().catch(console.error);
