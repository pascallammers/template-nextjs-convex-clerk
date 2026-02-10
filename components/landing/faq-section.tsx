"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimateOnScroll } from "./animate-on-scroll";

const faqs = [
  {
    question: "Wie funktioniert der Test?",
    answer:
      "Du bestellst dein Testkit, sammelst eine kleine Kotprobe deines Hundes und sendest sie kostenlos an unser Labor. Innerhalb von 24–48 Stunden nach Eingang erhältst du dein Ergebnis digital per E-Mail.",
  },
  {
    question: "Auf welche Parasiten wird getestet?",
    answer:
      "Unser Test deckt die 7 häufigsten Parasitenarten bei Hunden ab: Spulwürmer, Hakenwürmer, Peitschenwürmer, Bandwürmer, Lungenwürmer, Giardien und Kokzidien.",
  },
  {
    question: "Wie schnell bekomme ich mein Ergebnis?",
    answer:
      "Nach Eingang deiner Probe im Labor erhältst du dein Ergebnis innerhalb von 24–48 Stunden. Der Postweg dauert in der Regel 1–2 Werktage.",
  },
  {
    question: "Ist der Test zuverlässig?",
    answer:
      "Ja. Wir arbeiten mit einem zertifizierten veterinärmedizinischen Fachlabor zusammen und nutzen modernste PCR- und Mikroskopie-Verfahren für höchste Genauigkeit.",
  },
  {
    question: "Muss ich trotzdem zum Tierarzt?",
    answer:
      "Unser Test ersetzt keine tierärztliche Behandlung. Sollte der Test positiv ausfallen, empfehlen wir dir, mit dem Ergebnis deinen Tierarzt aufzusuchen, der dann eine gezielte Behandlung einleiten kann.",
  },
  {
    question: "Wie oft sollte ich meinen Hund testen?",
    answer:
      "Tierärzte empfehlen, Hunde alle 3–4 Monate auf Parasiten zu testen — besonders wenn sie viel draußen sind, mit anderen Hunden spielen oder in ländlichen Gebieten leben.",
  },
];

export function FAQSection() {
  return (
    <section className="bg-secondary/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <AnimateOnScroll className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary/60">
            Häufige Fragen
          </p>
          <h2 className="mb-4 font-serif text-3xl leading-tight md:text-5xl">
            Alles, was du wissen musst
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll className="mx-auto max-w-2xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map(({ question, answer }, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-xl border border-border/40 bg-card px-5 shadow-sm data-[state=open]:shadow-md data-[state=open]:shadow-primary/[0.03]"
              >
                <AccordionTrigger className="py-5 text-left text-[15px] font-semibold hover:no-underline [&>svg]:text-muted-foreground">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-[15px] leading-relaxed text-muted-foreground">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
