import { Section } from "./Section";
import { specialGroups } from "@/data/content";
import { Baby, Flame, Moon, ShieldAlert } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Baby,
  Flame,
  Moon,
  ShieldAlert,
};

export function SpecialGroups() {
  return (
    <Section id="special" background="white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">特殊人群注意事项</h2>
          <p className="section-subtitle mx-auto">
            妊娠、脂肪肝、睡眠呼吸暂停和血栓风险等特殊情况，需要纳入 CKM 综合征的整体管理。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {specialGroups.map((group) => {
            const Icon = iconMap[group.icon];
            return (
              <div key={group.title} className="ckm-card hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-ckm-teal/10 text-ckm-teal flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-ckm-teal">{group.title}</h3>
                </div>
                <ul className="space-y-3">
                  {group.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="text-ckm-charcoal/80 leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-ckm-clay"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
