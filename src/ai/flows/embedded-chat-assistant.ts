// src/ai/flows/embedded-chat-assistant.ts
'use server';

/**
 * @fileOverview An embedded chat assistant that guides users through the portfolio.
 *
 * - embeddedChatAssistant - A function that handles the chat assistant functionality.
 * - EmbeddedChatAssistantInput - The input type for the embeddedChatAssistant function.
 * - EmbeddedChatAssistantOutput - The return type for the embeddedChatAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EmbeddedChatAssistantInputSchema = z.object({
  query: z.string().describe('The user query for the chat assistant.'),
});
export type EmbeddedChatAssistantInput = z.infer<typeof EmbeddedChatAssistantInputSchema>;

const EmbeddedChatAssistantOutputSchema = z.object({
  response: z.string().describe('The response from the chat assistant.'),
});
export type EmbeddedChatAssistantOutput = z.infer<typeof EmbeddedChatAssistantOutputSchema>;

export async function embeddedChatAssistant(input: EmbeddedChatAssistantInput): Promise<EmbeddedChatAssistantOutput> {
  return embeddedChatAssistantFlow(input);
}

const embeddedChatAssistantPrompt = ai.definePrompt({
  name: 'embeddedChatAssistantPrompt',
  input: {schema: EmbeddedChatAssistantInputSchema},
  output: {schema: EmbeddedChatAssistantOutputSchema},
  prompt: `You are a chat assistant embedded in Abisheik's portfolio. Your goal is to guide users through the portfolio and help them find the information they are looking for. Keep your responses concise and helpful.

User query: {{{query}}}`,
});

const embeddedChatAssistantFlow = ai.defineFlow(
  {
    name: 'embeddedChatAssistantFlow',
    inputSchema: EmbeddedChatAssistantInputSchema,
    outputSchema: EmbeddedChatAssistantOutputSchema,
  },
  async input => {
    const {output} = await embeddedChatAssistantPrompt(input);
    return output!;
  }
);
