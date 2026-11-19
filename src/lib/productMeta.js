export const AVAILABILITY = {
  in_preparazione: {
    label: "In preparazione",
    className: "border-deep/15 bg-deep/5 text-deep/70",
  },
  disponibile: {
    label: "Disponibile",
    className: "border-forest/25 bg-forest/10 text-forest",
  },
  su_ordine: {
    label: "Su ordinazione",
    className: "border-terracotta/25 bg-terracotta/10 text-terracotta",
  },
  esaurito: {
    label: "Esaurito",
    className: "border-red-200 bg-red-50 text-red-700",
  },
};

export const CATEGORY_LABELS = {
  schede: "Schede",
  confezioni: "Confezioni",
  kit: "Kit",
  accessori: "Accessori",
};

export function formatPrice(price) {
  if (typeof price !== "number" || price <= 0) return "Prezzo su richiesta";
  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  }).format(price);
}