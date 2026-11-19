import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";

const HERO_IMAGE =
  "https://media.base44.com/images/public/6afbe902735418e3d0251319/6ff297592_generated_image.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-deep text-ivory">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_120%_at_22%_35%,rgba(24,92,69,0.75)_0%,rgba(13,61,45,0.25)_42%,rgba(13,61,45,0)_72%)]"
      />
      <div className="wrap relative">
        <div className="grid items-stretch gap-10 py-14 lg:grid-cols-[1fr_45%] lg:gap-14 lg:py-20">
          <div className="flex min-w-0 flex-col justify-between gap-10">
            <div>
              <p className="eyebrow flex flex-wrap items-center gap-3 text-ivory/65">
                <span className="inline-flex items-center gap-2 rounded-full border border-ivory/25 px-3 py-1 tracking-[0.16em]">
                  <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
                  Prototipi in preparazione
                </span>
                <span>Smart Breeding™ · Ornitologia</span>
              </p>
              <h1 className="mt-7 font-heading text-[clamp(2.6rem,7.4vw,5.4rem)] font-medium leading-[0.98] tracking-[-0.015em]">
                L'allevamento evolve.
                <br />
                <span className="italic text-ivory/85">Anche il tuo metodo.</span>
              </h1>
            </div>

            <div className="max-w-[34ch]">
              <p className="text-[16px] leading-relaxed text-ivory/75">
                Scopri ALLEVANDO Smart Breeding: la tecnologia incontra la passione per
                l'ornitologia.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  to="/prodotti"
                  className="inline-flex items-center gap-2.5 rounded-full border border-ivory/55 px-6 py-3.5 text-[12px] font-medium uppercase tracking-[0.14em] text-ivory transition hover:border-ivory hover:bg-ivory/10"
                >
                  Scopri Smart Breeding
                  <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
                </Link>
                <Link
                  to="/come-funziona"
                  className="inline-flex items-center gap-2 rounded-full px-2 py-3.5 text-[12px] font-medium uppercase tracking-[0.14em] text-ivory/70 underline-offset-4 transition hover:text-ivory hover:underline"
                >
                  Come funziona
                </Link>
              </div>
            </div>
          </div>

          <figure className="relative">
            <div className="relative h-full overflow-hidden rounded-2xl border border-ivory/15 bg-forest/40">
              <Image
                src={HERO_IMAGE}
                alt="Scheda di cova intelligente ALLEVANDO accanto a uno smartphone in un allevamento ornitologico"
                className="h-full min-h-[320px] w-full lg:aspect-[602/628]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-5 left-5 flex h-16 w-16 items-center justify-center"
              >
                <span className="absolute h-14 w-14 rounded-full border border-ivory/50 animate-nfc" />
                <span className="absolute h-10 w-10 rounded-full border border-ivory/70" />
                <span className="h-2 w-2 rounded-full bg-ivory" />
              </div>
            </div>
            <figcaption className="mt-3 flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-ivory/45">
              <span>Scheda NFC + foglio digitale</span>
              <span>01 / 04</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}