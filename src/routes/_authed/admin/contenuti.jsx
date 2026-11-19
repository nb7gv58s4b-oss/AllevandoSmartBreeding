import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Check, Save } from "lucide-react";
import { base44 } from "@/api/base44Client";

const GROUPS = [
  { value: "brand", label: "Brand e testi" },
  { value: "contatti", label: "Contatti" },
  { value: "social", label: "Social" },
  { value: "legale", label: "Dati legali" },
];

export const Route = createFileRoute("/_authed/admin/contenuti")({
  component: AdminContent,
});

function AdminContent() {
  const [records, setRecords] = useState([]);
  const [drafts, setDrafts] = useState({});
  const [savedKey, setSavedKey] = useState("");

  const load = async () => {
    const page = await base44.entities.SiteContent.list({ limit: 100 });
    const items = page.items ?? [];
    setRecords(items);
    const initial = {};
    items.forEach((item) => {
      initial[item.key] = item.value ?? "";
    });
    setDrafts(initial);
  };

  useEffect(() => {
    load();
  }, []);

  const save = async (record) => {
    await base44.entities.SiteContent.update(record.id, { value: drafts[record.key] ?? "" });
    setSavedKey(record.key);
    setTimeout(() => setSavedKey(""), 2000);
    await load();
  };

  return (
    <div>
      <h1 className="font-heading text-3xl font-medium text-deep">Contenuti del sito</h1>
      <p className="mt-1.5 max-w-[62ch] text-[13px] leading-relaxed text-muted-foreground">
        Testi e recapiti modificabili senza toccare il codice. Le modifiche sono visibili
        immediatamente nelle pagine del sito.
      </p>

      <div className="mt-6 space-y-8">
        {GROUPS.map((group) => {
          const items = records.filter((record) => (record.group || "brand") === group.value);
          if (items.length === 0) return null;
          return (
            <section key={group.value}>
              <h2 className="text-[11px] uppercase tracking-[0.14em] text-deep/50">{group.label}</h2>
              <div className="mt-3 space-y-3">
                {items.map((record) => (
                  <div
                    key={record.id}
                    className="rounded-2xl border border-deep/10 bg-white p-4"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <label className="text-[13px] font-medium text-deep" htmlFor={record.key}>
                        {record.label || record.key}
                      </label>
                      <span className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                        {record.key}
                      </span>
                    </div>
                    {record.hint && (
                      <p className="mt-1 text-[11px] text-muted-foreground">{record.hint}</p>
                    )}
                    <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                      <input
                        id={record.key}
                        value={drafts[record.key] ?? ""}
                        onChange={(event) =>
                          setDrafts((prev) => ({ ...prev, [record.key]: event.target.value }))
                        }
                        className="w-full rounded-xl border border-deep/15 bg-ivory px-3 py-2 text-[13px] text-deep outline-none focus:border-forest"
                      />
                      <button
                        type="button"
                        onClick={() => save(record)}
                        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-forest px-4 py-2 text-[11px] uppercase tracking-[0.12em] text-ivory"
                      >
                        {savedKey === record.key ? (
                          <>
                            <Check className="h-3.5 w-3.5" /> Salvato
                          </>
                        ) : (
                          <>
                            <Save className="h-3.5 w-3.5" /> Salva
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}