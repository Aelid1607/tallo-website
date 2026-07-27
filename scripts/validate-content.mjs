import fs from "node:fs";

const source = new URL("../content/weekly-specials.json", import.meta.url);
const data = JSON.parse(fs.readFileSync(source, "utf8"));
const datePattern = /^\d{4}-\d{2}-\d{2}$/;
const errors = [];

for (const [key, value] of Object.entries(data.edition ?? {})) {
  if (key.endsWith("At") || key === "validFrom" || key === "validTo") {
    if (!datePattern.test(value) || Number.isNaN(Date.parse(value))) {
      errors.push(`edition.${key} must use YYYY-MM-DD`);
    }
  }
}

const groups = [
  ...Object.entries(data.groceryDeals ?? {}),
  ["liquor", data.liquorDeals ?? []],
];
const seen = new Set();

for (const [group, deals] of groups) {
  if (!Array.isArray(deals)) {
    errors.push(`${group} must be an array`);
    continue;
  }

  for (const deal of deals) {
    const label = `${group}: ${deal.name ?? "unnamed deal"}`;
    if (!deal.name || !deal.size || !deal.category) {
      errors.push(`${label} is missing name, size or category`);
    }
    if (!(deal.price > 0) || !(deal.wasPrice > deal.price)) {
      errors.push(`${label} must have a positive price below its was price`);
    }
    if (typeof deal.sourceUrl !== "string" || !deal.sourceUrl.startsWith("https://")) {
      errors.push(`${label} needs an HTTPS source URL`);
    } else if (seen.has(deal.sourceUrl)) {
      errors.push(`${label} duplicates a source URL`);
    } else {
      seen.add(deal.sourceUrl);
    }
  }
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(
  `Content valid: ${seen.size} verified deals for ${data.edition.label}.`,
);
