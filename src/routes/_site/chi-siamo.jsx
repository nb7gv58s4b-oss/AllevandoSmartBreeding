import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import PageHeader from "@/components/site/PageHeader";

const VALUES = [
{
  title: "Esperienza di allevamento",
  text: "Parliamo la stessa lingua di chi alleva: coppie, deposizioni, schiuse, stagioni. Le decisioni nascono da esigenze reali, non da un catalogo di funzioni."
},
{
  title: "Semplicità prima di tutto",
  text: "Se uno strumento richiede più tempo di quello che fa risparmiare, è sbagliato. Ogni passaggio in più che possiamo togliere, lo togliamo."
},
{
  title: "Rispetto del metodo",
  text: "La scheda appesa alla gabbia resta. Non chiediamo agli allevatori di cambiare abitudini: aggiungiamo un livello di ordine a ciò che già fanno."
}];


export const Route = createFileRoute("/_site/chi-siamo")({
  head: () => ({
    meta: [
    { title: "Chi siamo | ALLEVANDO Smart Breeding™" },
    {
      name: "description",
      content:
      "ALLEVANDO nasce dall'esperienza diretta degli allevatori ornitologici: fatto dagli allevatori, per gli allevatori."
    },
    { property: "og:title", content: "Chi siamo — ALLEVANDO Smart Breeding™" }]

  }),
  component: AboutPage
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Chi siamo"
        title="Fatto dagli allevatori, per gli allevatori."
        intro="ALLEVANDO non nasce in un ufficio marketing. Nasce in allevamento, dal bisogno concreto di tenere ordine tra una covata e l'altra senza perdere il piacere di fare questo lavoro." />
      

      <section className="bg-white">
        <div className="wrap grid gap-10 py-16 lg:grid-cols-[0.95fr_1fr] lg:items-center lg:gap-16 lg:py-24">
          <figure>
            <div className="overflow-hidden rounded-2xl border border-deep/10 bg-ivory">
              <Image src="https://media.base44.com/images/public/6afbe902735418e3d0251319/1e29768c1_Allevando__tecnologia_tra_i_fringuelli.png"

              alt="Interno di un allevamento ornitologico professionale"
              className="aspect-[16/11] w-full" />
              
            </div>
            <figcaption className="mt-3 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              Il contesto in cui nasce Smart Breeding
            </figcaption>
          </figure>

          <div className="prose-brand max-w-[56ch] space-y-4">
            <p className="eyebrow text-forest">Il progetto</p>
            <h2 className="font-heading font-medium leading-[1.05] text-deep text-2xl">Un'esigenza nata dalla passione, davanti alla gabbia. 
L'ornitologia è una passione che mi accompagna da sempre. Nel corso degli anni ho vissuto direttamente il mondo dell'allevamento, iniziando anche con gli ondulati di colore e dedicandomi, da circa 15 anni, principalmente agli estrildidi, ai Passeri del Giappone, ai Diamanti di Gould e ai Diamanti di Tanimbar.
Con il tempo ho imparato quanto sia importante tenere traccia di ogni dettaglio: una deposizione, una schiusa, una mutazione, lo storico di una coppia. Informazioni preziose che troppo spesso restano affidate a quaderni, schede cartacee e memoria.
 Ma oltre all'ornitologia, ho sempre avuto una grande passione per la tecnologia. Mi ha sempre affascinato la possibilità di unire innovazione e vita quotidiana, trovando soluzioni capaci di semplificare le attività senza complicarle. 
ALLEVANDO Smart Breeding™ nasce proprio dall'incontro di queste due passioni e da un'esigenza vissuta in prima persona.
 L'idea è semplice: portare la tecnologia direttamente davanti alla gabbia, trasformando la tradizionale scheda di allevamento in uno strumento intelligente, con una memoria digitale sempre consultabile, senza perdere la praticità del gesto quotidiano.
 Non volevo creare un gestionale complicato, ma uno strumento intuitivo, concreto e accessibile, pensato da chi alleva e conosce le reali esigenze di questo mondo.
 Il progetto è dedicato esclusivamente all'ornitologia: canarini, fringillidi, esotici, psittacidi e ogni altra specie allevata con passione e metodo.
Perché la tecnologia ha valore solo quando nasce da un'esigenza reale.
 E ALLEVANDO nasce proprio così: 
dalla passione di un allevatore e dalla voglia di innovare il mondo dell'ornitologia.






            </h2>
            <p className="hidden">
              Chi alleva lo sa: la parte difficile non è la passione, è tenere traccia di tutto.
              Una scheda scritta di fretta, un quaderno che cambia posto, un dato che serve proprio
              quando non lo trovi.
            </p>
            <p className="hidden">
              Da qui è partito ALLEVANDO: dare alla scheda di cova tradizionale una memoria
              digitale, senza chiedere all'allevatore di diventare un tecnico. Il risultato è Smart
              Breeding™, un sistema che unisce il gesto quotidiano alla precisione del dato.
            </p>
            <p className="hidden">
              Il progetto è dedicato esclusivamente all'ornitologia: canarini, fringillidi, esotici,
              psittacidi e ogni altra specie allevata con metodo. Un pubblico preciso, con esigenze
              precise.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-deep/10 bg-ivory">
        <div className="wrap py-16 lg:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow text-terracotta">I nostri principi</p>
            <h2 className="mt-4 font-heading text-[clamp(1.8rem,4vw,2.9rem)] font-medium leading-[1.05] text-deep">
              Tre cose su cui non scendiamo a compromessi.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {VALUES.map((value, index) => <article key={value.title} className="rounded-2xl border border-deep/10 bg-white p-7">
                <span className="font-heading text-3xl text-forest/25">0{index + 1}</span>
                <h3 className="mt-4 font-heading text-xl font-medium text-deep">{value.title}</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-muted-foreground">
                  {value.text}
                </p>
              </article>)}
          </div>
        </div>
      </section>

      <section className="bg-forest text-ivory">
        <div className="wrap grid items-center gap-8 py-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="eyebrow text-ivory/55">In tutto il mondo</p>
            <h2 className="mt-3 font-heading text-[clamp(1.7rem,3.6vw,2.5rem)] font-medium leading-tight">
              Un metodo che parla la lingua di ogni allevamento.
            </h2>
            <p className="mt-3 max-w-[52ch] text-[15px] leading-relaxed text-ivory/75">
              Smart Breeding è pensato per allevatori di ogni paese: cambiano le specie e le
              tradizioni, non il bisogno di ordine.
            </p>
          </div>
          <div className="flex lg:justify-end">
            <Link to="/contatti" className="inline-flex items-center gap-2.5 rounded-full bg-ivory px-6 py-3.5 text-[12px] font-medium uppercase tracking-[0.14em] text-deep transition hover:bg-white">
              
              Scrivici
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>);}