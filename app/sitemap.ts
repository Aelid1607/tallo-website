import type { MetadataRoute } from "next";
import { articles } from "@/app/lib/articles";
import { features } from "@/app/lib/features";
import { SITE_URL } from "@/app/lib/site";

const lastModified = new Date("2026-07-27");

export default function sitemap(): MetadataRoute.Sitemap {
  const corePages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/features`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(
        Math.max(...articles.map((article) => Date.parse(article.updatedAt))),
      ),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/press`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/faq`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/delete-account`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${SITE_URL}/blog/${article.slug}`,
    lastModified: new Date(article.updatedAt),
    changeFrequency:
      article.slug === "weekly-specials" ? "weekly" : "monthly",
    priority: article.slug === "weekly-specials" ? 0.9 : 0.75,
  }));

  const featurePages: MetadataRoute.Sitemap = features.map((feature) => ({
    url: `${SITE_URL}/features/${feature.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...corePages, ...featurePages, ...articlePages];
}
