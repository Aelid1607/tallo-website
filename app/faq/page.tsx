import type { Metadata } from "next";
import { InternalPage, PageCta, PageHero } from "@/app/components/InternalPage";
import { JsonLd } from "@/app/components/JsonLd";
import { createPageMetadata, SITE_URL } from "@/app/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "FAQ | Grocery Price Comparison App Questions",
  description:
    "Answers about Tallo pricing, supported stores, weekly price updates, Multi-shop, recipes, shared lists, fuel and app availability.",
  path: "/faq",
});

const faqs = [
  {
    question: "How much does Tallo cost?",
    answer:
      "You can download Tallo and start comparing grocery and fuel prices on iOS and Android. Tallo Pro is an optional upgrade that adds more across the app.",
  },
  {
    question: "Which stores does Tallo cover?",
    answer:
      "Tallo compares groceries from Coles, Woolworths and Aldi, plus liquor from BWS, Liquorland and Dan Murphy's.",
  },
  {
    question: "How often are prices updated?",
    answer:
      "Displayed grocery and liquor prices are updated weekly and include the current weekly specials available in Tallo.",
  },
  {
    question: "Does Tallo work across Australia?",
    answer:
      "Yes. Tallo is available Australia-wide. Some prices can vary by state or location, particularly liquor prices, so the prices shown for your area are the most relevant guide.",
  },
  {
    question: "How does Multi-shop work?",
    answer:
      "Multi-shop compares the grocery items in your list across supported supermarkets and shows the cheapest way to split the shop. You can also view a total for each individual store.",
  },
  {
    question: "Can I share a shopping list?",
    answer:
      "Yes. You can share a custom or favourite list using a link. The recipient can open the link and import the list into Tallo.",
  },
  {
    question: "How does the barcode scanner work?",
    answer:
      "Yes. You can scan a barcode to find a product while you shop. If the barcode is not already recognised, Tallo can guide you through contributing it to the catalogue.",
  },
  {
    question: "What is the recipe import feature?",
    answer:
      "You can browse recipes with matched ingredient prices, add ingredients to your shop, organise a meal plan and create your own recipes. Tallo can also import recipes from supported links, including many social and video links.",
  },
  {
    question: "Does Tallo show fuel prices?",
    answer:
      "Yes. You can explore nearby fuel in a list or on a map, select a fuel type and distance, save favourite stations and open directions.",
  },
  {
    question: "Where can I download Tallo?",
    answer:
      "Tallo is available for iPhone through the Australian App Store and for Android through Google Play.",
  },
];

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url: `${SITE_URL}/faq`,
    mainEntity: faqs.map((faq) => ({
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
      <JsonLd data={faqSchema} />
      <PageHero
        eyebrow="Frequently asked questions"
        title={
          <>
            The useful answers, <em>all in one place.</em>
          </>
        }
        description="A quick guide to Tallo, the stores it compares and the tools built into the app."
      />

      <section className="faq-section">
        <div className="page-shell faq-layout">
          <div className="faq-intro">
            <span className="page-eyebrow">About the app</span>
            <h2>Good to know.</h2>
            <p>
              Still have a question? Email{" "}
              <a href="mailto:info@talloapp.com.au">
                info@talloapp.com.au
              </a>
              .
            </p>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details className="faq-item" key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Ready to plan a smarter shop?"
        description="Download Tallo and compare your next list across the major supermarkets."
      />
    </InternalPage>
  );
}
