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
import { niches, platforms } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";
import { Clipboard, RefreshCw, Loader2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { generateCaptionTemplate } from "@/ai/flows/caption-template-flow";
import { GenerateCaptionTemplateOutput } from "@/ai/schemas/caption-template-schema";

export default function CaptionTemplatesTab() {
  const [niche, setNiche] = useState<string>("");
  const [platform, setPlatform] = useState<string>("");
  const [wordCount, setWordCount] = useState([100]);
  const [result, setResult] = useState<GenerateCaptionTemplateOutput | null>(null);
  const [generating, setGenerating] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!niche || !platform) {
      toast({
        title: "Selection Incomplete",
        description: "Please select both a niche and a platform.",
        variant: "destructive",
      });
      return;
    }

    setGenerating(true);
    setResult(null);

    try {
      const platformName = platforms.find(p => p.id === platform)?.name || platform;
      const captionResult = await generateCaptionTemplate({
        niche,
        platform: platformName,
        wordCount: wordCount[0],
      });

      if (!captionResult || !captionResult.template) {
        toast({
          title: "No Template Found",
          description: "The AI couldn't generate a caption. Please try again.",
          variant: "destructive",
        });
        setResult(null);
      } else {
        setResult(captionResult);
      }
    } catch (error: any) {
      console.error("Caption generation error:", error);
      toast({
        title: "An Error Occurred",
        description: error.message || "Failed to generate a caption. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setGenerating(false);
    }
  };

  const handleCopy = () => {
    if (result && result.template) {
      navigator.clipboard.writeText(result.template);
      toast({
        title: "Copied to Clipboard!",
        description: "The caption template has been copied.",
      });
    }
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>AI Caption Template Generator</CardTitle>
          <CardDescription>
            Instantly create engaging captions for your posts. Select your niche
            and platform to get started.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="niche-select-caption">Niche</Label>
              <Select onValueChange={setNiche} value={niche} disabled={generating}>
                <SelectTrigger id="niche-select-caption">
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
              <Label htmlFor="platform-select-caption">Platform</Label>
              <Select onValueChange={setPlatform} value={platform} disabled={generating}>
                <SelectTrigger id="platform-select-caption">
                  <SelectValue placeholder="Select a platform..." />
                </SelectTrigger>
                <SelectContent>
                  {platforms.map((p) => (
                    <SelectItem key={p.id} value={p.id}>
                      {p.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="word-count-caption">
              Max Word Count: {wordCount[0]}
            </Label>
            <Slider
              id="word-count-caption"
              min={20}
              max={300}
              step={10}
              value={wordCount}
              onValueChange={setWordCount}
              disabled={generating}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleGenerate} disabled={generating || !niche || !platform}>
            {generating ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <RefreshCw className="mr-2 h-4 w-4" />
            )}
            Generate Caption
          </Button>
        </CardFooter>
      </Card>

      {generating && (
         <div className="flex justify-center items-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="ml-4 text-muted-foreground">Crafting your caption...</p>
        </div>
      )}

      {result && (
        <Card className="shadow-lg animate-in fade-in-50">
          <CardHeader>
            <CardTitle>Generated Caption</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              className="min-h-[200px] text-base"
              value={result.template}
              readOnly
            />
          </CardContent>
          <CardFooter className="gap-2">
            <Button onClick={handleCopy}>
              <Clipboard className="mr-2 h-4 w-4" /> Copy
            </Button>
            <Button
              variant="outline"
              onClick={handleGenerate}
              disabled={generating}
            >
              {generating ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <RefreshCw className="mr-2 h-4 w-4" />
              )}
              Regenerate
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
