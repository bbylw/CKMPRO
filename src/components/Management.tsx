import { useState } from "react";
import { Section } from "./Section";
import { managementTabs } from "@/data/content";
import { Leaf, Scale, Activity, Droplets, HeartPulse, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Leaf,
  Scale,
  Activity,
  Droplets,
  HeartPulse,
  Users,
};

export function Management() {
  const [activeId, setActiveId] = useState(managementTabs[0].id);
  const activeTab = managementTabs.find((t) => t.id === activeId) || managementTabs[0];

  return (
    <Section id="management" background="cream">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">CKM 综合征管理策略</h2>
          <p className="section-subtitle mx-auto">
            从生活方式到药物治疗，再到多学科团队协作，综合管理是延缓或逆转 CKM 进展的关键。
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Desktop tabs */}
          <div className="hidden md:flex items-center justify-center gap-2 mb-8 flex-wrap">
            {managementTabs.map((tab) => {
              const Icon = iconMap[tab.icon];
              const active = tab.id === activeId;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveId(tab.id)}
                  className={cn(
                    "flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm transition-all duration-300",
                    active
                      ? "bg-ckm-teal text-white shadow-lg"
                      : "bg-white text-ckm-charcoal/80 hover:bg-ckm-sand/50"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {tab.title}
                </button>
              );
            })}
          </div>

          {/* Mobile tabs */}
          <div className="md:hidden mb-8 overflow-x-auto pb-2">
            <div className="flex gap-2 min-w-max">
              {managementTabs.map((tab) => {
                const Icon = iconMap[tab.icon];
                const active = tab.id === activeId;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveId(tab.id)}
                    className={cn(
                      "flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 whitespace-nowrap",
                      active
                        ? "bg-ckm-teal text-white shadow-lg"
                        : "bg-white text-ckm-charcoal/80 hover:bg-ckm-sand/50"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.title}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-ckm-sand p-6 md:p-10 min-h-[320px]">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-ckm-clay/10 text-ckm-clay flex items-center justify-center">
                {(() => {
                  const Icon = iconMap[activeTab.icon];
                  return <Icon className="w-6 h-6" />;
                })()}
              </div>
              <h3 className="font-serif font-bold text-2xl text-ckm-teal">{activeTab.title}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {activeTab.content.map((block, idx) => (
                <div key={idx}>
                  {block.subtitle && (
                    <h4 className="font-bold text-ckm-teal mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-ckm-clay" />
                      {block.subtitle}
                    </h4>
                  )}
                  <ul className="space-y-3">
                    {block.points.map((point, pidx) => (
                      <li
                        key={pidx}
                        className="text-ckm-charcoal/80 leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-ckm-teal-light"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
