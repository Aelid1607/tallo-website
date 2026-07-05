import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const TESTFLIGHT_URL = "https://testflight.apple.com/join/4VfPe7z1";

export const metadata: Metadata = {
  title: "Open in Tallo",
  description: "Download Tallo to import this shared shopping list.",
};

export default function ReceivePage() {
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
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
          </div>

          <h1
            className="text-3xl font-bold mb-4"
            style={{ letterSpacing: "-0.03em", color: "var(--black)" }}
          >
            Someone shared a shopping list with you.
          </h1>
          <p className="text-lg mb-10" style={{ color: "var(--muted)", lineHeight: 1.6 }}>
            Download Tallo to import the list and see live prices across Coles, Woolworths and Aldi.
          </p>

          <a
            href={TESTFLIGHT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-4 rounded-full text-base font-semibold transition-opacity hover:opacity-85 mb-4"
            style={{ background: "var(--black)", color: "#fff" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download on TestFlight
          </a>

          <p className="text-sm" style={{ color: "var(--muted)" }}>
            iOS only right now. Android coming soon.
          </p>

          <div
            className="mt-12 pt-8"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <p className="text-sm mb-1 font-medium" style={{ color: "var(--black)" }}>Already have Tallo?</p>
            <p className="text-sm" style={{ color: "var(--muted)" }}>
              Open the link from the device where Tallo is installed and it will open automatically.
            </p>
          </div>
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
