"use client";
import { FaqSectionBlok } from "@/types/storyblok";
import { storyblokEditable } from "@storyblok/react";
import { Inter, Open_Sans } from "next/font/google";
import clsx from "clsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const inter = Inter({ subsets: ["latin", "vietnamese"], weight: ["700"] });
const openSans = Open_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "600"],
});

export default function FaqSection({ blok }: { blok: FaqSectionBlok }) {
  const categories = blok.categories ?? [];
  if (categories.length === 0) return null;
  const defaultTab = categories[0]?._uid ?? "cat-0";

  return (
    <section
      {...storyblokEditable(blok)}
      className="w-full mx-auto px-5 py-16 bg-white"
    >
      <h3
        className={clsx(
          inter.className,
          "text-center font-bold text-2xl mb-10 text-gray-900"
        )}
      >
        {blok.title}
      </h3>

      <div className={clsx(openSans.className, "max-w-7xl mx-auto")}>
        <Tabs defaultValue={defaultTab} className="w-full">
          <TabsList className="w-full flex flex-wrap justify-center h-auto gap-2 bg-transparent mb-8">
            {blok.categories?.map((cat) => (
              <TabsTrigger
                key={cat._uid}
                value={cat._uid || ""}
                className="px-8 py-3 rounded-full text-sm font-bold data-[state=active]:bg-black data-[state=active]:text-white border border-gray-200"
              >
                {cat.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {blok.categories?.map((cat) => (
            <TabsContent key={cat._uid} value={cat._uid || ""} className="mt-0">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {cat.items?.map((item) => (
                  <AccordionItem
                    key={item._uid}
                    value={item._uid || ""}
                    className="border border-gray-100 rounded-lg px-4 data-[state=open]:bg-gray-50 data-[state=open]:border-gray-200 transition-colors"
                  >
                    <AccordionTrigger className="text-left font-semibold text-gray-800 hover:no-underline py-5 text-lg">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 prose prose-sm max-w-none pb-5">
                      <div>
                        <span>{item.answer}</span>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
