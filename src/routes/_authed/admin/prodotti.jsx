import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Pencil, Plus, Trash2 } from "lucide-react";
import { base44 } from "@/api/base44Client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AVAILABILITY, CATEGORY_LABELS, formatPrice } from "@/lib/productMeta";

export const Route = createFileRoute("/_authed/admin/prodotti")({
  component: AdminProducts,
});

const EMPTY = {
  name: "",
  slug: "",
  category: "schede",
  unit: "",
  price: "",
  price_note: "",
  availability: "in_preparazione",
  short_description: "",
  description: "",
  image_url: "",
  features: "",
  sort_order: 0,
  active: true,
};

function slugify(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(EMPTY);
  const [editingId, setEditingId] = useState(null);
  const [saving, setSaving] = useState(false);

  const load = async () => {
    const page = await base44.entities.Product.list({ sort: "sort_order", limit: 100 });
    setProducts(page.items ?? []);
  };

  useEffect(() => {
    load();
  }, []);

  const openNew = () => {
    setForm(EMPTY);
    setEditingId(null);
    setOpen(true);
  };

  const openEdit = (product) => {
    setForm({
      ...EMPTY,
      ...product,
      price: product.price ?? "",
      features: (product.features || []).join("\n"),
    });
    setEditingId(product.id);
    setOpen(true);
  };

  const save = async (event) => {
    event.preventDefault();
    setSaving(true);
    const payload = {
      name: form.name,
      slug: form.slug || slugify(form.name),
      category: form.category,
      unit: form.unit,
      price: form.price === "" ? null : Number(form.price),
      price_note: form.price_note,
      availability: form.availability,
      short_description: form.short_description,
      description: form.description,
      image_url: form.image_url,
      features: form.features
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean),
      sort_order: Number(form.sort_order) || 0,
      active: form.active,
    };
    if (editingId) await base44.entities.Product.update(editingId, payload);
    else await base44.entities.Product.create(payload);
    setSaving(false);
    setOpen(false);
    await load();
  };

  const remove = async (product) => {
    if (!window.confirm(`Eliminare “${product.name}”?`)) return;
    await base44.entities.Product.delete(product.id);
    await load();
  };

  const set = (field) => (event) => {
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-heading text-3xl font-medium text-deep">Prodotti</h1>
          <p className="mt-1.5 text-[13px] text-muted-foreground">
            Gestisci formati, prezzi, disponibilità e immagini del catalogo.
          </p>
        </div>
        <button
          type="button"
          onClick={openNew}
          className="inline-flex items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.14em] text-ivory"
        >
          <Plus className="h-4 w-4" />
          Nuovo prodotto
        </button>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-deep/10 bg-white">
        <table className="w-full border-collapse text-left text-[13px]">
          <thead className="bg-ivory text-[10px] uppercase tracking-[0.12em] text-deep/60">
            <tr>
              <th className="px-4 py-3 font-medium">Prodotto</th>
              <th className="px-4 py-3 font-medium">Categoria</th>
              <th className="px-4 py-3 font-medium">Prezzo</th>
              <th className="px-4 py-3 font-medium">Stato</th>
              <th className="px-4 py-3 font-medium">Attivo</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-deep/10">
            {products.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-muted-foreground">
                  Nessun prodotto. Creane uno per iniziare.
                </td>
              </tr>
            )}
            {products.map((product) => (
              <tr key={product.id}>
                <td className="px-4 py-3">
                  <p className="font-medium text-deep">{product.name}</p>
                  <p className="text-[11px] text-muted-foreground">/{product.slug}</p>
                </td>
                <td className="px-4 py-3 text-deep/70">
                  {CATEGORY_LABELS[product.category] || product.category}
                </td>
                <td className="px-4 py-3 text-deep/70">{formatPrice(product.price)}</td>
                <td className="px-4 py-3 text-deep/70">
                  {(AVAILABILITY[product.availability] || AVAILABILITY.in_preparazione).label}
                </td>
                <td className="px-4 py-3 text-deep/70">{product.active ? "Sì" : "No"}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => openEdit(product)}
                      aria-label="Modifica"
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-deep/15 text-deep hover:bg-deep/5"
                    >
                      <Pencil className="h-3.5 w-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => remove(product)}
                      aria-label="Elimina"
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-deep/15 text-deep hover:bg-red-50 hover:text-red-600"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto bg-ivory sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl font-medium text-deep">
              {editingId ? "Modifica prodotto" : "Nuovo prodotto"}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={save} className="mt-2 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Nome" value={form.name} onChange={set("name")} required />
              <Field label="Slug (URL)" value={form.slug} onChange={set("slug")} placeholder="auto" />
              <SelectField
                label="Categoria"
                value={form.category}
                onChange={set("category")}
                options={Object.entries(CATEGORY_LABELS)}
              />
              <Field label="Unità / formato" value={form.unit} onChange={set("unit")} />
              <Field label="Prezzo (€)" type="number" value={form.price} onChange={set("price")} />
              <Field label="Nota prezzo" value={form.price_note} onChange={set("price_note")} />
              <SelectField
                label="Disponibilità"
                value={form.availability}
                onChange={set("availability")}
                options={Object.entries(AVAILABILITY).map(([key, value]) => [key, value.label])}
              />
              <Field
                label="Ordine di visualizzazione"
                type="number"
                value={form.sort_order}
                onChange={set("sort_order")}
              />
            </div>
            <Field label="Immagine (URL)" value={form.image_url} onChange={set("image_url")} />
            <AreaField
              label="Descrizione breve"
              rows={2}
              value={form.short_description}
              onChange={set("short_description")}
            />
            <AreaField
              label="Descrizione estesa"
              rows={4}
              value={form.description}
              onChange={set("description")}
            />
            <AreaField
              label="Caratteristiche (una per riga)"
              rows={4}
              value={form.features}
              onChange={set("features")}
            />
            <label className="flex items-center gap-2 text-[13px] text-deep">
              <input
                type="checkbox"
                checked={form.active}
                onChange={set("active")}
                className="h-4 w-4 accent-forest"
              />
              Visibile nel catalogo pubblico
            </label>
            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-deep/15 px-5 py-2.5 text-[12px] uppercase tracking-[0.14em] text-deep"
              >
                Annulla
              </button>
              <button
                type="submit"
                disabled={saving}
                className="rounded-full bg-forest px-5 py-2.5 text-[12px] uppercase tracking-[0.14em] text-ivory disabled:opacity-60"
              >
                {saving ? "Salvataggio…" : "Salva"}
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function Field({ label, value, onChange, type = "text", required = false, placeholder }) {
  return (
    <div>
      <label className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground">{label}</label>
      <input
        type={type}
        value={value ?? ""}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl border border-deep/15 bg-white px-3 py-2 text-[13px] text-deep outline-none focus:border-forest"
      />
    </div>
  );
}

function SelectField({ label, value, onChange, options }) {
  return (
    <div>
      <label className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground">{label}</label>
      <select
        value={value}
        onChange={onChange}
        className="mt-1.5 w-full rounded-xl border border-deep/15 bg-white px-3 py-2 text-[13px] text-deep outline-none focus:border-forest"
      >
        {options.map(([key, label]) => (
          <option key={key} value={key}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}

function AreaField({ label, value, onChange, rows = 3 }) {
  return (
    <div>
      <label className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground">{label}</label>
      <textarea
        rows={rows}
        value={value ?? ""}
        onChange={onChange}
        className="mt-1.5 w-full rounded-xl border border-deep/15 bg-white px-3 py-2 text-[13px] text-deep outline-none focus:border-forest"
      />
    </div>
  );
}