"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Users } from "lucide-react";
import { WaitlistForm } from "./waitlist-form";
import { AnimateOnScroll } from "./animate-on-scroll";

export function FinalCTASection() {
  const count = useQuery(api.waitlist.getCount);
  const displayCount = count !== undefined ? count + 147 : 147;

  return (
    <section className="relative overflow-hidden bg-[oklch(0.22_0.04_152)] py-16 text-white md:py-24">
      {/* Background accents */}
      <div className="absolute -left-32 -top-32 h-[400px] w-[400px] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <AnimateOnScroll className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-white/40">
            Warteliste
          </p>
          <h2 className="mb-4 font-serif text-3xl leading-tight md:text-5xl">
            Sei bei den Ersten dabei.
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-white/60">
            Melde dich jetzt für die Warteliste an und sichere dir{" "}
            <span className="font-semibold text-accent">
              15% Rabatt
            </span>{" "}
            auf deine erste Bestellung.
          </p>

          <div className="mx-auto mb-6 max-w-lg">
            <WaitlistForm dark />
          </div>

          {/* Waitlist counter */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-4 py-2 text-sm text-white/50">
            <Users className="h-4 w-4" />
            <span>
              Bereits{" "}
              <span className="font-semibold text-white/80">
                {displayCount}+
              </span>{" "}
              auf der Warteliste
            </span>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
