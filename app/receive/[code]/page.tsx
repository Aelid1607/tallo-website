import type { Metadata } from "next";
import { ShareLandingPage } from "@/app/components/ShareLandingPage";
import { createPageMetadata } from "@/app/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Open in Tallo",
  description: "Import this shared shopping list and see live prices across Coles, Woolworths and Aldi.",
  index: false,
  follow: false,
});

export default async function ReceivePage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  const safeCode = /^[A-Za-z0-9]{6}$/.test(code) ? code.toUpperCase() : undefined;

  return (
    <ShareLandingPage
      icon="list"
      headline="Someone shared a shopping list with you."
      description="Get Tallo to import the list and see live prices across Coles, Woolworths and Aldi. Free on iPhone and Android."
      appPath={`receive/${safeCode ?? ""}`}
      code={safeCode}
    />
  );
}
