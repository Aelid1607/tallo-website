import type { ReactNode } from "react";
import Link from "next/link";
import {
  Arrow,
  MarketingFooter,
  MarketingNav,
  StoreBadges,
} from "@/app/components/MarketingChrome";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-shell page-hero-content">
        <span className="page-eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        {children}
      </div>
    </section>
  );
}

type PageCtaProps = {
  eyebrow?: string;
  title: string;
  description: string;
  campaign?: string;
};

export function PageCta({
  eyebrow = "Available on iOS and Android",
  title,
  description,
  campaign,
}: PageCtaProps) {
  return (
    <section className="page-cta">
      <div className="page-shell page-cta-inner">
        <div>
          <span className="page-eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <StoreBadges height={52} campaign={campaign} />
      </div>
    </section>
  );
}

export function InternalPage({ children }: { children: ReactNode }) {
  return (
    <>
      <MarketingNav />
      <main className="internal-main">{children}</main>
      <MarketingFooter />
    </>
  );
}

export function TextLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link className="page-text-link" href={href}>
      {children} <Arrow />
    </Link>
  );
}
