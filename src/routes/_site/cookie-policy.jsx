
import { createFileRoute, Link } from "@tanstack/react-router";
import PageHeader from "@/components/site/PageHeader";

export const Route = createFileRoute("/_site/cookie-policy")({
  head: () => ({
    meta: [
      { title: "Cookie Policy | ALLEVANDO Smart Breeding™" },
      {
        name: "description",
        content:
          "Informazioni sui cookie e sulle memorizzazioni locali utilizzate dal sito ALLEVANDO Smart Breeding™.",
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
        intro="Questa pagina descrive le tecnologie di memorizzazione che possono essere utilizzate durante la navigazione sul sito ALLEVANDO Smart Breeding™."
      />

      <section className="bg-ivory">
        <div className="wrap max-w-3xl py-14 lg:py-20">
          <div className="space-y-8 text-[15px] leading-[1.75] text-muted-foreground">
            <div>
              <h2 className="font-heading text-2xl font-medium text-deep">
                Cosa sono i cookie
              </h2>
              <p className="mt-3">
                I cookie sono piccoli file di testo che i siti web possono
                salvare nel browser. Esistono anche tecnologie analoghe,
                come la memoria locale del browser, che permettono di
                conservare informazioni sul dispositivo.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-medium text-deep">
                Memorizzazioni utilizzate dal sito
              </h2>
              <div className="mt-4 overflow-hidden rounded-xl border border-deep/10">
                <table className="w-full border-collapse text-left text-[13px]">
                  <thead className="bg-white text-[11px] uppercase tracking-[0.12em] text-deep/60">
                    <tr>
                      <th className="px-4 py-3 font-medium">Tecnologia</th>
                      <th className="px-4 py-3 font-medium">Finalità</th>
                      <th className="px-4 py-3 font-medium">Durata</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-deep/10 bg-white/60">
                    <tr>
                      <td className="px-4 py-3 text-deep">
                        Carrello (memoria locale)
                      </td>
                      <td className="px-4 py-3">
                        Conserva nel browser i prodotti selezionati e le
                        relative quantità per consentire di preparare
                        una richiesta.
                      </td>
                      <td className="px-4 py-3">
                        Fino alla cancellazione dei dati o alla loro
                        rimozione dal carrello.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4">
                Il sito non prevede un'area riservata né un sistema di
                autenticazione degli utenti. Non sono intenzionalmente
                installati strumenti pubblicitari o di profilazione.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-medium text-deep">
                Come gestire le memorizzazioni
              </h2>
              <p className="mt-3">
                Puoi cancellare i dati memorizzati dal browser attraverso
                le impostazioni di privacy del dispositivo. Se cancelli
                i dati del carrello, perderai la selezione dei prodotti
                e potrai ricrearla in seguito.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-medium text-deep">
                Riferimenti
              </h2>
              <p className="mt-3">
                Per informazioni sul trattamento dei dati personali
                consulta la{" "}
                <Link
                  to="/privacy"
                  className="text-forest underline underline-offset-2"
                >
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
