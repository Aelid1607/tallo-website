import Link from "next/link";
import { InternalPage, PageCta } from "@/app/components/InternalPage";
import { JsonLd } from "@/app/components/JsonLd";
import { Phone } from "@/app/components/Phone";
import { StoreBadges } from "@/app/components/MarketingChrome";
import {
  getRelatedFeatures,
  type FeatureRecord,
} from "@/app/lib/features";
import { getArticle } from "@/app/lib/articles";
import { SITE_URL } from "@/app/lib/site";

export function FeatureDetailPage({ feature }: { feature: FeatureRecord }) {
  const featureUrl = `${SITE_URL}/features/${feature.slug}`;
  const isMyShop = feature.slug === "myshop";
  const isMealPlanner = feature.slug === "meal-planner";
  const relatedFeatures = getRelatedFeatures(feature);
  const relatedArticles = feature.relatedArticles
    .map((slug) => getArticle(slug))
    .filter((article) => article !== undefined);
  const applicationSchema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: `Tallo | ${feature.name}`,
    url: featureUrl,
    description: feature.description,
    operatingSystem: "iOS, Android",
    applicationCategory: "ShoppingApplication",
    featureList: feature.steps.map((step) => step.title),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Features",
        item: `${SITE_URL}/features`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: feature.name,
        item: featureUrl,
      },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: feature.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <InternalPage>
      <JsonLd data={applicationSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <div className={`feature-detail-page feature-detail-${feature.slug}`}>
        <section className={`feature-deep-hero feature-deep-theme-${feature.theme}`}>
          <div className="page-shell feature-deep-hero-grid">
            <div className="feature-deep-hero-copy">
              <nav className="feature-breadcrumbs" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span aria-hidden="true">/</span>
                <Link href="/features">Features</Link>
                <span aria-hidden="true">/</span>
                <span aria-current="page">{feature.navLabel}</span>
              </nav>
              <span className="page-eyebrow">{feature.name}</span>
              <h1>
                {feature.titleLead} <em>{feature.titleEmphasis}</em>
              </h1>
              <p>{feature.description}</p>
              <StoreBadges
                height={48}
                campaign={`feature_${feature.slug.replaceAll("-", "_")}`}
              />
            </div>
            <div className="feature-deep-hero-visual">
              <div className="feature-deep-orbit feature-deep-orbit-one" />
              <div className="feature-deep-orbit feature-deep-orbit-two" />
              <Phone
                src={feature.heroImage}
                alt={feature.heroAlt}
                size="regular"
                priority
              />
            </div>
          </div>
        </section>

        <section className="feature-facts" aria-label={`${feature.name} facts`}>
          <div className="page-shell feature-facts-grid">
            {feature.facts.map((fact) => (
              <div key={fact.label}>
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="feature-how-section">
          <div className="page-shell">
            <div className="feature-intro">
              <span className="page-eyebrow">How it works</span>
              <h2>
                {isMyShop
                  ? "Build the list once. My Shop turns it into a clear plan for the aisle."
                  : isMealPlanner
                    ? "Choose a recipe, check the ingredients, then shape the week ahead."
                  : feature.intro}
              </h2>
            </div>
            <div className="feature-step-grid">
              {feature.steps.map((step) => (
                <article key={step.number}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="feature-walkthrough-section">
          {isMyShop ? (
            <div className="page-shell feature-walkthrough-heading">
              <span className="page-eyebrow">Inside My Shop</span>
              <h2>Compare the options before you pick a store.</h2>
            </div>
          ) : isMealPlanner ? (
            <div className="page-shell feature-walkthrough-heading">
              <span className="page-eyebrow">Recipes that connect</span>
              <h2>Move from inspiration to a priced recipe you can actually shop.</h2>
            </div>
          ) : null}
          <div className="page-shell feature-walkthrough-list">
            {feature.showcases.map((showcase, index) => (
              <article
                className={`feature-walkthrough feature-walkthrough-${index % 2 === 0 ? "left" : "right"}`}
                key={showcase.title}
              >
                <div className="feature-walkthrough-visual">
                  <Phone
                    src={showcase.image}
                    alt={showcase.alt}
                    size="regular"
                  />
                </div>
                <div className="feature-walkthrough-copy">
                  <span className="page-eyebrow">{showcase.eyebrow}</span>
                  <h2>{showcase.title}</h2>
                  <p>{showcase.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="feature-honesty-section">
          <div className="page-shell feature-honesty-grid">
            <div>
              <span className="page-eyebrow">Good to know</span>
              <h2>{feature.limitationsTitle}</h2>
            </div>
            <ul>
              {feature.limitations.map((limitation) => (
                <li key={limitation}>{limitation}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="feature-faq-section">
          <div className="page-shell feature-faq-grid">
            <div className="feature-faq-intro">
              <span className="page-eyebrow">Questions</span>
              <h2>Clear answers.</h2>
            </div>
            <div className="feature-faq-list">
              {feature.faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="feature-related-section">
          <div className="page-shell">
            <div className="feature-related-heading">
              <span className="page-eyebrow">Explore Tallo</span>
              <h2>
                {isMealPlanner
                  ? "Keep meals and shopping connected."
                  : "Keep the plan connected."}
              </h2>
            </div>
            <div className="feature-related-grid">
              {relatedFeatures.map((related) => (
                <Link
                  className={`feature-related-card feature-related-card-${related.theme}`}
                  href={`/features/${related.slug}`}
                  key={related.slug}
                >
                  <span>{related.name}</span>
                  <strong>{related.titleLead}</strong>
                  <span aria-hidden="true">→</span>
                </Link>
              ))}
              {relatedArticles.map((article) => (
                <Link
                  className="feature-related-card feature-related-card-article"
                  href={`/blog/${article.slug}`}
                  key={article.slug}
                >
                  <span>Tallo guide</span>
                  <strong>{article.shortTitle}</strong>
                  <span aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <PageCta
          title={`Try ${feature.name.toLowerCase()} in Tallo.`}
          description="Tallo is available on iOS and Android."
          campaign={`feature_${feature.slug.replaceAll("-", "_")}_footer`}
        />
      </div>
    </InternalPage>
  );
}
