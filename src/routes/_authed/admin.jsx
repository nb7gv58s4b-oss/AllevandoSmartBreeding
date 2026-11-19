import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { Boxes, FileText, LayoutDashboard, LogOut, Mail, Settings2 } from "lucide-react";
import { useAuth } from "@/lib/AuthContext";

const NAV = [
  { label: "Panoramica", to: "/admin", icon: LayoutDashboard, exact: true },
  { label: "Prodotti", to: "/admin/prodotti", icon: Boxes },
  { label: "Richieste", to: "/admin/richieste", icon: FileText },
  { label: "Messaggi", to: "/admin/contatti", icon: Mail },
  { label: "Contenuti", to: "/admin/contenuti", icon: Settings2 },
];

export const Route = createFileRoute("/_authed/admin")({
  component: AdminLayout,
});

function AdminLayout() {
  const { user, isLoadingAuth, logout } = useAuth();
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  if (isLoadingAuth) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-ivory text-sm text-muted-foreground">
        Caricamento…
      </div>
    );
  }

  if (user?.role !== "admin") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-ivory px-6">
        <div className="card-sheet max-w-md p-8 text-center">
          <h1 className="font-heading text-2xl font-medium text-deep">Area riservata</h1>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Questo spazio è accessibile solo agli amministratori dell'allevamento. Se hai bisogno
            di accesso, contatta il titolare dell'account.
          </p>
          <div className="mt-6 flex flex-col gap-2">
            <Link
              to="/"
              className="rounded-full bg-forest px-5 py-3 text-[12px] font-medium uppercase tracking-[0.14em] text-ivory"
            >
              Torna al sito
            </Link>
            <button
              type="button"
              onClick={() => logout()}
              className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground hover:text-forest"
            >
              Esci
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ivory">
      <header className="border-b border-deep/10 bg-deep text-ivory">
        <div className="wrap flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-body text-[12px] font-semibold uppercase tracking-[0.2em]">
              ALLEVANDO<span className="align-super text-[0.65em]">™</span>
            </span>
            <span className="hidden text-[11px] uppercase tracking-[0.16em] text-ivory/50 sm:inline">
              Area amministrativa
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-[11px] uppercase tracking-[0.14em] text-ivory/70 hover:text-ivory">
              Vai al sito
            </Link>
            <button
              type="button"
              onClick={() => logout()}
              className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] text-ivory/70 hover:text-ivory"
            >
              <LogOut className="h-3.5 w-3.5" />
              Esci
            </button>
          </div>
        </div>
      </header>

      <div className="wrap grid gap-8 py-8 lg:grid-cols-[220px_1fr] lg:py-10">
        <nav className="flex gap-1 overflow-x-auto lg:flex-col" aria-label="Area amministrativa">
          {NAV.map((item) => {
            const active = item.exact ? pathname === item.to : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`inline-flex shrink-0 items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-[13px] transition ${
                  active ? "bg-deep text-ivory" : "text-deep/70 hover:bg-deep/5"
                }`}
              >
                <item.icon className="h-4 w-4" strokeWidth={1.6} />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="min-w-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
}