import type { Metadata } from "next";
import Image from "next/image";
import {
  Arrow,
  MarketingFooter,
  MarketingNav,
  StoreBadges,
} from "@/app/components/MarketingChrome";
import { JsonLd } from "@/app/components/JsonLd";
import { Phone } from "@/app/components/Phone";
import { StoreRail } from "@/app/components/StoreRail";
import {
  APP_STORE_URL,
  createPageMetadata,
  GOOGLE_PLAY_URL,
  HOME_DESCRIPTION,
  HOME_TITLE,
  SITE_URL,
} from "@/app/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  path: "/",
});

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Tallo",
  description: HOME_DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}/og.png`,
  applicationCategory: "ShoppingApplication",
  operatingSystem: "iOS, Android",
  downloadUrl: [APP_STORE_URL, GOOGLE_PLAY_URL],
  featureList: [
    "Compare grocery prices across Coles, Woolworths and Aldi",
    "Compare liquor prices across BWS, Dan Murphy's and Liquorland",
    "Build and share shopping lists",
    "Compare nearby fuel prices",
    "Plan meals and import recipes",
    "Scan product barcodes",
  ],
};

function Check() {
  return (
    <span className="check" aria-hidden="true">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 4 4L19 6" /></svg>
    </span>
  );
}

function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-copy">
          <h1>Compare grocery prices, <em>in one place.</em></h1>
          <p className="hero-lede">Tallo compares real prices across Coles, Woolworths and Aldi, plus BWS, Liquorland and Dan Murphy&apos;s. Build your list, see your best option and head out with a plan.</p>
          <div className="hero-actions">
            <StoreBadges height={52} />
          </div>
        </div>
        <div className="hero-phones" aria-label="Tallo app screens">
          <div className="hero-phone hero-phone-back"><Phone src="/screenshots/iphone17/IMG_1594.PNG" alt="Tallo weekly shopping list" size="small" priority /></div>
          <div className="hero-phone hero-phone-main"><Phone src="/screenshots/iphone17/IMG_1585.PNG" alt="Tallo My Shop comparing grocery totals" size="hero" priority /></div>
          <div className="hero-phone hero-phone-front"><Phone src="/screenshots/iphone17/IMG_1586.PNG" alt="Tallo multishop price split" size="small" priority /></div>
        </div>
      </div>
    </section>
  );
}

function Compare() {
  return (
    <section id="compare" className="section compare-section">
      <div className="section-heading compare-heading">
        <div>
          <p className="eyebrow">Compare and save</p>
          <h2>Compare weekly specials,<br />store by store.</h2>
        </div>
      </div>
      <div className="compare-grid">
        <article className="comparison-card feature-card-dark">
          <div className="card-kicker"><span className="live-dot" />Updated with weekly specials</div>
          <h3>Real products, shown side by side.</h3>
          <p>Tallo links comparable products across Coles, Woolworths and Aldi and brings the price differences into one view.</p>
          <ul className="feature-list feature-list-dark">
            <li><Check />Browse a clear weekly winner</li>
            <li><Check />Sort specials by your favourite store</li>
            <li><Check />Explore simple categories and sub-categories</li>
          </ul>
        </article>
        <article className="comparison-card comparison-phone-card">
          <Phone src="/screenshots/iphone17/IMG_1590.PNG" alt="Tallo grocery search comparing current prices" size="regular" />
        </article>
        <article className="comparison-card comparison-quote-card">
          <span className="quote-mark">+</span>
          <p>Tallo updates displayed prices weekly as new specials land. See the store with the most specials at a glance, then browse by store, category or the biggest savings.</p>
        </article>
      </div>
    </section>
  );
}

function Shop() {
  return (
    <section id="shop" className="section shop-section">
      <div className="shop-intro">
        <h2>Build it once.<br /><em>See it store by store.</em></h2>
      </div>
      <div className="shop-stage">
        <div className="shop-stage-copy">
          <h3>Your complete shop, in one place.</h3>
          <p>My Shop turns the things you need into a clear, category-sorted plan. See what your whole list costs at each store, let Multi-shop find the cheapest split, then shop in-store with a running total that keeps you on budget.</p>
          <ul className="feature-list">
            <li><Check />Cheapest price across all six stores at a glance</li>
            <li><Check />Multi-shop splits your list for bigger savings</li>
            <li><Check />Check off items with a live running total</li>
          </ul>
        </div>
        <div className="shop-phones">
          <div className="shop-phone-one"><Phone src="/screenshots/iphone17/IMG_1585.PNG" alt="Tallo My Shop showing store totals" size="regular" /></div>
          <div className="shop-phone-two"><Phone src="/screenshots/iphone17/IMG_1595.PNG" alt="Tallo in-store shopping mode with a running total" size="regular" /></div>
        </div>
      </div>
    </section>
  );
}

function Liquor() {
  return (
    <section className="section liquor-section">
      <div className="liquor-panel">
        <div className="liquor-copy">
          <p className="eyebrow">Liquor prices</p>
          <h2>Liquor prices,<br />side by side.</h2>
          <p>Compare liquor prices across Dan Murphy&apos;s, Liquorland and BWS. Search the stocked catalogue, see what each store has it for, and save the products you buy most.</p>
          <div className="liquor-logos">
            <span className="liquor-chip"><Image src="/stores/danmurphys.png" alt="Dan Murphy&apos;s" width={300} height={140} loading="eager" className="liquor-logo lg-dm" /></span>
            <span className="liquor-chip"><Image src="/stores/liquorland.jpg" alt="Liquorland" width={498} height={115} loading="eager" className="liquor-logo lg-ll" /></span>
            <span className="liquor-chip"><Image src="/stores/bws.png" alt="BWS" width={330} height={126} loading="eager" className="liquor-logo lg-bws" /></span>
          </div>
          <a className="text-link text-link-blue" href="#download">Find your drop with Tallo <Arrow /></a>
        </div>
        <div className="liquor-phone"><Phone src="/screenshots/liquor-home.png" alt="Tallo liquor screen showing prices across liquor retailers" size="regular" /></div>
        <div className="liquor-stamp"><span>3</span><small>liquor<br />stores</small></div>
      </div>
    </section>
  );
}

function Fuel() {
  return (
    <section id="fuel" className="section fuel-section">
      <div className="fuel-inner">
        <div className="fuel-copy">
          <p className="eyebrow">Fuel</p>
          <h2>Local fuel prices,<br /><em>on a list or map.</em></h2>
          <p>Choose a fuel type and distance to see nearby service stations and current prices. Switch between a list and map to find the location that suits your trip.</p>
          <ul className="feature-list fuel-list">
            <li><Check />View local stations and prices by fuel type</li>
            <li><Check />Save favourite service stations to your profile</li>
            <li><Check />Get directions when you are ready to go</li>
          </ul>
        </div>
        <div className="fuel-phones">
          <div className="fuel-phone-list"><Phone src="/screenshots/fuel-list.png" alt="Tallo Fuel list showing nearby E10 fuel prices" size="regular" /></div>
          <div className="fuel-phone-map"><Phone src="/screenshots/fuel-map.png" alt="Tallo Fuel map showing nearby petrol stations" size="regular" /></div>
        </div>
      </div>
    </section>
  );
}

function ListsAndScan() {
  return (
    <section className="section lists-section">
      <div className="section-heading lists-heading">
        <div><p className="eyebrow">Lists, shared</p><h2>Your regular products,<br />ready when you need them.</h2></div>
      </div>
      <div className="lists-grid">
        <article className="list-card list-card-phone"><Phone src="/screenshots/iphone17/IMG_1594.PNG" alt="Tallo weekly shopping list with current store totals" size="regular" /></article>
        <article className="list-card list-card-copy">
          <h3>Send the list. Keep the plan.</h3>
          <p>Each saved list carries its store prices with it, so it is useful whether you are organising the week or handing the shop to someone else.</p>
          <p className="list-card-note">Save favourite products in your own custom lists, then add them to My Shop whenever you need them. If someone asks, “Need anything from the shops?”, a quick share link makes the answer easy.</p>
        </article>
        <article className="list-card scan-card">
          <div><p className="eyebrow">Scan and discover</p><h3>Scan products from the pantry.</h3><p>Scan a barcode to add a product to a custom list or straight to My Shop. If Tallo cannot find it, you can add it to the database.</p></div>
          <Phone src="/screenshots/iphone17/IMG_1590.PNG" alt="Tallo grocery search results with barcode scanner" size="small" />
        </article>
      </div>
    </section>
  );
}

function Meals() {
  return (
    <section id="meals" className="section meals-section">
      <div className="meals-background" />
      <div className="meals-copy">
        <p className="eyebrow">Recipes and meals</p>
        <h2>Plan meals with<br />the prices <em>in view.</em></h2>
        <p>Explore Tallo family favourites with real ingredient costs and the cheapest way to buy them. Add ingredients to your shop, swap in your preferred products, or create your own recipes to keep.</p>
        <ul className="feature-list meals-list">
          <li><Check />Every ingredient priced, with the cheapest store to buy it</li>
          <li><Check />Plan breakfast, lunch and dinner across the week</li>
          <li><Check />Import recipes straight from a website link, post or video</li>
        </ul>
      </div>
      <div className="meals-phones">
        <div className="meal-phone-detail"><Phone src="/screenshots/recipe-detail.png" alt="Tallo recipe with live ingredient pricing" size="regular" /></div>
        <div className="meal-phone-plan"><Phone src="/screenshots/meal-planner.png" alt="Tallo weekly meal planner" size="regular" /></div>
      </div>
      <div className="meals-footer">Plan a week of meals and add the ingredients to your shopping list in one go.</div>
    </section>
  );
}

function RecipeImport() {
  return (
    <section className="section recipe-import-section">
      <div className="recipe-import-inner">
        <div className="recipe-import-phones" aria-label="Recipe import app screens">
          <div className="recipe-import-cookbook"><Phone src="/screenshots/my-cookbook.png" alt="Tallo My Cookbook with imported recipes" size="small" /></div>
          <div className="recipe-import-start"><Phone src="/screenshots/recipe-import.png" alt="Tallo screen for importing a recipe link" size="regular" /></div>
          <div className="recipe-import-detail"><Phone src="/screenshots/imported-recipe.png" alt="Tallo imported recipe showing matched ingredients and totals" size="small" /></div>
        </div>
        <div className="recipe-import-copy">
          <p className="eyebrow">Recipe import</p>
          <h2>Bring your favourite<br />recipes <em>with you.</em></h2>
          <p>Paste a recipe link and Tallo imports the recipe, ingredients and method. Each ingredient is matched to available products and the total is shown at the bottom of the recipe.</p>
          <p>It also works from social posts and videos. Share a recipe from Instagram, Facebook, Pinterest or a Reel to Tallo and it can be imported from the shared link.</p>
          <ul className="feature-list recipe-import-list">
            <li><Check />Imported ingredients matched to store products</li>
            <li><Check />Method, serves and recipe total kept together</li>
            <li><Check />Save imported recipes to your own cookbook</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  const items = [
    ["Savings that add up", "Completed shops are saved to your profile so Tallo can calculate and log the savings you make over time."],
    ["Built with care", "Tallo was made for household budgets and meal planning, with your shopping experience at the front of every decision."],
    ["Your feedback matters", "Use the in-app feedback form to tell us what is working, what is not, and what would make your next shop easier."],
  ];
  return (
    <section className="section trust-section">
      <div className="trust-heading"><p className="eyebrow">Track your savings</p><h2>Your shopping history,<br />kept together.</h2></div>
      <div className="trust-items">
        {items.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}
      </div>
    </section>
  );
}

function SavingsProfile() {
  return (
    <section className="section savings-profile-section">
      <div className="savings-profile-inner">
        <div className="savings-profile-copy">
          <p className="eyebrow">Savings and history</p>
          <h2>See what every shop<br /><em>adds up to.</em></h2>
          <p>Your profile keeps completed shops, items bought and total savings together. Favourite petrol stations and account tools stay close by too.</p>
          <ul className="feature-list savings-profile-list">
            <li><Check />Track total savings over time</li>
            <li><Check />Revisit your recent completed shops</li>
            <li><Check />Keep favourite petrol stations handy</li>
          </ul>
        </div>
        <div className="savings-profile-visual">
          <Phone src="/screenshots/iphone17/IMG_1592.PNG" alt="Tallo profile showing savings, recent shops and favourite petrol stations" size="regular" />
        </div>
      </div>
    </section>
  );
}

function Download() {
  return (
    <section id="download" className="download-section">
      <div className="download-orb" />
      <div className="download-inner">
        <Image src="/tallo-logo-white.svg" alt="Tallo" width={200} height={60} className="download-logo" />
        <p className="eyebrow">Available now</p>
        <h2>Tallo for your<br /><em>next shop.</em></h2>
        <p>Download Tallo and compare grocery and liquor prices, plan meals, build lists and more.</p>
        <StoreBadges height={54} />
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <JsonLd data={appJsonLd} />
      <MarketingNav />
      <main>
        <Hero />
        <StoreRail />
        <Compare />
        <Shop />
        <Liquor />
        <Fuel />
        <ListsAndScan />
        <Meals />
        <RecipeImport />
        <SavingsProfile />
        <Trust />
        <Download />
      </main>
      <MarketingFooter />
    </>
  );
}
