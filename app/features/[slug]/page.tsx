import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FeatureDetailPage } from "@/app/components/FeatureDetailPage";
import { features, getFeature } from "@/app/lib/features";
import { createPageMetadata } from "@/app/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return features.map((feature) => ({ slug: feature.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const feature = getFeature(slug);

  if (!feature) {
    return {};
  }

  return createPageMetadata({
    title: feature.seoTitle,
    description: feature.description,
    path: `/features/${feature.slug}`,
  });
}

export default async function FeaturePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const feature = getFeature(slug);

  if (!feature) {
    notFound();
  }

  return <FeatureDetailPage feature={feature} />;
}
