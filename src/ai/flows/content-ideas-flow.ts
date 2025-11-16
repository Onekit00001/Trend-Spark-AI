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
  prompt: `You are a viral content strategist with expertise in creating engaging social media content.
Your task is to generate exactly 5 distinct, novel, and creative content ideas for the specified niche and platforms. It is crucial that you generate completely new and distinct ideas that have not been suggested before. Avoid generic or repetitive suggestions.

Niche: {{{niche}}}
Platforms: {{{platforms}}}
Elaboration Word Count: Each elaboration should be around {{{wordCount}}} words.

For each of the 5 ideas, you must provide:
1.  'id': A unique numerical ID. Use the current timestamp combined with the index to ensure uniqueness.
2.  'niche': The provided niche.
3.  'hook': A very catchy and scroll-stopping first line or question.
4.  'format': The type of content (e.g., "Short-form video with trending audio," "Carousel post," "Step-by-step tutorial video," "A 'Day in the Life' vlog").
5.  'hashtags': An array of 3-5 highly relevant hashtags.
6.  'cta': A clear and compelling call-to-action (e.g., "Comment your favorite tip below!").
7.  'elaboration': An array of 5 strings, representing a 5-step plan or elaboration of the content idea.
8.  'flowchart': A simple, text-based flowchart representing the content structure (e.g., "Hook -> Problem -> Step 1 -> Step 2 -> Step 3 -> CTA").

It is critical that your response is a valid JSON object containing an 'ideas' array with exactly 5 idea objects inside.
`,
});

const generateContentIdeasFlow = ai.defineFlow(
  {
    name: 'generateContentIdeasFlow',
    inputSchema: GenerateContentIdeasInputSchema,
    outputSchema: GenerateContentIdeasOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    if (!output || !output.ideas || output.ideas.length === 0) {
      console.error("AI failed to generate valid content ideas.");
      return { ideas: [] };
    }
    // Ensure IDs are unique if the model fails to provide them correctly.
    return { ideas: output.ideas.map((idea, index) => ({...idea, id: idea.id || Date.now() + index})) };
  }
);
