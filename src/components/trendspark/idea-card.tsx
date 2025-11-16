"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { type ContentIdea } from "@/lib/definitions";
import { Clipboard, ListOrdered, Share2, Target, Zap, Workflow } from "lucide-react";

type IdeaCardProps = {
  idea: ContentIdea;
};

export default function IdeaCard({ idea }: IdeaCardProps) {
  const { toast } = useToast();

  const handleCopy = () => {
    const textToCopy = `
Hook: ${idea.hook}

Format: ${idea.format}

Hashtags: ${idea.hashtags.join(" ")}

Call to Action: ${idea.cta}

Elaboration:
${idea.elaboration.map((step, i) => `${i + 1}. ${step}`).join("\n")}

Flowchart: ${idea.flowchart}
    `;
    navigator.clipboard.writeText(textToCopy.trim());
    toast({
      title: "Idea Copied!",
      description: "The full content idea has been copied to your clipboard.",
    });
  };

  return (
    <Card className="overflow-hidden shadow-lg animate-in fade-in-50">
      <CardHeader className="bg-muted/30 p-4">
        <h3 className="font-semibold text-lg">{idea.hook}</h3>
      </CardHeader>
      <CardContent className="p-0">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="format">
            <AccordionTrigger className="px-6 text-left">
              <div className="flex items-center gap-3">
                <Zap className="h-5 w-5 text-primary" />
                <span>Format</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">{idea.format}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="hashtags">
            <AccordionTrigger className="px-6">
              <div className="flex items-center gap-3">
                <Share2 className="h-5 w-5 text-primary" />
                <span>Hashtags</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 flex flex-wrap gap-2">
              {idea.hashtags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="cta">
            <AccordionTrigger className="px-6 text-left">
              <div className="flex items-center gap-3">
                <Target className="h-5 w-5 text-primary" />
                <span>Call to Action (CTA)</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">{idea.cta}</AccordionContent>

          </AccordionItem>
          <AccordionItem value="elaboration">
            <AccordionTrigger className="px-6">
              <div className="flex items-center gap-3">
                <ListOrdered className="h-5 w-5 text-primary" />
                <span>5-Step Elaboration</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <ol className="list-decimal list-inside space-y-2">
                {idea.elaboration.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="flowchart" className="border-b-0">
            <AccordionTrigger className="px-6 text-left">
              <div className="flex items-center gap-3">
                <Workflow className="h-5 w-5 text-primary" />
                <span>Text Flowchart</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 font-mono text-sm bg-slate-100 dark:bg-slate-800 p-4 rounded-md">
              <pre><code>{idea.flowchart}</code></pre>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
      <CardFooter className="bg-muted/30 p-4 justify-end">
        <Button onClick={handleCopy}>
          <Clipboard className="mr-2 h-4 w-4" /> Copy Idea
        </Button>
      </CardFooter>
    </Card>
  );
}
