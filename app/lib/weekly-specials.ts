import weeklySpecialsJson from "@/content/weekly-specials.json";

export type GroceryStoreKey = "coles" | "woolworths" | "aldi";

export type WeeklyDeal = {
  name: string;
  size: string;
  category: string;
  price: number;
  wasPrice: number;
  sourceUrl: string;
};

export type LiquorDeal = WeeklyDeal & {
  store: string;
};

export type WeeklySpecialsEdition = {
  edition: {
    label: string;
    publishedAt: string;
    updatedAt: string;
    dataCheckedAt: string;
    validFrom: string;
    validTo: string;
    scope: string;
  };
  groceryDeals: Record<GroceryStoreKey, WeeklyDeal[]>;
  liquorDeals: LiquorDeal[];
  notes: {
    aldi: string;
    liquor: string;
    methodology: string;
  };
};

function isIsoDate(value: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(value));
}

function assertDeal(deal: WeeklyDeal, label: string): void {
  if (!deal.name.trim() || !deal.size.trim() || !deal.category.trim()) {
    throw new Error(`${label} is missing its name, size or category.`);
  }

  if (!(deal.price > 0) || !(deal.wasPrice > deal.price)) {
    throw new Error(`${label} must have a positive price below its was price.`);
  }

  if (!deal.sourceUrl.startsWith("https://")) {
    throw new Error(`${label} must include an HTTPS source URL.`);
  }
}

function validateWeeklySpecials(
  value: WeeklySpecialsEdition,
): WeeklySpecialsEdition {
  const dates = [
    value.edition.publishedAt,
    value.edition.updatedAt,
    value.edition.dataCheckedAt,
    value.edition.validFrom,
    value.edition.validTo,
  ];

  if (!dates.every(isIsoDate)) {
    throw new Error("Weekly-specials edition dates must use YYYY-MM-DD.");
  }

  if (Date.parse(value.edition.validFrom) > Date.parse(value.edition.validTo)) {
    throw new Error("Weekly-specials validFrom must be before validTo.");
  }

  const sourceUrls = new Set<string>();
  const allDeals = [
    ...value.groceryDeals.coles.map((deal) => ({
      deal,
      label: `Coles deal “${deal.name}”`,
    })),
    ...value.groceryDeals.woolworths.map((deal) => ({
      deal,
      label: `Woolworths deal “${deal.name}”`,
    })),
    ...value.groceryDeals.aldi.map((deal) => ({
      deal,
      label: `Aldi deal “${deal.name}”`,
    })),
    ...value.liquorDeals.map((deal) => ({
      deal,
      label: `${deal.store} deal “${deal.name}”`,
    })),
  ];

  for (const { deal, label } of allDeals) {
    assertDeal(deal, label);
    if (sourceUrls.has(deal.sourceUrl)) {
      throw new Error(`${label} duplicates another source URL.`);
    }
    sourceUrls.add(deal.sourceUrl);
  }

  return value;
}

export const weeklySpecials = validateWeeklySpecials(
  weeklySpecialsJson as WeeklySpecialsEdition,
);

export function formatPrice(value: number): string {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
  }).format(value);
}

export function dealSaving(deal: WeeklyDeal): number {
  return Number((deal.wasPrice - deal.price).toFixed(2));
}

export function dealDiscount(deal: WeeklyDeal): number {
  return Math.round(((deal.wasPrice - deal.price) / deal.wasPrice) * 100);
}
