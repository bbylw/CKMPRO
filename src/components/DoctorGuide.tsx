import { Section } from "./Section";
import { doctorGuideItems } from "@/data/popularContent";
import { Stethoscope, Building2, ClipboardList, HelpCircle, Info } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Stethoscope,
  Building2,
  ClipboardList,
  HelpCircle,
};

export function DoctorGuide() {
  return (
    <Section id="doctor-guide" background="white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">就医指南</h2>
          <p className="section-subtitle mx-auto">
            知道何时就医、看什么科室、如何准备，能让就诊更高效。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {doctorGuideItems.map((item) => {
            const Icon = iconMap[item.icon] ?? HelpCircle;
            return (
              <div
                key={item.title}
                className="ckm-card hover:-translate-y-1 hover:shadow-lg flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-ckm-teal/10 text-ckm-teal flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-ckm-teal">
                    {item.title}
                  </h3>
                </div>

                <p className="text-ckm-charcoal/80 mb-4 leading-relaxed">
                  {item.content}
                </p>

                {item.details && item.details.length > 0 && (
                  <ul className="space-y-2.5">
                    {item.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="text-ckm-charcoal/80 leading-relaxed text-sm pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-ckm-clay"
                      >
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

        <div className="max-w-5xl mx-auto mt-10">
          <div className="flex gap-4 items-start bg-ckm-clay/5 border border-ckm-clay/20 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-full bg-ckm-clay/10 text-ckm-clay flex items-center justify-center shrink-0">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <p className="font-serif font-bold text-ckm-clay mb-1">温馨提示</p>
              <p className="text-ckm-charcoal/80 leading-relaxed text-sm">
                本网站内容仅供健康科普参考，不构成医疗建议。如有健康疑虑，请及时咨询专业医生。
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
