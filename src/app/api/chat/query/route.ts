import { createClient } from '@supabase/supabase-js';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

// Initialize Supabase Client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

// Initialize Gemini Client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
const embeddingModel = genAI.getGenerativeModel({ model: "text-embedding-004" });
const chatModel = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

export async function POST(req: Request) {
    try {
        const { query } = await req.json();

        if (!query) {
            return NextResponse.json({ error: 'Query is required' }, { status: 400 });
        }

        // 1. Generate Embedding for the Query
        const embeddingResult = await embeddingModel.embedContent(query);
        const queryEmbedding = embeddingResult.embedding.values;

        // 2. Search for Matching Documents in Supabase
        const { data: documents, error: searchError } = await supabase.rpc('match_documents', {
            query_embedding: queryEmbedding,
            match_threshold: 0.3, // Adjust threshold as needed
            match_count: 5,
        });

        if (searchError) {
            console.error('Supabase search error:', searchError);
            return NextResponse.json({ error: 'Failed to search documents' }, { status: 500 });
        }

        // 3. Construct Context from Matched Documents
        const contextText = documents
            ?.map((doc: any) => `---\nSource: ${doc.id}\nContent: ${doc.content}\n---`)
            .join('\n\n');

        const systemPrompt = `You are an AI assistant for Abisheik S's portfolio website.
Your goal is to answer questions about Abisheik's experience, projects, and skills based ONLY on the provided context.

Context:
${contextText || "No relevant context found."}

Instructions:
- Answer the user's question clearly and concisely.
- Use the provided context to support your answer.
- If the answer is not in the context, say "I don't have that information in my knowledge base."
- Do not hallucinate or make up facts.
- Be professional, friendly, and enthusiastic.
- If you cite a specific project or experience, mention it clearly.
`;

        // 4. Generate Answer using Gemini Chat
        const result = await chatModel.generateContent([systemPrompt, query]);
        const response = await result.response;
        const answer = response.text();

        return NextResponse.json({
            answer,
            sources: documents?.map((doc: any) => ({ id: doc.id, content: doc.content })),
        });

    } catch (error: any) {
        console.error('RAG API Error:', error);
        return NextResponse.json(
            { error: error.message || 'Internal Server Error' },
            { status: 500 }
        );
    }
}
