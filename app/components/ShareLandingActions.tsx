"use client";

// Actions block for share landing pages (/receive/[code], /meals/recipe/*,
// /meals/my-recipe/*). Detects the visitor's platform so someone without the
// app is sent to THEIR store, and gives people who already have Tallo a
// custom-scheme button that works even inside in-app browsers (Messenger,
// Instagram) where universal links are unreliable.
import Image from "next/image";
import { useSyncExternalStore } from "react";
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/app/lib/site";

type Platform = "ios" | "android" | "unknown";

const subscribeToPlatform = () => () => {};

function getBrowserPlatform(): Platform {
  const ua = navigator.userAgent;
  if (/android/i.test(ua)) return "android";
  if (/iphone|ipad|ipod/i.test(ua)) return "ios";
  return "unknown";
}

export function ShareLandingActions({
  appPath,
  code,
}: {
  /** Path inside the app, no leading slash, e.g. "receive/ABC123". */
  appPath: string;
  /** Six character share code, shown as the manual fallback for lists. */
  code?: string;
}) {
  const platform = useSyncExternalStore(
    subscribeToPlatform,
    getBrowserPlatform,
    () => "unknown",
  );

  const badge = (store: "ios" | "android") => (
    <a
      key={store}
      href={store === "ios" ? APP_STORE_URL : GOOGLE_PLAY_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={store === "ios" ? "Download Tallo on the App Store" : "Get Tallo on Google Play"}
      className="transition-opacity hover:opacity-85"
    >
      <Image
        src={store === "ios" ? "/badge-appstore.svg" : "/badge-googleplay.svg"}
        alt={store === "ios" ? "Download on the App Store" : "Get it on Google Play"}
        width={162}
        height={54}
        style={{ height: 54, width: "auto" }}
      />
    </a>
  );

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-wrap items-center justify-center gap-4">
        {platform === "ios" && badge("ios")}
        {platform === "android" && badge("android")}
        {platform === "unknown" && (
          <>
            {badge("ios")}
            {badge("android")}
          </>
        )}
      </div>

      <div
        className="mt-8 pt-8 w-full"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <p className="text-sm mb-3 font-medium" style={{ color: "var(--black)" }}>
          Already have Tallo?
        </p>
        <a
          href={`tallo://${appPath}`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-opacity hover:opacity-85"
          style={{ background: "var(--blue)", color: "#fff" }}
        >
          Open in the app
        </a>
        {code ? (
          <p className="text-sm mt-4" style={{ color: "var(--muted)" }}>
            Or open Tallo, go to Profile, Import a shared list, and enter code{" "}
            <span className="font-semibold" style={{ color: "var(--black)", letterSpacing: "0.08em" }}>{code}</span>.
          </p>
        ) : null}
      </div>
    </div>
  );
}
