"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { niches, platforms } from "@/lib/data";
import type { ContentIdea, Platform } from "@/lib/definitions";
import { useToast } from "@/hooks/use-toast";
import IdeaCard from "./idea-card";
import { ChevronDown, Lightbulb, Loader2 } from "lucide-react";
import AdPlaceholder from "./ad-placeholder";
import { generateContentIdeas } from "@/ai/flows/content-ideas-flow";

export default function ContentIdeasTab() {
  const [niche, setNiche] = useState<string>("");
  const [selectedPlatforms, setSelectedPlatforms] = useState<Set<string>>(
    new Set()
  );
  const [results, setResults] = useState<ContentIdea[]>([]);
  const [generating, setGenerating] = useState(false);
  const { toast } = useToast();

  const handlePlatformToggle = (platformId: string) => {
    setSelectedPlatforms((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(platformId)) {
        newSet.delete(platformId);
      } else {
        newSet.add(platformId);
      }
      return newSet;
    });
  };

  const handleGenerate = async () => {
    if (!niche || selectedPlatforms.size === 0) {
      toast({
        title: "Selection Incomplete",
        description: "Please select a niche and at least one platform.",
        variant: "destructive",
      });
      return;
    }

    setGenerating(true);
    setResults([]);

    try {
      const result = await generateContentIdeas({
        niche,
        platforms: Array.from(selectedPlatforms),
      });

      if (!result.ideas || result.ideas.length === 0) {
        toast({
          title: "No Ideas Found",
          description: "The AI couldn't generate ideas for this combination. Please try again.",
          variant: "destructive",
        });
        setResults([]);
      } else {
        setResults(result.ideas);
      }
    } catch (error: any) {
      console.error("Content idea generation error:", error);
      toast({
        title: "An Error Occurred",
        description: error.message || "Failed to generate content ideas. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>AI Content Idea Generator</CardTitle>
          <CardDescription>
            Fuel your content strategy with fresh ideas. Select a niche and your
            target platforms below.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="niche-select">Niche</Label>
              <Select onValueChange={setNiche} value={niche} disabled={generating}>
                <SelectTrigger id="niche-select">
                  <SelectValue placeholder="Select a niche..." />
                </SelectTrigger>
                <SelectContent>
                  {niches.map((n) => (
                    <SelectItem key={n} value={n}>
                      {n}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Platforms</Label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full justify-between" disabled={generating}>
                    {selectedPlatforms.size > 0
                      ? `${selectedPlatforms.size} selected`
                      : "Select platforms..."}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64">
                  <DropdownMenuLabel>Social Platforms</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {platforms.map((p: Platform) => (
                    <DropdownMenuCheckboxItem
                      key={p.id}
                      checked={selectedPlatforms.has(p.id)}
                      onCheckedChange={() => handlePlatformToggle(p.id)}
                      onSelect={(e) => e.preventDefault()}
                    >
                      <p.icon className="mr-2 h-4 w-4" />
                      {p.name}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            onClick={handleGenerate}
            disabled={generating || !niche || selectedPlatforms.size === 0}
            size="lg"
          >
            {generating ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Lightbulb className="mr-2 h-4 w-4" />
            )}
            Generate 5 Ideas
          </Button>
        </CardFooter>
      </Card>

      {generating && (
        <div className="flex justify-center items-center py-8">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="ml-4 text-muted-foreground">Generating brilliant ideas...</p>
        </div>
      )}

      {results.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Your Ideas</h2>
          {results.map((idea, index) => (
            <React.Fragment key={idea.id}>
              {index === 1 && (
                <div className="my-4 md:hidden">
                  <AdPlaceholder type="in-feed" />
                </div>
              )}
              <IdeaCard idea={idea} />
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
}
