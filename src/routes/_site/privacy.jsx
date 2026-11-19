import { createFileRoute, Link } from "@tanstack/react-router";
import PageHeader from "@/components/site/PageHeader";
import { useSiteContent } from "@/components/site/SiteContentContext";

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
  const { get } = useSiteContent();
  const company = get("legal_company", "");
  const email = get("contact_email", "info@allevando.it");
  const vat = get("legal_vat", "");

  return (
    <>
      <PageHeader
        eyebrow="Legale"
        title="Informativa privacy"
        intro="Questa informativa descrive come vengono trattati i dati personali inviati tramite questo sito, ai sensi del Regolamento (UE) 2016/679 (GDPR)."
      />

      <section className="bg-ivory">
        <div className="wrap max-w-3xl py-14 lg:py-20">
          <Section title="1. Titolare del trattamento">
            <p>
              Titolare del trattamento: {company || "ALLEVANDO Smart Breeding™ — dati del titolare da completare"}
              {vat ? `, P. IVA ${vat}` : ""}. Per qualsiasi richiesta relativa ai dati personali è
              possibile scrivere a{" "}
              <a href={`mailto:${email}`} className="text-forest underline underline-offset-2">
                {email}
              </a>
              .
            </p>
            <p className="rounded-xl border border-terracotta/30 bg-terracotta/5 px-4 py-3 text-[13px] text-deep/80">
              Nota per il gestore del sito: i dati societari (ragione sociale, indirizzo, P. IVA)
              sono modificabili dall'area amministrativa alla voce “Contenuti”, senza inventare
              informazioni non ancora disponibili.
            </p>
          </Section>

          <Section title="2. Quali dati raccogliamo">
            <p>
              Raccogliamo esclusivamente i dati che ci invii volontariamente tramite il modulo di
              contatto e il modulo di richiesta ordine: nome, indirizzo email, telefono (facoltativo),
              nome dell'allevamento (facoltativo), paese (facoltativo) e il testo del messaggio.
            </p>
            <p>
              Non raccogliamo dati particolari (categorie ex art. 9 GDPR) e non effettuiamo
              profilazione pubblicitaria.
            </p>
          </Section>

          <Section title="3. Finalità e base giuridica">
            <p>
              I dati sono trattati per rispondere alle richieste di informazioni, gestire le
              richieste di acquisto e fornire aggiornamenti sulle schede Smart Breeding. La base
              giuridica è il consenso dell'interessato (art. 6.1.a GDPR) e, per le richieste
              contrattuali, l'esecuzione di misure precontrattuali (art. 6.1.b GDPR).
            </p>
          </Section>

          <Section title="4. Conservazione">
            <p>
              I dati sono conservati per il tempo necessario a gestire la richiesta e, in caso di
              interesse all'acquisto, fino alla conclusione del rapporto o alla revoca del consenso.
              Puoi chiedere in ogni momento la cancellazione.
            </p>
          </Section>

          <Section title="5. Comunicazione a terzi">
            <p>
              I dati non sono ceduti né venduti a terzi. Possono essere trattati da fornitori
              tecnici (hosting, posta elettronica) in qualità di responsabili del trattamento,
              secondo quanto previsto dall'art. 28 GDPR.
            </p>
          </Section>

          <Section title="6. I tuoi diritti">
            <p>
              Hai diritto di accesso, rettifica, cancellazione, limitazione, opposizione e
              portabilità dei dati, oltre al diritto di revocare il consenso in qualsiasi momento.
              Puoi esercitarli scrivendo a{" "}
              <a href={`mailto:${email}`} className="text-forest underline underline-offset-2">
                {email}
              </a>
              . Hai inoltre diritto di proporre reclamo all'Autorità Garante per la protezione dei
              dati personali.
            </p>
          </Section>

          <Section title="7. Cookie e memorizzazioni locali">
            <p>
              Il sito non utilizza cookie di profilazione. Per i dettagli sulle memorizzazioni
              tecniche utilizzate consulta la{" "}
              <Link to="/cookie-policy" className="text-forest underline underline-offset-2">
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