import { createFileRoute, Link } from "@tanstack/react-router";
import PageHeader from "@/components/site/PageHeader";

export const Route = createFileRoute("/_site/cookie-policy")({
  head: () => ({
    meta: [
      { title: "Cookie Policy | ALLEVANDO Smart Breeding™" },
      {
        name: "description",
        content:
          "Cookie Policy del sito ALLEVANDO Smart Breeding™: nessun cookie di profilazione, solo memorizzazioni tecniche necessarie al funzionamento.",
      },
    ],
  }),
  component: CookiePolicyPage,
});

function CookiePolicyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legale"
        title="Cookie Policy"
        intro="Questo sito utilizza esclusivamente memorizzazioni tecniche necessarie al funzionamento. Non sono presenti cookie di profilazione o strumenti pubblicitari."
      />

      <section className="bg-ivory">
        <div className="wrap max-w-3xl py-14 lg:py-20">
          <div className="space-y-8 text-[15px] leading-[1.75] text-muted-foreground">
            <div>
              <h2 className="font-heading text-2xl font-medium text-deep">Cosa sono i cookie</h2>
              <p className="mt-3">
                I cookie sono piccoli file di testo che i siti salvano nel browser. Alcune
                tecnologie analoghe (come la memoria locale del browser) permettono di conservare
                informazioni sul dispositivo senza inviarle automaticamente al server.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-medium text-deep">
                Cosa utilizziamo su questo sito
              </h2>
              <div className="mt-4 overflow-hidden rounded-xl border border-deep/10">
                <table className="w-full border-collapse text-left text-[13px]">
                  <thead className="bg-white text-[11px] uppercase tracking-[0.12em] text-deep/60">
                    <tr>
                      <th className="px-4 py-3 font-medium">Memorizzazione</th>
                      <th className="px-4 py-3 font-medium">Finalità</th>
                      <th className="px-4 py-3 font-medium">Durata</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-deep/10 bg-white/60">
                    <tr>
                      <td className="px-4 py-3 text-deep">Selezione prodotti (locale)</td>
                      <td className="px-4 py-3">
                        Conserva i formati aggiunti alla richiesta di ordine finché non invii il
                        modulo.
                      </td>
                      <td className="px-4 py-3">Fino alla cancellazione dal browser</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-deep">Sessione area riservata</td>
                      <td className="px-4 py-3">
                        Mantiene l'accesso all'area amministrativa per gli utenti autorizzati.
                      </td>
                      <td className="px-4 py-3">Durata della sessione</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4">
                Non utilizziamo cookie analitici, di profilazione, pulsanti social che tracciano
                l'utente o pixel pubblicitari. Per questo motivo non viene mostrato un banner di
                consenso: non c'è nulla da autorizzare oltre alle funzioni tecniche necessarie.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-medium text-deep">
                Come gestire le memorizzazioni
              </h2>
              <p className="mt-3">
                Puoi cancellare in ogni momento i dati salvati dal browser attraverso le impostazioni
                di privacy del tuo dispositivo. La cancellazione della selezione prodotti non
                comporta conseguenze: potrai semplicemente ricompilare la richiesta.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-medium text-deep">Riferimenti</h2>
              <p className="mt-3">
                Per il trattamento dei dati personali consulta la{" "}
                <Link to="/privacy" className="text-forest underline underline-offset-2">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}