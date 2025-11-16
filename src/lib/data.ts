import type {
  Platform,
  ContentIdea,
  HashtagSet,
  CaptionTemplate,
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
  Book,
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

export const hashtagSets: HashtagSet = {
  "Fitness & Health": ["#fitness", "#healthylifestyle", "#workout", "#motivation", "#gymlife", "#fitfam", "#wellness", "#nutrition", "#selfcare", "#getfit", "#trainhard", "#noexcuses", "#mindbody", "#healthyliving", "#fitspo"],
  "Cooking & Recipes": ["#recipe", "#foodie", "#instafood", "#homemade", "#cooking", "#delicious", "#foodlover", "#eats", "#kitchen", "#chefmode", "#yummy", "#easyrecipes", "#dinnerideas", "#mealprep", "#baking"],
  "Technology & Gadgets": ["#tech", "#gadgets", "#instatech", "#innovation", "#futuretech", "#techtalk", "#software", "#hardware", "#ai", "#smarttech", "#geek", "#nerdlife", "#unboxing", "#review", "#techtips"],
  "Personal Finance": ["#finance", "#money", "#investing", "#budget", "#savings", "#financialfreedom", "#wealth", "#stockmarket", "#passiveincome", "#debtfree", "#financialliteracy", "#makemoney", "#entrepreneur", "#sidehustle", "#creditscore"],
  "Travel & Adventure": ["#travelgram", "#adventure", "#wanderlust", "#explore", "#vacation", "#instatravel", "#travelphotography", "#beautifuldestinations", "#getaway", "#solotravel", "#bucketlist", "#roadtrip", "#naturelover", "#passportready", "#globetrotter"],
  "DIY & Crafts": ["#diy", "#craft", "#doityourself", "#handmade", "#crafter", "#project", "#upcycle", "#creative", "#makersgonnamake", "#homedecor", "#diyproject", "#imadethis", "#tutorial", "#crafty", "#lifehacks"],
  "Software Development": ["#coding", "#developer", "#programming", "#javascript", "#python", "#webdev", "#softwareengineer", "#code", "#coderlife", "#reactjs", "#nodejs", "#tech", "#devlife", "#computerscience", "#frontend"],
};
