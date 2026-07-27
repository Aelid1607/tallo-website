import Link from "next/link";
import {
  dealDiscount,
  dealSaving,
  formatPrice,
  type GroceryStoreKey,
  type WeeklyDeal,
  weeklySpecials,
} from "@/app/lib/weekly-specials";

const groceryStoreNames: Record<GroceryStoreKey, string> = {
  coles: "Coles",
  woolworths: "Woolworths",
  aldi: "Aldi",
};

export const weeklySpecialsFaqs = [
  {
    question: "When do supermarket specials change in Australia?",
    answer:
      "Coles, Woolworths and Aldi generally publish new weekly offers around Wednesday, although availability and exact timing can vary. Tallo refreshes displayed grocery and liquor prices weekly.",
  },
  {
    question: "Are these specials available everywhere in Australia?",
    answer:
      "This page is an Australia-wide guide, but prices and availability can vary by store, state or location. Liquor prices are particularly location-dependent. Check the current local price before buying.",
  },
  {
    question: "Why are there no Aldi specials listed in this edition?",
    answer:
      "The Tallo catalogue used for this edition contains Aldi everyday prices but no Aldi products explicitly marked as weekly specials. Tallo does not present regular prices as specials or invent catalogue offers.",
  },
  {
    question: "How are the featured specials chosen?",
    answer:
      "Tallo reviews products marked as on special in its weekly catalogue data, removes invalid or unavailable entries and selects a useful mix of household categories. The list is editorial and does not represent every available offer.",
  },
];

function DealList({
  deals,
  store,
}: {
  deals: WeeklyDeal[];
  store: string;
}) {
  return (
    <div className="deal-list">
      {deals.map((deal) => (
        <article className="deal-card" key={deal.sourceUrl}>
          <div className="deal-card-heading">
            <div>
              <span className="deal-category">{deal.category}</span>
              <h3>{deal.name}</h3>
              <p>{deal.size}</p>
            </div>
            <span className="deal-discount">Save {dealDiscount(deal)}%</span>
          </div>
          <div className="deal-prices">
            <strong>{formatPrice(deal.price)}</strong>
            <span>
              was <s>{formatPrice(deal.wasPrice)}</s>
            </span>
            <span className="deal-saving">
              {formatPrice(dealSaving(deal))} less
            </span>
          </div>
          <a
            className="deal-source"
            href={deal.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Check {store} listing <span aria-hidden="true">↗</span>
          </a>
        </article>
      ))}
    </div>
  );
}

function WeeklySpecialsArticle() {
  const { edition, groceryDeals, liquorDeals, notes } = weeklySpecials;

  return (
    <>
      <div className="article-update-panel">
        <span>Current edition</span>
        <strong>{edition.label}</strong>
        <p>
          Source prices checked {formatLongDate(edition.dataCheckedAt)}.{" "}
          {edition.scope}
        </p>
      </div>

      <p className="article-lead">
        This week&apos;s shortlist focuses on substantial, easy-to-understand
        reductions across useful household categories. It is built from
        Tallo&apos;s latest catalogue refresh, not copied from an undated deals
        roundup.
      </p>
      <p>
        A large percentage discount is not automatically good value. Check the
        pack size, whether you would normally buy the item and what the same
        product costs elsewhere. For the full list you are planning,{" "}
        <Link href="/features">Tallo&apos;s shopping tools</Link> are more useful
        than shopping from specials alone.
      </p>

      {(["coles", "woolworths"] as GroceryStoreKey[]).map((store) => (
        <section className="article-section" key={store}>
          <div className="article-section-heading">
            <span className="section-number">
              {store === "coles" ? "01" : "02"}
            </span>
            <div>
              <h2>{groceryStoreNames[store]} specials worth checking</h2>
              <p>
                Five current price drops chosen across different parts of the
                weekly shop.
              </p>
            </div>
          </div>
          <DealList
            deals={groceryDeals[store]}
            store={groceryStoreNames[store]}
          />
        </section>
      ))}

      <section className="article-section">
        <div className="article-section-heading">
          <span className="section-number">03</span>
          <div>
            <h2>What about Aldi specials this week?</h2>
            <p>An honest gap is better than a made-up deal.</p>
          </div>
        </div>
        <div className="article-note article-note-lime">
          <strong>No verified Aldi specials in this edition</strong>
          <p>{notes.aldi}</p>
        </div>
        <p>
          Aldi can still be worth including in a price comparison because its
          everyday range may be competitive. The right comparison is against
          an equivalent product and pack size, not by labelling an everyday
          price as a temporary special. Read our guide to{" "}
          <Link href="/blog/aldi-vs-woolworths-vs-coles">
            comparing Aldi, Woolworths and Coles fairly
          </Link>
          .
        </p>
      </section>

      <section className="article-section">
        <div className="article-section-heading">
          <span className="section-number">04</span>
          <div>
            <h2>Liquor price watch</h2>
            <p>
              One recent price reduction from each supported liquor retailer.
            </p>
          </div>
        </div>
        <DealList
          deals={liquorDeals}
          store="retailer"
        />
        <div className="article-note">
          <strong>Location matters for liquor</strong>
          <p>{notes.liquor}</p>
        </div>
      </section>

      <section className="article-section">
        <h2>How this list was selected</h2>
        <p>{notes.methodology}</p>
        <p>
          Prices can move after publication and stock can sell out. The
          retailer listing is included on every item for transparency, while
          the Tallo app provides the broader comparison across supported
          retailers.
        </p>
        <div className="article-inline-cta">
          <div>
            <span>See beyond the shortlist</span>
            <h3>Compare the products on your actual list.</h3>
            <p>
              Tallo includes weekly grocery and liquor price updates.
            </p>
          </div>
          <Link href="/download">Download Tallo</Link>
        </div>
      </section>

      <section className="article-section" aria-labelledby="weekly-faq-heading">
        <h2 id="weekly-faq-heading">Weekly-specials questions</h2>
        <div className="article-faq-list">
          {weeklySpecialsFaqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}

function AldiComparisonArticle() {
  return (
    <>
      <p className="article-lead">
        Aldi can be cheaper for plenty of household staples, but “Aldi is
        always cheapest” is too simple to be useful. The result changes with
        the products you buy, how closely the alternatives match and which
        Coles or Woolworths products are on special that week.
      </p>

      <div className="article-answer">
        <span>The short answer</span>
        <strong>
          Aldi may win parts of your basket. Your complete list decides whether
          it wins the shop.
        </strong>
      </div>

      <section className="article-section">
        <h2>Why this comparison is harder than it looks</h2>
        <p>
          Many Aldi products are private label. A brand-for-brand comparison is
          often impossible, while a loose category match can be misleading. A
          500g pack is not directly comparable with 750g, and two products with
          similar names can differ in ingredients, quality, origin or format.
        </p>
        <p>
          Tallo keeps exact product matches separate from broader ingredient
          alternatives. That matters because the app should not claim a cheaper
          option when it has quietly changed what you are buying.
        </p>
      </section>

      <section className="article-section">
        <h2>Four things that can change the winner</h2>
        <div className="article-numbered-grid">
          <article>
            <span>01</span>
            <h3>Your brand flexibility</h3>
            <p>
              If you are comfortable switching to private labels, Aldi has more
              opportunities to compete. If you need a particular brand, Coles
              or Woolworths may be the only direct match.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Weekly specials</h3>
            <p>
              A half-price special can temporarily move a familiar branded
              product below an everyday private-label price.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Pack and unit price</h3>
            <p>
              The shelf price can look lower simply because the packet is
              smaller. Compare the price per 100g, litre or item where it makes
              sense.
            </p>
          </article>
          <article>
            <span>04</span>
            <h3>Range and availability</h3>
            <p>
              A cheaper store total is not useful if several items are missing
              and require a second stop anyway.
            </p>
          </article>
        </div>
      </section>

      <section className="article-section">
        <h2>What the current Tallo data can safely tell us</h2>
        <p>
          Tallo&apos;s catalogue snapshot checked on 22 July 2026 contains
          current Aldi prices alongside Coles and Woolworths data. It does not,
          however, mark any Aldi products as weekly specials in this edition.
          We therefore use Aldi&apos;s entries as everyday prices and do not
          manufacture “was” prices.
        </p>
        <p>
          The catalogue also shows why a sweeping winner is risky: exact
          barcode matches are common between Coles and Woolworths, while Aldi
          comparisons more often require careful product-equivalence
          judgement. A trustworthy comparison should narrow the claim rather
          than pretend unlike products are identical.
        </p>
        <div className="article-note article-note-blue">
          <strong>What we will add next</strong>
          <p>
            A quarterly basket comparison once a representative basket and its
            Aldi equivalents have been reviewed. The methodology, included
            products and location scope will be published with the result.
          </p>
        </div>
      </section>

      <section className="article-section">
        <h2>How to compare the three supermarkets fairly</h2>
        <ol className="article-steps">
          <li>
            <strong>Start with your normal list.</strong>
            <span>
              A generic media basket may have little in common with the shop
              your household buys.
            </span>
          </li>
          <li>
            <strong>Separate exact products from substitutes.</strong>
            <span>
              Keep brand and specification fixed where they matter; consciously
              opt into alternatives elsewhere.
            </span>
          </li>
          <li>
            <strong>Normalise the quantity.</strong>
            <span>
              Compare equivalent amounts, especially for meat, produce,
              cleaning products and family packs.
            </span>
          </li>
          <li>
            <strong>Price the whole basket.</strong>
            <span>
              One standout bargain should not decide a shop containing dozens
              of other products.
            </span>
          </li>
          <li>
            <strong>Count the cost of a second stop.</strong>
            <span>
              Time, fuel and missing products can outweigh a small split-shop
              saving.
            </span>
          </li>
        </ol>
      </section>

      <section className="article-section">
        <h2>So, should you shop at Aldi?</h2>
        <p>
          Include Aldi when you are happy to compare private-label alternatives
          and the store carries enough of your list. Keep Coles and Woolworths
          in the comparison because their weekly specials and wider ranges can
          change the result.
        </p>
        <p>
          The most defensible answer is not loyalty to one chain. It is a
          repeatable habit: build the list, compare equivalent products and
          decide whether one store or a sensible split is cheaper this week.
          Our guide to the{" "}
          <Link href="/blog/cheapest-supermarket-australia">
            cheapest supermarket in Australia
          </Link>{" "}
          explains that basket-first approach in more detail.
        </p>
      </section>
    </>
  );
}

function CheapestSupermarketArticle() {
  return (
    <>
      <p className="article-lead">
        Australia does not have one supermarket that is cheapest for every
        household, every product and every week. The practical winner is the
        store, or small combination of stores, that supplies your real list for
        the lowest sensible total.
      </p>

      <div className="article-answer">
        <span>The useful answer</span>
        <strong>
          Compare a complete basket with equivalent pack sizes, then include
          the cost and effort of any extra stop.
        </strong>
      </div>

      <section className="article-section">
        <h2>Why “cheapest supermarket” studies disagree</h2>
        <p>
          Change the basket and you change the result. A study weighted towards
          private-label pantry basics may reward one retailer, while a basket
          containing branded products on promotion, specialty dietary items or
          a larger fresh-food range may reward another.
        </p>
        <p>
          Geography matters too. Liquor prices can vary by state or location,
          individual store ranges differ and a product can be temporarily out
          of stock. A result without a date, basket and method is a headline,
          not a shopping plan.
        </p>
      </section>

      <section className="article-section">
        <h2>The five tests a fair comparison should pass</h2>
        <div className="comparison-table-wrap">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Test</th>
                <th>What to check</th>
                <th>Why it matters</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Same product</td>
                <td>Brand, variant and specification</td>
                <td>A substitute is a choice, not an exact price match</td>
              </tr>
              <tr>
                <td>Same quantity</td>
                <td>Pack size and unit price</td>
                <td>Smaller packaging can make the shelf price look cheaper</td>
              </tr>
              <tr>
                <td>Same time</td>
                <td>Prices checked in the same weekly cycle</td>
                <td>Specials change the result quickly</td>
              </tr>
              <tr>
                <td>Available range</td>
                <td>Missing and out-of-stock items</td>
                <td>A partial basket is not a full-store total</td>
              </tr>
              <tr>
                <td>Real effort</td>
                <td>Travel, time and extra stops</td>
                <td>A tiny saving can disappear before checkout</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="article-section">
        <h2>When each shopping strategy tends to make sense</h2>
        <div className="article-numbered-grid article-numbered-grid-three">
          <article>
            <span>One store</span>
            <h3>Convenience first</h3>
            <p>
              Best when the difference between store totals is modest, time is
              limited or the alternative has too many unavailable items.
            </p>
          </article>
          <article>
            <span>Flexible brands</span>
            <h3>Compare private labels</h3>
            <p>
              Useful when you are comfortable changing brands and can compare
              equivalent sizes and quality deliberately.
            </p>
          </article>
          <article>
            <span>Multi-shop</span>
            <h3>Split only when it pays</h3>
            <p>
              Worth considering when the saving is meaningful and the stores
              fit naturally into your route.
            </p>
          </article>
        </div>
      </section>

      <section className="article-section">
        <h2>A better weekly process</h2>
        <ol className="article-steps">
          <li>
            <strong>Build the list before choosing the store.</strong>
            <span>
              Include quantities and any brands you are not willing to change.
            </span>
          </li>
          <li>
            <strong>Check this week&apos;s meaningful specials.</strong>
            <span>
              Prioritise products already on your list, not attractive offers
              that create extra spending.
            </span>
          </li>
          <li>
            <strong>Compare complete store totals.</strong>
            <span>
              Do not let one cheap item hide a more expensive overall basket.
            </span>
          </li>
          <li>
            <strong>Review a split-shop option.</strong>
            <span>
              Use it only when the saving comfortably clears your personal
              threshold for an extra stop.
            </span>
          </li>
          <li>
            <strong>Keep a simple history.</strong>
            <span>
              Your own completed shops are more relevant than a national
              average basket.
            </span>
          </li>
        </ol>
      </section>

      <section className="article-section">
        <h2>The bottom line</h2>
        <p>
          Aldi, Coles and Woolworths can each be the right answer for a
          particular basket. Aldi&apos;s private-label range can be competitive,
          while Coles and Woolworths combine broad ranges with frequently
          changing specials. The cheapest supermarket is therefore a dated,
          household-specific result.
        </p>
        <p>
          Tallo&apos;s <Link href="/#shop">My Shop and Multi-shop tools</Link>{" "}
          are built around this principle: compare the list you are actually
          buying and make the trade-off visible before you leave home.
        </p>
      </section>
    </>
  );
}

const savingTips = [
  {
    title: "Write the list from a meal plan",
    text: "Choose the meals first, check what is already at home and turn only the missing ingredients into a list. This reduces forgotten items and speculative purchases.",
  },
  {
    title: "Set a realistic weekly number",
    text: "A useful grocery budget reflects your household, dietary needs and shopping frequency. Track a few normal weeks before setting a target that is impossible to maintain.",
  },
  {
    title: "Compare the complete basket",
    text: "One half-price item does not make a whole store cheaper. Add up the list at each supported supermarket and compare like with like.",
  },
  {
    title: "Use unit pricing",
    text: "Compare the price per 100g, kilogram, litre or item when pack sizes differ. The larger packet is not automatically the better buy.",
  },
  {
    title: "Treat specials as a filter, not a plan",
    text: "Look first for discounts on products already on your list. A saving on something you did not need is still extra spending.",
  },
  {
    title: "Know which brands are flexible",
    text: "Mark the items where a private label or alternative is acceptable. Keep exact brands where taste, allergies, ingredients or performance matter.",
  },
  {
    title: "Keep a small price memory",
    text: "Notice the usual price of frequently purchased staples. It becomes much easier to recognise a genuine reduction and ignore weak promotional language.",
  },
  {
    title: "Use a split shop selectively",
    text: "Choose a minimum saving that makes a second stop worthwhile after time, distance and fuel. Multi-shop should solve a budget problem, not create a logistics problem.",
  },
  {
    title: "Plan around ingredients you can reuse",
    text: "A roast vegetable, cooked grain or sauce that works across several meals reduces waste and makes irregular pack sizes easier to finish.",
  },
  {
    title: "Freeze with a purpose",
    text: "Bulk buying helps only when the food will be used. Label portions and keep a short freezer list so discounted food does not become expensive waste.",
  },
  {
    title: "Do a final list check before checkout",
    text: "Remove duplicates, adjust quantities and check whether substitutions have changed the unit price. Small corrections across a weekly shop add up.",
  },
  {
    title: "Review what actually worked",
    text: "After the shop, note the store total, unavailable items and food left unused. Your own history is the best guide to next week's decisions.",
  },
];

function SavingMoneyArticle() {
  return (
    <>
      <p className="article-lead">
        Saving on groceries is usually the result of a repeatable system, not
        one perfect catalogue special. The strongest system combines a realistic
        plan, a complete list, comparable prices and fewer purchases that end up
        unused.
      </p>

      <div className="article-answer">
        <span>Start with this</span>
        <strong>
          Plan what you will use, compare what you will buy and ignore savings
          on things that were never needed.
        </strong>
      </div>

      <section className="article-section">
        <h2>12 practical ways to lower the weekly grocery bill</h2>
        <div className="saving-tip-list">
          {savingTips.map((tip, index) => (
            <article key={tip.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{tip.title}</h3>
                <p>{tip.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="article-section">
        <h2>How to use weekly specials without overspending</h2>
        <p>
          Start with the list and then apply the catalogue to it. Look for a
          genuine reduction, confirm the pack size and ask whether the item will
          be used before its quality drops. Half price is powerful for a regular
          purchase; it is much less useful when it creates pantry clutter.
        </p>
        <p>
          Our{" "}
          <Link href="/blog/weekly-specials">
            current grocery-specials shortlist
          </Link>{" "}
          shows the price, previous price, percentage reduction, dates and
          retailer source for every selected item.
        </p>
      </section>

      <section className="article-section">
        <h2>When shopping at more than one store saves money</h2>
        <p>
          Split shopping works best when the saving is concentrated in a few
          meaningful items and the stores are already convenient. It works
          poorly when the saving is scattered across tiny differences, when
          stock is uncertain or when the second stop encourages another round
          of impulse purchases.
        </p>
        <div className="article-note article-note-lime">
          <strong>Choose your threshold</strong>
          <p>
            Decide how much an extra stop must save before you make it. The
            number is personal, but setting it in advance keeps the decision
            practical.
          </p>
        </div>
      </section>

      <section className="article-section">
        <h2>Use tools to reduce decisions, not add more</h2>
        <p>
          Tallo combines lists, grocery prices, store totals, Multi-shop, meal
          planning and completed-shop history. The goal is not to inspect every
          price in Australia. It is to make the handful of decisions around your
          next shop clearer.
        </p>
        <div className="article-inline-cta">
          <div>
            <span>Available on iOS and Android</span>
            <h3>Plan the list. Compare the totals.</h3>
            <p>
              Put these habits into one practical weekly-shopping workflow.
            </p>
          </div>
          <Link href="/download">Get Tallo</Link>
        </div>
      </section>
    </>
  );
}

function formatLongDate(value: string): string {
  return new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));
}

export function ArticleContent({ slug }: { slug: string }) {
  switch (slug) {
    case "weekly-specials":
      return <WeeklySpecialsArticle />;
    case "aldi-vs-woolworths-vs-coles":
      return <AldiComparisonArticle />;
    case "cheapest-supermarket-australia":
      return <CheapestSupermarketArticle />;
    case "how-to-save-money-groceries":
      return <SavingMoneyArticle />;
    default:
      return null;
  }
}
