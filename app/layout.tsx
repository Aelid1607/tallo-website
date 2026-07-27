import type { Metadata } from "next";
import Script from "next/script";
import {
  GA_MEASUREMENT_ID,
  HOME_DESCRIPTION,
  HOME_TITLE,
  SITE_URL,
} from "@/app/lib/site";
import { DownloadEvents } from "@/app/components/DownloadEvents";
import "./globals.css";
import "./marketing-pages.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: "%s | Tallo",
  },
  description: HOME_DESCRIPTION,
  applicationName: "Tallo",
  category: "shopping",
  appleWebApp: {
    capable: true,
    title: "Tallo",
    statusBarStyle: "default",
  },
  itunes: {
    appId: "6783832613",
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
    <html
      lang="en-AU"
      className="h-full antialiased"
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col">
        {children}
        {process.env.NODE_ENV === "production" && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
            <DownloadEvents />
          </>
        )}
      </body>
    </html>
  );
}
