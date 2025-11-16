import {z} from 'zod';

export const GenerateContentIdeasInputSchema = z.object({
  niche: z.string().describe('The niche to generate content ideas for.'),
  platforms: z.array(z.string()).describe('The platforms to generate content ideas for.'),
  wordCount: z.number().describe('The approximate word count for the elaboration of each idea.'),
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
