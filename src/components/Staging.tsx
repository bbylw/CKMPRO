import { useState } from "react";
import { Section } from "./Section";
import { stages, type CKMStage } from "@/data/content";
import { Shield, Activity, AlertTriangle, HeartCrack, ChevronLeft, ChevronRight, Stethoscope, ClipboardList } from "lucide-react";
import { cn } from "@/lib/utils";

const stageIcons = [Shield, Activity, AlertTriangle, HeartCrack, HeartCrack];

function StageDetail({ stage }: { stage: CKMStage }) {
  const Icon = stageIcons[stage.stage] ?? Activity;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-ckm-sand overflow-hidden">
      <div className="p-6 md:p-8 border-b border-ckm-sand bg-gradient-to-r from-white to-ckm-cream/50">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-md"
            style={{ backgroundColor: stage.color }}
          >
            <Icon className="w-8 h-8" />
          </div>
          <div>
            <p className="text-sm font-medium text-ckm-charcoal/60 mb-1">CKM {stage.name}</p>
            <h3 className="font-serif font-bold text-2xl md:text-3xl text-ckm-teal">{stage.subtitle}</h3>
          </div>
        </div>
        <p className="mt-4 text-ckm-charcoal/80 leading-relaxed max-w-3xl">{stage.definition}</p>
      </div>

      <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-ckm-clay/10 text-ckm-clay flex items-center justify-center">
              <Stethoscope className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-ckm-teal text-lg">诊断标准</h4>
          </div>
          <ul className="space-y-3">
            {stage.criteria.map((item, idx) => (
              <li
                key={idx}
                className="text-ckm-charcoal/80 leading-relaxed pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-ckm-clay before:font-bold"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-ckm-teal/10 text-ckm-teal flex items-center justify-center">
              <ClipboardList className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-ckm-teal text-lg">管理重点</h4>
          </div>
          <ul className="space-y-3">
            {stage.management.map((item, idx) => (
              <li
                key={idx}
                className="text-ckm-charcoal/80 leading-relaxed pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-ckm-teal-light before:font-bold"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function Staging() {
  const [activeStage, setActiveStage] = useState(1);
  const activeStageData = stages.find((s) => s.stage === activeStage) || stages[0];

  const goTo = (stage: number) => {
    if (stage >= 0 && stage <= 4) setActiveStage(stage);
  };

  return (
    <Section id="staging" background="cream">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-title">CKM 综合征分期</h2>
          <p className="section-subtitle mx-auto">
            从 0 期（无风险因素）到 4 期（临床 CVD），分期帮助识别风险并指导治疗强度。
            点击下方步骤查看每期详情。
          </p>
        </div>

        {/* Stepper */}
        <div className="max-w-5xl mx-auto mb-10">
          <div className="relative">
            {/* Progress line */}
            <div className="absolute top-[22px] left-0 right-0 h-1 bg-ckm-sand rounded-full hidden md:block" />
            <div
              className="absolute top-[22px] left-0 h-1 rounded-full transition-all duration-500 hidden md:block"
              style={{
                width: `${(activeStage / 4) * 100}%`,
                backgroundColor: activeStageData.color,
              }}
            />

            <div className="relative grid grid-cols-5 gap-2 md:gap-4">
              {stages.map((stage) => {
                const isActive = stage.stage === activeStage;
                const isPast = stage.stage < activeStage;
                const Icon = stageIcons[stage.stage] ?? Activity;

                return (
                  <button
                    key={stage.stage}
                    onClick={() => setActiveStage(stage.stage)}
                    className="group flex flex-col items-center text-center focus:outline-none"
                  >
                    <div
                      className={cn(
                        "w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 border-2 shrink-0",
                        isActive
                          ? "text-white shadow-lg scale-110"
                          : isPast
                            ? "text-white"
                            : "bg-white text-ckm-charcoal/50 border-ckm-sand group-hover:border-ckm-teal-light group-hover:text-ckm-teal"
                      )}
                      style={{
                        backgroundColor: isActive || isPast ? stage.color : undefined,
                        borderColor: isActive || isPast ? stage.color : undefined,
                      }}
                    >
                      <Icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="mt-3">
                      <p
                        className={cn(
                          "text-xs md:text-sm font-medium transition-colors",
                          isActive ? "text-ckm-teal" : "text-ckm-charcoal/60"
                        )}
                      >
                        CKM {stage.name}
                      </p>
                      <p
                        className={cn(
                          "hidden md:block text-xs mt-0.5 transition-colors max-w-[120px]",
                          isActive ? "text-ckm-charcoal font-medium" : "text-ckm-charcoal/50"
                        )}
                      >
                        {stage.subtitle}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Detail panel */}
        <div className="max-w-4xl mx-auto">
          <StageDetail stage={activeStageData} />

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={() => goTo(activeStage - 1)}
              disabled={activeStage === 0}
              className={cn(
                "flex items-center gap-1 px-4 py-2 rounded-lg font-medium text-sm transition-colors",
                activeStage === 0
                  ? "text-ckm-charcoal/30 cursor-not-allowed"
                  : "text-ckm-teal hover:bg-ckm-teal/10"
              )}
            >
              <ChevronLeft className="w-4 h-4" />
              上一期
            </button>
            <span className="text-sm text-ckm-charcoal/60">
              {activeStage + 1} / {stages.length}
            </span>
            <button
              onClick={() => goTo(activeStage + 1)}
              disabled={activeStage === 4}
              className={cn(
                "flex items-center gap-1 px-4 py-2 rounded-lg font-medium text-sm transition-colors",
                activeStage === 4
                  ? "text-ckm-charcoal/30 cursor-not-allowed"
                  : "text-ckm-teal hover:bg-ckm-teal/10"
              )}
            >
              下一期
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-ckm-teal/5 border border-ckm-teal/10 max-w-4xl mx-auto">
          <p className="text-sm text-ckm-charcoal/80 text-center leading-relaxed">
            <strong className="text-ckm-teal">提示：</strong>
            CKM 分期应在患者临床稳定时进行，以确保基线分期的准确性以及随访期间分期变化的可重复性。
            腹型脂肪在 CKM 中作用关键，建议同时测量 BMI 和腰围。
          </p>
        </div>
      </div>
    </Section>
  );
}
