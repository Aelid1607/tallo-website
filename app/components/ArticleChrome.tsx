import Link from "next/link";
import type { ArticleRecord } from "@/app/lib/articles";

function formatDate(value: string): string {
  return new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));
}

export function ArticleCard({
  article,
  featured = false,
}: {
  article: ArticleRecord;
  featured?: boolean;
}) {
  return (
    <article className={`article-card${featured ? " article-card-featured" : ""}`}>
      <div className="article-card-meta">
        <span>{article.category}</span>
        <span>{article.readingTime}</span>
      </div>
      <h2>
        <Link href={`/blog/${article.slug}`}>{article.shortTitle}</Link>
      </h2>
      <p>{article.summary}</p>
      <div className="article-card-footer">
        <time dateTime={article.updatedAt}>
          Updated {formatDate(article.updatedAt)}
        </time>
        <Link href={`/blog/${article.slug}`} aria-label={`Read ${article.title}`}>
          Read guide <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}

export function ArticleHeader({ article }: { article: ArticleRecord }) {
  const wasUpdated = article.updatedAt !== article.publishedAt;

  return (
    <header className="article-header">
      <div className="article-shell">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/blog">Guides</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{article.shortTitle}</span>
        </nav>
        <span className="page-eyebrow">{article.category}</span>
        <h1>{article.title}</h1>
        <p className="article-deck">{article.summary}</p>
        <div className="article-byline">
          <div className="article-author-mark" aria-hidden="true">
            BH
          </div>
          <div>
            <strong>Brett Hevers</strong>
            <span>
              Founder and Director · {article.readingTime} ·{" "}
              {wasUpdated ? "Updated" : "Published"}{" "}
              <time dateTime={article.updatedAt}>
                {formatDate(article.updatedAt)}
              </time>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export function RelatedArticles({
  articles,
}: {
  articles: ArticleRecord[];
}) {
  return (
    <section className="related-articles" aria-labelledby="related-heading">
      <div className="page-shell">
        <div className="related-heading">
          <span className="page-eyebrow">Keep reading</span>
          <h2 id="related-heading">Related guides</h2>
        </div>
        <div className="article-grid article-grid-related">
          {articles.map((article) => (
            <ArticleCard article={article} key={article.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}
