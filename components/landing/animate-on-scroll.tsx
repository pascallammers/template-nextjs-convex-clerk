"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

const animationClass: Record<string, string> = {
  "fade-in-up": "animate-fade-in-up",
  "fade-in": "animate-fade-in",
  "scale-in": "animate-scale-in",
};

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: keyof typeof animationClass;
}

export function AnimateOnScroll({
  children,
  className,
  delay = 0,
  animation = "fade-in-up",
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        className,
        mounted && !isVisible && "opacity-0",
        isVisible && animationClass[animation]
      )}
      style={
        isVisible && delay > 0 ? { animationDelay: `${delay}ms` } : undefined
      }
    >
      {children}
    </div>
  );
}
