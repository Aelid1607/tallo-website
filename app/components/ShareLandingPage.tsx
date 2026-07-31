// Shared shell for app-share landing pages (/receive/[code], /meals/recipe/*,
// /meals/my-recipe/*). People WITH the app usually never see these (the links
// open the app directly); this page is the fallback for everyone else, so its
// job is: explain what was shared, route to the visitor's store, and offer the
// open-in-app and code fallbacks.
import Image from "next/image";
import Link from "next/link";
import { ShareLandingActions } from "@/app/components/ShareLandingActions";

export function ShareLandingPage({
  headline,
  description,
  appPath,
  code,
  icon,
}: {
  headline: string;
  description: string;
  appPath: string;
  code?: string;
  icon: "list" | "recipe";
}) {
  return (
    <>
      <header style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center">
          <Link href="/" className="transition-opacity hover:opacity-70">
            <Image src="/tallo-logo-tagline.svg" alt="Tallo" width={140} height={42} />
          </Link>
        </div>
      </header>

      <main className="flex items-center justify-center min-h-[80vh] px-6">
        <div className="max-w-md w-full text-center">
          <div
            className="mx-auto mb-8 flex items-center justify-center"
            style={{ width: 72, height: 72, borderRadius: 20, background: "#E8F0FE" }}
          >
            {icon === "list" ? (
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
            ) : (
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3c-3.5 0-6 2.5-6 6 0 1 .2 1.9.6 2.7L4 21l9.3-2.6c.9.4 1.8.6 2.7.6" />
                <circle cx="12" cy="9" r="2" />
                <path d="M20 8v13" />
                <path d="M20 8c0-2.8-1.3-5-3-5v9c0 .6.4 1 1 1h2z" />
              </svg>
            )}
          </div>

          <h1
            className="text-3xl font-bold mb-4"
            style={{ letterSpacing: "-0.03em", color: "var(--black)" }}
          >
            {headline}
          </h1>
          <p className="text-lg mb-10" style={{ color: "var(--muted)", lineHeight: 1.6 }}>
            {description}
          </p>

          <ShareLandingActions appPath={appPath} code={code} />
        </div>
      </main>

      <footer className="py-10 px-6" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="transition-opacity hover:opacity-70">
            <Image src="/tallo-logo-tagline.svg" alt="Tallo" width={140} height={42} />
          </Link>
          <div className="flex items-center gap-6 text-sm" style={{ color: "var(--muted)" }}>
            <Link href="/privacy" style={{ color: "inherit" }}>Privacy Policy</Link>
            <Link href="/terms" style={{ color: "inherit" }}>Terms &amp; Conditions</Link>
            <span>© {new Date().getFullYear()} Tallo. Australia.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
