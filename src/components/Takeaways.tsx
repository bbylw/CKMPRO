import { Section } from "./Section";
import { takeaways } from "@/data/content";
import { Stethoscope, TrendingUp, ClipboardCheck, Home, Users, Scale, Pill, Droplets, Activity, HeartPulse } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const icons: LucideIcon[] = [
  Stethoscope, TrendingUp, ClipboardCheck, Home, Users,
  Scale, Pill, Droplets, Activity, HeartPulse,
];

export function Takeaways() {
  return (
    <Section id="takeaways" background="white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">十大关键要点</h2>
          <p className="section-subtitle mx-auto">
            2026 年 CKM 指南为临床医生和患者提炼了 10 条核心信息，帮助抓住防治重点。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {takeaways.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={item.id}
                className="ckm-card flex gap-5 group hover:-translate-y-1"
              >
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-ckm-teal/10 text-ckm-teal flex items-center justify-center group-hover:bg-ckm-clay group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-bold text-ckm-sand font-serif">{String(item.id).padStart(2, "0")}</span>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-ckm-teal mb-2">{item.title}</h3>
                  <p className="text-ckm-charcoal/80 text-sm leading-relaxed">{item.summary}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
