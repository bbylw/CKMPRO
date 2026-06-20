import { Section } from "./Section";
import { HeartPulse, Droplets, Flame, ArrowRight } from "lucide-react";

export function Intro() {
  return (
    <Section id="intro" background="white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">什么是 CKM 综合征？</h2>
          <p className="section-subtitle mx-auto">
            CKM（Cardiovascular-Kidney-Metabolic）综合征是一种全身性疾病，
            其特征在于代谢危险因素、慢性肾脏病与心血管系统之间的病理生理相互作用。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="ckm-card border-l-4 border-l-ckm-clay">
              <h3 className="font-serif font-bold text-xl text-ckm-teal mb-2">完整定义</h3>
              <p className="text-ckm-charcoal/80 leading-relaxed">
                CKM 综合征是一种由于代谢危险因素（包括肥胖和 2 型糖尿病）、慢性肾脏病与心血管疾病之间的内在联系，
                导致多器官功能障碍和高比率心血管不良结局的全身性疾病。
              </p>
            </div>
            <div className="ckm-card border-l-4 border-l-ckm-teal-light">
              <h3 className="font-serif font-bold text-xl text-ckm-teal mb-2">简化理解</h3>
              <p className="text-ckm-charcoal/80 leading-relaxed">
                它是心脏、肾脏、糖尿病和肥胖之间紧密联系所导致的健康障碍，
                最终增加心血管事件、肾衰竭等不良健康结局的风险。
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="ckm-card relative z-10">
              <h3 className="font-serif font-bold text-xl text-ckm-teal mb-6 text-center">三联相互作用</h3>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-ckm-clay/10 flex items-center justify-center text-ckm-clay shrink-0">
                    <HeartPulse className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="font-bold text-ckm-teal">心血管系统</p>
                    <p className="text-sm text-ckm-charcoal/70">高血压、动脉粥样硬化、心衰</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 pl-7">
                  <ArrowRight className="w-5 h-5 text-ckm-charcoal/30 rotate-90 md:rotate-0" />
                  <div className="h-px flex-1 bg-ckm-sand hidden md:block" />
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-ckm-teal/10 flex items-center justify-center text-ckm-teal shrink-0">
                    <Droplets className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="font-bold text-ckm-teal">肾脏</p>
                    <p className="text-sm text-ckm-charcoal/70">白蛋白尿、eGFR 下降、CKD 进展</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 pl-7">
                  <ArrowRight className="w-5 h-5 text-ckm-charcoal/30 rotate-90 md:rotate-0" />
                  <div className="h-px flex-1 bg-ckm-sand hidden md:block" />
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-600 shrink-0">
                    <Flame className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="font-bold text-ckm-teal">代谢系统</p>
                    <p className="text-sm text-ckm-charcoal/70">肥胖、胰岛素抵抗、糖尿病、血脂异常</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full rounded-2xl bg-ckm-sand -z-0" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { stat: "90%–95%", label: "美国成人处于 CKM 1–4 期", source: "指南数据" },
            { stat: "3 大系统", label: "心脏、肾脏、代谢相互影响", source: "核心机制" },
            { stat: "0–4 期", label: "从健康到临床 CVD 的分期框架", source: "指南分期" },
          ].map((item) => (
            <div key={item.label} className="text-center p-6 rounded-2xl bg-ckm-cream">
              <p className="text-4xl font-bold text-ckm-clay font-serif mb-2">{item.stat}</p>
              <p className="font-medium text-ckm-teal mb-1">{item.label}</p>
              <p className="text-sm text-ckm-charcoal/50">{item.source}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
