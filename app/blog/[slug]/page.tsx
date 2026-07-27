import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ArticleHeader,
  RelatedArticles,
} from "@/app/components/ArticleChrome";
import { InternalPage, PageCta } from "@/app/components/InternalPage";
import { JsonLd } from "@/app/components/JsonLd";
import {
  articles,
  getArticle,
  getRelatedArticles,
} from "@/app/lib/articles";
import {
  createArticleMetadata,
  SITE_URL,
} from "@/app/lib/site";
import {
  ArticleContent,
  weeklySpecialsFaqs,
} from "@/app/blog/[slug]/ArticleContent";

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return {};
  }

  return createArticleMetadata({
    title: article.seoTitle ?? article.title,
    description: article.description,
    path: `/blog/${article.slug}`,
    publishedAt: article.publishedAt,
    updatedAt: article.updatedAt,
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  const articleUrl = `${SITE_URL}/blog/${article.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    mainEntityOfPage: articleUrl,
    image: `${SITE_URL}/og.png`,
    author: {
      "@type": "Person",
      name: "Brett Hevers",
      jobTitle: "Founder and Director",
    },
    publisher: {
      "@type": "Organization",
      name: "Tallo Pty Ltd",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/tallo-logo.svg`,
      },
    },
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
        name: "Guides",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.shortTitle,
        item: articleUrl,
      },
    ],
  };
  const faqSchema =
    article.slug === "weekly-specials"
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: weeklySpecialsFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <InternalPage>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      {faqSchema ? <JsonLd data={faqSchema} /> : null}
      <ArticleHeader article={article} />
      <article className="article-body">
        <div className="article-prose">
          <ArticleContent slug={article.slug} />
        </div>
      </article>
      <RelatedArticles articles={getRelatedArticles(article)} />
      <PageCta
        eyebrow="Compare your own list"
        title="The cheapest shop is the one built around your basket."
        description="Use Tallo to compare prices, store totals and Multi-shop options across supported Australian retailers."
      />
    </InternalPage>
  );
}
