import { Image } from "@/components/ui/image";
import { Check } from "lucide-react";

const POINTS = [
  "Una scheda fisica resistente, associata a una coppia di riproduttori.",
  "Un chip NFC: basta avvicinare lo smartphone per aprire i dati.",
  "Un foglio digitale evoluto, personalizzato con il marchio ALLEVANDO e con il tuo.",
];

export default function SolutionSection() {
  return (
    <section className="border-b border-deep/10 bg-white">
      <div className="wrap grid gap-12 py-20 lg:grid-cols-[0.9fr_1fr] lg:items-center lg:gap-16 lg:py-28">
        <figure className="order-2 lg:order-1">
          <div className="overflow-hidden rounded-2xl border border-deep/10 bg-ivory">
            <Image
              src="https://media.base44.com/images/public/6afbe902735418e3d0251319/17ad19f8d_generated_image.png"
              alt="Scheda di cova Smart Breeding ALLEVANDO con chip NFC e campi per maschio, femmina e note coppia"
              className="aspect-square w-full"
            />
          </div>
          <figcaption className="mt-3 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            Un gesto · tutta la covata
          </figcaption>
        </figure>

        <div className="order-1 lg:order-2">
          <p className="eyebrow text-forest">02 — La soluzione</p>
          <h2 className="mt-5 max-w-[20ch] font-heading text-[clamp(2rem,4.6vw,3.5rem)] font-medium leading-[1.02] text-deep">
            Una scheda intelligente. Un sistema digitale.
          </h2>
          <p className="mt-6 max-w-[52ch] text-[16px] leading-[1.75] text-muted-foreground">
            ALLEVANDO Smart Breeding unisce il gesto concreto della scheda da gabbia alla
            precisione di un archivio digitale. Nessuna app da installare, nessun dato da
            ricopiare: le informazioni della coppia sono già lì, a portata di smartphone.
          </p>
          <ul className="mt-8 space-y-4">
            {POINTS.map((point) => (
              <li key={point} className="flex gap-3.5">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forest text-ivory">
                  <Check className="h-3.5 w-3.5" strokeWidth={2.4} />
                </span>
                <span className="text-[15px] leading-relaxed text-deep/80">{point}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 border-l-2 border-terracotta pl-4 text-[13px] leading-relaxed text-muted-foreground">
            Pensato per ogni allevamento ornitologico: canarini, fringillidi, esotici e
            psittacidi. Il metodo si adatta alla tua specie, non il contrario.
          </p>
        </div>
      </div>
    </section>
  );
}