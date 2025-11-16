import type {
  Platform,
} from "./definitions";
import {
  Youtube,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  Bot,
  MessageCircle,
  Camera,
  Clapperboard,
} from "lucide-react";

// In a real-world app, these would come from a database or a much larger file.
// For this demo, we're hard-coding a representative sample as requested.

export const platforms: Platform[] = [
  { id: "tiktok", name: "TikTok", icon: Clapperboard },
  { id: "instagram", name: "Instagram", icon: Instagram },
  { id: "youtube", name: "YouTube", icon: Youtube },
  { id: "linkedin", name: "LinkedIn", icon: Linkedin },
  { id: "x", name: "X (Twitter)", icon: Twitter },
  { id: "pinterest", name: "Pinterest", icon: Bot }, // Using 'Bot' as a placeholder
  { id: "snapchat", name: "Snapchat", icon: Camera },
  { id: "threads", name: "Threads", icon: MessageCircle },
  { id: "reddit", name: "Reddit", icon: Bot }, // Using 'Bot' as a placeholder
];

export const niches: string[] = [
  "Fitness & Health",
  "Cooking & Recipes",
  "Technology & Gadgets",
  "Personal Finance",
  "Travel & Adventure",
  "DIY & Crafts",
  "Fashion & Style",
  "Beauty & Skincare",
  "Gaming",
  "Book Reviews",
  "Movie & TV Show Analysis",
  "Photography",
  "Gardening",
  "Parenting",
  "Pet Care",
  "Mental Health & Wellness",
  "Education & Learning",
  "Comedy & Skits",
  "Dance",
  "Music Production",
  "Software Development",
  "Graphic Design",
  "Marketing & SEO",
  "Real Estate",
  "Cryptocurrency & NFTs",
  "Sustainable Living",
  "Minimalism",
  "Productivity Hacks",
  "History",
  "Science Explained",
];
