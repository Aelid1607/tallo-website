"use client";

import { useEffect } from "react";

// Fires a GA4 event whenever an App Store or Google Play badge is clicked.
// The badges carry data-download-store ("app-store" | "google-play") and an
// optional data-download-campaign, set in MarketingChrome's StoreBadges.
export function DownloadEvents() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      const link = target?.closest<HTMLElement>("[data-download-store]");
      if (!link) return;

      const store = link.getAttribute("data-download-store");
      const campaign =
        link.getAttribute("data-download-campaign") ?? undefined;
      const eventName =
        store === "app-store" ? "app_store_click" : "google_play_click";

      const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void })
        .gtag;
      if (typeof gtag === "function") {
        gtag("event", eventName, { store, campaign });
      }
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
