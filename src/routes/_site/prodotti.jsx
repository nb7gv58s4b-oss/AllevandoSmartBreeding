
import { createFileRoute } from "@tanstack/react-router";
import PageHeader from "@/components/site/PageHeader";
import ProductCard from "@/components/shop/ProductCard";
import { PRODUCTS } from "@/data/products";

export const Route = createFileRoute("/_site/prodotti")({
  head: () => ({
    meta: [
      { title: "Catalogo prodotti | ALLEVANDO Smart Breeding™" },
      {
        name: "description",
        content:
          "Scopri le schede di cova intelligenti NFC e i kit ALLEVANDO Smart Breeding per l'allevamento ornitologico.",
      },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const products = PRODUCTS
    .filter((product) => product.active)
    .sort((a, b) => a.sort_order - b.sort_order);

  return (
    <>
      <PageHeader
        eyebrow="Catalogo"
        title="Schede di cova intelligenti."
        intro="La tecnologia NFC incontra l'esperienza dell'allevatore. Scegli il formato più adatto al tuo allevamento e scopri come semplificare la gestione delle covate."
      />

      <section className="bg-ivory">
        <div className="wrap py-16 lg:py-24">
          <div className="mb-10 flex flex-col gap-3 border-b border-deep/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="eyebrow text-forest">I nostri formati</p>
            <p className="max-w-[52ch] text-[13px] leading-relaxed text-muted-foreground">
              I prodotti sono in preparazione. Per prezzi, disponibilità e informazioni puoi
              inviarci una richiesta.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
