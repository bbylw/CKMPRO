import { Section } from "./Section";
import { symptomCategories, type SymptomCategory } from "@/data/popularContent";
import { Flame, HeartPulse, Droplets, AlertTriangle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Flame,
  HeartPulse,
  Droplets,
  AlertTriangle,
};

const urgencyLabel: Record<SymptomCategory["urgency"], string> = {
  attention: "需关注",
  warning: "需警惕",
  emergency: "紧急就医",
};

export function Symptoms() {
  return (
    <Section id="symptoms" background="white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">症状与警示信号</h2>
          <p className="section-subtitle mx-auto">
            CKM 综合征早期往往没有明显症状，但身体可能已经发出了一些信号。了解这些信号，有助于及早发现问题。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {symptomCategories.map((cat) => {
            const Icon = iconMap[cat.icon];
            const isEmergency = cat.urgency === "emergency";

            return (
              <div
                key={cat.category}
                className={cn(
                  "relative rounded-2xl p-6 transition-all duration-300 overflow-hidden",
                  "bg-white border shadow-sm hover:shadow-md",
                  isEmergency
                    ? "md:col-span-2 border-2 border-red-500 bg-red-50/40"
                    : "border-ckm-sand"
                )}
              >
                {/* 左侧彩色竖条 */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1.5"
                  style={{ backgroundColor: cat.color }}
                  aria-hidden="true"
                />

                <div className="pl-3">
                  {/* 标题行：图标 + 类别名称 + 紧急标签 */}
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: `${cat.color}1A`,
                        color: cat.color,
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif font-bold text-xl text-ckm-teal">
                      {cat.category}
                    </h3>
                    <span
                      className={cn(
                        "ml-auto inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium",
                        isEmergency
                          ? "bg-red-100 text-red-700"
                          : "bg-ckm-sand text-ckm-charcoal/70"
                      )}
                    >
                      {urgencyLabel[cat.urgency]}
                    </span>
                  </div>

                  {/* 描述 */}
                  <p className="text-ckm-charcoal/70 leading-relaxed mb-4">
                    {cat.description}
                  </p>

                  {/* 症状列表 */}
                  <ul className="space-y-2.5">
                    {cat.symptoms.map((symptom, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-ckm-charcoal/85 leading-relaxed"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-2.5 shrink-0"
                          style={{ backgroundColor: cat.color }}
                        />
                        <span>{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
