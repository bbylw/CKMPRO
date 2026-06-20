import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  background?: "cream" | "white" | "teal";
}

export function Section({ id, children, className, background = "cream" }: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const bgClass = {
    cream: "bg-ckm-cream",
    white: "bg-white",
    teal: "bg-ckm-teal text-white",
  }[background];

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "py-20 md:py-28 transition-opacity duration-700",
        bgClass,
        visible ? "opacity-100" : "opacity-0",
        className
      )}
    >
      <div
        className={cn(
          "transition-transform duration-700 ease-out",
          visible ? "translate-y-0" : "translate-y-6"
        )}
      >
        {children}
      </div>
    </section>
  );
}
