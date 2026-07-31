import type { Metadata } from "next";
import { ShareLandingPage } from "@/app/components/ShareLandingPage";
import { createPageMetadata } from "@/app/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Open in Tallo",
  description: "View this recipe in Tallo with live ingredient prices across Coles, Woolworths and Aldi.",
  index: false,
  follow: false,
});

export default async function SeedRecipeSharePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const safeId = /^[A-Za-z0-9-]{1,64}$/.test(id) ? id : "";

  return (
    <ShareLandingPage
      icon="recipe"
      headline="Someone shared a recipe with you."
      description="Get Tallo to open the recipe and price its ingredients live across Coles, Woolworths and Aldi. Free on iPhone and Android."
      appPath={`meals/recipe/${safeId}`}
    />
  );
}
