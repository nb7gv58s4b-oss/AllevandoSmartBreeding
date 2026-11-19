import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Check, Minus, Plus, Trash2 } from "lucide-react";
import { Image } from "@/components/ui/image";
import PageHeader from "@/components/site/PageHeader";
import { useCart } from "@/components/cart/CartContext";
import { submitOrderRequest } from "@/lib/server-fns";

export const Route = createFileRoute("/_site/carrello")({
  head: () => ({
    meta: [
      { title: "Richiesta ordine | ALLEVANDO Smart Breeding™" },
      {
        name: "description",
        content:
          "Invia la tua richiesta per le schede di cova intelligenti ALLEVANDO Smart Breeding™: riceverai disponibilità e preventivo.",
      },
    ],
  }),
  component: CartPage,
});

const EMPTY_FORM = {
  customer_name: "",
  customer_email: "",
  phone: "",
  aviary_name: "",
  country: "",
  message: "",
  privacy_consent: false,
  newsletter_consent: false,
};

function CartPage() {
  const { items, setQuantity, removeItem, clear } = useCart();
  const [form, setForm] = useState(EMPTY_FORM);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [reference, setReference] = useState("");

  const update = (field) => (event) => {
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    if (items.length === 0) {
      setError("Aggiungi almeno un formato alla selezione.");
      return;
    }
    setSending(true);
    const code = `ALV-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
    try {
      await submitOrderRequest({
        data: {
          ...form,
          reference: code,
          items: items.map((item) => ({
            name: item.name,
            unit: item.unit,
            quantity: item.quantity,
          })),
        },
      });
      setReference(code);
      clear();
      setForm(EMPTY_FORM);
    } catch (err) {
      setError(
        err?.message?.includes("consenso")
          ? "Per inviare la richiesta è necessario accettare l'informativa privacy."
          : "Non è stato possibile inviare la richiesta. Controlla i dati e riprova.",
      );
    } finally {
      setSending(false);
    }
  };

  if (reference) {
    return (
      <>
        <PageHeader eyebrow="Richiesta inviata" title="Grazie, abbiamo ricevuto la tua richiesta." />
        <section className="bg-ivory">
          <div className="wrap py-16 lg:py-24">
            <div className="card-sheet mx-auto max-w-xl p-8 text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-forest text-ivory">
                <Check className="h-6 w-6" />
              </span>
              <p className="mt-6 text-[15px] leading-relaxed text-deep/80">
                Il tuo riferimento è <strong className="text-deep">{reference}</strong>. Ti
                ricontatteremo all'indirizzo indicato con disponibilità, formati e preventivo.
              </p>
              <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
                Le schede Smart Breeding sono in fase di preparazione: la tua richiesta entra
                nella lista di priorità.
              </p>
              <Link
                to="/prodotti"
                className="mt-8 inline-flex rounded-full bg-forest px-6 py-3 text-[12px] font-medium uppercase tracking-[0.14em] text-ivory"
              >
                Torna al catalogo
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader
        eyebrow="Richiesta ordine"
        title="La tua selezione."
        intro="Non è ancora possibile acquistare online: inviaci la tua richiesta e ti risponderemo con disponibilità e preventivo."
      />

      <section className="bg-ivory">
        <div className="wrap grid gap-10 py-14 lg:grid-cols-[1fr_0.9fr] lg:gap-16 lg:py-20">
          <div>
            <h2 className="font-heading text-2xl font-medium text-deep">Formati scelti</h2>
            {items.length === 0 ? (
              <div className="mt-5 rounded-2xl border border-dashed border-deep/20 bg-white p-8 text-center">
                <p className="text-[15px] text-muted-foreground">
                  Non hai ancora aggiunto nulla alla selezione.
                </p>
                <Link
                  to="/prodotti"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-forest px-5 py-3 text-[12px] font-medium uppercase tracking-[0.14em] text-ivory"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Vai al catalogo
                </Link>
              </div>
            ) : (
              <ul className="mt-5 space-y-4">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="flex gap-4 rounded-2xl border border-deep/10 bg-white p-4"
                  >
                    <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-ivory">
                      {item.image_url ? (
                        <Image src={item.image_url} alt={item.name} className="h-full w-full" />
                      ) : null}
                    </div>
                    <div className="flex-1">
                      <p className="text-[15px] font-medium text-deep">{item.name}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">{item.unit}</p>
                      <div className="mt-3 flex items-center gap-2">
                        <button
                          type="button"
                          aria-label="Riduci quantità"
                          onClick={() => setQuantity(item.id, item.quantity - 1)}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-deep/15"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-7 text-center text-sm">{item.quantity}</span>
                        <button
                          type="button"
                          aria-label="Aumenta quantità"
                          onClick={() => setQuantity(item.id, item.quantity + 1)}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-deep/15"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="ml-auto inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.12em] text-muted-foreground hover:text-terracotta"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                          Rimuovi
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-deep/10 bg-white p-6">
            <h2 className="font-heading text-2xl font-medium text-deep">I tuoi dati</h2>
            <div className="mt-5 space-y-4">
              <Field label="Nome e cognome *" value={form.customer_name} onChange={update("customer_name")} required />
              <Field label="Email *" type="email" value={form.customer_email} onChange={update("customer_email")} required />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Telefono" value={form.phone} onChange={update("phone")} />
                <Field label="Paese" value={form.country} onChange={update("country")} />
              </div>
              <Field label="Nome dell'allevamento" value={form.aviary_name} onChange={update("aviary_name")} />
              <div>
                <label className="eyebrow text-muted-foreground" htmlFor="order-message">
                  Messaggio
                </label>
                <textarea
                  id="order-message"
                  rows={4}
                  value={form.message}
                  onChange={update("message")}
                  className="mt-2 w-full rounded-xl border border-deep/15 bg-ivory/50 px-3.5 py-3 text-[14px] text-deep outline-none transition focus:border-forest focus:ring-2 focus:ring-forest/15"
                  placeholder="Specie allevate, quantità interessata, domande…"
                />
              </div>
              <label className="flex items-start gap-3 text-[12px] leading-relaxed text-muted-foreground">
                <input
                  type="checkbox"
                  checked={form.privacy_consent}
                  onChange={update("privacy_consent")}
                  className="mt-0.5 h-4 w-4 rounded border-deep/30 accent-forest"
                  required
                />
                <span>
                  Ho letto l'
                  <Link to="/privacy" className="text-forest underline underline-offset-2">
                    informativa privacy
                  </Link>{" "}
                  e acconsento al trattamento dei dati per essere ricontattato. *
                </span>
              </label>
              <label className="flex items-start gap-3 text-[12px] leading-relaxed text-muted-foreground">
                <input
                  type="checkbox"
                  checked={form.newsletter_consent}
                  onChange={update("newsletter_consent")}
                  className="mt-0.5 h-4 w-4 rounded border-deep/30 accent-forest"
                />
                <span>Desidero ricevere aggiornamenti su disponibilità e nuovi prodotti.</span>
              </label>
            </div>

            {error && (
              <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[13px] text-red-700">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={sending || items.length === 0}
              className="mt-6 w-full rounded-full bg-terracotta px-6 py-3.5 text-[12px] font-medium uppercase tracking-[0.14em] text-white transition hover:bg-terracotta/90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {sending ? "Invio in corso…" : "Invia richiesta"}
            </button>
            <p className="mt-3 text-center text-[11px] text-muted-foreground">
              Nessun pagamento richiesto: ti risponderemo con un preventivo.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, value, onChange, type = "text", required = false }) {
  return (
    <div>
      <label className="eyebrow text-muted-foreground">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-2 w-full rounded-xl border border-deep/15 bg-ivory/50 px-3.5 py-2.5 text-[14px] text-deep outline-none transition focus:border-forest focus:ring-2 focus:ring-forest/15"
      />
    </div>
  );
}