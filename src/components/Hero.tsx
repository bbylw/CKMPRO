import { ArrowDown, Activity, Droplets, HeartPulse } from "lucide-react";

export function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(`#${id}`)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ckm-cream pt-20">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-10 w-64 h-64 rounded-full bg-ckm-teal/5 blur-3xl animate-float" />
        <div className="absolute bottom-32 right-10 w-80 h-80 rounded-full bg-ckm-clay/5 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-ckm-teal-light/5 blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-ckm-sand text-ckm-teal text-sm font-medium mb-8 shadow-sm">
            <Activity className="w-4 h-4" />
            <span>基于 2026 AHA/ACC/ADA/ASN 指南</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-ckm-teal mb-6 font-serif leading-tight">
            心血管-肾脏-代谢
            <br />
            <span className="text-ckm-clay">综合征科普</span>
          </h1>

          <p className="text-lg md:text-xl text-ckm-charcoal/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            心脏、肾脏与代谢系统相互影响，CKM 综合征正威胁着全球数亿人的健康。
            了解分期、风险与管理，是守护心肾健康的第一步。
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button onClick={() => scrollTo("intro")} className="ckm-btn gap-2">
              开始了解
              <ArrowDown className="w-4 h-4" />
            </button>
            <a href="#staging" onClick={(e) => { e.preventDefault(); scrollTo("staging"); }} className="ckm-btn-outline">
              查看 CKM 分期
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="ckm-card flex items-start gap-4">
              <div className="p-3 rounded-xl bg-ckm-clay/10 text-ckm-clay">
                <HeartPulse className="w-6 h-6" />
              </div>
              <div>
                <p className="font-serif font-bold text-ckm-teal text-lg">心血管</p>
                <p className="text-sm text-ckm-charcoal/70">冠心病、心衰、卒中等风险升高</p>
              </div>
            </div>
            <div className="ckm-card flex items-start gap-4">
              <div className="p-3 rounded-xl bg-ckm-teal/10 text-ckm-teal">
                <Droplets className="w-6 h-6" />
              </div>
              <div>
                <p className="font-serif font-bold text-ckm-teal text-lg">肾脏</p>
                <p className="text-sm text-ckm-charcoal/70">慢性肾脏病与肾功能进行性下降</p>
              </div>
            </div>
            <div className="ckm-card flex items-start gap-4">
              <div className="p-3 rounded-xl bg-amber-500/10 text-amber-600">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <p className="font-serif font-bold text-ckm-teal text-lg">代谢</p>
                <p className="text-sm text-ckm-charcoal/70">肥胖、糖尿病、血脂异常相互交织</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
