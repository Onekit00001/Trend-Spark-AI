import { Sparkles } from "lucide-react";
import AdPlaceholder from "./ad-placeholder";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Sparkles className="h-8 w-8" />
            <h1 className="text-2xl font-bold tracking-tight">
              TrendSpark<span className="text-sky-300">AI</span>
            </h1>
          </div>
          <div className="hidden md:block w-1/2 max-w-lg">
            <AdPlaceholder
              type="header"
              className="bg-white/10 border-white/20 text-white"
            />
          </div>
        </div>
        <div className="md:hidden pb-4">
            <AdPlaceholder
              type="header"
              className="bg-white/10 border-white/20 text-white"
            />
          </div>
      </div>
    </header>
  );
}
