"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 border-t border-border/30 bg-card/95 px-4 py-3 backdrop-blur-lg transition-all duration-300 md:hidden",
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0"
      )}
    >
      <Button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="w-full cursor-pointer rounded-xl bg-accent py-3 text-base font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition-all hover:bg-accent/90"
      >
        Jetzt 15% sichern
        <ArrowUp className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}
