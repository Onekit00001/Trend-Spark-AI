'use server';
/**
 * @fileOverview A content idea generation AI agent.
 *
 * - generateContentIdeas - A function that handles the content idea generation process.
 */

import {ai} from '@/ai/genkit';
import {
  GenerateContentIdeasInputSchema,
  GenerateContentIdeasOutputSchema,
  type GenerateContentIdeasInput,
  type GenerateContentIdeasOutput
} from '@/ai/schemas/content-ideas-schema';


export async function generateContentIdeas(input: GenerateContentIdeasInput): Promise<GenerateContentIdeasOutput> {
  return generateContentIdeasFlow(input);
}


const prompt = ai.definePrompt({
  name: 'generateContentIdeasPrompt',
  input: { schema: GenerateContentIdeasInputSchema },
  output: { schema: GenerateContentIdeasOutputSchema },
  prompt: `You are a viral content strategist. Generate 5 unique, engaging content ideas for the following niche: {{{niche}}} and platforms: {{{platforms}}}.

Provide a catchy hook, a format, relevant hashtags, a call to action, a 5-step elaboration, and a simple flowchart for each idea. Ensure the output is a JSON object with an 'ideas' array.`,
});

const generateContentIdeasFlow = ai.defineFlow(
  {
    name: 'generateContentIdeasFlow',
    inputSchema: GenerateContentIdeasInputSchema,
    outputSchema: GenerateContentIdeasOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    if (!output) {
      return { ideas: [] };
    }
    return { ideas: output.ideas.map((idea, index) => ({...idea, id: Date.now() + index})) };
  }
);
