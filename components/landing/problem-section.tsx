import { AlertTriangle, Pill, Heart } from "lucide-react";
import { AnimateOnScroll } from "./animate-on-scroll";

const problems = [
  {
    icon: Pill,
    stat: "75%",
    title: "Unnötige Wurmkuren",
    description:
      "Die meisten Hunde werden regelmäßig entwurmt — ohne zu wissen, ob überhaupt ein Befall vorliegt.",
  },
  {
    icon: AlertTriangle,
    stat: "4x",
    title: "Belastung pro Jahr",
    description:
      "Viele Tierärzte empfehlen pauschal 4 Entwurmungen jährlich. Dabei ist nur jeder 10. Hund betroffen.",
  },
  {
    icon: Heart,
    stat: "100%",
    title: "Vermeidbar",
    description:
      "Mit einem einfachen Kottest weißt du in 48 Stunden, ob dein Hund wirklich behandelt werden muss.",
  },
];

export function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-[oklch(0.22_0.04_152)] py-16 text-white md:py-24">
      {/* Subtle pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.30_0.06_152)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,oklch(0.28_0.05_152)_0%,transparent_50%)]" />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <AnimateOnScroll className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground/50">
            Das Problem
          </p>
          <h2 className="mb-4 font-serif text-3xl leading-tight md:text-5xl">
            Warum blinde Entwurmung deinem Hund schadet
          </h2>
          <p className="text-lg leading-relaxed text-white/60">
            Wurmkuren sind Medikamente — und jedes unnötige Medikament
            belastet den Organismus deines Vierbeiners.
          </p>
        </AnimateOnScroll>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {problems.map(({ icon: Icon, stat, title, description }, i) => (
            <AnimateOnScroll key={title} delay={i * 120}>
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6 backdrop-blur-sm md:p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                  <Icon className="h-6 w-6 text-white/70" />
                </div>
                <p className="mb-1 font-serif text-4xl text-accent md:text-5xl">
                  {stat}
                </p>
                <h3 className="mb-2 text-lg font-semibold">{title}</h3>
                <p className="text-sm leading-relaxed text-white/55">
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
