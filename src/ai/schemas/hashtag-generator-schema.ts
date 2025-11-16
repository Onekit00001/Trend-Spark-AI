import { z } from 'zod';

export const GenerateHashtagsInputSchema = z.object({
  niche: z.string().describe('The niche to generate hashtags for.'),
  platform: z.string().describe('The platform to generate hashtags for.'),
  count: z.number().describe('The number of hashtags to generate.'),
});
export type GenerateHashtagsInput = z.infer<
  typeof GenerateHashtagsInputSchema
>;

export const GenerateHashtagsOutputSchema = z.object({
  hashtags: z.array(z.string()),
});
export type GenerateHashtagsOutput = z.infer<
  typeof GenerateHashtagsOutputSchema
>;
