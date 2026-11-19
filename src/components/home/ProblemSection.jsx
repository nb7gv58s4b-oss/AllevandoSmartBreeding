import { Image } from "@/components/ui/image";
import { X } from "lucide-react";

const PAINS = [
  "Schede scritte a mano, difficili da leggere e da ritrovare.",
  "Dati sparsi tra quaderni, fogli e memoria: impossibile confrontare le stagioni.",
  "Informazioni che restano in allevamento e non si possono condividere.",
];

export default function ProblemSection() {
  return (
    <section className="border-b border-deep/10 bg-ivory">
      <div className="wrap grid gap-12 py-20 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-16 lg:py-28">
        <div>
          <p className="eyebrow text-terracotta">01 — Il problema</p>
          <h2 className="mt-5 max-w-[18ch] font-heading text-[clamp(2rem,4.6vw,3.5rem)] font-medium leading-[1.02] text-deep">
            La gestione cartacea ha un limite.
          </h2>
          <p className="mt-6 max-w-[52ch] text-[16px] leading-[1.75] text-muted-foreground">
            La passione è precisa, il metodo spesso no. Quando le coppie aumentano e le stagioni
            riproduttive si susseguono, quaderni e schede cartacee diventano un peso: si perde
            tempo, si perdono dati, si perdono confronti utili.
          </p>
          <ul className="mt-8 space-y-4">
            {PAINS.map((pain) => (
              <li key={pain} className="flex gap-3.5">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-terracotta/30 text-terracotta">
                  <X className="h-3.5 w-3.5" strokeWidth={2} />
                </span>
                <span className="text-[15px] leading-relaxed text-deep/80">{pain}</span>
              </li>
            ))}
          </ul>
        </div>

        <figure className="relative">
          <div className="overflow-hidden rounded-2xl border border-deep/10 bg-white">
            <Image
              src="https://media.base44.com/images/public/6afbe902735418e3d0251319/c40ee687f_generated_aabd7209.png"
              alt="Schede di cova cartacee e quaderno su un banco da lavoro in allevamento"
              className="aspect-[4/3] w-full"
            />
          </div>
          <figcaption className="mt-3 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            Metodo tradizionale · carta, penna, memoria
          </figcaption>
        </figure>
      </div>
    </section>
  );
}