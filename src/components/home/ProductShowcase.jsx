import { Image } from "@/components/ui/image";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Nfc, Recycle, ShieldCheck, Sparkles } from "lucide-react";

const FEATURES = [
  { icon: Nfc, title: "Tecnologia NFC", text: "Lettura immediata con smartphone compatibile." },
  { icon: ShieldCheck, title: "Resistente e lavabile", text: "Struttura plastificabile, facile da pulire." },
  { icon: Recycle, title: "Riutilizzabile", text: "Nuova coppia o nuova stagione: aggiorni i dati." },
  { icon: Sparkles, title: "Grafica personalizzata", text: "Marchio ALLEVANDO e spazio per il tuo." },
];

export default function ProductShowcase() {
  return (
    <section className="relative overflow-hidden bg-deep text-ivory">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_110%_at_78%_25%,rgba(24,92,69,0.65)_0%,rgba(13,61,45,0)_65%)]"
      />
      <div className="wrap relative grid gap-12 py-20 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-16 lg:py-28">
        <div>
          <p className="eyebrow text-ivory/55">04 — Il prodotto</p>
          <h2 className="mt-5 max-w-[20ch] font-heading text-[clamp(2.1rem,4.8vw,3.7rem)] font-medium leading-[1.02]">
            La scheda di cova intelligente.
          </h2>
          <p className="mt-6 max-w-[52ch] text-[16px] leading-[1.75] text-ivory/70">
            Una scheda fisica, plastificabile e riutilizzabile, che porta la gestione della covata
            dentro il tuo smartphone. Il chip NFC la collega alla coppia di riproduttori; il foglio
            digitale raccoglie e ordina tutto il resto.
          </p>

          <dl className="mt-10 grid gap-px overflow-hidden rounded-xl border border-ivory/15 bg-ivory/10 sm:grid-cols-2">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="bg-deep/60 p-5">
                <feature.icon className="h-5 w-5 text-terracotta" strokeWidth={1.5} />
                <dt className="mt-3 text-[13px] font-medium uppercase tracking-[0.1em] text-ivory">
                  {feature.title}
                </dt>
                <dd className="mt-1.5 text-[13px] leading-relaxed text-ivory/60">{feature.text}</dd>
              </div>
            ))}
          </dl>

          <Link
            to="/prodotti"
            className="mt-9 inline-flex items-center gap-2.5 rounded-full bg-ivory px-6 py-3.5 text-[12px] font-medium uppercase tracking-[0.14em] text-deep transition hover:bg-white"
          >
            Vedi tutti i formati
            <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
          </Link>
        </div>

        <figure>
          <div className="overflow-hidden rounded-2xl border border-ivory/15">
            <Image
              src="https://media.base44.com/images/public/6afbe902735418e3d0251319/f689096c5_generated_image.png"
              alt="Schede di cova intelligenti Smart Breeding ALLEVANDO impilate e pronte all'uso"
              className="aspect-[4/5] w-full lg:aspect-[4/3]"
            />
          </div>
          <figcaption className="mt-3 text-[11px] uppercase tracking-[0.16em] text-ivory/45">
            Formato scheda · plastificabile · riutilizzabile
          </figcaption>
        </figure>
      </div>
    </section>
  );
}