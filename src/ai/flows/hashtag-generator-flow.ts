'use server';
/**
 * @fileOverview A hashtag generation AI agent.
 *
 * - generateHashtags - A function that handles the hashtag generation process.
 */

import { ai } from '@/ai/genkit';
import {
  GenerateHashtagsInputSchema,
  GenerateHashtagsOutputSchema,
  type GenerateHashtagsInput,
  type GenerateHashtagsOutput,
} from '@/ai/schemas/hashtag-generator-schema';

export async function generateHashtags(
  input: GenerateHashtagsInput
): Promise<GenerateHashtagsOutput> {
  return generateHashtagsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateHashtagsPrompt',
  input: { schema: GenerateHashtagsInputSchema },
  output: { schema: GenerateHashtagsOutputSchema },
  prompt: `You are a social media expert who specializes in hashtag strategy.
Your task is to generate a list of highly relevant and effective hashtags.

Niche: {{{niche}}}
Platform: {{{platform}}}
Number of Hashtags: {{{count}}}

Generate exactly {{{count}}} hashtags. The hashtags should be a mix of popular, niche-specific, and trending terms relevant to the platform.
Ensure your response is a valid JSON object that strictly adheres to the required output format.
The output should only contain the hashtags, starting with '#'.
`,
});

const generateHashtagsFlow = ai.defineFlow(
  {
    name: 'generateHashtagsFlow',
    inputSchema: GenerateHashtagsInputSchema,
    outputSchema: GenerateHashtagsOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output || !output.hashtags || output.hashtags.length === 0) {
      console.error('AI failed to generate valid hashtags.');
      return { hashtags: [] };
    }
    return output;
  }
);
