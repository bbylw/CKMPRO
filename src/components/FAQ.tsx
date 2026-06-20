import { useState } from "react";
import { Section } from "./Section";
import { faqItems } from "@/data/popularContent";
import { HelpCircle, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

// 按出现顺序提取不重复的类别
const categories = Array.from(new Set(faqItems.map((item) => item.category)));

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <Section id="faq" background="cream">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-ckm-clay/10 text-ckm-clay mb-5">
            <HelpCircle className="w-7 h-7" />
          </div>
          <h2 className="section-title">常见问题解答</h2>
          <p className="section-subtitle mx-auto">
            关于 CKM 综合征，人们最关心的这些问题，或许也是您想问的。
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-10">
          {categories.map((category) => {
            const itemsWithIndex = faqItems
              .map((item, idx) => ({ item, idx }))
              .filter(({ item }) => item.category === category);

            return (
              <div key={category}>
                <h3 className="font-serif font-bold text-xl text-ckm-teal mb-4 flex items-center gap-3">
                  <span className="inline-block w-1.5 h-6 bg-ckm-clay rounded-full" />
                  {category}
                </h3>

                <div className="space-y-3">
                  {itemsWithIndex.map(({ item, idx }) => {
                    const isOpen = openIndex === idx;
                    return (
                      <div
                        key={idx}
                        className={cn(
                          "bg-white rounded-xl border transition-all duration-300 overflow-hidden",
                          isOpen
                            ? "border-ckm-teal shadow-md"
                            : "border-ckm-sand hover:border-ckm-teal/50"
                        )}
                      >
                        <button
                          type="button"
                          onClick={() => toggle(idx)}
                          className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                          aria-expanded={isOpen}
                        >
                          <span className="font-medium text-ckm-charcoal">
                            {item.question}
                          </span>
                          <ChevronDown
                            className={cn(
                              "w-5 h-5 shrink-0 text-ckm-teal transition-transform duration-300",
                              isOpen && "rotate-180"
                            )}
                          />
                        </button>

                        <div
                          className={cn(
                            "grid transition-all duration-300 ease-in-out",
                            isOpen
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          )}
                        >
                          <div className="overflow-hidden">
                            <p className="px-5 pb-5 text-ckm-charcoal/80 leading-relaxed text-sm">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
