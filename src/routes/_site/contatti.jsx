import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Mail, Instagram, Facebook, MapPin } from "lucide-react";
import PageHeader from "@/components/site/PageHeader";
import { useSiteContent } from "@/components/site/SiteContentContext";
import { submitContact } from "@/lib/server-fns";

export const Route = createFileRoute("/_site/contatti")({
  head: () => ({
    meta: [
      { title: "Contatti | ALLEVANDO Smart Breeding™" },
      {
        name: "description",
        content:
          "Contatta ALLEVANDO Smart Breeding™ per informazioni sulle schede di cova intelligenti NFC, disponibilità e ordini.",
      },
      { property: "og:title", content: "Contatti — ALLEVANDO Smart Breeding™" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { get } = useSiteContent();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    privacy_consent: false,
  });
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const update = (field) => (event) => {
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSending(true);
    try {
      await submitContact({ data: form });
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "", privacy_consent: false });
    } catch {
      setError("Non è stato possibile inviare il messaggio. Controlla i dati e riprova.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Contatti"
        title="Parliamo del tuo allevamento."
        intro="Domande sulle schede Smart Breeding, disponibilità, formati o personalizzazione del marchio: scrivici e ti risponderemo personalmente."
      />

      <section className="bg-ivory">
        <div className="wrap grid gap-10 py-14 lg:grid-cols-[1fr_0.85fr] lg:gap-16 lg:py-20">
          <form onSubmit={handleSubmit} className="rounded-2xl border border-deep/10 bg-white p-6 lg:p-8">
            <h2 className="font-heading text-2xl font-medium text-deep">Scrivici</h2>
            <div className="mt-5 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Nome *" value={form.name} onChange={update("name")} required />
                <Field label="Email *" type="email" value={form.email} onChange={update("email")} required />
              </div>
              <Field label="Oggetto" value={form.subject} onChange={update("subject")} />
              <div>
                <label className="eyebrow text-muted-foreground" htmlFor="contact-message">
                  Messaggio *
                </label>
                <textarea
                  id="contact-message"
                  rows={6}
                  required
                  value={form.message}
                  onChange={update("message")}
                  className="mt-2 w-full rounded-xl border border-deep/15 bg-ivory/50 px-3.5 py-3 text-[14px] text-deep outline-none transition focus:border-forest focus:ring-2 focus:ring-forest/15"
                  placeholder="Raccontaci il tuo allevamento e cosa ti interessa sapere…"
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
                  e acconsento al trattamento dei dati. *
                </span>
              </label>
            </div>

            {error && (
              <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[13px] text-red-700">
                {error}
              </p>
            )}
            {sent && (
              <p className="mt-4 flex items-start gap-2 rounded-xl border border-forest/25 bg-forest/5 px-4 py-3 text-[13px] text-forest">
                <Check className="mt-0.5 h-4 w-4 shrink-0" />
                Messaggio inviato. Ti risponderemo il prima possibile.
              </p>
            )}

            <button
              type="submit"
              disabled={sending}
              className="mt-6 w-full rounded-full bg-forest px-6 py-3.5 text-[12px] font-medium uppercase tracking-[0.14em] text-ivory transition hover:bg-deep disabled:opacity-60"
            >
              {sending ? "Invio in corso…" : "Invia messaggio"}
            </button>
          </form>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-deep/10 bg-white p-6">
              <p className="eyebrow text-forest">Contatti diretti</p>
              <ul className="mt-4 space-y-4 text-[14px]">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 text-terracotta" />
                  <a
                    href={`mailto:${get("contact_email", "info@allevando.it")}`}
                    className="text-deep hover:text-forest"
                  >
                    {get("contact_email", "info@allevando.it")}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-terracotta" />
                  <span className="text-deep/80">
                    {get("contact_location", "Sede operativa da definire")}
                  </span>
                </li>
              </ul>
              <div className="mt-5 flex gap-2">
                <a
                  href={get("social_instagram", "https://www.instagram.com/")}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-deep/15 text-deep transition hover:bg-deep/5"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href={get("social_facebook", "https://www.facebook.com/")}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-deep/15 text-deep transition hover:bg-deep/5"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-deep/10 bg-deep p-6 text-ivory">
              <p className="eyebrow text-ivory/55">Stato del progetto</p>
              <p className="mt-3 text-[14px] leading-relaxed text-ivory/80">
                {get(
                  "availability_note",
                  "Le prime schede Smart Breeding sono in preparazione. Scrivici per entrare nella lista di aggiornamento.",
                )}
              </p>
            </div>
          </aside>
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