import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Layers, Radio, Smartphone, Table2 } from "lucide-react";
import { Image } from "@/components/ui/image";
import PageHeader from "@/components/site/PageHeader";

const PILLARS = [
{
  icon: Layers,
  title: "Fisico e digitale, insieme",
  text: "La scheda che appendi alla gabbia resta il punto di riferimento quotidiano. Il foglio digitale è la sua memoria: nessuno dei due sostituisce l'altro."
},
{
  icon: Radio,
  title: "Un ponte invisibile",
  text: "Il chip NFC è il collegamento: nessun codice da digitare, nessuna ricerca tra i file. Avvicini e sei già dentro i dati della coppia."
},
{
  icon: Table2,
  title: "Strumenti che già conosci",
  text: "Il modello digitale è basato su un foglio Google avanzato: una struttura familiare, con il marchio ALLEVANDO e il tuo."
}];


export const Route = createFileRoute("/_site/tecnologia")({
  head: () => ({
    meta: [
    { title: "Tecnologia Smart Breeding | Digitalizzazione dell'allevamento ornitologico" },
    {
      name: "description",
      content:
      "La filosofia ALLEVANDO Smart Breeding: portare la digitalizzazione nell'allevamento ornitologico unendo schede fisiche NFC e gestione digitale delle covate."
    },
    { property: "og:title", content: "La tecnologia ALLEVANDO Smart Breeding™" }]

  }),
  component: TechnologyPage
});

function TechnologyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tecnologia"
        title="La digitalizzazione entra in allevamento, senza rumore."
        intro="Smart Breeding™ non è un gestionale da studiare: è un modo più semplice di conservare ciò che già fai ogni giorno. Tecnologia discreta, al servizio dell'esperienza dell'allevatore." />
      

      <section className="bg-white">
        <div className="wrap grid gap-10 py-16 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-16 lg:py-24">
          <div>
            <p className="eyebrow text-forest">La filosofia</p>
            <h2 className="mt-4 max-w-[22ch] font-heading text-[clamp(1.9rem,4.2vw,3.2rem)] font-medium leading-[1.03] text-deep">
              Dalla carta al dato, senza perdere il gesto.
            </h2>
            <div className="prose-brand mt-6 max-w-[54ch] space-y-4">
              <p>
                L'allevamento ornitologico si tramanda con quaderni, schede e memoria. È un
                patrimonio di informazioni preziose, ma fragile: basta un foglio bagnato, una
                grafia incerta, una stagione archiviata male.
              </p>
              <p>
                ALLEVANDO porta la digitalizzazione dove serve davvero: nel momento in cui il dato
                nasce, cioè davanti alla gabbia. La scheda resta fisica, il dato diventa
                consultabile, confrontabile e trasferibile.
              </p>
              <p>
                Non aggiungiamo complessità: togliamo passaggi. Nessun doppio lavoro, nessun
                programma da installare sul computer, nessuna formazione.
              </p>
            </div>
          </div>
          <figure>
            <div className="overflow-hidden rounded-2xl border border-deep/10 bg-ivory">
              <Image src="https://media.base44.com/images/public/6afbe902735418e3d0251319/b17aa748c_Dall_appunti_all_app__tracciamento_degli_uccelli.png"

              alt="Dettaglio della scheda Smart Breeding con il riquadro per il chip NFC"
              className="aspect-[4/5] w-full object-cover rounded-[10px]" />
              
            </div>
            <figcaption className="mt-3 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              Scheda fisica · chip NFC · foglio digitale
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="border-y border-deep/10 bg-ivory">
        <div className="wrap py-16 lg:py-24">
          <div className="grid gap-6 md:grid-cols-3">
            {PILLARS.map((pillar) =>
            <article key={pillar.title} className="rounded-2xl border border-deep/10 bg-white p-7">
                <pillar.icon className="h-6 w-6 text-forest" strokeWidth={1.5} />
                <h3 className="mt-5 font-heading text-xl font-medium text-deep">{pillar.title}</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-muted-foreground">
                  {pillar.text}
                </p>
              </article>
            )}
          </div>
        </div>
      </section>

      <section className="bg-deep text-ivory">
        <div className="wrap grid gap-10 py-16 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-24">
          <div>
            <p className="eyebrow text-ivory/55">Il sistema digitale</p>
            <h2 className="mt-4 max-w-[22ch] font-heading text-[clamp(1.9rem,4.2vw,3.1rem)] font-medium leading-[1.03]">
              Un foglio evoluto, con il tuo marchio.
            </h2>
            <p className="mt-5 max-w-[52ch] text-[15px] leading-[1.75] text-ivory/70">
              Il modello digitale nasce da un foglio Google avanzato: colonne già impostate per la
              covata, personalizzazione grafica ALLEVANDO e integrazione del marchio
              dell'allevatore. Il tuo nome accanto al nostro, sui dati che contano.
            </p>
            <ul className="mt-7 space-y-3 text-[14px] text-ivory/75">
              <li className="flex items-start gap-3">
                <Smartphone className="mt-0.5 h-4 w-4 shrink-0 text-terracotta" />
                Accesso dal telefono, direttamente dalla scheda
              </li>
              <li className="flex items-start gap-3">
                <Table2 className="mt-0.5 h-4 w-4 shrink-0 text-terracotta" />
                Struttura pronta: deposizioni, schiuse, note, stagioni
              </li>
              <li className="flex items-start gap-3">
                <Layers className="mt-0.5 h-4 w-4 shrink-0 text-terracotta" />
                Riutilizzo della scheda quando cambia la coppia
              </li>
            </ul>
            <Link
              to="/prodotti"
              className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-ivory px-6 py-3.5 text-[12px] font-medium uppercase tracking-[0.14em] text-deep transition hover:bg-white">
              
              Vedi i formati
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-2xl border border-ivory/15 bg-ivory/5 p-6">
            <p className="eyebrow text-ivory/45">Sviluppo del progetto</p>
            <p className="mt-3 text-[14px] leading-relaxed text-ivory/75">
              Stiamo lavorando ai primi prototipi delle schede e alla struttura del foglio
              digitale. Non annunciamo funzioni che non esistono: quando qualcosa sarà pronto, lo
              troverai qui.
            </p>
            <div className="mt-6 space-y-4">
              {[
              { label: "Scheda fisica con NFC", value: "Prototipo in preparazione" },
              { label: "Modello foglio digitale", value: "In sviluppo" },
              { label: "Personalizzazione marchio allevatore", value: "Prevista" }].
              map((row) =>
              <div key={row.label} className="border-t border-ivory/10 pt-3">
                  <p className="text-[12px] uppercase tracking-[0.14em] text-ivory/50">
                    {row.label}
                  </p>
                  <p className="mt-1 text-[14px] text-ivory">{row.value}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>);

}