import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Info } from "lucide-react";
import { Image } from "@/components/ui/image";
import PageHeader from "@/components/site/PageHeader";

const STEPS = [
{
  n: "01",
  title: "Associa la scheda alla coppia",
  text: "Prendi una scheda Smart Breeding e assegnale la coppia di riproduttori. Registri una volta sola i dati di base: anello, specie, mutazione, data di formazione della coppia. La scheda è fisica, la associ come hai sempre fatto con una scheda di cova.",
  image:
  "https://media.base44.com/images/public/6afbe902735418e3d0251319/17ad19f8d_generated_image.png",
  alt: "Scheda di cova Smart Breeding con i campi per anno, maschio, femmina e note coppia"
},
{
  n: "02",
  title: "Avvicina lo smartphone alla scheda",
  text: "Il chip NFC dentro la scheda contiene il collegamento ai dati della coppia. Avvicini il telefono, senza aprire app o cercare menu: la pagina si apre da sola, come per un pagamento contactless.",
  image: "https://media.base44.com/images/public/6afbe902735418e3d0251319/98a974083_Scansione_NFC_in_voliera_con_ALLEVANDO.png",

  alt: "Scheda di cova Smart Breeding accanto allo smartphone con l'applicazione dell'allevamento"
},
{
  n: "03",
  title: "Accedi al sistema digitale",
  text: "Si apre il foglio della coppia: un modello avanzato basato su Google Sheets, personalizzato con il marchio ALLEVANDO e con lo spazio per il marchio del tuo allevamento. Le colonne sono già pronte.",
  image:
  "https://media.base44.com/images/public/6afbe902735418e3d0251319/470fdeca4_generated_image.png",
  alt: "Smartphone con il foglio digitale della covata accanto a una scheda Smart Breeding"
},
{
  n: "04",
  title: "Consulta e aggiorna la covata",
  text: "Annoti deposizioni, schiuse, note e date. Il dato resta nel foglio, ordinato e consultabile: puoi confrontarlo con le stagioni precedenti e con le altre coppie.",
  image: "https://media.base44.com/images/public/6afbe902735418e3d0251319/27b90c33b_sheets-page-1.png",

  alt: "Canarino in un allevamento professionale"
}];


export const Route = createFileRoute("/_site/come-funziona")({
  head: () => ({
    meta: [
    { title: "Come funziona Smart Breeding | Schede NFC per allevatori" },
    {
      name: "description",
      content:
      "Come funzionano le schede di cova intelligenti ALLEVANDO: associa la scheda alla coppia, avvicina lo smartphone, accedi al foglio e aggiorna i dati della covata."
    },
    { property: "og:title", content: "Come funziona ALLEVANDO Smart Breeding™" }]

  }),
  component: HowItWorksPage
});

function HowItWorksPage() {
  return (
    <>
      <PageHeader
        eyebrow="Come funziona"
        title="Quattro passaggi, nessuna competenza tecnica."
        intro="Smart Breeding™ è pensato per chi lavora in allevamento, non per chi ama i gestionali. Se sai usare uno smartphone per una foto, sai usare Smart Breeding.">
        
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/prodotti"
            className="inline-flex items-center gap-2 rounded-full bg-ivory px-6 py-3.5 text-[12px] font-medium uppercase tracking-[0.14em] text-deep transition hover:bg-white">
            
            Scopri le schede
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/contatti"
            className="inline-flex items-center rounded-full border border-ivory/35 px-6 py-3.5 text-[12px] font-medium uppercase tracking-[0.14em] text-ivory transition hover:bg-ivory/10">
            
            Fai una domanda
          </Link>
        </div>
      </PageHeader>

      <section className="bg-ivory">
        <div className="wrap divide-y divide-deep/10 py-8 lg:py-12">
          {STEPS.map((step, index) =>
          <article
            key={step.n}
            className="grid items-center gap-8 py-10 lg:grid-cols-2 lg:gap-16 lg:py-14">
            
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <p className="eyebrow text-terracotta">Passaggio {step.n}</p>
                <h2 className="mt-4 font-heading text-[clamp(1.8rem,3.8vw,2.8rem)] font-medium leading-[1.05] text-deep">
                  {step.title}
                </h2>
                <p className="mt-4 max-w-[46ch] text-[15px] leading-[1.75] text-muted-foreground">
                  {step.text}
                </p>
              </div>
              <figure className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="overflow-hidden rounded-2xl border border-deep/10 bg-white">
                  <Image
                  src={step.image}
                  alt={step.alt}
                  className="aspect-[4/3] w-full" />
                
                </div>
              </figure>
            </article>
          )}
        </div>
      </section>

      <section className="border-t border-deep/10 bg-white">
        <div className="wrap grid gap-8 py-14 lg:grid-cols-3 lg:py-20">
          <div className="lg:col-span-2">
            <p className="eyebrow text-forest">Serve sapere qualcosa di tecnologia?</p>
            <h2 className="mt-4 max-w-[26ch] font-heading text-[clamp(1.7rem,3.4vw,2.4rem)] font-medium leading-[1.08] text-deep">
              No. Se il telefono legge i tag NFC, il resto è automatico.
            </h2>
            <p className="mt-4 max-w-[56ch] text-[15px] leading-relaxed text-muted-foreground">
              La maggior parte degli smartphone moderni legge i tag NFC senza installare nulla.
              In allevamento basta un gesto: la scheda resta appesa, il telefono fa il resto.
            </p>
          </div>
          <div className="rounded-2xl border border-deep/10 bg-ivory p-6">
            <Info className="h-5 w-5 text-terracotta" strokeWidth={1.6} />
            <p className="mt-4 text-[13px] leading-relaxed text-muted-foreground">
              Ti guidiamo noi nella prima associazione: se hai dubbi, scrivici prima di ordinare.
              Preferiamo un allevatore sicuro a uno veloce.
            </p>
          </div>
        </div>
      </section>
    </>);

}