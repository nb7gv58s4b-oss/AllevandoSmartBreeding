import { Link } from "@tanstack/react-router";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Image } from "@/components/ui/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/components/cart/CartContext";

export default function CartDrawer({ open, onOpenChange }) {
  const { items, setQuantity, removeItem } = useCart();

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="flex w-full flex-col gap-0 bg-ivory sm:max-w-md">
        <SheetHeader className="border-b border-deep/10 pb-5">
          <SheetTitle className="flex items-center gap-2 font-heading text-2xl font-medium text-deep">
            <ShoppingBag className="h-5 w-5" strokeWidth={1.6} />
            La tua selezione
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-6">
          {items.length === 0 ? (
            <p className="text-sm leading-relaxed text-muted-foreground">
              Non hai ancora aggiunto schede.
              <br />
              Scegli il formato che ti interessa dal catalogo.
            </p>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4">
                  <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-deep/10 bg-white">
                    {item.image_url ? (
                      <Image src={item.image_url} alt={item.name} className="h-full w-full" />
                    ) : null}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium leading-snug text-deep">{item.name}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{item.unit}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <button
                        type="button"
                        aria-label="Riduci quantità"
                        onClick={() => setQuantity(item.id, item.quantity - 1)}
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-deep/15 text-deep transition hover:bg-deep/5"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-6 text-center text-sm font-medium text-deep">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        aria-label="Aumenta quantità"
                        onClick={() => setQuantity(item.id, item.quantity + 1)}
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-deep/15 text-deep transition hover:bg-deep/5"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                      <button
                        type="button"
                        aria-label="Rimuovi"
                        onClick={() => removeItem(item.id)}
                        className="ml-auto text-muted-foreground transition hover:text-terracotta"
                      >
                        <Trash2 className="h-4 w-4" strokeWidth={1.6} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-deep/10 pt-5">
          <p className="text-xs leading-relaxed text-muted-foreground">
            I prezzi non sono ancora pubblicati: invierai una richiesta e ti risponderemo con
            disponibilità e preventivo.
          </p>
          <Button asChild className="mt-4 w-full rounded-full bg-forest text-ivory hover:bg-deep">
            <Link to="/carrello" onClick={() => onOpenChange(false)}>
              Vai alla richiesta
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}