
import { createFileRoute, Link } from "@tanstack/react-router";
import PageHeader from "@/components/site/PageHeader";

const EMAIL = "info@allevandosmartbreeding.it";

export const Route = createFileRoute("/_site/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | ALLEVANDO Smart Breeding™" },
      {
        name: "description",
        content:
          "Informativa sul trattamento dei dati personali del sito ALLEVANDO Smart Breeding™ ai sensi del Regolamento UE 2016/679.",
      },
    ],
  }),
  component: PrivacyPage,
});

function Section({ title, children }) {
  return (
    <section className="border-t border-deep/10 py-8 first:border-t-0 first:pt-0">
      <h2 className="font-heading text-2xl font-medium text-deep">{title}</h2>
      <div className="mt-3 space-y-3 text-[15px] leading-[1.75] text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legale"
        title="Informativa privacy"
        intro="Questa informativa descrive le modalità di trattamento dei dati personali in relazione alla navigazione e all'utilizzo del sito ALLEVANDO Smart Breeding™, ai sensi del Regolamento (UE) 2016/679 (GDPR)."
      />

      <section className="bg-ivory">
        <div className="wrap max-w-3xl py-14 lg:py-20">
          <Section title="1. Titolare del trattamento">
            <p>
              Il titolare del trattamento è il soggetto responsabile del progetto
              ALLEVANDO Smart Breeding™. I relativi dati identificativi e
              l'indirizzo della sede dovranno essere indicati in questa sezione
              prima della pubblicazione definitiva dell'informativa.
            </p>
            <p>
              Per le richieste relative alla privacy è possibile scrivere a{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="text-forest underline underline-offset-2"
              >
                {EMAIL}
              </a>
              .
            </p>
          </Section>

          <Section title="2. Quali dati raccogliamo">
            <p>
              I dati personali possono essere forniti volontariamente
              dall'utente attraverso i moduli di contatto e di richiesta
              informazioni o prodotti: nome, indirizzo email, numero di
              telefono, nome dell'allevamento, paese e contenuto del messaggio,
              secondo i campi effettivamente compilati.
            </p>
            <p>
              Il carrello può memorizzare temporaneamente nel browser i
              prodotti selezionati e le relative quantità, tramite la
              funzionalità di memoria locale del dispositivo.
            </p>
            <p>
              Durante la navigazione possono inoltre essere trattati dati
              tecnici necessari al funzionamento e alla sicurezza del sito,
              secondo le modalità del servizio di hosting utilizzato.
            </p>
          </Section>

          <Section title="3. Finalità e base giuridica">
            <p>
              I dati sono utilizzati per rispondere alle richieste di
              informazioni, gestire le richieste relative ai prodotti e
              svolgere le eventuali attività precontrattuali richieste
              dall'utente.
            </p>
            <p>
              La base giuridica è, a seconda dei casi, l'esecuzione di misure
              precontrattuali adottate su richiesta dell'interessato
              (art. 6, par. 1, lett. b GDPR) oppure il consenso, quando
              effettivamente richiesto (art. 6, par. 1, lett. a GDPR).
            </p>
          </Section>

          <Section title="4. Modalità e conservazione">
            <p>
              Attualmente i moduli del sito preparano un messaggio tramite
              il programma di posta elettronica disponibile sul dispositivo
              dell'utente. L'invio deve essere confermato dall'utente e non
              avviene automaticamente dal sito.
            </p>
            <p>
              I dati inseriti nei moduli non vengono quindi registrati
              automaticamente in un archivio ordini o contatti del sito.
              Una volta inviata l'email, il trattamento prosegue attraverso
              i servizi di posta elettronica coinvolti.
            </p>
            <p>
              I tempi di conservazione delle comunicazioni ricevute saranno
              determinati in base alle finalità della richiesta e agli
              eventuali obblighi di legge.
            </p>
          </Section>

          <Section title="5. Comunicazione a terzi">
            <p>
              I dati possono essere trattati dai fornitori tecnici necessari
              al funzionamento del sito e dai servizi di posta elettronica
              utilizzati per ricevere e gestire le comunicazioni.
            </p>
            <p>
              Tali soggetti operano secondo i rispettivi ruoli e le
              condizioni applicabili in materia di protezione dei dati
              personali. I dati non vengono venduti.
            </p>
          </Section>

          <Section title="6. I tuoi diritti">
            <p>
              Nei casi previsti dal GDPR, l'interessato può esercitare i
              diritti di accesso, rettifica, cancellazione, limitazione
              del trattamento, opposizione e portabilità dei dati.
              Quando il trattamento si basa sul consenso, questo può
              essere revocato in qualsiasi momento, senza pregiudicare
              la liceità del trattamento precedente alla revoca.
            </p>
            <p>
              Per esercitare i propri diritti è possibile scrivere a{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="text-forest underline underline-offset-2"
              >
                {EMAIL}
              </a>
              . È inoltre possibile proporre reclamo al Garante per la
              protezione dei dati personali.
            </p>
          </Section>

          <Section title="7. Cookie e memorizzazioni locali">
            <p>
              Il sito può utilizzare memorizzazioni tecniche locali,
              ad esempio per conservare temporaneamente il contenuto
              del carrello nel browser.
            </p>
            <p>
              Per informazioni sui cookie e sulle altre tecnologie
              eventualmente utilizzate consulta la{" "}
              <Link
                to="/cookie-policy"
                className="text-forest underline underline-offset-2"
              >
                Cookie Policy
              </Link>
              .
            </p>
          </Section>
        </div>
      </section>
    </>
  );
}
