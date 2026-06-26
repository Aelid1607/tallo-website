import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tallo — Smarter Grocery Shopping",
  description:
    "Compare grocery prices across Coles, Woolworths, and Aldi. Know what your shop costs before you leave the house.",
  metadataBase: new URL("https://talloapp.com.au"),
  openGraph: {
    title: "Tallo — Smarter Grocery Shopping",
    description:
      "Compare grocery prices across Coles, Woolworths, and Aldi. Know what your shop costs before you leave the house.",
    url: "https://talloapp.com.au",
    siteName: "Tallo",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tallo — Smarter Grocery Shopping",
    description:
      "Compare grocery prices across Coles, Woolworths, and Aldi. Know what your shop costs before you leave the house.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
