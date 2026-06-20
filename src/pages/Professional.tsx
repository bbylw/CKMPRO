import { useState, useEffect, useRef } from "react";
import { Navbar } from "@/components/Navbar";
import {
  professionalSections,
  type ProSubsection,
  type Recommendation,
} from "@/data/professionalContent";
import { cn } from "@/lib/utils";
import {
  Stethoscope,
  ChevronRight,
  BookOpen,
  AlertTriangle,
  Info,
  Lightbulb,
  FileText,
  Scale,
  ChevronDown,
  ListOrdered,
} from "lucide-react";

/* ---------- COR / LOE Badges ---------- */

function CorBadge({ cor }: { cor: string }) {
  const isHarm = cor.includes("有害");
  const isNoBenefit = cor.includes("无益");
  const level = cor.startsWith("1")
    ? "strong"
    : cor.startsWith("2a")
      ? "moderate"
      : cor.startsWith("2b")
        ? "weak"
        : "other";

  const colors: Record<string, string> = {
    strong: "bg-emerald-100 text-emerald-800 border-emerald-300",
    moderate: "bg-blue-100 text-blue-800 border-blue-300",
    weak: "bg-amber-100 text-amber-800 border-amber-300",
    other: isHarm
      ? "bg-red-100 text-red-800 border-red-300"
      : isNoBenefit
        ? "bg-slate-100 text-slate-600 border-slate-300"
        : "bg-slate-100 text-slate-700 border-slate-300",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded text-xs font-bold border whitespace-nowrap",
        colors[level],
      )}
    >
      COR {cor}
    </span>
  );
}

function LoeBadge({ loe }: { loe: string }) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-ckm-sand text-ckm-charcoal/80 border border-ckm-sand whitespace-nowrap">
      LOE {loe}
    </span>
  );
}

/* ---------- Recommendation Card ---------- */

function RecommendationCard({ rec, index }: { rec: Recommendation; index: number }) {
  return (
    <div className="bg-white rounded-xl border border-ckm-sand border-l-4 border-l-ckm-clay p-4 md:p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-ckm-clay/10 text-ckm-clay text-xs font-bold shrink-0">
          {index + 1}
        </span>
        <CorBadge cor={rec.cor} />
        <LoeBadge loe={rec.loe} />
      </div>
      <p className="text-ckm-charcoal/90 leading-relaxed text-sm md:text-[15px]">
        {rec.text}
      </p>
      {rec.note && (
        <p className="mt-2 text-xs text-ckm-charcoal/60 italic">{rec.note}</p>
      )}
      {rec.economicValue && (
        <div className="mt-3 flex items-start gap-2 p-2.5 rounded-lg bg-violet-50 border border-violet-200">
          <Scale className="w-4 h-4 text-violet-600 shrink-0 mt-0.5" />
          <p className="text-xs text-violet-800 leading-relaxed">
            <span className="font-semibold">经济价值：</span>
            {rec.economicValue}
          </p>
        </div>
      )}
    </div>
  );
}

/* ---------- Table ---------- */

function ProTable({
  table,
}: {
  table: { headers: string[]; rows: string[][]; caption?: string };
}) {
  return (
    <div className="mb-6">
      {table.caption && (
        <p className="text-xs font-semibold text-ckm-teal mb-2 flex items-center gap-1.5">
          <FileText className="w-3.5 h-3.5" />
          {table.caption}
        </p>
      )}
      <div className="overflow-x-auto rounded-xl border border-ckm-sand">
        <table className="w-full text-sm">
          <thead className="bg-ckm-teal/5">
            <tr>
              {table.headers.map((h, i) => (
                <th
                  key={i}
                  className="text-left px-4 py-3 font-bold text-ckm-teal border-b border-ckm-sand whitespace-nowrap"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, ridx) => (
              <tr
                key={ridx}
                className="bg-white even:bg-ckm-cream/30 border-b border-ckm-sand last:border-b-0"
              >
                {row.map((cell, cidx) => (
                  <td
                    key={cidx}
                    className={cn(
                      "px-4 py-3 text-ckm-charcoal/80 align-top leading-relaxed",
                      cidx === 0 && "font-medium text-ckm-charcoal",
                    )}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ---------- Callout ---------- */

function CalloutBox({
  type,
  text,
}: {
  type: "info" | "warning" | "tip";
  text: string;
}) {
  const config = {
    info: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      icon: Info,
      iconColor: "text-blue-600",
      textColor: "text-blue-900",
    },
    warning: {
      bg: "bg-amber-50",
      border: "border-amber-200",
      icon: AlertTriangle,
      iconColor: "text-amber-600",
      textColor: "text-amber-900",
    },
    tip: {
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      icon: Lightbulb,
      iconColor: "text-emerald-600",
      textColor: "text-emerald-900",
    },
  };
  const cfg = config[type];
  const Icon = cfg.icon;

  return (
    <div className={cn("flex items-start gap-3 p-4 rounded-xl border mb-4", cfg.bg, cfg.border)}>
      <Icon className={cn("w-5 h-5 shrink-0 mt-0.5", cfg.iconColor)} />
      <p className={cn("text-sm leading-relaxed", cfg.textColor)}>{text}</p>
    </div>
  );
}

/* ---------- Rationale (collapsible) ---------- */

function RationaleBlock({ items }: { items: string[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-sm font-medium text-ckm-teal hover:text-ckm-clay transition-colors"
      >
        <ChevronDown
          className={cn("w-4 h-4 transition-transform", open && "rotate-180")}
        />
        推荐依据说明
      </button>
      {open && (
        <ol className="mt-3 space-y-2 pl-6">
          {items.map((item, idx) => (
            <li
              key={idx}
              className="text-sm text-ckm-charcoal/70 leading-relaxed relative before:content-[counter(list-item)] before:absolute before:-left-5 before:font-bold before:text-ckm-clay"
              style={{ counterIncrement: "list-item" }}
            >
              {item}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

/* ---------- Subsection View ---------- */

function ProSubsectionView({ subsection }: { subsection: ProSubsection }) {
  return (
    <div className="mb-10" id={subsection.title.toLowerCase().replace(/\s+/g, "-")}>
      {subsection.level === 2 ? (
        <h3 className="text-xl font-bold text-ckm-teal font-serif mb-4 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-ckm-clay shrink-0" />
          {subsection.title}
        </h3>
      ) : (
        <h4 className="text-lg font-bold text-ckm-teal/90 font-serif mb-3 pl-4 border-l-2 border-ckm-clay/30">
          {subsection.title}
        </h4>
      )}

      {subsection.callout && (
        <CalloutBox type={subsection.callout.type} text={subsection.callout.text} />
      )}

      {subsection.content && (
        <p className="text-ckm-charcoal/80 leading-relaxed mb-4 text-[15px]">
          {subsection.content}
        </p>
      )}

      {subsection.synopsis && (
        <div className="mb-4 p-4 rounded-xl bg-ckm-teal/5 border border-ckm-teal/10">
          <p className="text-xs font-semibold text-ckm-teal mb-1.5 flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5" />
            概要
          </p>
          <p className="text-sm text-ckm-charcoal/80 leading-relaxed">
            {subsection.synopsis}
          </p>
        </div>
      )}

      {subsection.recommendations && (
        <div className="space-y-3">
          {subsection.recommendations.map((rec, idx) => (
            <RecommendationCard key={idx} rec={rec} index={idx} />
          ))}
        </div>
      )}

      {subsection.bullets && (
        <ul className="space-y-2 mb-4">
          {subsection.bullets.map((item, idx) => (
            <li
              key={idx}
              className="text-ckm-charcoal/80 leading-relaxed pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-ckm-clay before:font-bold text-[15px]"
            >
              {item}
            </li>
          ))}
        </ul>
      )}

      {subsection.table && <ProTable table={subsection.table} />}

      {subsection.rationale && <RationaleBlock items={subsection.rationale} />}
    </div>
  );
}

/* ---------- Section Icon ---------- */

function SectionIcon({ icon }: { icon?: string }) {
  return <ListOrdered className="w-5 h-5" />;
}

/* ---------- Main Component ---------- */

export default function Professional() {
  const [activeSection, setActiveSection] = useState(professionalSections[0].id);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Track scroll position to update active section in sidebar
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      for (const section of professionalSections) {
        const el = sectionRefs.current[section.id];
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const el = sectionRefs.current[id];
    if (el) {
      const offset = 96;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-ckm-cream pt-20">
        {/* Hero */}
        <div className="bg-ckm-teal text-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm mb-4">
                <Stethoscope className="w-4 h-4" />
                <span>医生专业版</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold font-serif mb-4">
                2026 CKM 综合征防治指南
              </h1>
              <p className="text-white/80 leading-relaxed max-w-3xl">
                面向临床医生的完整指南要点，涵盖 CKM 定义、分期、风险评估、管理路径、特殊人群与循证依据。
                所有推荐均基于 2026 AHA/ACC/ADA/ASN 指南原文整理，保留完整 COR/LOE 分级与经济价值声明。
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/70">
                <span>出版：J Am Coll Cardiol. 2026;87(22S):e1889-e2007</span>
                <span>DOI: 10.1016/j.jacc.2026.02.001</span>
                <span>发表日期：2026 年 6 月 9 日</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="lg:w-64 shrink-0">
              <div className="lg:sticky lg:top-24">
                <div className="bg-white rounded-xl border border-ckm-sand shadow-sm p-4">
                  <div className="flex items-center gap-2 mb-4 text-ckm-teal font-bold font-serif">
                    <BookOpen className="w-5 h-5" />
                    <span>目录</span>
                  </div>
                  <nav className="space-y-1">
                    {professionalSections.map((section, idx) => (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={cn(
                          "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center justify-between gap-2",
                          activeSection === section.id
                            ? "bg-ckm-teal text-white"
                            : "text-ckm-charcoal/80 hover:bg-ckm-sand/50",
                        )}
                      >
                        <span className="flex items-center gap-2 min-w-0">
                          <span
                            className={cn(
                              "text-xs font-bold shrink-0",
                              activeSection === section.id
                                ? "text-white/60"
                                : "text-ckm-clay",
                            )}
                          >
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <span className="truncate">{section.title}</span>
                        </span>
                        {activeSection === section.id && (
                          <ChevronRight className="w-4 h-4 shrink-0" />
                        )}
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Mobile section selector */}
                <div className="mt-4 lg:hidden">
                  <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="w-full bg-white border border-ckm-sand rounded-lg px-4 py-3 text-left text-sm font-medium text-ckm-teal flex items-center justify-between"
                  >
                    {professionalSections.find((s) => s.id === activeSection)?.title}
                    <ChevronRight
                      className={cn(
                        "w-4 h-4 transition-transform",
                        mobileMenuOpen && "rotate-90",
                      )}
                    />
                  </button>
                  {mobileMenuOpen && (
                    <div className="mt-2 bg-white border border-ckm-sand rounded-lg shadow-sm overflow-hidden">
                      {professionalSections.map((section) => (
                        <button
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className={cn(
                            "w-full text-left px-4 py-3 text-sm transition-colors",
                            activeSection === section.id
                              ? "bg-ckm-teal/10 text-ckm-teal font-medium"
                              : "text-ckm-charcoal/80 hover:bg-ckm-sand/30",
                          )}
                        >
                          {section.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </aside>

            {/* Main content */}
            <main className="flex-1 min-w-0">
              <div className="bg-white rounded-2xl shadow-sm border border-ckm-sand p-6 md:p-10">
                {/* Clinical disclaimer */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200 mb-8">
                  <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-800 leading-relaxed">
                    <strong>临床使用提示：</strong>
                    本页面内容仅供医学学习和临床参考，不构成针对特定患者的医疗建议。
                    临床决策应结合患者具体情况、最新原版指南及相关专科指南。
                  </p>
                </div>

                {/* Sections */}
                {professionalSections.map((section, sidx) => (
                  <section
                    key={section.id}
                    id={section.id}
                    ref={(el) => {
                      sectionRefs.current[section.id] = el;
                    }}
                    className="mb-14 last:mb-0 scroll-mt-24"
                  >
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-ckm-sand">
                      <div className="w-11 h-11 rounded-xl bg-ckm-clay/10 text-ckm-clay flex items-center justify-center shrink-0">
                        <SectionIcon icon={section.icon} />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-ckm-clay tracking-wider">
                          第 {sidx + 1} 章
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold text-ckm-teal font-serif leading-tight">
                          {section.title}
                        </h2>
                      </div>
                    </div>
                    {section.subsections.map((subsection, idx) => (
                      <ProSubsectionView key={idx} subsection={subsection} />
                    ))}
                  </section>
                ))}

                {/* Footer reference */}
                <div className="mt-12 pt-8 border-t border-ckm-sand">
                  <div className="flex items-start gap-3 text-sm text-ckm-charcoal/70">
                    <Info className="w-5 h-5 text-ckm-teal shrink-0" />
                    <p className="leading-relaxed">
                      原始指南：Ndumele CE, Rodriguez F, Dixon DL, et al. 2026 AHA/ACC/ADA/ASN
                      Guideline for the Prevention, Detection, Evaluation, and Management of
                      Cardiovascular-Kidney-Metabolic Syndrome.{" "}
                      <em>J Am Coll Cardiol</em>. 2026;87(22S):e1889-e2007. DOI:
                      10.1016/j.jacc.2026.02.001
                    </p>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
