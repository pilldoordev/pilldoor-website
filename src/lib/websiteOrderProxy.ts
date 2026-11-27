import { OTC_MEDICINES } from "@/data/otcMedicines";

export interface ResolvedWebsiteOrderItem {
  product_id: string;
  medication_name: string;
  pack_size: string;
  quantity: number;
  unit_price: number;
}

export function getPharmaBackendBaseUrl(): string {
  const configured = (process.env.PHARMA_BACKEND_URL ?? "").trim().replace(/\/$/, "");
  if (configured) return configured;
  if (process.env.NODE_ENV === "development") return "http://localhost:8000";
  return "";
}

export function buildPharmaBackendHeaders(): Record<string, string> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  const apiKey = (process.env.WEBSITE_ORDER_API_KEY ?? "").trim();
  if (apiKey) {
    headers["X-Website-Api-Key"] = apiKey;
  }
  return headers;
}

export function resolveCatalogItems(
  rawItems: unknown
): { items: ResolvedWebsiteOrderItem[]; error?: string } {
  if (!Array.isArray(rawItems) || rawItems.length === 0) {
    return { items: [], error: "Your cart is empty. Add at least one OTC item before booking." };
  }

  const catalogMap = new Map(OTC_MEDICINES.map((item) => [item.id, item]));
  const resolved: ResolvedWebsiteOrderItem[] = [];

  for (const entry of rawItems) {
    if (!entry || typeof entry !== "object") {
      return { items: [], error: "One or more cart items are invalid." };
    }
    const raw = entry as { product_id?: unknown; quantity?: unknown };
    const productId = typeof raw.product_id === "string" ? raw.product_id : "";
    const qty = Number(raw.quantity ?? 0);
    const product = catalogMap.get(productId);

    if (!product || !Number.isInteger(qty) || qty < 1 || qty > 99) {
      return {
        items: [],
        error: "One or more cart items are invalid. Please refresh and try again.",
      };
    }

    resolved.push({
      product_id: product.id,
      medication_name: product.name,
      pack_size: product.packSize,
      quantity: qty,
      unit_price: product.price,
    });
  }

  return { items: resolved };
}
