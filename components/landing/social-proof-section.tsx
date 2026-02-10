import { Star, ShieldCheck, Lock, Award } from "lucide-react";
import { AnimateOnScroll } from "./animate-on-scroll";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Hamburg",
    text: "Früher habe ich meinen Hund alle 3 Monate entwurmt. Seit ich vorher teste, weiß ich: Er hatte nie Würmer. Die Chemie war komplett unnötig!",
    rating: 5,
  },
  {
    name: "Thomas K.",
    location: "München",
    text: "Super einfach! Probe eingesendet, am nächsten Tag hatte ich das Ergebnis auf dem Handy. Kann ich jedem Hundebesitzer empfehlen.",
    rating: 5,
  },
  {
    name: "Dr. Lisa W.",
    location: "Berlin",
    text: "Als Tierheilpraktikerin empfehle ich meinen Kunden immer, erst zu testen. Parasitcheck macht es endlich einfach und bezahlbar.",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating
              ? "fill-accent text-accent"
              : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  );
}

const trustSeals = [
  { icon: ShieldCheck, label: "Labor-zertifiziert" },
  { icon: Lock, label: "Datenschutz-konform" },
  { icon: Award, label: "Tierärztlich geprüft" },
];

export function SocialProofSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <AnimateOnScroll className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary/60">
            Erfahrungen
          </p>
          <h2 className="mb-4 font-serif text-3xl leading-tight md:text-5xl">
            Das sagen Hundebesitzer
          </h2>
          <p className="text-lg text-muted-foreground">
            Über 1.000 zufriedene Kunden vertrauen bereits auf Parasitcheck.
          </p>
        </AnimateOnScroll>

        {/* Testimonials */}
        <div className="mb-14 grid gap-5 md:grid-cols-3 md:gap-6">
          {testimonials.map(({ name, location, text, rating }, i) => (
            <AnimateOnScroll key={name} delay={i * 120}>
              <div className="flex h-full flex-col rounded-2xl border border-border/40 bg-card p-6 shadow-sm md:p-7">
                <StarRating rating={rating} />
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-foreground/80">
                  &ldquo;{text}&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/8 text-sm font-semibold text-primary">
                    {name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{name}</p>
                    <p className="text-xs text-muted-foreground">{location}</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Trust seals */}
        <AnimateOnScroll>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {trustSeals.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/8">
                  <Icon className="h-5 w-5 text-primary/70" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
