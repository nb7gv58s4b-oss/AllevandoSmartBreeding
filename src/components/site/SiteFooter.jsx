import { Link } from "@tanstack/react-router";
import { Mail, Instagram, Facebook } from "lucide-react";
import Logo from "@/components/site/Logo";
import { useSiteContent } from "@/components/site/SiteContentContext";

const COLUMNS = [
  {
    title: "Prodotto",
    links: [
      { label: "Schede di cova", to: "/prodotti" },
      { label: "Come funziona", to: "/come-funziona" },
      { label: "Tecnologia", to: "/tecnologia" },
    ],
  },
  {
    title: "Brand",
    links: [
      { label: "Chi siamo", to: "/chi-siamo" },
      { label: "Domande frequenti", to: "/faq" },
      { label: "Contatti", to: "/contatti" },
      { label: "Richiesta informazioni", to: "/carrello" },
    ],
  },
  {
    title: "Legale",
    links: [
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Cookie Policy", to: "/cookie-policy" },
      { label: "Area riservata", to: "/admin" },
    ],
  },
];

export default function SiteFooter() {
  const { get } = useSiteContent();
  const email = get("contact_email", "info@allevando.it");

  return (
    <footer translate="no" className="notranslate bg-deep text-ivory">
      <div className="wrap grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo tone="light" />
          <p className="mt-5 max-w-xs font-heading text-2xl leading-snug text-ivory/90">
            {get("brand_payoff", "Il futuro dell'allevamento, a portata di smartphone.")}
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={`mailto:${email}`}
              aria-label="Scrivici una email"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/25 transition hover:bg-ivory/10"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href={get("social_instagram", "https://www.instagram.com/")}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/25 transition hover:bg-ivory/10"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={get("social_facebook", "https://www.facebook.com/")}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/25 transition hover:bg-ivory/10"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        {COLUMNS.map((column) => (
          <div key={column.title}>
            <p className="eyebrow text-ivory/50">{column.title}</p>
            <ul className="mt-4 space-y-2.5">
              {column.links.map((link) => (
                <li key={link.to + link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-ivory/80 transition hover:text-ivory"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-ivory/15">
        <div className="wrap flex flex-col gap-2 py-6 text-xs text-ivory/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ALLEVANDO Smart Breeding™ — Tutti i diritti riservati.</p>
          <p>Progetto dedicato esclusivamente all'ornitologia.</p>
        </div>
      </div>
    </footer>
  );
}