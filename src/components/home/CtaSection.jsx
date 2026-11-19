import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="bg-forest text-ivory">
      <div className="wrap grid items-center gap-10 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:py-20">
        <div>
          <p className="eyebrow text-ivory/55">Lista d'attesa</p>
          <h2 className="mt-4 max-w-[24ch] font-heading text-[clamp(1.9rem,4.2vw,3.1rem)] font-medium leading-[1.05]">
            I primi prototipi sono in preparazione.
          </h2>
          <p className="mt-4 max-w-[48ch] text-[15px] leading-relaxed text-ivory/75">
            Stiamo mettendo a punto le prime schede Smart Breeding. Lasciaci i tuoi dati: ti
            aggiorneremo su disponibilità, formati e apertura degli ordini.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
          <Link
            to="/contatti"
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-ivory px-6 py-3.5 text-[12px] font-medium uppercase tracking-[0.14em] text-deep transition hover:bg-white"
          >
            Richiedi informazioni
            <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
          </Link>
          <Link
            to="/prodotti"
            className="inline-flex items-center justify-center rounded-full border border-ivory/40 px-6 py-3.5 text-[12px] font-medium uppercase tracking-[0.14em] text-ivory transition hover:bg-ivory/10"
          >
            Vedi i formati
          </Link>
        </div>
      </div>
    </section>
  );
}