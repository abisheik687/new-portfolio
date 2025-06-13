'use server';
/**
 * @fileOverview An AI agent that provides code analysis for a given project.
 *
 * - analyzeCode - A function that analyzes the code of a project.
 * - CodeAnalysisInput - The input type for the analyzeCode function.
 * - CodeAnalysisOutput - The return type for the analyzeCode function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CodeAnalysisInputSchema = z.object({
  code: z.string().describe('The code to be analyzed.'),
  description: z.string().describe('The description of the project.'),
});
export type CodeAnalysisInput = z.infer<typeof CodeAnalysisInputSchema>;

const CodeAnalysisOutputSchema = z.object({
  analysis: z.string().describe('The analysis of the code.'),
});
export type CodeAnalysisOutput = z.infer<typeof CodeAnalysisOutputSchema>;

export async function analyzeCode(input: CodeAnalysisInput): Promise<CodeAnalysisOutput> {
  return analyzeCodeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'codeAnalysisPrompt',
  input: {schema: CodeAnalysisInputSchema},
  output: {schema: CodeAnalysisOutputSchema},
  prompt: `You are an expert software engineer specializing in code analysis.

You will use this information to analyze the code and provide a detailed explanation of its functionality, architecture, and potential issues.

Description of the project: {{{description}}}

Code: {{{code}}}`,
});

const analyzeCodeFlow = ai.defineFlow(
  {
    name: 'analyzeCodeFlow',
    inputSchema: CodeAnalysisInputSchema,
    outputSchema: CodeAnalysisOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
