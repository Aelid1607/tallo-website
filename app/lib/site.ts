import type { Metadata } from "next";

export const SITE_NAME = "Tallo";
export const SITE_URL = "https://www.talloapp.com.au";
export const HOME_TITLE =
  "Tallo | Compare Grocery Prices at Coles, Woolworths & Aldi";
export const HOME_DESCRIPTION =
  "Compare real prices across Coles, Woolworths, Aldi, BWS, Dan Murphy's and Liquorland. Build your list, scan barcodes and track your savings with Tallo.";

export const APP_STORE_URL =
  "https://apps.apple.com/au/app/id6783832613";
export const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=au.com.talloapp";
export const FACEBOOK_URL =
  "https://www.facebook.com/profile.php?id=61591547923897";
export const X_URL = "https://x.com/bhevers";
export const GA_MEASUREMENT_ID = "G-BMR0CXJSZB";
export const META_PIXEL_ID = "3578031399018441";

const SOCIAL_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "Tallo grocery price comparison app",
};

type PageMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  index?: boolean;
  follow?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  index = true,
  follow = true,
}: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: path ? { canonical: path } : undefined,
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "en_AU",
      type: "website",
      images: [SOCIAL_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [SOCIAL_IMAGE],
    },
    robots: {
      index,
      follow,
      googleBot: {
        index,
        follow,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

type ArticleMetadataOptions = {
  title: string;
  description: string;
  path: string;
  publishedAt: string;
  updatedAt: string;
};

export function createArticleMetadata({
  title,
  description,
  path,
  publishedAt,
  updatedAt,
}: ArticleMetadataOptions): Metadata {
  return {
    title,
    description,
    authors: [{ name: "Brett Hevers" }],
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "en_AU",
      type: "article",
      publishedTime: publishedAt,
      modifiedTime: updatedAt,
      authors: ["Brett Hevers"],
      images: [SOCIAL_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [SOCIAL_IMAGE],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export function createStoreCampaignUrl(
  destination: "ios" | "android",
  campaign: string,
): string {
  const url = new URL(
    destination === "ios" ? APP_STORE_URL : GOOGLE_PLAY_URL,
  );
  url.searchParams.set("utm_source", "tallo_website");
  url.searchParams.set("utm_medium", "referral");
  url.searchParams.set("utm_campaign", campaign);
  return url.toString();
}
