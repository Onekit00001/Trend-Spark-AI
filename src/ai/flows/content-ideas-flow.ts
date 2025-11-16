'use server';
/**
 * @fileOverview A content idea generation AI agent.
 *
 * - generateContentIdeas - A function that handles the content idea generation process.
 * - GenerateContentIdeasInput - The input type for the generateContentIdeas function.
 * - GenerateContentIdeasOutput - The return type for the generateContentIdeas function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

export const GenerateContentIdeasInputSchema = z.object({
  niche: z.string().describe('The niche to generate content ideas for.'),
  platforms: z.array(z.string()).describe('The platforms to generate content ideas for.'),
});
export type GenerateContentIdeasInput = z.infer<typeof GenerateContentIdeasInputSchema>;

const IdeaSchema = z.object({
  id: z.number(),
  niche: z.string(),
  hook: z.string(),
  format: z.string(),
  hashtags: z.array(z.string()),
  cta: z.string(),
  elaboration: z.array(z.string()),
  flowchart: z.string(),
});

export const GenerateContentIdeasOutputSchema = z.object({
  ideas: z.array(IdeaSchema),
});

export type GenerateContentIdeasOutput = z.infer<typeof GenerateContentIdeasOutputSchema>;


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
