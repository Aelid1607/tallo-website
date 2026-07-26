import Image from "next/image";
import Link from "next/link";

const APP_STORE_URL = "https://apps.apple.com/au/app/id6783832613";
const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=au.com.talloapp";

function StoreBadges({ height = 48 }: { height?: number }) {
  return (
    <div className="store-badges">
      <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" aria-label="Download Tallo on the App Store">
        <Image src="/badge-appstore.svg" alt="Download on the App Store" width={Math.round(height * 3)} height={height} style={{ height, width: "auto" }} />
      </a>
      <a href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer" aria-label="Get Tallo on Google Play">
        <Image src="/badge-googleplay.svg" alt="Get it on Google Play" width={Math.round(height * 3.375)} height={height} style={{ height, width: "auto" }} />
      </a>
    </div>
  );
}

function Arrow({ dark = false }: { dark?: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={dark ? "#101113" : "currentColor"} strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function Check() {
  return (
    <span className="check" aria-hidden="true">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 4 4L19 6" /></svg>
    </span>
  );
}

function Phone({ src, alt, size = "regular", device = "ios", priority = false }: { src: string; alt: string; size?: "small" | "regular" | "hero"; device?: "ios" | "android"; priority?: boolean }) {
  return (
    <div className={`phone phone-${size} phone-${device}`}>
      <div className="phone-notch" />
      <div className="phone-screen">
        <Image src={src} alt={alt} width={1206} height={2622} priority={priority} sizes="(max-width: 700px) 70vw, 420px" />
      </div>
    </div>
  );
}

function Nav() {
  return (
    <header className="site-nav">
      <div className="nav-inner">
        <a href="#top" aria-label="Tallo home"><Image src="/tallo-logo-tagline.svg" alt="Tallo Smarter Shopping" width={148} height={45} priority /></a>
        <nav aria-label="Primary navigation">
          <a href="#compare">Compare</a>
          <a href="#shop">My Shop</a>
          <a href="#meals">Meals</a>
        </nav>
        <a className="nav-cta" href="#download">Get Tallo <Arrow dark /></a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />
      <div className="hero-inner">
        <div className="hero-copy">
          <h1>Prices for your whole shop, <em>in one place.</em></h1>
          <p className="hero-lede">Tallo compares real prices across Coles, Woolworths and Aldi, plus BWS, Liquorland and Dan Murphy&apos;s. Build your list, see your best option and head out with a plan.</p>
          <div className="hero-actions">
            <StoreBadges height={52} />
          </div>
        </div>
        <div className="hero-phones" aria-label="Tallo app screens">
          <div className="hero-phone hero-phone-back"><Phone src="/screenshots/my-list.png" alt="Tallo saved shopping lists" size="small" priority /></div>
          <div className="hero-phone hero-phone-main"><Phone src="/screenshots/home-weekly-winner.png" alt="Tallo home screen showing this week&apos;s cheapest store" size="hero" priority /></div>
          <div className="hero-phone hero-phone-front"><Phone src="/screenshots/multishop.png" alt="Tallo multishop price split" size="small" device="android" priority /></div>
        </div>
      </div>
    </section>
  );
}

const STORES = [
  { name: "Coles", src: "/stores/coles.png", w: 760, h: 227 },
  { name: "Woolworths", src: "/stores/woolworths.png", w: 600, h: 150 },
  { name: "Aldi", src: "/stores/aldi.jpg", w: 440, h: 293 },
  { name: "Dan Murphy's", src: "/stores/danmurphys.png", w: 300, h: 140 },
  { name: "Liquorland", src: "/stores/liquorland.jpg", w: 498, h: 115 },
  { name: "BWS", src: "/stores/bws.png", w: 330, h: 126 },
];

function StoreRail() {
  return (
    <section className="store-rail" aria-label="Stores compared by Tallo">
      <div className="store-rail-inner">
        <p>One shop. A clearer picture.</p>
        <div className="store-logos">
          {STORES.map((s) => (
            <div key={s.name} className={`store-logo-card logo-${s.name.toLowerCase().replace(/[^a-z]/g, "")}`}>
              <Image src={s.src} alt={s.name} width={s.w} height={s.h} loading="eager" className="store-logo" />
            </div>
          ))}
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
          <Phone src="/screenshots/home-winner.png" alt="Tallo home screen showing this week&apos;s cheapest store" size="regular" />
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
          <div className="shop-phone-one"><Phone src="/screenshots/my-shop.png" alt="Tallo My Shop showing store totals" size="regular" /></div>
          <div className="shop-phone-two"><Phone src="/screenshots/multishop.png" alt="Tallo Multi-shop view with best price split" size="regular" device="android" /></div>
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

function ListsAndScan() {
  return (
    <section className="section lists-section">
      <div className="section-heading lists-heading">
        <div><p className="eyebrow">Lists, shared</p><h2>Your regular products,<br />ready when you need them.</h2></div>
      </div>
      <div className="lists-grid">
        <article className="list-card list-card-phone"><Phone src="/screenshots/my-list.png" alt="Tallo custom list with current store prices" size="regular" /></article>
        <article className="list-card list-card-copy">
          <h3>Send the list. Keep the plan.</h3>
          <p>Each saved list carries its store prices with it, so it is useful whether you are organising the week or handing the shop to someone else.</p>
          <p className="list-card-note">Save favourite products in your own custom lists, then add them to My Shop whenever you need them. If someone asks, “Need anything from the shops?”, a quick share link makes the answer easy.</p>
        </article>
        <article className="list-card scan-card">
          <div><p className="eyebrow">Scan and discover</p><h3>Scan products from the pantry.</h3><p>Scan a barcode to add a product to a custom list or straight to My Shop. If Tallo cannot find it, you can add it to the database.</p></div>
          <Phone src="/screenshots/search.png" alt="Tallo product search with barcode scanner" size="small" device="android" />
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

function Download() {
  return (
    <section id="download" className="download-section">
      <div className="download-orb" />
      <div className="download-inner">
        <Image src="/tallo-logo-white.svg" alt="Tallo" width={200} height={60} className="download-logo" />
        <p className="eyebrow">Available now</p>
        <h2>Tallo for your<br /><em>next shop.</em></h2>
        <p>Download Tallo free for grocery and liquor price comparison, lists, meal planning and more.</p>
        <StoreBadges height={54} />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <Image src="/tallo-logo-light.svg" alt="Tallo" width={132} height={38} />
      <div><a href="mailto:info@talloapp.com.au">Get in touch</a><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
      <span>© {new Date().getFullYear()} Tallo. Australia.</span>
    </footer>
  );
}

export default function Home() {
  return <><Nav /><main><Hero /><StoreRail /><Compare /><Shop /><Liquor /><ListsAndScan /><Meals /><Trust /><Download /></main><Footer /></>;
}
