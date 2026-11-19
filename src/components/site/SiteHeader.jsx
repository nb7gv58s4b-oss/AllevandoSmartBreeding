import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, ShoppingBag, X } from "lucide-react";
import Logo from "@/components/site/Logo";
import CartDrawer from "@/components/cart/CartDrawer";
import { useCart } from "@/components/cart/CartContext";

const NAV = [
  { label: "Prodotti", to: "/prodotti" },
  { label: "Come funziona", to: "/come-funziona" },
  { label: "Tecnologia", to: "/tecnologia" },
  { label: "Chi siamo", to: "/chi-siamo" },
  { label: "Contatti", to: "/contatti" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { count } = useCart();

  return (
    <header
      translate="no"
      className="notranslate sticky top-0 z-40 border-b border-deep/10 bg-ivory/90 backdrop-blur-md"
    >
      <div className="wrap flex h-[72px] items-center justify-between gap-6">
        <Link to="/" aria-label="ALLEVANDO — pagina iniziale" onClick={() => setMenuOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigazione principale">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[13px] font-medium tracking-wide text-deep/75 transition-colors hover:text-forest"
              activeProps={{ className: "text-forest" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setCartOpen(true)}
            aria-label={`Selezione: ${count} articoli`}
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-deep/15 text-deep transition hover:bg-deep/5"
          >
            <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.6} />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-terracotta px-1 text-[10px] font-semibold text-white">
                {count}
              </span>
            )}
          </button>

          <Link
            to="/contatti"
            className="hidden rounded-full bg-forest px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.14em] text-ivory transition hover:bg-deep sm:inline-flex"
          >
            Richiedi informazioni
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Apri il menu"
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-deep/15 text-deep lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-deep/10 bg-ivory lg:hidden">
          <nav className="wrap flex flex-col py-2" aria-label="Navigazione mobile">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className="border-b border-deep/5 py-3.5 text-[15px] text-deep"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      <CartDrawer open={cartOpen} onOpenChange={setCartOpen} />
    </header>
  );
}