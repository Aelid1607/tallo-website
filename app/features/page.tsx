import type { Metadata } from "next";
import { InternalPage, PageCta, PageHero, TextLink } from "@/app/components/InternalPage";
import { Phone } from "@/app/components/Phone";
import { StoreRail } from "@/app/components/StoreRail";
import { createPageMetadata } from "@/app/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Grocery Shopping App Features",
  description:
    "Compare grocery and liquor prices, split your shop, plan meals, import recipes, find fuel and track savings with Tallo.",
  path: "/features",
});

const extraFeatures = [
  {
    number: "01",
    title: "Find nearby fuel",
    description:
      "View nearby prices in a list or on a map, filter by fuel type and distance, save favourites and get directions.",
    href: "/features/fuel-checker",
  },
  {
    number: "02",
    title: "Share any list",
    description:
      "Create favourites and custom lists, then send a simple link so someone else can import the list into Tallo.",
    href: "/features/myshop",
  },
  {
    number: "03",
    title: "Scan as you shop",
    description:
      "Use barcode scanning to find products quickly. If an item is missing, you can help add it to the catalogue.",
    href: "/features/barcode-scanner",
  },
  {
    number: "04",
    title: "See what you save",
    description:
      "Keep a record of completed shops and see the savings Tallo has helped you find over time.",
    href: "/features/myshop",
  },
];

export default function FeaturesPage() {
  return (
    <InternalPage>
      <PageHero
        eyebrow="Everything in one app"
        title={
          <>
            A smarter way to <em>plan, compare and shop.</em>
          </>
        }
        description="Tallo brings grocery prices, shopping lists, recipes, meal planning and nearby fuel together, so the weekly shop takes less guesswork."
      >
        <TextLink href="/download">Download Tallo</TextLink>
      </PageHero>

      <StoreRail label="Six major retailers, compared." />

      <section className="feature-page-section">
        <div className="page-shell">
          <div className="section-heading section-heading-split">
            <span className="page-eyebrow">Compare</span>
            <div>
              <h2>Start with the price, not the store.</h2>
              <p>
                Search prices across Coles, Woolworths, Aldi, BWS,
                Liquorland and Dan Murphy&apos;s. Weekly specials are included,
                so you can compare the shop you are actually planning.
              </p>
            </div>
          </div>

          <div className="feature-showcase">
            <article className="feature-showcase-card feature-showcase-wide feature-theme-dark">
              <div className="feature-showcase-copy">
                <span>Grocery price comparison</span>
                <h3>Coles, Woolworths and Aldi in one view.</h3>
                <p>
                  Browse by category, search for an item or open a product to
                  compare its price at each supermarket before adding it to your
                  list.
                </p>
                <TextLink href="/features/grocery-prices">
                  See grocery comparison
                </TextLink>
              </div>
              <div className="feature-showcase-phone">
                <Phone
                  src="/screenshots/home-weekly-winner.png"
                  alt="Tallo showing the weekly price winner across supermarkets"
                  size="regular"
                />
              </div>
            </article>

            <article className="feature-showcase-card feature-theme-blue">
              <div className="feature-showcase-copy">
                <span>My Shop and Multi-shop</span>
                <h3>Know the cheapest way to buy your whole list.</h3>
                <p>
                  See store totals, keep your list sorted by category and use
                  Multi-shop to find the best split across grocery stores.
                </p>
                <TextLink href="/features/myshop">Explore My Shop</TextLink>
              </div>
              <div className="feature-showcase-phone">
                <Phone
                  src="/screenshots/my-shop.png"
                  alt="My Shop in Tallo with a grocery list and store totals"
                  size="regular"
                />
              </div>
            </article>

            <article className="feature-showcase-card feature-theme-lime">
              <div className="feature-showcase-copy">
                <span>Meals and recipes</span>
                <h3>Turn meal ideas into a priced plan.</h3>
                <p>
                  Browse recipes with matched ingredients and prices, plan
                  meals, create your own recipes or import one from a link.
                </p>
                <TextLink href="/features/meal-planner">
                  See meal planning
                </TextLink>
              </div>
              <div className="feature-showcase-phone">
                <Phone
                  src="/screenshots/recipe-detail.png"
                  alt="A recipe in Tallo with its matched grocery price"
                  size="regular"
                />
              </div>
            </article>

            <article className="feature-showcase-card feature-showcase-wide feature-theme-dark">
              <div className="feature-showcase-copy">
                <span>Liquor price comparison</span>
                <h3>BWS, Liquorland and Dan Murphy&apos;s, compared.</h3>
                <p>
                  Search the stocked liquor catalogue and see what each store
                  charges, so you can find your drop for less.
                </p>
                <TextLink href="/features/liquor-prices">
                  See liquor comparison
                </TextLink>
              </div>
              <div className="feature-showcase-phone">
                <Phone
                  src="/screenshots/liquor-home.png"
                  alt="Tallo comparing liquor prices across BWS, Liquorland and Dan Murphy's"
                  size="regular"
                />
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="feature-detail-section">
        <div className="page-shell">
          <div className="section-heading">
            <span className="page-eyebrow">More useful tools</span>
            <h2>Built for the little jobs around the big shop.</h2>
          </div>
          <div className="feature-detail-grid">
            {extraFeatures.map((feature) => (
              <article className="feature-detail-card" key={feature.title}>
                <span>{feature.number}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <TextLink href={feature.href}>Learn more</TextLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Put your next shop through Tallo."
        description="Compare the list, plan the meals and keep track of the savings, all in one app."
      />
    </InternalPage>
  );
}
