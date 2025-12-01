import dotenv from 'dotenv';
import path from 'path';
import { GoogleGenerativeAI } from '@google/generative-ai';

const envPath = path.resolve(process.cwd(), '.env.local');
dotenv.config({ path: envPath });

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

async function listModels() {
    try {
        // There isn't a direct listModels method in the high-level SDK easily accessible 
        // without using the model manager, but we can try a simple generation with a fallback model
        // or just try to hit the endpoint. 
        // Actually, let's just try 'gemini-pro' and 'gemini-1.5-flash' and see which one succeeds.

        const modelsToTest = [
            "gemini-1.5-flash",
            "gemini-1.5-flash-001",
            "gemini-1.5-flash-latest",
            "gemini-1.5-pro",
            "gemini-pro",
            "gemini-1.0-pro"
        ];

        console.log("Testing models...");

        for (const modelName of modelsToTest) {
            process.stdout.write(`Testing ${modelName}... `);
            try {
                const model = genAI.getGenerativeModel({ model: modelName });
                const result = await model.generateContent("Hello");
                const response = await result.response;
                console.log(`SUCCESS!`);
            } catch (error: any) {
                console.log(`FAILED: ${error.message.split('\n')[0]}`);
            }
        }

    } catch (error) {
        console.error('Error:', error);
    }
}

listModels();
