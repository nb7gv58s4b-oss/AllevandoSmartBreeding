import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { ArrowLeft, ChevronRight, Nfc, ShieldCheck, Recycle, Sparkles } from "lucide-react";
import ProductPurchase from "@/components/shop/ProductPurchase";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const product = {
  id: "scheda-nfc",
  name: "Scheda di cova intelligente NFC",
  slug: "scheda-nfc",
  unit: "Tecnologia NFC",
  description:
    "La scheda di cova intelligente ALLEVANDO Smart Breeding™ permette di collegare la scheda fisica alla gestione digitale della covata, mantenendo le informazioni ordinate e facilmente consultabili.",
  short_description:
    "Scheda di cova intelligente con tecnologia NFC.",
  features: [
    "Tecnologia NFC integrata",
    "Consultazione tramite smartphone compatibile",
    "Gestione digitale delle informazioni",
    "Pensata per l'allevamento ornitologico",
  ],
  price: null,
  price_note: "Prezzi in fase di definizione",
  availability: "in_preparazione",
};

const USE_STEPS = [
  "Associa la scheda alla coppia di riproduttori: il tag NFC viene collegato al foglio digitale.",
  "Appendi la scheda alla gabbia o al box, dove serve durante la stagione.",
  "Avvicina lo smartphone alla scheda per aprire i dati della covata.",
  "Aggiorna deposizioni, schiuse e note: la scheda resta, i dati si aggiornano.",
];

const FAQ = [
  {
    q: "Serve un'app da installare?",
    a: "No. Basta uno smartphone compatibile con la tecnologia NFC: avvicinandolo alla scheda si apre il foglio digitale della coppia.",
  },
  {
    q: "La scheda è riutilizzabile?",
    a: "Sì. Quando cambia la coppia o inizia una nuova stagione riproduttiva, aggiorni le informazioni associate alla scheda: non serve sostituirla.",
  },
  {
    q: "Su quali specie si può usare?",
    a: "Su tutti i tipi di allevamento ornitologico: canarini, fringillidi, esotici, psittacidi e altre specie.",
  },
  {
    q: "I dati sono personalizzati con il mio marchio?",
    a: "Il modello digitale è personalizzato con il marchio ALLEVANDO e prevede l'integrazione del marchio dell'allevatore.",
  },
  {
    q: "Posso ordinare adesso?",
    a: "Le prime schede sono in preparazione. Inviando una richiesta puoi ricevere aggiornamenti su disponibilità e formati.",
  },
];

const FEATURE_ICONS = [Nfc, ShieldCheck, Recycle, Sparkles];

export const Route = createFileRoute("/_site/prodotti_/$slug")({
  head: () => ({
    meta: [
      { title: "Scheda di cova intelligente NFC | ALLEVANDO Smart Breeding™" },
      {
        name: "description",
        content:
          "Scheda di cova intelligente ALLEVANDO Smart Breeding™ con tecnologia NFC.",
      },
    ],
  }),
  component: ProductDetailPage,
});

function ProductDetailPage() {
  const router = useRouter();

  return (
    <>
      <section className="border-b border-deep/10 bg-ivory">
        <div className="wrap flex items-center gap-2 py-5 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          <Link to="/prodotti" className="hover:text-forest">
            Catalogo
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-deep/70">{product.name}</span>
        </div>
      </section>

      <section className="bg-white">
        <div className="wrap grid gap-10 py-12 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div>
            <div className="flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-deep/10 bg-ivory">
              <Nfc className="h-24 w-24 text-forest/40" strokeWidth={1} />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {FEATURE_ICONS.slice(0, 3).map((Icon, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center rounded-xl border border-deep/10 bg-ivory py-4"
                >
                  <Icon className="h-5 w-5 text-forest" strokeWidth={1.5} />
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow text-terracotta">Smart Breeding™ · {product.unit}</p>
            <h1 className="mt-4 font-heading text-[clamp(2.1rem,4.6vw,3.5rem)] font-medium leading-[1.02] text-deep">
              {product.name}
            </h1>
            <p className="mt-5 text-[16px] leading-[1.75] text-muted-foreground">
              {product.description}
            </p>

            <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-[14px] text-deep/80">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <ProductPurchase product={product} />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-deep/10 bg-ivory">
        <div className="wrap py-16 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1fr] lg:gap-16">
            <div>
              <p className="eyebrow text-forest">Modalità di utilizzo</p>
              <h2 className="mt-4 font-heading text-[clamp(1.8rem,3.6vw,2.7rem)] font-medium leading-[1.05] text-deep">
                Come si usa, in pratica.
              </h2>
              <p className="mt-4 max-w-[40ch] text-[14px] leading-relaxed text-muted-foreground">
                La procedura è pensata anche per chi preferisce la carta e non ama i gestionali
                complicati: si scrive come sempre, ma i dati restano ordinati.
              </p>
            </div>
            <ol className="divide-y divide-deep/10 border-y border-deep/10">
              {USE_STEPS.map((step, index) => (
                <li key={step} className="flex gap-5 py-5">
                  <span className="font-heading text-xl text-forest/50">0{index + 1}</span>
                  <p className="text-[15px] leading-relaxed text-deep/80">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="wrap grid gap-10 py-16 lg:grid-cols-[0.6fr_1fr] lg:gap-16 lg:py-24">
          <div>
            <p className="eyebrow text-forest">Domande frequenti</p>
            <h2 className="mt-4 font-heading text-[clamp(1.8rem,3.6vw,2.7rem)] font-medium leading-[1.05] text-deep">
              Le risposte essenziali.
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {FAQ.map((item) => (
              <AccordionItem key={item.q} value={item.q} className="border-deep/10">
                <AccordionTrigger className="text-left font-body text-[15px] font-medium text-deep hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-[14px] leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="bg-forest text-ivory">
        <div className="wrap flex flex-col items-start justify-between gap-6 py-14 sm:flex-row sm:items-center">
          <div>
            <p className="eyebrow text-ivory/55">Prototipi in preparazione</p>
            <h2 className="mt-3 font-heading text-[clamp(1.6rem,3.4vw,2.4rem)] font-medium leading-tight">
              Resta aggiornato sull'apertura degli ordini.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contatti"
              className="rounded-full bg-ivory px-6 py-3.5 text-[12px] font-medium uppercase tracking-[0.14em] text-deep transition hover:bg-white"
            >
              Richiedi informazioni
            </Link>
            <button
              type="button"
              onClick={() => router.history.back()}
              className="inline-flex items-center gap-2 rounded-full border border-ivory/40 px-6 py-3.5 text-[12px] font-medium uppercase tracking-[0.14em] text-ivory transition hover:bg-ivory/10"
            >
              <ArrowLeft className="h-4 w-4" />
              Indietro
            </button>
          </div>
        </div>
      </section>
    </>
  );
}