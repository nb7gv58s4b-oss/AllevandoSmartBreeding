import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Plus } from "lucide-react";
import { Image } from "@/components/ui/image";
import { useCart } from "@/components/cart/CartContext";
import { AVAILABILITY, formatPrice } from "@/lib/productMeta";

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const availability = AVAILABILITY[product.availability] || AVAILABILITY.in_preparazione;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-deep/10 bg-white transition-colors hover:border-forest/30">
      <Link
        to="/prodotti/$slug"
        params={{ slug: product.slug }}
        className="block overflow-hidden bg-ivory">
        
        {product.image_url ?
        <Image src="https://media.base44.com/images/public/6afbe902735418e3d0251319/17ad19f8d_generated_image.png"

        alt={product.name}
        className="aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-[1.02]" /> :


        <div className="flex aspect-[4/3] items-center justify-center bg-ivory text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            Immagine in arrivo
          </div>
        }
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <span
            className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] ${availability.className}`}>
            
            {availability.label}
          </span>
          <span className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            {product.unit}
          </span>
        </div>

        <h3 className="mt-4 font-heading text-2xl font-medium leading-snug text-deep">
          <Link to="/prodotti/$slug" params={{ slug: product.slug }} className="hover:text-forest">
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-[14px] leading-relaxed text-muted-foreground">
          {product.short_description}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-deep/10 pt-4">
          <span className="text-[13px] font-medium text-deep">{formatPrice(product.price)}</span>
          <div className="flex items-center gap-3">
            <Link
              to="/prodotti/$slug"
              params={{ slug: product.slug }}
              className="inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-[0.14em] text-forest hover:text-deep">
              
              Dettagli
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <button
              type="button"
              onClick={() => {
                addItem(product, 1);
                setAdded(true);
              }}
              aria-label={`Aggiungi ${product.name} alla selezione`}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-forest text-ivory transition hover:bg-deep">
              
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>
        {added &&
        <Link
          to="/carrello"
          className="mt-3 text-[11px] font-medium uppercase tracking-[0.14em] text-terracotta hover:underline">
          
            Aggiunto — vai alla richiesta
          </Link>
        }
      </div>
    </article>);

}