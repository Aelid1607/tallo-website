import Image from "next/image";
import Link from "next/link";
import {
  APP_STORE_URL,
  createStoreCampaignUrl,
  FACEBOOK_URL,
  GOOGLE_PLAY_URL,
} from "@/app/lib/site";

export function Arrow({ dark = false }: { dark?: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke={dark ? "#101113" : "currentColor"}
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function StoreBadges({
  height = 48,
  campaign,
}: {
  height?: number;
  campaign?: string;
}) {
  const appStoreUrl = campaign
    ? createStoreCampaignUrl("ios", campaign)
    : APP_STORE_URL;
  const googlePlayUrl = campaign
    ? createStoreCampaignUrl("android", campaign)
    : GOOGLE_PLAY_URL;

  return (
    <div className="store-badges">
      <a
        href={appStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download Tallo on the App Store"
        data-download-store="app-store"
        data-download-campaign={campaign}
      >
        <Image
          src="/badge-appstore.svg"
          alt="Download on the App Store"
          width={Math.round(height * 3)}
          height={height}
          style={{ height, width: "auto" }}
        />
      </a>
      <a
        href={googlePlayUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get Tallo on Google Play"
        data-download-store="google-play"
        data-download-campaign={campaign}
      >
        <Image
          src="/badge-googleplay.svg"
          alt="Get it on Google Play"
          width={Math.round(height * 3.375)}
          height={height}
          style={{ height, width: "auto" }}
        />
      </a>
    </div>
  );
}

export function MarketingNav() {
  return (
    <header className="site-nav">
      <div className="nav-inner">
        <Link href="/" aria-label="Tallo home">
          <Image
            src="/tallo-logo-tagline.svg"
            alt="Tallo Smarter Shopping"
            width={148}
            height={45}
            priority
          />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/features">Features</Link>
          <Link href="/features/myshop">My Shop</Link>
          <Link href="/features/meal-planner">Meal Planner</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/faq">FAQ</Link>
        </nav>
        <Link className="nav-cta" href="/download">
          Download Now <Arrow />
        </Link>
        <details className="mobile-menu">
          <summary aria-label="Open navigation menu">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </summary>
          <nav className="mobile-menu-panel" aria-label="Mobile navigation">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/features">Features</Link>
            <Link href="/features/myshop">My Shop</Link>
            <Link href="/features/meal-planner">Meal Planner</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/faq">FAQ</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function MarketingFooter() {
  return (
    <footer className="site-footer">
      <Image
        src="/tallo-logo-tagline.svg"
        alt="Tallo Smarter Shopping"
        width={144}
        height={43}
      />
      <div className="footer-links">
        <div className="footer-page-links">
          <Link href="/features">Features</Link>
          <Link href="/blog">Guides</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/about">About</Link>
          <Link href="/press">Press</Link>
          <a href="mailto:info@talloapp.com.au">Get in touch</a>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
        <div className="footer-social-links" aria-label="Tallo social media">
          <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <span title="Instagram link coming soon">Instagram (soon)</span>
          <span title="TikTok link coming soon">TikTok (soon)</span>
        </div>
      </div>
      <span>© {new Date().getFullYear()} Tallo. Australia.</span>
    </footer>
  );
}
