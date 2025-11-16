"use client";

import { useState } from "react";
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
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { hashtagSets, niches } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";
import { Clipboard, Hash, Loader2 } from "lucide-react";

export default function HashtagGeneratorTab() {
  const [niche, setNiche] = useState<string>("");
  const [count, setCount] = useState([15]);
  const [results, setResults] = useState<string[]>([]);
  const [generating, setGenerating] = useState(false);
  const { toast } = useToast();

  const handleGenerate = () => {
    if (!niche) {
      toast({
        title: "Niche Not Selected",
        description: "Please select a niche to generate hashtags.",
        variant: "destructive",
      });
      return;
    }
    setGenerating(true);
    setTimeout(() => {
      const allHashtags = hashtagSets[niche] || [];
      if (allHashtags.length === 0) {
        toast({
          title: "No Hashtags Found",
          description: "No hashtags available for this niche.",
          variant: "destructive",
        });
        setResults([]);
      } else {
        const shuffled = [...allHashtags].sort(() => 0.5 - Math.random());
        setResults(shuffled.slice(0, count[0]));
      }
      setGenerating(false);
    }, 500);
  };

  const handleCopyAll = () => {
    if (results.length > 0) {
      const hashtagString = results.join(" ");
      navigator.clipboard.writeText(hashtagString);
      toast({
        title: "Copied to Clipboard!",
        description: `${results.length} hashtags have been copied.`,
      });
    }
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Hashtag Generator</CardTitle>
          <CardDescription>
            Boost your reach with optimized hashtags. Select a niche and get a
            curated list.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="niche-select-hashtag">Niche</Label>
              <Select onValueChange={setNiche} value={niche}>
                <SelectTrigger id="niche-select-hashtag">
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
              <Label htmlFor="hashtag-count">Number of Hashtags: {count[0]}</Label>
              <Slider
                id="hashtag-count"
                min={5}
                max={30}
                step={1}
                value={count}
                onValueChange={setCount}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleGenerate} disabled={generating || !niche}>
            {generating ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Hash className="mr-2 h-4 w-4" />
            )}
            Generate Hashtags
          </Button>
        </CardFooter>
      </Card>

      {results.length > 0 && (
        <Card className="shadow-lg animate-in fade-in-50">
          <CardHeader>
            <CardTitle>Generated Hashtags</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {results.map((tag, i) => (
              <Badge key={i} variant="secondary" className="text-base px-3 py-1">
                {tag}
              </Badge>
            ))}
          </CardContent>
          <CardFooter>
            <Button onClick={handleCopyAll}>
              <Clipboard className="mr-2 h-4 w-4" /> Copy All
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
