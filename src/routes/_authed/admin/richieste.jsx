import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown, Trash2 } from "lucide-react";
import { base44 } from "@/api/base44Client";

const STATUS = [
  { value: "nuova", label: "Nuova" },
  { value: "in_lavorazione", label: "In lavorazione" },
  { value: "evasa", label: "Evasa" },
  { value: "archiviata", label: "Archiviata" },
];

export const Route = createFileRoute("/_authed/admin/richieste")({
  component: AdminRequests,
});

function formatDate(value) {
  if (!value) return "";
  return new Date(value).toLocaleString("it-IT", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function AdminRequests() {
  const [requests, setRequests] = useState([]);
  const [expanded, setExpanded] = useState(null);
  const [filter, setFilter] = useState("tutte");

  const load = async () => {
    const page = await base44.entities.OrderRequest.list({ sort: "-created_date", limit: 100 });
    setRequests(page.items ?? []);
  };

  useEffect(() => {
    load();
  }, []);

  const changeStatus = async (request, status) => {
    await base44.entities.OrderRequest.update(request.id, { status });
    await load();
  };

  const remove = async (request) => {
    if (!window.confirm(`Eliminare la richiesta ${request.reference}?`)) return;
    await base44.entities.OrderRequest.delete(request.id);
    await load();
  };

  const visible =
    filter === "tutte" ? requests : requests.filter((request) => request.status === filter);

  return (
    <div>
      <h1 className="font-heading text-3xl font-medium text-deep">Richieste di acquisto</h1>
      <p className="mt-1.5 text-[13px] text-muted-foreground">
        Le richieste inviate dal carrello del sito, con i formati selezionati.
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {[{ value: "tutte", label: "Tutte" }, ...STATUS].map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => setFilter(option.value)}
            className={`rounded-full border px-3.5 py-1.5 text-[11px] uppercase tracking-[0.12em] transition ${
              filter === option.value
                ? "border-deep bg-deep text-ivory"
                : "border-deep/15 text-deep/70 hover:bg-deep/5"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="mt-5 space-y-3">
        {visible.length === 0 && (
          <div className="rounded-2xl border border-dashed border-deep/20 bg-white p-8 text-center text-[13px] text-muted-foreground">
            Nessuna richiesta in questa vista.
          </div>
        )}
        {visible.map((request) => (
          <article key={request.id} className="rounded-2xl border border-deep/10 bg-white">
            <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
              <button
                type="button"
                onClick={() => setExpanded(expanded === request.id ? null : request.id)}
                className="flex min-w-0 flex-1 items-center gap-3 text-left"
              >
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-deep/50 transition-transform ${
                    expanded === request.id ? "rotate-180" : ""
                  }`}
                />
                <div className="min-w-0">
                  <p className="truncate text-[14px] font-medium text-deep">
                    {request.customer_name}
                    <span className="ml-2 text-[11px] font-normal uppercase tracking-[0.1em] text-muted-foreground">
                      {request.reference}
                    </span>
                  </p>
                  <p className="truncate text-[12px] text-muted-foreground">
                    {request.customer_email} · {formatDate(request.created_date)}
                  </p>
                </div>
              </button>
              <div className="flex items-center gap-2">
                <select
                  value={request.status}
                  onChange={(event) => changeStatus(request, event.target.value)}
                  className="rounded-full border border-deep/15 bg-ivory px-3 py-1.5 text-[11px] uppercase tracking-[0.1em] text-deep"
                >
                  {STATUS.map((status) => (
                    <option key={status.value} value={status.value}>
                      {status.label}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={() => remove(request)}
                  aria-label="Elimina richiesta"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-deep/15 text-deep hover:bg-red-50 hover:text-red-600"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {expanded === request.id && (
              <div className="border-t border-deep/10 px-5 py-4 text-[13px] text-deep/80">
                <ul className="space-y-1">
                  {(request.items || []).map((item, index) => (
                    <li key={index} className="flex justify-between gap-4">
                      <span>
                        {item.quantity} × {item.name}
                      </span>
                      <span className="text-muted-foreground">{item.unit}</span>
                    </li>
                  ))}
                </ul>
                <dl className="mt-4 grid gap-2 sm:grid-cols-2">
                  {request.phone && <Detail label="Telefono" value={request.phone} />}
                  {request.aviary_name && <Detail label="Allevamento" value={request.aviary_name} />}
                  {request.country && <Detail label="Paese" value={request.country} />}
                </dl>
                {request.message && (
                  <p className="mt-4 rounded-xl bg-ivory px-4 py-3 leading-relaxed">
                    {request.message}
                  </p>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}

function Detail({ label, value }) {
  return (
    <div>
      <dt className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground">{label}</dt>
      <dd className="mt-0.5">{value}</dd>
    </div>
  );
}