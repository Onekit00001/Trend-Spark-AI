import {z} from 'zod';

export const GenerateCaptionTemplateInputSchema = z.object({
  niche: z.string().describe('The niche to generate a caption for.'),
  platform: z.string().describe('The platform to generate a caption for.'),
  wordCount: z.number().describe('The approximate word count for the caption.'),
});
export type GenerateCaptionTemplateInput = z.infer<typeof GenerateCaptionTemplateInputSchema>;

export const GenerateCaptionTemplateOutputSchema = z.object({
  niche: z.string(),
  platform: z.string(),
  template: z.string(),
});
export type GenerateCaptionTemplateOutput = z.infer<typeof GenerateCaptionTemplateOutputSchema>;
