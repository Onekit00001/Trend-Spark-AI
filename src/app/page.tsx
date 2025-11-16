import AdPlaceholder from "@/components/trendspark/ad-placeholder";
import CaptionTemplatesTab from "@/components/trendspark/caption-templates-tab";
import ContentIdeasTab from "@/components/trendspark/content-ideas-tab";
import Footer from "@/components/trendspark/footer";
import HashtagGeneratorTab from "@/components/trendspark/hashtag-generator-tab";
import Header from "@/components/trendspark/header";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {FileText, Hash, Lightbulb} from "lucide-react";
import { NextRequest } from "next/server";

export default function Home(request: NextRequest) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <div className="lg:grid lg:grid-cols-[1fr_20rem] lg:gap-12">
          <div className="w-full">
            <Tabs defaultValue="content-ideas" className="w-full">
              <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 h-auto sm:h-10 mb-6">
                <TabsTrigger value="content-ideas" className="gap-2">
                  <Lightbulb className="h-4 w-4" /> Content Ideas
                </TabsTrigger>
                <TabsTrigger value="hashtag-generator" className="gap-2">
                  <Hash className="h-4 w-4" /> Hashtag Generator
                </TabsTrigger>
                <TabsTrigger value="caption-templates" className="gap-2">
                  <FileText className="h-4 w-4" /> Caption Templates
                </TabsTrigger>
              </TabsList>
              <TabsContent value="content-ideas">
                <ContentIdeasTab />
              </TabsContent>
              <TabsContent value="hashtag-generator">
                <HashtagGeneratorTab />
              </TabsContent>
              <TabsContent value="caption-templates">
                <CaptionTemplatesTab />
              </TabsContent>
            </Tabs>
          </div>
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <AdPlaceholder type="sidebar" />
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
