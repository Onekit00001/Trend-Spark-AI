import type { LucideIcon } from "lucide-react";

export type Platform = {
  id: string;
  name: string;
  icon: LucideIcon;
};

export type ContentIdea = {
  id: number;
  niche: string;
  hook: string;
  format: string;
  hashtags: string[];
  cta: string;
  elaboration: string[];
  flowchart: string;
};
