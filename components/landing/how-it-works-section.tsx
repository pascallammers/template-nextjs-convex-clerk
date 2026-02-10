import { Package, TestTube, Smartphone } from "lucide-react";
import { AnimateOnScroll } from "./animate-on-scroll";

const steps = [
  {
    icon: Package,
    step: "01",
    title: "Testkit bestellen",
    description:
      "Bestelle dein Testkit online und erhalte es in 1–2 Werktagen bequem nach Hause geliefert.",
  },
  {
    icon: TestTube,
    step: "02",
    title: "Probe einsenden",
    description:
      "Sammle eine kleine Kotprobe mit der beiliegenden Anleitung und sende sie kostenlos an unser Labor.",
  },
  {
    icon: Smartphone,
    step: "03",
    title: "Ergebnis erhalten",
    description:
      "Innerhalb von 24–48 Stunden erhältst du dein detailliertes Laborergebnis digital aufs Handy.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <AnimateOnScroll className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary/60">
            So funktioniert&apos;s
          </p>
          <h2 className="mb-4 font-serif text-3xl leading-tight md:text-5xl">
            In 3 Schritten zur Gewissheit
          </h2>
          <p className="text-lg text-muted-foreground">
            Kein Tierarztbesuch. Kein Wartezimmer. Kein Stress für deinen
            Hund.
          </p>
        </AnimateOnScroll>

        <div className="relative grid gap-8 md:grid-cols-3 md:gap-6">
          {/* Connecting line (desktop) */}
          <div className="absolute left-0 right-0 top-[72px] z-0 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block" />

          {steps.map(({ icon: Icon, step, title, description }, i) => (
            <AnimateOnScroll key={step} delay={i * 150}>
              <div className="relative flex flex-col items-center text-center">
                {/* Step number + icon */}
                <div className="relative z-10 mb-6">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-border/60 bg-card shadow-lg shadow-primary/[0.04]">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground shadow-md">
                    {step.replace("0", "")}
                  </span>
                </div>

                <h3 className="mb-2 text-xl font-semibold">{title}</h3>
                <p className="max-w-xs text-[15px] leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
