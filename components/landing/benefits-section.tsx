import {
  ShieldCheck,
  Microscope,
  Smartphone,
  Stethoscope,
  Bug,
  Truck,
} from "lucide-react";
import { AnimateOnScroll } from "./animate-on-scroll";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Keine unnötige Chemie",
    description:
      "Erst testen, dann gezielt behandeln. So schonst du die Darmflora und das Immunsystem deines Hundes.",
  },
  {
    icon: Microscope,
    title: "Modernste Laboranalyse",
    description:
      "PCR- und Mikroskopie-Verfahren im zertifizierten Fachlabor — für höchste Genauigkeit und Zuverlässigkeit.",
  },
  {
    icon: Smartphone,
    title: "Ergebnis aufs Handy",
    description:
      "Dein detailliertes Laborergebnis kommt digital — verständlich aufbereitet und mit klarer Handlungsempfehlung.",
  },
  {
    icon: Stethoscope,
    title: "Tierärztlich empfohlen",
    description:
      "Entwickelt in Zusammenarbeit mit Tierärzten. Die sinnvolle Alternative zur pauschalen Entwurmung.",
  },
  {
    icon: Bug,
    title: "7 Parasitenarten",
    description:
      "Testet auf Spulwürmer, Hakenwürmer, Peitschenwürmer, Bandwürmer, Lungenwürmer, Giardien und Kokzidien.",
  },
  {
    icon: Truck,
    title: "Kostenloser Rückversand",
    description:
      "Probe sammeln, in den vorfrankierten Umschlag — fertig. Der Rückversand ist für dich komplett kostenlos.",
  },
];

export function BenefitsSection() {
  return (
    <section className="bg-secondary/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <AnimateOnScroll className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary/60">
            Vorteile
          </p>
          <h2 className="mb-4 font-serif text-3xl leading-tight md:text-5xl">
            Warum Parasitcheck?
          </h2>
          <p className="text-lg text-muted-foreground">
            Weil dein Hund nur die Behandlung verdient, die er wirklich
            braucht.
          </p>
        </AnimateOnScroll>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, description }, i) => (
            <AnimateOnScroll key={title} delay={i * 80}>
              <div className="group rounded-2xl border border-border/40 bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md hover:shadow-primary/[0.04] md:p-7">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/8 transition-colors duration-300 group-hover:bg-primary/12">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 text-[17px] font-semibold">{title}</h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
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
