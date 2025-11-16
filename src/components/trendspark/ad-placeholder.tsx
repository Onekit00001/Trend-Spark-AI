import { cn } from "@/lib/utils";

type AdPlaceholderProps = {
  type: "header" | "sidebar" | "in-feed";
  className?: string;
};

export default function AdPlaceholder({ type, className }: AdPlaceholderProps) {
  const dimensions = {
    header: "w-full h-[90px]",
    sidebar: "w-full h-[250px]",
    "in-feed": "w-full h-[100px]",
  };

  const labels = {
    header: "Leaderboard Ad (728x90)",
    sidebar: "Sidebar Ad (300x250)",
    "in-feed": "In-feed Ad (Responsive)",
  };

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-lg border-2 border-dashed bg-muted/50 text-muted-foreground",
        dimensions[type],
        className
      )}
    >
      <span className="text-sm font-medium">{labels[type]}</span>
    </div>
  );
}
