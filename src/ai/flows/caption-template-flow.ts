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
  prompt: `You are a viral content strategist. Generate a caption template for the following niche: {{{niche}}} and platform: {{{platform}}}. The caption should be around {{{wordCount}}} words.

The template should be engaging and include placeholders for the user to fill in. It should also include 3-5 relevant hashtags.
Ensure the output is a JSON object with a 'niche', 'platform', and 'template' field.`,
});

const generateCaptionTemplateFlow = ai.defineFlow(
  {
    name: 'generateCaptionTemplateFlow',
    inputSchema: GenerateCaptionTemplateInputSchema,
    outputSchema: GenerateCaptionTemplateOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    if (!output) {
      return { niche: input.niche, platform: input.platform, template: "" };
    }
    return output;
  }
);
