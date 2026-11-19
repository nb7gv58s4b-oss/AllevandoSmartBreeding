import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { base44 } from "@/api/base44Client";

export const Route = createFileRoute("/_authed/admin/")({
  component: AdminOverview,
});

function AdminOverview() {
  const [stats, setStats] = useState({ products: 0, requests: 0, newRequests: 0, messages: 0 });
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    const load = async () => {
      const [products, requests, newRequests, messages, latest] = await Promise.all([
        base44.entities.Product.count({}),
        base44.entities.OrderRequest.count({}),
        base44.entities.OrderRequest.count({ status: "nuova" }),
        base44.entities.ContactMessage.count({}),
        base44.entities.OrderRequest.list({ sort: "-created_date", limit: 5 }),
      ]);
      setStats({ products, requests, newRequests, messages });
      setRecent(latest.items ?? []);
    };
    load();
  }, []);

  const cards = [
    { label: "Prodotti a catalogo", value: stats.products, to: "/admin/prodotti" },
    { label: "Richieste ricevute", value: stats.requests, to: "/admin/richieste" },
    { label: "Richieste da gestire", value: stats.newRequests, to: "/admin/richieste" },
    { label: "Messaggi di contatto", value: stats.messages, to: "/admin/contatti" },
  ];

  return (
    <div>
      <h1 className="font-heading text-3xl font-medium text-deep">Panoramica</h1>
      <p className="mt-1.5 text-[13px] text-muted-foreground">
        Stato del sito e attività recenti.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <Link
            key={card.label}
            to={card.to}
            className="rounded-2xl border border-deep/10 bg-white p-5 transition hover:border-forest/30"
          >
            <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              {card.label}
            </p>
            <p className="mt-3 font-heading text-4xl font-medium text-deep">{card.value}</p>
          </Link>
        ))}
      </div>

      <section className="mt-8 rounded-2xl border border-deep/10 bg-white">
        <div className="flex items-center justify-between border-b border-deep/10 px-5 py-4">
          <h2 className="text-[13px] font-medium uppercase tracking-[0.12em] text-deep">
            Ultime richieste
          </h2>
          <Link
            to="/admin/richieste"
            className="text-[11px] uppercase tracking-[0.14em] text-forest hover:underline"
          >
            Vedi tutte
          </Link>
        </div>
        {recent.length === 0 ? (
          <p className="px-5 py-8 text-center text-[13px] text-muted-foreground">
            Nessuna richiesta ricevuta finora.
          </p>
        ) : (
          <ul className="divide-y divide-deep/10">
            {recent.map((request) => (
              <li key={request.id} className="flex items-center justify-between gap-4 px-5 py-3.5">
                <div className="min-w-0">
                  <p className="truncate text-[13px] font-medium text-deep">
                    {request.customer_name}
                  </p>
                  <p className="truncate text-[11px] text-muted-foreground">
                    {request.reference} · {(request.items || []).length} formati
                  </p>
                </div>
                <span className="shrink-0 rounded-full border border-deep/15 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-deep/70">
                  {request.status?.replace("_", " ")}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}