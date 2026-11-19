import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Archive, Mail, Trash2 } from "lucide-react";
import { base44 } from "@/api/base44Client";

export const Route = createFileRoute("/_authed/admin/contatti")({
  component: AdminMessages,
});

function AdminMessages() {
  const [messages, setMessages] = useState([]);

  const load = async () => {
    const page = await base44.entities.ContactMessage.list({ sort: "-created_date", limit: 100 });
    setMessages(page.items ?? []);
  };

  useEffect(() => {
    load();
  }, []);

  const markRead = async (message) => {
    await base44.entities.ContactMessage.update(message.id, { status: "letto" });
    await load();
  };

  const archive = async (message) => {
    await base44.entities.ContactMessage.update(message.id, { status: "archiviato" });
    await load();
  };

  const remove = async (message) => {
    if (!window.confirm("Eliminare questo messaggio?")) return;
    await base44.entities.ContactMessage.delete(message.id);
    await load();
  };

  return (
    <div>
      <h1 className="font-heading text-3xl font-medium text-deep">Messaggi di contatto</h1>
      <p className="mt-1.5 text-[13px] text-muted-foreground">
        Le richieste ricevute dal modulo di contatto del sito.
      </p>

      <div className="mt-6 space-y-3">
        {messages.length === 0 && (
          <div className="rounded-2xl border border-dashed border-deep/20 bg-white p-8 text-center text-[13px] text-muted-foreground">
            Nessun messaggio ricevuto.
          </div>
        )}
        {messages.map((message) => (
          <article key={message.id} className="rounded-2xl border border-deep/10 bg-white p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[14px] font-medium text-deep">
                  {message.subject || "Richiesta dal sito"}
                </p>
                <p className="mt-0.5 text-[12px] text-muted-foreground">
                  {message.name} · {message.email} ·{" "}
                  {new Date(message.created_date).toLocaleString("it-IT", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
              <span className="rounded-full border border-deep/15 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-deep/70">
                {message.status}
              </span>
            </div>

            <p className="mt-4 whitespace-pre-line rounded-xl bg-ivory px-4 py-3 text-[13px] leading-relaxed text-deep/80">
              {message.message}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${message.email}?subject=Re: ${encodeURIComponent(message.subject || "Richiesta dal sito")}`}
                className="inline-flex items-center gap-1.5 rounded-full bg-forest px-4 py-2 text-[11px] uppercase tracking-[0.12em] text-ivory"
              >
                <Mail className="h-3.5 w-3.5" />
                Rispondi
              </a>
              {message.status === "nuovo" && (
                <button
                  type="button"
                  onClick={() => markRead(message)}
                  className="text-[11px] uppercase tracking-[0.12em] text-deep/60 hover:text-forest"
                >
                  Segna come letto
                </button>
              )}
              <button
                type="button"
                onClick={() => archive(message)}
                className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.12em] text-deep/60 hover:text-forest"
              >
                <Archive className="h-3.5 w-3.5" />
                Archivia
              </button>
              <button
                type="button"
                onClick={() => remove(message)}
                className="ml-auto inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.12em] text-deep/50 hover:text-red-600"
              >
                <Trash2 className="h-3.5 w-3.5" />
                Elimina
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}