import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { StoreBadges } from "@/app/components/MarketingChrome";
import { Phone } from "@/app/components/Phone";
import { createPageMetadata } from "@/app/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Download the App",
  description:
    "Download Tallo on iPhone or Android and compare grocery prices across Coles, Woolworths and Aldi.",
  path: "/download",
  index: false,
});

const benefits = [
  "Compare weekly prices and specials",
  "Find the best way to split your shop",
  "Plan meals and build your list",
];

export default function DownloadPage() {
  return (
    <div className="download-page">
      <header className="download-header">
        <Link href="/" aria-label="Tallo home">
          <Image
            src="/tallo-logo-tagline.svg"
            alt="Tallo Smarter Shopping"
            width={148}
            height={45}
            priority
          />
        </Link>
        <Link className="download-explore" href="/">
          Explore Tallo
        </Link>
      </header>

      <main className="download-main">
        <div className="download-copy">
          <span className="page-eyebrow">Available on iOS and Android</span>
          <h1>
            Your smarter shop <em>starts here.</em>
          </h1>
          <p>
            Compare major retailers, plan your list and see the cheapest way
            to shop it, all with Tallo.
          </p>
          <StoreBadges height={54} />
          <ul>
            {benefits.map((benefit) => (
              <li key={benefit}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <circle cx="10" cy="10" r="10" fill="#0877f9" />
                  <path
                    d="m5.8 10.1 2.7 2.7 5.9-6"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="download-visual" aria-hidden="true">
          <div className="download-orbit download-orbit-one" />
          <div className="download-orbit download-orbit-two" />
          <Phone
            src="/screenshots/home-weekly-winner.png"
            alt=""
            size="hero"
            priority
          />
        </div>
      </main>

      <footer className="download-footer">
        <span>© {new Date().getFullYear()} Tallo. Australia.</span>
        <div>
          <Link href="/">Home</Link>
          <Link href="/features">Features</Link>
          <Link href="/about">About</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </footer>
    </div>
  );
}
