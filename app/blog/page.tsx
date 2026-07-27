import type { Metadata } from "next";
import { ArticleCard } from "@/app/components/ArticleChrome";
import { InternalPage, PageCta, PageHero } from "@/app/components/InternalPage";
import { articles } from "@/app/lib/articles";
import { createPageMetadata } from "@/app/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Australian Grocery Price Guides and Saving Tips",
  description:
    "Weekly grocery specials, supermarket price comparisons and practical Australian shopping guides from Tallo.",
  path: "/blog",
});

export default function BlogPage() {
  const featured = articles.find((article) => article.featured) ?? articles[0];
  const remaining = articles.filter((article) => article.slug !== featured.slug);

  return (
    <InternalPage>
      <PageHero
        eyebrow="Tallo guides"
        title={
          <>
            Useful numbers for a <em>smarter weekly shop.</em>
          </>
        }
        description="Current specials, honest supermarket comparisons and practical ways to make an Australian grocery budget go further."
      />

      <section className="blog-index-section">
        <div className="page-shell">
          <div className="blog-index-heading">
            <span className="page-eyebrow">Start here</span>
            <h2>Fresh this week.</h2>
            <p>
              Tallo guides use verified product information and explain the
              limits of the data. Prices can change, so dated articles always
              show when their source information was checked.
            </p>
          </div>

          <ArticleCard article={featured} featured />

          <div className="blog-index-heading blog-index-heading-latest">
            <span className="page-eyebrow">More useful reading</span>
            <h2>Plan, compare and save.</h2>
          </div>
          <div className="article-grid">
            {remaining.map((article) => (
              <ArticleCard article={article} key={article.slug} />
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Take the comparison into the aisle."
        description="Tallo compares grocery and liquor prices on iOS and Android, refreshed weekly."
      />
    </InternalPage>
  );
}
