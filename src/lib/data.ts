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
  { id: "reddit", name: "Reddit", icon: Book }, // Using 'Book' as a placeholder
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

export const contentIdeas: ContentIdea[] = [
  {
    id: 1,
    niche: "Fitness & Health",
    hook: "Stop doing crunches! Try this 1 move for a stronger core.",
    format: "Short tutorial video demonstrating the 'Pallof Press'. Show proper form and common mistakes.",
    hashtags: ["#coreworkout", "#absworkout", "#fitnesshacks", "#strongcore", "#nocrunches"],
    cta: "What's your go-to core exercise? Let me know below! 👇",
    elaboration: [
      "Start by explaining why crunches can be ineffective or harmful.",
      "Introduce the Pallof Press as a superior anti-rotation exercise.",
      "Demonstrate the move using a resistance band attached to a stable point.",
      "Show a close-up of core engagement and proper breathing.",
      "Suggest 3 sets of 10-12 reps per side and encourage viewers to try it.",
    ],
    flowchart: "Problem (crunches) -> Solution (Pallof Press) -> Demonstration -> Reps/Sets -> CTA",
  },
  {
    id: 2,
    niche: "Cooking & Recipes",
    hook: "The secret to the fluffiest pancakes you'll ever make.",
    format: "Quick-cut recipe video (ASMR style) showing the process from start to finish.",
    hashtags: ["#pancakes", "#recipe", "#cookinghacks", "#breakfastideas", "#fluffypancakes"],
    cta: "Tag someone who needs to make this for you this weekend! 🥞",
    elaboration: [
      "Show all ingredients laid out beautifully.",
      "The 'secret': Sift dry ingredients and let the batter rest for 5 minutes.",
      "ASMR shots: whisking, pouring batter onto a hot pan.",
      "The perfect flip in slow-motion.",
      "Stack the pancakes high and finish with a drizzle of syrup and berries.",
    ],
    flowchart: "Ingredients -> Secret Tip -> Mix & Rest -> Cook -> Flip -> Serve -> CTA",
  },
  {
    id: 3,
    niche: "Technology & Gadgets",
    hook: "Is this the most underrated tech gadget of 2025?",
    format: "Unboxing and first impressions review of a niche gadget (e.g., a smart notebook).",
    hashtags: ["#techreview", "#gadgets", "#unboxing", "#techtok", "#smarttech"],
    cta: "Would you use this? Or is it just a gimmick? Debate in the comments!",
    elaboration: [
      "Start with a question to create curiosity about the product.",
      "Clean unboxing sequence showing the packaging and contents.",
      "Highlight the top 3 features of the gadget.",
      "Show a quick demo of the main feature in action.",
      "Give a preliminary verdict and ask for the audience's opinion.",
    ],
    flowchart: "Intriguing question -> Unboxing -> Top 3 features -> Demo -> Verdict -> CTA",
  },
  {
    id: 4,
    niche: "Personal Finance",
    hook: "How I save $500/month without even noticing.",
    format: "Talking head video with text overlays and simple graphics explaining the 'rounding up' method.",
    hashtags: ["#personalfinance", "#savingmoney", "#moneyhacks", "#budgeting", "#financialfreedom"],
    cta: "What's your best-kept saving secret? Share it to help others!",
    elaboration: [
      "Start with the bold claim: saving $500/month passively.",
      "Introduce the concept: using an app that rounds up your purchases to the nearest dollar and invests the difference.",
      "Show a screen recording or graphic of how it works with a sample purchase.",
      "Do the math: show how small amounts add up over a month and a year.",
      "Recommend a few popular apps and end with an empowering message.",
    ],
    flowchart: "Bold claim -> Concept explained -> How it works -> The math -> Recommendations -> CTA",
  },
  {
    id: 5,
    niche: "Travel & Adventure",
    hook: "This isn't Europe. This is [Your Country].",
    format: "A series of stunning, fast-paced clips of a beautiful, lesser-known local spot, set to trending epic music.",
    hashtags: ["#travel", "#hiddengem", "#explore[yourcountry]", "#traveltiktok", "#beautifuldestinations"],
    cta: "Add this to your bucket list! ✅ Have you been here?",
    elaboration: [
      "Open with a jaw-dropping landscape shot.",
      "Cut between different angles: drone shot, walking perspective, close-up on details.",
      "Show a person interacting with the environment (e.g., walking on a trail, looking at the view).",
      "Build the music to a crescendo.",
      "End with text on screen revealing the location name.",
    ],
    flowchart: "Misdirection -> Epic montage -> Human element -> Music crescendo -> Location reveal -> CTA",
  },
   {
    id: 6,
    niche: "DIY & Crafts",
    hook: "Transform a boring IKEA item into a high-end decor piece.",
    format: "A satisfying 'before and after' transformation video with process shots.",
    hashtags: ["#ikeahack", "#diydecor", "#homehack", "#upcycling", "#diyproject"],
    cta: "What should I hack next? Drop your suggestions! 💡",
    elaboration: [
      "Show the 'before': a plain, common IKEA product (e.g., KALLAX shelf).",
      "Show the materials needed for the hack (paint, hardware, etc.).",
      "Time-lapse of the transformation process (sanding, painting, assembly).",
      "Satisfying close-ups: screwing in new gold handles, peeling painter's tape.",
      "The 'after': the finished piece, styled beautifully in a room.",
    ],
    flowchart: "Before -> Materials -> Time-lapse process -> Satisfying details -> Styled 'after' -> CTA",
  },
  {
    id: 7,
    niche: "Software Development",
    hook: "This one line of CSS will save you hours of frustration.",
    format: "Quick code tip video. Screen recording with voiceover and code highlighting.",
    hashtags: ["#css", "#webdevelopment", "#codingtips", "#frontend", "#devhumor"],
    cta: "Did you know this trick? What's your favorite CSS one-liner?",
    elaboration: [
      "Present a common layout problem (e.g., centering a div).",
      "Show the 'old' or complicated way of doing it.",
      "Delete the old code and type out the 'one line' solution (e.g., `display: grid; place-items: center;`).",
      "Explain briefly why it works so well.",
      "Show the perfectly centered result and celebrate.",
    ],
    flowchart: "Common Problem -> Old/Bad Solution -> The Magic One-Liner -> Explanation -> Perfect Result -> CTA",
  }
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

export const captionTemplates: CaptionTemplate[] = [
  {
    niche: "Fitness & Health",
    platform: "instagram",
    template: "Sweat equity is the best investment you can make in yourself. 💧 Today's workout was a tough one, but feeling stronger for it! \n\nWhat did you train today? 👇\n\n#FitnessJourney #WorkoutMotivation #StrongerEveryDay",
  },
  {
    niche: "Cooking & Recipes",
    platform: "instagram",
    template: "Bringing some comfort to the kitchen today with this classic [Dish Name]! 🍝 There's nothing like a home-cooked meal to warm the soul. \n\nFull recipe is in my bio! Let me know if you try it. ✨\n\n#HomeCooking #RecipeOfTheDay #ComfortFood",
  },
  {
    niche: "Travel & Adventure",
    platform: "instagram",
    template: "Chasing horizons and collecting moments, not things. ✨ This view was worth every single step of the hike. \n\nWhere is the most beautiful place you've ever been? 🌍\n\n#Wanderlust #TravelMore #NaturePhotography #ExploreTheWorld",
  },
  {
    niche: "Technology & Gadgets",
    platform: "x",
    template: "Just got my hands on the new [Gadget Name]. First impressions: the build quality is insane and the screen is 🤯. Full review coming soon. #Tech #GadgetReview #[ProductName]",
  },
  {
    niche: "Personal Finance",
    platform: "linkedin",
    template: "Financial literacy isn't just about spreadsheets and stock tickers; it's about empowerment. This month, I focused on optimizing my savings strategy, resulting in a [X]% increase in my monthly savings rate. \n\nThe key change was [mention one specific action, e.g., 'automating transfers to a high-yield savings account the day I get paid']. Small, consistent actions are the bedrock of long-term financial health. \n\nWhat's one financial habit that has significantly impacted you? #PersonalFinance #FinancialWellness #WealthManagement #Investing #CareerGrowth",
  },
];
