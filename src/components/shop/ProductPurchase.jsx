import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Check, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/components/cart/CartContext";
import { formatPrice, AVAILABILITY } from "@/lib/productMeta";

export default function ProductPurchase({ product }) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const availability = AVAILABILITY[product.availability] || AVAILABILITY.in_preparazione;

  return (
    <div className="rounded-2xl border border-deep/10 bg-white p-6">
      <div className="flex items-baseline justify-between gap-4">
        <p className="font-heading text-2xl font-medium text-deep">{formatPrice(product.price)}</p>
        <span
          className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] ${availability.className}`}
        >
          {availability.label}
        </span>
      </div>
      {product.price_note && (
        <p className="mt-1 text-xs text-muted-foreground">{product.price_note}</p>
      )}
      <p className="mt-4 text-[13px] leading-relaxed text-muted-foreground">
        I prezzi non sono ancora pubblicati. Invia la tua richiesta: riceverai disponibilità,
        formato e preventivo.
      </p>

      <div className="mt-6 flex items-center gap-3">
        <div className="flex items-center rounded-full border border-deep/15">
          <button
            type="button"
            onClick={() => setQuantity((value) => Math.max(1, value - 1))}
            aria-label="Riduci quantità"
            className="flex h-10 w-10 items-center justify-center text-deep"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="w-8 text-center text-sm font-medium text-deep">{quantity}</span>
          <button
            type="button"
            onClick={() => setQuantity((value) => Math.min(999, value + 1))}
            aria-label="Aumenta quantità"
            className="flex h-10 w-10 items-center justify-center text-deep"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>

        <button
          type="button"
          onClick={() => {
            addItem(product, quantity);
            setAdded(true);
          }}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-forest px-5 py-3 text-[12px] font-medium uppercase tracking-[0.14em] text-ivory transition hover:bg-deep"
        >
          <ShoppingBag className="h-4 w-4" />
          Aggiungi alla selezione
        </button>
      </div>

      {added && (
        <Link
          to="/carrello"
          className="mt-4 flex items-center justify-center gap-2 rounded-full border border-forest/25 bg-forest/5 px-5 py-3 text-[12px] font-medium uppercase tracking-[0.14em] text-forest"
        >
          <Check className="h-4 w-4" />
          Vai alla richiesta
        </Link>
      )}

      <Link
        to="/contatti"
        className="mt-3 block text-center text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground underline-offset-4 hover:text-forest hover:underline"
      >
        Oppure richiedi informazioni
      </Link>
    </div>
  );
}