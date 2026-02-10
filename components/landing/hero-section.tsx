import Image from "next/image";
import { Shield, Clock, Home } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { WaitlistForm } from "./waitlist-form";

const trustBadges = [
  { icon: Shield, label: "Laborgeprüft" },
  { icon: Clock, label: "Ergebnis in 24\u201348h" },
  { icon: Home, label: "Einfach von Zuhause" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-16 pt-24 md:pb-28 md:pt-36">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-background to-background" />

      {/* Decorative blobs */}
      <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-primary/[0.06] blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-[320px] w-[320px] rounded-full bg-accent/[0.06] blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          {/* Pre-headline */}
          <Badge
            variant="secondary"
            className="mb-6 inline-flex rounded-full border-primary/15 bg-primary/8 px-4 py-1.5 text-sm font-medium text-primary"
          >
            Bald verfügbar — Jetzt Platz sichern
          </Badge>

          {/* Headline */}
          <h1 className="mb-6 font-serif text-[2.5rem] leading-[1.08] tracking-tight md:text-6xl lg:text-7xl">
            Schluss mit unnötigen{" "}
            <span className="text-primary">Wurmkuren.</span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Der smarte Parasitentest für Zuhause. Einfach Probe einsenden
            — Laborergebnis in 24–48 Stunden direkt aufs Handy.
          </p>

          {/* Waitlist Form */}
          <div className="mx-auto mb-4 max-w-lg">
            <WaitlistForm />
            <p className="mt-3 text-[13px] text-muted-foreground/60">
              Kostenlos eintragen. Kein Spam.
              15% Rabatt bei Launch.
            </p>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:gap-x-8">
            {trustBadges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <Icon className="h-4 w-4 text-primary/70" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero image */}
        <div className="mx-auto mt-14 max-w-3xl md:mt-20">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border/40 shadow-2xl shadow-primary/[0.06]">
            <Image
              src="/family-with-dog.jpeg"
              alt="Glückliche Familie mit Hund"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
