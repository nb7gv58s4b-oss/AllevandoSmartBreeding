import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/site/PageHeader";
import ProductCard from "@/components/shop/ProductCard";
import { listProducts } from "@/lib/server-fns";

export const Route = createFileRoute("/_site/prodotti")({
  loader: async () => await listProducts(),
  head: () => ({
    meta: [
      { title: "Schede di cova intelligenti NFC | Catalogo ALLEVANDO Smart Breeding™" },
      {
        name: "description",
        content:
          "Catalogo ALLEVANDO Smart Breeding™: schede di cova intelligenti con NFC, confezioni multiple e kit per la gestione digitale delle covate ornitologiche.",
      },
      { property: "og:title", content: "Catalogo ALLEVANDO Smart Breeding™" },
      {
        property: "og:description",
        content: "Schede singole, confezioni e kit Smart Breeding per allevatori ornitologici.",
      },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const products = Route.useLoaderData();

  return (
    <>
      <PageHeader
        eyebrow="Catalogo"
        title="Schede di cova intelligenti."
        intro="Il primo prodotto ALLEVANDO Smart Breeding™ è la scheda di cova con tecnologia NFC, disponibile in formati diversi per ogni esigenza di allevamento. I prezzi saranno pubblicati all'apertura degli ordini: nel frattempo puoi inviarci una richiesta."
      />

      <section className="bg-ivory">
        <div className="wrap py-16 lg:py-24">
          <div className="mb-10 flex flex-col gap-3 border-b border-deep/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="eyebrow text-forest">Formati disponibili</p>
            <p className="max-w-[52ch] text-[13px] leading-relaxed text-muted-foreground">
              I prototipi sono in preparazione. Ogni richiesta ricevuta viene registrata e ti
              aggiorneremo su disponibilità e preventivo.
            </p>
          </div>

          {products.length === 0 ? (
            <div className="card-sheet p-10 text-center">
              <p className="font-heading text-2xl text-deep">Catalogo in aggiornamento</p>
              <p className="mt-3 text-sm text-muted-foreground">
                Scrivici per conoscere i formati in preparazione.
              </p>
              <Link
                to="/contatti"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-forest px-5 py-3 text-[12px] font-medium uppercase tracking-[0.14em] text-ivory"
              >
                Contattaci
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}