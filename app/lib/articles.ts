import { weeklySpecials } from "@/app/lib/weekly-specials";

export type ArticleCategory =
  | "Weekly specials"
  | "Price comparisons"
  | "Saving tips";

export type ArticleRecord = {
  slug: string;
  title: string;
  seoTitle?: string;
  shortTitle: string;
  description: string;
  summary: string;
  category: ArticleCategory;
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  featured?: boolean;
  related: string[];
};

export const articles: ArticleRecord[] = [
  {
    slug: "weekly-specials",
    title: `Coles, Woolworths & Aldi Specials This Week: ${weeklySpecials.edition.label}`,
    seoTitle: `Coles, Woolworths & Aldi Specials: ${weeklySpecials.edition.label}`,
    shortTitle: "Best grocery specials this week",
    description:
      "A practical shortlist of current Coles and Woolworths grocery specials, an honest Aldi update and selected liquor price checks from Tallo data.",
    summary:
      "A reviewed shortlist from Tallo’s latest catalogue refresh, with clear dates, source links and no made-up Aldi offers.",
    category: "Weekly specials",
    publishedAt: weeklySpecials.edition.publishedAt,
    updatedAt: weeklySpecials.edition.updatedAt,
    readingTime: "7 min read",
    featured: true,
    related: [
      "how-to-save-money-groceries",
      "aldi-vs-woolworths-vs-coles",
      "cheapest-supermarket-australia",
    ],
  },
  {
    slug: "aldi-vs-woolworths-vs-coles",
    title:
      "Aldi vs Woolworths vs Coles: Which Is Actually Cheaper in Australia?",
    seoTitle: "Is Aldi Cheaper Than Woolworths or Coles?",
    shortTitle: "Is Aldi actually cheaper?",
    description:
      "An honest guide to comparing Aldi, Woolworths and Coles, including private labels, pack sizes, specials and why your own basket matters most.",
    summary:
      "Why supermarket price comparisons are harder than a headline winner, and how to compare a real household basket fairly.",
    category: "Price comparisons",
    publishedAt: "2026-07-27",
    updatedAt: "2026-07-27",
    readingTime: "9 min read",
    related: [
      "cheapest-supermarket-australia",
      "weekly-specials",
      "how-to-save-money-groceries",
    ],
  },
  {
    slug: "cheapest-supermarket-australia",
    title: "What Is the Cheapest Supermarket in Australia?",
    shortTitle: "The cheapest supermarket in Australia",
    description:
      "There is no universal cheapest supermarket. Learn how basket mix, specials, pack sizes and split shopping change the real answer.",
    summary:
      "A practical way to find the cheapest store for the shop you are actually buying, not an imaginary average basket.",
    category: "Price comparisons",
    publishedAt: "2026-07-27",
    updatedAt: "2026-07-27",
    readingTime: "8 min read",
    related: [
      "aldi-vs-woolworths-vs-coles",
      "weekly-specials",
      "how-to-save-money-groceries",
    ],
  },
  {
    slug: "how-to-save-money-groceries",
    title: "How to Save Money on Groceries in Australia: 12 Useful Ideas",
    seoTitle: "How to Save Money on Groceries in Australia",
    shortTitle: "How to save money on groceries",
    description:
      "Twelve practical ways Australian households can reduce grocery costs using a plan, unit pricing, weekly specials and smarter store comparisons.",
    summary:
      "Twelve realistic habits that make a grocery budget easier to control without relying on coupons or complicated spreadsheets.",
    category: "Saving tips",
    publishedAt: "2026-07-27",
    updatedAt: "2026-07-27",
    readingTime: "10 min read",
    related: [
      "weekly-specials",
      "cheapest-supermarket-australia",
      "aldi-vs-woolworths-vs-coles",
    ],
  },
];

export function getArticle(slug: string): ArticleRecord | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getRelatedArticles(article: ArticleRecord): ArticleRecord[] {
  return article.related
    .map((slug) => getArticle(slug))
    .filter((related): related is ArticleRecord => related !== undefined);
}
