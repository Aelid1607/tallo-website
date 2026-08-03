import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { InternalPage, PageCta } from "@/app/components/InternalPage";
import { JsonLd } from "@/app/components/JsonLd";
import { StoreBadges } from "@/app/components/MarketingChrome";
import {
  createPageMetadata,
  FACEBOOK_URL,
  SITE_URL,
} from "@/app/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Press and Media",
  description:
    "Copy-ready Tallo descriptions, verified company and founder information, logos, app screenshots, store links and media contact details.",
  path: "/press",
});

const mediaAssets = [
  {
    title: "Primary logo (light background)",
    description: "SVG · use on white or off-white",
    preview: "/tallo-logo-light.svg",
    download: "/tallo-logo-light.svg",
    dark: false,
  },
  {
    title: "Primary logo (dark background)",
    description: "SVG · use on black or dark blue",
    preview: "/tallo-logo-dark.svg",
    download: "/tallo-logo-dark.svg",
    dark: true,
  },
  {
    title: "Tallo app icon",
    description: "SVG · electric-blue app mark",
    preview: "/tallo-icon-blue.svg",
    download: "/tallo-icon-blue.svg",
    dark: false,
  },
  {
    title: "Social preview",
    description: "PNG · 1200 × 630",
    preview: "/og.png",
    download: "/og.png",
    dark: false,
  },
];

const screenshotAssets = [
  {
    title: "Grocery price comparison",
    src: "/screenshots/iphone17/IMG_1586.PNG",
    width: 1206,
    height: 2622,
  },
  {
    title: "My Shop and store totals",
    src: "/screenshots/iphone17/IMG_1585.PNG",
    width: 1206,
    height: 2622,
  },
  {
    title: "Multi-shop",
    src: "/screenshots/iphone17/IMG_1586.PNG",
    width: 1320,
    height: 2700,
  },
  {
    title: "Meal planner",
    src: "/screenshots/meal-planner.png",
    width: 1206,
    height: 2622,
  },
  {
    title: "Nearby fuel map",
    src: "/screenshots/fuel-map.png",
    width: 1206,
    height: 2622,
  },
];

export default function PressPage() {
  const pressSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Tallo Press and Media",
    url: `${SITE_URL}/press`,
    about: {
      "@type": "Organization",
      name: "Tallo Pty Ltd",
      legalName: "Tallo Pty Ltd",
      url: SITE_URL,
      foundingDate: "2026-07",
      founder: {
        "@type": "Person",
        name: "Brett Hevers",
        jobTitle: "Founder and Director",
      },
      sameAs: [FACEBOOK_URL],
    },
  };

  return (
    <InternalPage>
      <JsonLd data={pressSchema} />

      <section className="press-hero">
        <div className="page-shell press-hero-grid">
          <div className="press-hero-copy">
          <nav className="press-breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Press and media</span>
            </nav>
            <span className="page-eyebrow">Press and media</span>
            <h1>
              Everything needed to <em>tell the Tallo story.</em>
            </h1>
            <p>
              Verified company information, copy-ready descriptions, founder
              details, logos, screenshots and direct media contact.
            </p>
            <div className="press-hero-actions">
              <a
                className="press-primary-button"
                href="/media/tallo-media-kit.zip"
                download
              >
                Download media kit
              </a>
              <a href="mailto:info@talloapp.com.au">
                Media enquiries <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <aside className="press-founder-card">
            <div className="press-founder-mark" aria-hidden="true">
              BH
            </div>
            <span>Founder and Director</span>
            <h2>Brett Hevers</h2>
            <p>
              Founder and Director of Tallo Pty Ltd. Brett built Tallo after a
              frustrating supermarket shop and still designs and runs it today.
            </p>
            <a href="mailto:info@talloapp.com.au">info@talloapp.com.au</a>
          </aside>
        </div>
      </section>

      <section className="press-facts-section">
        <div className="page-shell press-facts-grid">
          <div>
            <strong>6</strong>
            <span>major retailers compared</span>
          </div>
          <div>
            <strong>2026</strong>
            <span>launched in Australia</span>
          </div>
          <div>
            <strong>No ads</strong>
            <span>privacy focused</span>
          </div>
          <div>
            <strong>iOS + Android</strong>
            <span>both major platforms</span>
          </div>
        </div>
      </section>

      <section className="press-copy-section">
        <div className="page-shell">
          <div className="press-section-heading">
            <span className="page-eyebrow">Copy-ready descriptions</span>
            <h2>Describe Tallo accurately.</h2>
          </div>
          <div className="press-copy-grid">
            <article>
              <span>Short description</span>
              <p>
                Tallo is an independent Australian app that compares grocery and
                liquor prices across the major stores, so shoppers can find the
                best deal and plan the cheapest weekly shop for themselves. It
                shows no ads and keeps your data on your device.
              </p>
            </article>
            <article>
              <span>Full description</span>
              <p>
                Tallo is an independent Australian shopping app, launched in July
                2026, built to give households more say over the weekly shop as
                cost-of-living pressure grows. It compares grocery prices across
                Coles, Woolworths and Aldi and liquor prices across BWS,
                Liquorland and Dan Murphy&apos;s, with displayed prices refreshed
                weekly. Shoppers can build and share lists, compare complete
                store totals, use Multi-shop to find the cheapest split, scan
                barcodes, plan meals, create or import recipes from a website or
                social link, check nearby fuel prices and track their savings
                over time. Tallo shows no ads, keeps shopping data on the device
                by default and does not sell customer data.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="press-copy-section">
        <div className="page-shell">
          <div className="press-section-heading">
            <span className="page-eyebrow">Story angles</span>
            <h2>Ways to tell the Tallo story.</h2>
          </div>
          <div className="press-angles-grid">
            <article>
              <h3>Cost of living, in the trolley</h3>
              <p>
                A practical tool for households feeling grocery pressure:
                compare real prices, see the cheaper store and plan the shop
                before leaving home.
              </p>
            </article>
            <article>
              <h3>Leverage against the duopoly</h3>
              <p>
                Tallo puts price transparency and split shopping in
                shoppers&apos; hands, so the cheapest option is theirs to find
                rather than the retailer&apos;s to set.
              </p>
            </article>
            <article>
              <h3>Privacy first by design</h3>
              <p>
                No ads, shopping data kept on the device and nothing sold. A
                shopping app that does not run on the shopper&apos;s data.
              </p>
            </article>
            <article>
              <h3>Independent and Australian</h3>
              <p>
                Built and still run by its founder, launched in Australia in
                2026, covering groceries, liquor, meal planning, recipes and
                fuel.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="press-founder-section">
        <div className="page-shell press-founder-grid">
          <div>
            <span className="page-eyebrow">Founder bio</span>
            <h2>Built from a practical problem in the aisle.</h2>
          </div>
          <div className="press-founder-copy">
            <p>
              Brett Hevers is the Founder and Director of Tallo Pty Ltd. He
              built the first version of Tallo in 2026 and still designs and runs
              the app today.
            </p>
            <p>
              The idea came from an ordinary weekly shop. A supermarket special
              looked dearer than the week before, and checking a rival meant
              loading another site on patchy in-store reception. Brett wanted to
              give shoppers a faster way to see where the best deal actually was,
              and more control over a grocery bill that keeps climbing.
            </p>
            <p>
              Tallo is deliberately independent and privacy focused: no ads,
              shopping data kept on the device by default and nothing sold. The
              aim is simple, to help households plan a cheaper shop and give them
              real leverage in a market dominated by a few big players.
            </p>
            <blockquote>
              <p>
                “I want people to feel more in control of their weekly shop,
                with useful data, thoughtful privacy and less gaslighting.”
              </p>
              <cite>Brett Hevers, Founder and Director</cite>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="press-assets-section">
        <div className="page-shell">
          <div className="press-section-heading">
            <span className="page-eyebrow">Brand assets</span>
            <h2>Use the real Tallo files.</h2>
            <p>
              Keep logos proportional and use the supplied variants for light
              or dark backgrounds. Do not recreate the comparison mark.
            </p>
          </div>
          <div className="press-asset-grid">
            {mediaAssets.map((asset) => (
              <article
                className={`press-asset-card${asset.dark ? " press-asset-card-dark" : ""}`}
                key={asset.title}
              >
                <div className="press-asset-preview">
                  <Image
                    src={asset.preview}
                    alt={asset.title}
                    width={asset.title === "Social preview" ? 360 : 210}
                    height={asset.title === "Social preview" ? 189 : 80}
                  />
                </div>
                <div>
                  <h3>{asset.title}</h3>
                  <p>{asset.description}</p>
                  <a href={asset.download} download>
                    Download <span aria-hidden="true">↓</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="press-screenshots-section">
        <div className="page-shell">
          <div className="press-section-heading">
            <span className="page-eyebrow">App screenshots</span>
            <h2>Current product views.</h2>
            <p>
              High-resolution screenshots from the real Tallo app. Download
              individual files or use the complete media kit.
            </p>
          </div>
          <div className="press-screenshot-row">
            {screenshotAssets.map((asset) => (
              <article key={asset.title}>
                <div>
                  <Image
                    src={asset.src}
                    alt={asset.title}
                    width={asset.width}
                    height={asset.height}
                    sizes="(max-width: 620px) 58vw, 220px"
                  />
                </div>
                <h3>{asset.title}</h3>
                <a href={asset.src} download>
                  Download PNG
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="press-download-section">
        <div className="page-shell press-download-panel">
          <div>
            <span className="page-eyebrow">Media kit</span>
            <h2>Logos, screenshots and verified copy in one download.</h2>
            <p>
              The kit contains current brand files, five product screenshots
              and a plain-text press-information sheet.
            </p>
          </div>
          <a href="/media/tallo-media-kit.zip" download>
            Download Tallo media kit
          </a>
        </div>
      </section>

      <section className="press-contact-section">
        <div className="page-shell press-contact-grid">
          <div>
            <span className="page-eyebrow">Media contact</span>
            <h2>Need a current fact, quote or product detail?</h2>
          </div>
          <div>
            <a href="mailto:info@talloapp.com.au">
              info@talloapp.com.au <span aria-hidden="true">→</span>
            </a>
            <p>
              For interviews, product information, screenshots or data
              methodology questions.
            </p>
            <StoreBadges height={46} campaign="press_page" />
            <p className="press-company-line">
              Tallo Pty Ltd &middot; ABN 47 699 854 692 &middot; Launched July
              2026 &middot; Australia
            </p>
            <p className="press-social-line">
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              <span>Instagram and TikTok coming soon</span>
            </p>
          </div>
        </div>
      </section>

      <PageCta
        eyebrow="Try the product"
        title="See Tallo before writing about it."
        description="Download the app on iOS or Android and explore the current product experience."
        campaign="press_page_footer"
      />
    </InternalPage>
  );
}
