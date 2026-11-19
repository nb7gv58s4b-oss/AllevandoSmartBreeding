import { Clock, FolderOpen, PenLine, Smartphone } from "lucide-react";

const BENEFITS = [
  {
    icon: Clock,
    title: "Meno tempo per ogni covata",
    text: "Niente più ricerche tra i fogli: apri la scheda e hai già tutto davanti.",
  },
  {
    icon: PenLine,
    title: "Un solo posto per i dati",
    text: "Deposizioni, schiuse e note restano nello stesso foglio, sempre aggiornato.",
  },
  {
    icon: FolderOpen,
    title: "Storico confrontabile",
    text: "Le stagioni precedenti restano consultabili: puoi leggere l'andamento nel tempo.",
  },
  {
    icon: Smartphone,
    title: "Sempre con te, in gabbia",
    text: "La scheda resta appesa dove serve; il telefono fa il resto.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="border-b border-deep/10 bg-ivory">
      <div className="wrap py-20 lg:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow text-forest">05 — Vantaggi</p>
          <h2 className="mt-5 font-heading text-[clamp(2rem,4.6vw,3.5rem)] font-medium leading-[1.02] text-deep">
            Più tempo per gli uccelli, meno per la carta.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((benefit) => (
            <article
              key={benefit.title}
              className="group rounded-2xl border border-deep/10 bg-white p-6 transition-colors hover:border-forest/30"
            >
              <benefit.icon
                className="h-6 w-6 text-forest transition-transform duration-300 group-hover:-translate-y-0.5"
                strokeWidth={1.5}
              />
              <h3 className="mt-5 font-heading text-xl font-medium leading-snug text-deep">
                {benefit.title}
              </h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-muted-foreground">
                {benefit.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}