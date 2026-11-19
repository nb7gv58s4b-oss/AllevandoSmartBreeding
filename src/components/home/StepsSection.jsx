import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

const STEPS = [
  {
    label: "01",
    title: "Associa la scheda",
    text: "Assegni la scheda a una coppia di riproduttori e registri i primi dati. Il tag NFC resta collegato a quella coppia.",
  },
  {
    label: "02",
    title: "Avvicina lo smartphone",
    text: "Avvicini il telefono alla scheda: il chip NFC apre direttamente il foglio della coppia, senza cercare nulla.",
  },
  {
    label: "03",
    title: "Consulta e aggiorna",
    text: "Annoti deposizioni, schiuse e note della covata. I dati restano ordinati e consultabili anche nelle stagioni successive.",
  },
];

export default function StepsSection() {
  return (
    <section className="border-b border-deep/10 bg-ivory">
      <div className="wrap py-20 lg:py-28">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-forest">03 — Come funziona</p>
            <h2 className="mt-5 max-w-[22ch] font-heading text-[clamp(2rem,4.6vw,3.5rem)] font-medium leading-[1.02] text-deep">
              Tre passaggi, nessuna complicazione.
            </h2>
          </div>
          <Link
            to="/come-funziona"
            className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] text-forest transition hover:text-deep"
          >
            La procedura completa
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} />
          </Link>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-deep/10 bg-deep/10 md:grid-cols-3">
          {STEPS.map((step) => (
            <article key={step.label} className="bg-white p-7 lg:p-9">
              <div className="flex items-baseline justify-between">
                <span className="font-heading text-4xl font-medium text-forest/25">
                  {step.label}
                </span>
                <span className="h-px w-10 bg-terracotta" />
              </div>
              <h3 className="mt-6 font-heading text-2xl font-medium text-deep">{step.title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}