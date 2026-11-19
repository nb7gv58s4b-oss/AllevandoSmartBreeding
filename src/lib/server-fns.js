import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const listProducts = createServerFn({ method: "GET" }).handler(async ({ context }) => {
  const base44 = context.getBase44();
  const page = await base44.entities.Product.filter(
    { active: true },
    { sort: "sort_order", limit: 50 },
  );
  return page.items ?? [];
});

export const getProductBySlug = createServerFn({ method: "GET" })
  .validator((input) => z.object({ slug: z.string().min(1).max(140) }).parse(input))
  .handler(async ({ data, context }) => {
    const base44 = context.getBase44();
    const page = await base44.entities.Product.filter({ slug: data.slug, active: true }, { limit: 1 });
    return page.items?.[0] ?? null;
  });

export const getSiteContent = createServerFn({ method: "GET" }).handler(async ({ context }) => {
  const base44 = context.getBase44();
  const page = await base44.entities.SiteContent.list({ limit: 100 });
  const map = {};
  for (const record of page.items ?? []) {
    if (record.key) map[record.key] = record.value ?? "";
  }
  return map;
});

const contactSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(180),
  subject: z.string().max(160).optional().default(""),
  message: z.string().min(10).max(4000),
  privacy_consent: z.boolean().refine((value) => value === true, {
    message: "Il consenso privacy è obbligatorio.",
  }),
});

export const submitContact = createServerFn({ method: "POST" })
  .validator((input) => contactSchema.parse(input))
  .handler(async ({ data, context }) => {
    const base44 = context.getBase44();
    await base44.entities.ContactMessage.create({
      name: data.name,
      email: data.email,
      subject: data.subject || "Richiesta dal sito",
      message: data.message,
      privacy_consent: true,
      status: "nuovo",
    });
    return { ok: true };
  });

const orderSchema = z.object({
  customer_name: z.string().min(2).max(120),
  customer_email: z.string().email().max(180),
  phone: z.string().max(40).optional().default(""),
  aviary_name: z.string().max(140).optional().default(""),
  country: z.string().max(80).optional().default(""),
  message: z.string().max(2000).optional().default(""),
  reference: z.string().max(40),
  privacy_consent: z.boolean().refine((value) => value === true, {
    message: "Il consenso privacy è obbligatorio.",
  }),
  newsletter_consent: z.boolean().optional().default(false),
  items: z
    .array(
      z.object({
        name: z.string().min(1).max(160),
        unit: z.string().max(80).optional().default(""),
        quantity: z.number().int().min(1).max(999),
      }),
    )
    .min(1)
    .max(20),
});

export const submitOrderRequest = createServerFn({ method: "POST" })
  .validator((input) => orderSchema.parse(input))
  .handler(async ({ data, context }) => {
    const base44 = context.getBase44();
    const record = await base44.entities.OrderRequest.create({
      reference: data.reference,
      customer_name: data.customer_name,
      customer_email: data.customer_email,
      phone: data.phone,
      aviary_name: data.aviary_name,
      country: data.country,
      message: data.message,
      items: data.items,
      privacy_consent: true,
      newsletter_consent: data.newsletter_consent,
      status: "nuova",
    });
    return { ok: true, id: record.id, reference: data.reference };
  });