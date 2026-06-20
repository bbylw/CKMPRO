import { useState } from "react";
import { Section } from "./Section";
import {
  preventDataItems,
  aiPromptTemplates,
  preventInterpretations,
} from "@/data/popularContent";
import {
  Calculator,
  ClipboardCheck,
  Copy,
  Check,
  ClipboardList,
  Lightbulb,
  AlertTriangle,
  Info,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function SelfCheck() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [openPrompt, setOpenPrompt] = useState<string | null>(
    aiPromptTemplates[0].id,
  );

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <Section id="selfcheck" background="cream">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">用 AI 精准评估心血管风险</h2>
          <p className="section-subtitle mx-auto">
            简单的勾选自测不够准确。PREVENT 公式是 AHA/ACC 发布的循证风险评估工具，
            结合您的体检数据，可由 AI 帮您计算未来 10 年和 30 年的心血管风险。
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Step 1: 介绍 PREVENT */}
          <div className="bg-white rounded-2xl shadow-sm border border-ckm-sand p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-ckm-teal/10 text-ckm-teal flex items-center justify-center shrink-0">
                <Info className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-ckm-teal font-serif">
                什么是 PREVENT 公式？
              </h3>
            </div>
            <p className="text-ckm-charcoal/80 leading-relaxed mb-4">
              PREVENT（PREdicting risk of cardiovascular disease EVENTs）是 2023 年美国心脏协会（AHA）和
              美国心脏病学会（ACC）联合发布的心血管风险预测公式。与旧版公式相比，PREVENT 首次纳入了
              <strong>肾脏功能（eGFR、UACR）</strong>和<strong>代谢指标（HbA1c、BMI）</strong>，
              更适合评估 CKM 综合征患者的心血管风险。
            </p>
            <div className="grid sm:grid-cols-3 gap-3">
              <div className="bg-ckm-cream rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-ckm-teal">10 年</p>
                <p className="text-sm text-ckm-charcoal/70">CVD / ASCVD / HF 风险</p>
              </div>
              <div className="bg-ckm-cream rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-ckm-teal">30 年</p>
                <p className="text-sm text-ckm-charcoal/70">长期 ASCVD 风险</p>
              </div>
              <div className="bg-ckm-cream rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-ckm-teal">30–79</p>
                <p className="text-sm text-ckm-charcoal/70">适用年龄（岁）</p>
              </div>
            </div>
          </div>

          {/* Step 2: 准备数据 */}
          <div className="bg-white rounded-2xl shadow-sm border border-ckm-sand p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-ckm-clay/10 text-ckm-clay flex items-center justify-center shrink-0">
                <ClipboardList className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-ckm-teal font-serif">
                第一步：准备您的体检数据
              </h3>
            </div>
            <p className="text-ckm-charcoal/70 leading-relaxed mb-4 text-sm">
              请从最近的体检报告或化验单中收集以下信息。带
              <span className="text-ckm-clay font-medium"> *</span> 为必需项。
            </p>
            <div className="overflow-x-auto rounded-xl border border-ckm-sand">
              <table className="w-full text-sm">
                <thead className="bg-ckm-teal/5">
                  <tr>
                    <th className="text-left px-4 py-3 font-bold text-ckm-teal border-b border-ckm-sand">
                      指标
                    </th>
                    <th className="text-left px-4 py-3 font-bold text-ckm-teal border-b border-ckm-sand">
                      说明
                    </th>
                    <th className="text-left px-4 py-3 font-bold text-ckm-teal border-b border-ckm-sand">
                      从哪里获取
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {preventDataItems.map((item, idx) => (
                    <tr
                      key={idx}
                      className="bg-white even:bg-ckm-cream/30 border-b border-ckm-sand last:border-b-0"
                    >
                      <td className="px-4 py-3 font-medium text-ckm-charcoal whitespace-nowrap">
                        {item.name}
                        {item.required && (
                          <span className="text-ckm-clay ml-0.5">*</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-ckm-charcoal/70 leading-relaxed">
                        {item.description}
                      </td>
                      <td className="px-4 py-3 text-ckm-charcoal/60 text-xs">
                        {item.source}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Step 3: AI 提示词模板 */}
          <div className="bg-white rounded-2xl shadow-sm border border-ckm-sand p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-ckm-teal/10 text-ckm-teal flex items-center justify-center shrink-0">
                <Calculator className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-ckm-teal font-serif">
                第二步：复制提示词，让 AI 帮您评估
              </h3>
            </div>
            <p className="text-ckm-charcoal/70 leading-relaxed mb-4 text-sm">
              将以下提示词复制到 AI 助手（如 ChatGPT、Claude、Gemini、DeepSeek、Kimi 等）中，
              把 <code className="bg-ckm-sand/50 px-1.5 py-0.5 rounded text-ckm-clay text-xs">[填写...]</code> 替换为您的实际数据即可。
            </p>

            <div className="space-y-3">
              {aiPromptTemplates.map((template) => {
                const isOpen = openPrompt === template.id;
                return (
                  <div
                    key={template.id}
                    className={cn(
                      "rounded-xl border transition-all",
                      isOpen
                        ? "border-ckm-teal shadow-md"
                        : "border-ckm-sand",
                    )}
                  >
                    <button
                      onClick={() => setOpenPrompt(isOpen ? null : template.id)}
                      className="w-full flex items-center justify-between gap-3 p-4 text-left"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <ClipboardCheck className="w-5 h-5 text-ckm-teal shrink-0" />
                        <div className="min-w-0">
                          <p className="font-bold text-ckm-charcoal">
                            {template.title}
                          </p>
                          <p className="text-xs text-ckm-charcoal/60">
                            {template.description}
                          </p>
                        </div>
                      </div>
                      <ChevronDown
                        className={cn(
                          "w-5 h-5 text-ckm-charcoal/40 shrink-0 transition-transform",
                          isOpen && "rotate-180",
                        )}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4">
                        <div className="relative">
                          <pre className="bg-ckm-cream rounded-xl p-4 text-xs text-ckm-charcoal/80 overflow-x-auto whitespace-pre-wrap max-h-80 overflow-y-auto leading-relaxed">
                            {template.prompt}
                          </pre>
                          <button
                            onClick={() => handleCopy(template.id, template.prompt)}
                            className={cn(
                              "absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all",
                              copiedId === template.id
                                ? "bg-emerald-100 text-emerald-700"
                                : "bg-white text-ckm-teal border border-ckm-sand hover:bg-ckm-sand/30",
                            )}
                          >
                            {copiedId === template.id ? (
                              <>
                                <Check className="w-3.5 h-3.5" />
                                已复制
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                复制提示词
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 4: 结果解读 */}
          <div className="bg-white rounded-2xl shadow-sm border border-ckm-sand p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-ckm-clay/10 text-ckm-clay flex items-center justify-center shrink-0">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-ckm-teal font-serif">
                第三步：解读评估结果
              </h3>
            </div>
            <p className="text-ckm-charcoal/70 leading-relaxed mb-4 text-sm">
              AI 返回的风险百分比可参照下表理解其含义和应对措施：
            </p>
            <div className="space-y-3">
              {preventInterpretations.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row gap-3 p-4 rounded-xl border-l-4"
                  style={{
                    borderColor: item.color,
                    backgroundColor: `${item.color}0D`,
                  }}
                >
                  <div className="sm:w-32 shrink-0">
                    <p
                      className="font-bold text-lg"
                      style={{ color: item.color }}
                    >
                      {item.riskLevel}
                    </p>
                    <p className="text-xs text-ckm-charcoal/60 mt-0.5">
                      {item.threshold}
                    </p>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-ckm-charcoal/80 leading-relaxed mb-1">
                      {item.meaning}
                    </p>
                    <p className="text-sm text-ckm-charcoal/70 leading-relaxed">
                      <span className="font-medium">建议：</span>
                      {item.action}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 重要提示 */}
          <div className="flex items-start gap-3 p-5 rounded-2xl bg-amber-50 border border-amber-200">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-sm text-amber-800 leading-relaxed space-y-1.5">
              <p>
                <strong>重要提示：</strong>
              </p>
              <ul className="space-y-1 pl-4">
                <li>
                  AI 评估结果基于您提供的数据，数据不准确会导致评估结果偏差，请尽量使用最近的体检报告数据。
                </li>
                <li>
                  PREVENT 公式适用于 30–79 岁、无心脑血管疾病史的人群。已有冠心病、心衰、卒中等的患者请直接咨询医生。
                </li>
                <li>
                  AI 评估结果仅供参考，不能替代医生的专业判断。请将评估结果带给医生，由医生结合您的完整情况做出最终判断。
                </li>
                <li>
                  建议使用的 AI 工具：ChatGPT、Claude、gemini 、国产AI模型必须是遵循循证医学原则的大语言模型。
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
