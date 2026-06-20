import { useState, useEffect } from "react";
import { Menu, X, Heart, Stethoscope, Users } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const publicNavItems = [
  { label: "认识 CKM", href: "#intro" },
  { label: "分期", href: "#staging" },
  { label: "症状", href: "#symptoms" },
  { label: "风险评估", href: "#risk" },
  { label: "AI 评估", href: "#selfcheck" },
  { label: "管理策略", href: "#management" },
  { label: "常见问题", href: "#faq" },
  { label: "就医指南", href: "#doctor-guide" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isProfessional = location.pathname === "/professional";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled || isProfessional
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-ckm-teal font-serif font-bold text-xl"
        >
          <Heart className="w-6 h-6 text-ckm-clay" />
          <span>CKM 科普</span>
        </Link>

        {!isProfessional && (
          <nav className="hidden md:flex items-center gap-1">
            {publicNavItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(item.href);
                }}
                className="px-4 py-2 text-sm font-medium text-ckm-charcoal/80 hover:text-ckm-clay transition-colors rounded-lg hover:bg-ckm-sand/50"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}

        {isProfessional && (
          <nav className="hidden md:flex items-center gap-1">
            <span className="px-4 py-2 text-sm font-medium text-ckm-teal flex items-center gap-2">
              <Stethoscope className="w-4 h-4" />
              医生专业版
            </span>
          </nav>
        )}

        <div className="hidden md:flex items-center gap-2">
          <Link
            to={isProfessional ? "/" : "/professional"}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
              isProfessional
                ? "bg-ckm-teal/10 text-ckm-teal hover:bg-ckm-teal/20"
                : "bg-ckm-clay/10 text-ckm-clay hover:bg-ckm-clay/20"
            )}
          >
            {isProfessional ? (
              <>
                <Users className="w-4 h-4" />
                返回科普版
              </>
            ) : (
              <>
                <Stethoscope className="w-4 h-4" />
                医生版
              </>
            )}
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-ckm-teal"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "关闭菜单" : "打开菜单"}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-ckm-sand shadow-lg">
          <nav className="container mx-auto py-4 flex flex-col">
            {!isProfessional &&
              publicNavItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(item.href);
                  }}
                  className="px-4 py-3 text-ckm-charcoal hover:text-ckm-clay hover:bg-ckm-sand/30 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            <Link
              to={isProfessional ? "/" : "/professional"}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 text-ckm-teal hover:bg-ckm-sand/30 transition-colors font-medium"
            >
              {isProfessional ? "返回科普版" : "进入医生版"}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
