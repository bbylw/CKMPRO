import { ArrowUp, Heart, BookOpen, AlertTriangle } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="references" className="bg-ckm-teal text-white py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-ckm-clay" />
              <span className="font-serif font-bold text-xl">CKM 科普</span>
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              基于《2026 AHA/ACC/ADA/ASN 心血管-肾脏-代谢综合征防治指南》完整中文翻译制作，
              旨在向公众普及 CKM 综合征的核心知识与防治理念。
            </p>
            <div className="space-y-2 text-sm text-white/70">
              <p>原文：J Am Coll Cardiol. 2026;87(22S):e1889–e2007</p>
              <p>DOI: 10.1016/j.jacc.2026.02.001</p>
              <p>作者：Ndumele CE, Rodriguez F, Dixon DL, Khan SS, Mukherjee D 等</p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-ckm-clay" />
              <h3 className="font-serif font-bold text-lg">核心参考文献</h3>
            </div>
            <ul className="space-y-2 text-sm text-white/80">
              <li>• 2026 AHA/ACC/ADA/ASN CKM 综合征防治指南</li>
              <li>• PREVENT 风险公式推导与验证研究</li>
              <li>• SELECT、STEP-HFpEF、FLOW、EMPA-KIDNEY 等关键临床试验</li>
              <li>• 2025 AHA/ACC 成人高血压指南、2026 ACC/AHA 血脂指南</li>
            </ul>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mb-12 p-6 rounded-2xl bg-white/10 border border-white/20">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-ckm-clay shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-lg mb-2">重要免责声明</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                本网站内容仅供健康科普与学习参考，<strong className="text-white">不构成任何医疗建议、诊断或治疗方案</strong>。
                CKM 综合征的评估、诊断和治疗必须由专业医务人员根据个体情况制定。
                如有健康疑虑，请及时咨询医生。所有临床决策应以最新原版指南为准。
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/20">
          <p className="text-sm text-white/60">
            © 2026 CKM 科普 · 基于公开医学指南整理
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-sm"
          >
            返回顶部
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
