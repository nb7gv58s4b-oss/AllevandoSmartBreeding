import { createFileRoute, Link } from "@tanstack/react-router";
import PageHeader from "@/components/site/PageHeader";
import FaqAccordion from "@/components/faq/FaqAccordion";

const FAQ_ITEMS = [
  {
    title: "Cos'è Smart Breeding",
    body: "È una scheda di cova fisica con un chip NFC: la appendi alla gabbia e, avvicinando lo smartphone, apri il foglio digitale della coppia. I dati della stagione restano ordinati, non su un quaderno che si perde.",
    caption: "Scheda NFC / allevamento canarini",
    image:
      "https://media.base44.com/images/public/6afbe902735418e3d0251319/a8629f467_generated_image.png",
    imageAlt: "Due canarini su un posatoio accanto a una scheda di cova NFC agganciata alla gabbia",
  },
  {
    title: "Serve un'app da installare?",
    body: "No. Basta uno smartphone compatibile con NFC: si avvicina alla scheda e si apre la scheda della coppia. Nessun account da creare per consultare i dati già registrati.",
    caption: "Accesso diretto / nessuna installazione",
    image:
      "https://media.base44.com/images/public/6afbe902735418e3d0251319/7a7497797_generated_image.png",
    imageAlt: "Mano che avvicina lo smartphone a una scheda NFC agganciata alla gabbia",
  },
  {
    title: "La scheda è riutilizzabile?",
    body: "Sì. A fine stagione la scheda si riassegna a una nuova coppia: il supporto resta, cambiano solo le informazioni associate. Non si accumulano schede da smaltire ogni anno.",
    caption: "Riutilizzo / più stagioni riproduttive",
    image:
      "https://media.base44.com/images/public/6afbe902735418e3d0251319/4b8de3e3a_generated_image.png",
    imageAlt: "Schede di cova NFC impilate e a ventaglio su un banco di legno con un quaderno",
  },
  {
    title: "Su quali specie si può usare?",
    body: "Su tutto l'allevamento ornitologico: canarini, fringillidi, esotici, psittacidi. Il metodo non cambia, cambiano i campi che registri: anelli, mutazioni, deposizioni, schiuse e note della covata.",
    caption: "Specie / canarini, esotici, psittacidi",
    image:
      "https://media.base44.com/images/public/6afbe902735418e3d0251319/f845c3efa_generated_image.png",
    imageAlt: "Interno di un allevamento ornitologico con gabbie e diverse specie di uccelli",
  },
  {
    title: "Quando sarà possibile ordinare?",
    body: "I primi prototipi sono in preparazione. Inviando una richiesta entri nella lista: ti aggiorniamo su formati, prezzi e apertura degli ordini prima della pubblicazione del catalogo.",
    caption: "Prototipi / ordini in apertura",
    image:
      "https://media.base44.com/images/public/6afbe902735418e3d0251319/a0a92aab2_generated_image.png",
    imageAlt: "Confezione con due schede di cova NFC su lino avorio accanto a una piuma verde",
  },
];

export const Route = createFileRoute("/_site/faq")({
  head: () => ({
    meta: [
      { title: "Domande frequenti | ALLEVANDO Smart Breeding™" },
      {
        name: "description",
        content:
          "Risposte alle domande più frequenti sulle schede di cova NFC ALLEVANDO Smart Breeding™: funzionamento, specie, riutilizzo e apertura degli ordini.",
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="Supporto"
        title="Domande frequenti"
        intro="Le risposte essenziali sulle schede di cova intelligenti: come funzionano, su quali specie si usano e come entrare nella lista per i primi formati."
      />

      <section className="bg-ivory">
        <div className="wrap py-14 lg:py-20">
          <FaqAccordion items={FAQ_ITEMS} />

          <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl border border-deep/10 bg-white px-6 py-7 sm:flex-row sm:items-center">
            <div>
              <p className="eyebrow text-forest">Non trovi la risposta?</p>
              <p className="mt-2 max-w-[52ch] text-[14px] leading-relaxed text-muted-foreground">
                Scrivici: rispondiamo a ogni allevatore, anche per esigenze particolari di specie o
                di formato.
              </p>
            </div>
            <Link
              to="/contatti"
              className="shrink-0 rounded-full bg-forest px-6 py-3 text-[12px] font-medium uppercase tracking-[0.14em] text-ivory transition hover:bg-deep"
            >
              Contattaci
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}