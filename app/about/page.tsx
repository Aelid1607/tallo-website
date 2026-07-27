import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InternalPage, PageCta, PageHero } from "@/app/components/InternalPage";
import { JsonLd } from "@/app/components/JsonLd";
import {
  createPageMetadata,
  FACEBOOK_URL,
  SITE_URL,
  X_URL,
} from "@/app/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "About | Australian Grocery Shopping App",
  description:
    "Meet Brett Hevers, founder and Director of Tallo Pty Ltd, and learn how a supermarket price check grew into an Australia-wide shopping app.",
  path: "/about",
});

const values = [
  {
    number: "01",
    title: "Data you can trust",
    description:
      "Prices come from the real store catalogues and are refreshed every week, specials included. Comparisons, store totals and savings are shown plainly, so you can make the call in seconds.",
  },
  {
    number: "02",
    title: "Privacy by default",
    description:
      "Your lists, recipes and shopping history stay on your device unless you choose to back them up. Tallo shows no ads and never sells your data. It was built to help you shop, not to profile you.",
  },
  {
    number: "03",
    title: "Made for the real aisle",
    description:
      "Tallo is built for how people actually shop: one hand on the trolley, kids in tow, patchy reception, not much time. Every screen is meant to be quick and clear under those conditions.",
  },
];

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Tallo",
    url: `${SITE_URL}/about`,
    mainEntity: {
      "@type": "Organization",
      name: "Tallo Pty Ltd",
      url: SITE_URL,
      logo: `${SITE_URL}/tallo-logo.svg`,
      foundingLocation: {
        "@type": "Country",
        name: "Australia",
      },
      founder: {
        "@type": "Person",
        name: "Brett Hevers",
        jobTitle: "Director",
      },
      sameAs: [FACEBOOK_URL, X_URL],
    },
  };

  return (
    <InternalPage>
      <JsonLd data={aboutSchema} />
      <PageHero
        eyebrow="About Tallo"
        title={
          <>
            Built in Australia for the <em>weekly shop.</em>
          </>
        }
        description="Tallo was created to help make household budgets and meal planning easier by putting the information you need to make a price conscious decision in one, easy to manage place."
      />

      <section className="about-story-section">
        <div className="page-shell about-story-grid">
          <aside className="about-brand-panel" aria-label="About Tallo founder Brett Hevers">
            <div className="founder-photo">
              <Image
                src="/founder-brett.jpg"
                alt="Brett Hevers, founder of Tallo, at home with a rainbow lorikeet"
                width={1536}
                height={2048}
                priority
              />
            </div>
            <div className="founder-identity">
              <span>Founder</span>
              <h3>Brett Hevers</h3>
              <p>Director, Tallo Pty Ltd</p>
            </div>
            <div className="about-stat-grid">
              <div>
                <strong>6</strong>
                <span>major retailers compared</span>
              </div>
              <div>
                <strong>AU</strong>
                <span>available Australia-wide</span>
              </div>
              <div>
                <strong>Weekly</strong>
                <span>prices refreshed every week</span>
              </div>
            </div>
          </aside>
          <div className="about-story-copy">
            <span className="page-eyebrow">The founder story</span>
            <h2>Born in a supermarket aisle.</h2>
            <p>
              Tallo was born out of the cost-of-living pressure facing
              Australian households. I was in the Coles aisle doing the weekly
              family shop because my wife was unwell and couldn&apos;t do it. I am
              not usually the one at the shops, and I was surprised at how
              things looked, as if the base prices were higher than they had
              been the week before.
            </p>
            <p>
              As I went up the aisle I started opening the Woolworths and Aldi
              websites to compare. Some items at Coles were up to $6 cheaper
              elsewhere, so I began a list of things to buy at Woolworths and
              Aldi instead. Walking through the supermarket with two kids in
              tow, swapping between two websites that are not always easy to
              navigate, was a pain. There had to be a better way.
            </p>
            <p>
              That is where Tallo began. It started as a simple compare A with
              B, but it grew into something much larger. The core idea is still
              the same, and along the way I added liquor and fuel, and the
              ability to create your own recipes, whether that is Nan&apos;s mac
              and cheese passed down through the family or something you saw on
              your favourite recipe website or social feed. You can see the full
              picture of <Link href="/features">everything Tallo can do</Link>.
            </p>
            <p>
              My priority throughout was that Tallo had to be easy to use, built
              on trustworthy data, privacy focused and carry no ads, and I
              believe we got there. Tallo shows no ads, keeps your lists,
              recipes and shopping data on your device by default, and never
              sells your data.
            </p>
            <p>
              Tallo was first built by a small team, with the simple aim of
              helping families save a few dollars and plan where they shop and
              what they buy. I sincerely hope we have done that.
            </p>
            <blockquote className="founder-quote">
              <p>
                &ldquo;I want people to feel more in control of their weekly
                shop, with useful data, thoughtful privacy and less
                gaslighting.&rdquo;
              </p>
              <cite>Brett Hevers, Founder and Director</cite>
            </blockquote>
            <p>
              I am always happy to hear from the people who use Tallo. You can
              reach me at{" "}
              <a href="mailto:brett@talloapp.com.au">brett@talloapp.com.au</a>{" "}
              or on X at{" "}
              <a
                href="https://x.com/bhevers"
                target="_blank"
                rel="noopener noreferrer"
              >
                @bhevers
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="about-values-section">
        <div className="page-shell">
          <div className="section-heading">
            <span className="page-eyebrow">How we think</span>
            <h2>Data, privacy and ease of use.</h2>
          </div>
          <div className="about-values-grid">
            {values.map((value) => (
              <article key={value.title}>
                <span>{value.number}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        eyebrow="Try Tallo"
        title="Make the next weekly shop a little clearer."
        description="Tallo is available on the App Store and Google Play."
      />
    </InternalPage>
  );
}
