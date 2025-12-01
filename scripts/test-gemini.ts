import dotenv from 'dotenv';
import path from 'path';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Load environment variables from .env.local
const envPath = path.resolve(process.cwd(), '.env.local');
console.log(`Loading env from: ${envPath}`);
dotenv.config({ path: envPath });

const geminiApiKey = process.env.GEMINI_API_KEY;

if (!geminiApiKey) {
    console.error('Missing GEMINI_API_KEY.');
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(geminiApiKey);

async function testGemini() {
    console.log('Testing Gemini API...');

    try {
        console.log('Testing Embedding Model (text-embedding-004)...');
        const embeddingModel = genAI.getGenerativeModel({ model: "text-embedding-004" });
        const embedResult = await embeddingModel.embedContent("Hello world");
        console.log('Embedding Success. Vector length:', embedResult.embedding.values.length);
    } catch (error: any) {
        console.error('Embedding Error:', error);
    }

    try {
        console.log('Testing Chat Model (gemini-2.0-flash)...');
        const chatModel = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
        const chatResult = await chatModel.generateContent("Hello");
        console.log('Chat Success:', chatResult.response.text());
    } catch (error: any) {
        console.error('Chat Error:', error);
    }
}

testGemini();
