import { Section } from "./Section";
import { preventThresholds } from "@/data/content";
import { Calculator, AlertCircle } from "lucide-react";

export function Risk() {
  return (
    <Section id="risk" background="teal">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">用 PREVENT 公式量化风险</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            PREVENT（Predicting Risk of CVD EVENTs）公式可估算 10 年与 30 年心血管风险，
            是 CKM 分期和治疗决策的重要工具。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <Calculator className="w-6 h-6 text-ckm-clay" />
                <h3 className="font-serif font-bold text-xl">PREVENT 是什么？</h3>
              </div>
              <p className="text-white/85 leading-relaxed mb-4">
                PREVENT 是美国心脏协会等推出的新型心血管风险预测工具。它除了传统风险因素外，
                还纳入了 CKM 相关预测因子（如 BMI、eGFR、UACR、HbA1c、社会剥夺指数），
                能更准确地反映 CKM 综合征患者的心血管风险。
              </p>
              <p className="text-white/85 leading-relaxed">
                适用于 30–79 岁无临床 CVD（冠心病、卒中、心衰）的成年人。
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-ckm-clay" />
                <h3 className="font-serif font-bold text-xl">为什么需要量化风险？</h3>
              </div>
              <ul className="space-y-3 text-white/85">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-ckm-clay mt-2.5 shrink-0" />
                  <span>帮助识别 CKM 3 期：10 年 CVD 风险 ≥ 20%</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-ckm-clay mt-2.5 shrink-0" />
                  <span>指导降脂、降压与降糖药物启动时机</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-ckm-clay mt-2.5 shrink-0" />
                  <span>支持医患共同决策，优先治疗高风险人群</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
            <div className="p-6 border-b border-ckm-sand">
              <h3 className="font-serif font-bold text-xl text-ckm-teal">PREVENT 关键阈值</h3>
              <p className="text-sm text-ckm-charcoal/60 mt-1">用于 CKM 分期与治疗决策的参考</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-ckm-cream">
                  <tr>
                    <th className="text-left px-4 py-3 font-bold text-ckm-teal">公式</th>
                    <th className="text-left px-4 py-3 font-bold text-ckm-teal">结局</th>
                    <th className="text-left px-4 py-3 font-bold text-ckm-teal">阈值</th>
                    <th className="text-left px-4 py-3 font-bold text-ckm-teal">应用</th>
                  </tr>
                </thead>
                <tbody>
                  {preventThresholds.map((row, idx) => (
                    <tr key={idx} className="border-t border-ckm-sand">
                      <td className="px-4 py-3 font-medium text-ckm-charcoal">{row.formula}</td>
                      <td className="px-4 py-3 text-ckm-charcoal/80">{row.outcome}</td>
                      <td className="px-4 py-3">
                        <span className="inline-block px-2 py-1 rounded-md bg-ckm-clay/10 text-ckm-clay-dark font-medium text-xs">
                          {row.threshold}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-ckm-charcoal/80">{row.application}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
