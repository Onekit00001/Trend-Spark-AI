'use server';
/**
 * @fileOverview A caption template generation AI agent.
 *
 * - generateCaptionTemplate - A function that handles the caption template generation process.
 */

import {ai} from '@/ai/genkit';
import {
  GenerateCaptionTemplateInputSchema,
  GenerateCaptionTemplateOutputSchema,
  type GenerateCaptionTemplateInput,
  type GenerateCaptionTemplateOutput
} from '@/ai/schemas/caption-template-schema';


export async function generateCaptionTemplate(input: GenerateCaptionTemplateInput): Promise<GenerateCaptionTemplateOutput> {
  return generateCaptionTemplateFlow(input);
}


const prompt = ai.definePrompt({
  name: 'generateCaptionTemplatePrompt',
  input: { schema: GenerateCaptionTemplateInputSchema },
  output: { schema: GenerateCaptionTemplateOutputSchema },
  prompt: `You are an expert social media content strategist. Your task is to generate a single, high-quality caption template for the given niche and platform.

The template must be approximately {{{wordCount}}} words.
It must be engaging, reusable, and include clear placeholders (like "[Your Story]" or "[Tip #1]") for the user to easily fill in.
The template must also include a set of 3 to 5 relevant and effective hashtags.

Niche: {{{niche}}}
Platform: {{{platform}}}
Approximate Word Count: {{{wordCount}}}

Generate the caption template. Ensure your response is a valid JSON object that strictly adheres to the required output format.
`,
});

const generateCaptionTemplateFlow = ai.defineFlow(
  {
    name: 'generateCaptionTemplateFlow',
    inputSchema: GenerateCaptionTemplateInputSchema,
    outputSchema: GenerateCaptionTemplateOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    if (!output?.template) {
      console.error("AI failed to generate a valid caption template.");
      return { niche: input.niche, platform: input.platform, template: "Sorry, we couldn't generate a template. Please try again with different options." };
    }
    return output;
  }
);
