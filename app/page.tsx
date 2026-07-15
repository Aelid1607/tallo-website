import Image from "next/image";
import Link from "next/link";

const APP_STORE_URL = "https://apps.apple.com/au/app/id6783832613";
const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=au.com.talloapp";

function StoreBadges({ height = 52 }: { height?: number }) {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-85" aria-label="Download Tallo on the App Store">
        <Image src="/badge-appstore.svg" alt="Download on the App Store" width={Math.round(height * 3)} height={height} style={{ height, width: "auto" }} />
      </a>
      <a href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-85" aria-label="Get Tallo on Google Play">
        <Image src="/badge-googleplay.svg" alt="Get it on Google Play" width={Math.round(height * 3.375)} height={height} style={{ height, width: "auto" }} />
      </a>
    </div>
  );
}

function Nav() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        background: "rgba(245,245,243,0.85)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Image src="/tallo-logo-tagline.svg" alt="Tallo Smarter Shopping" width={160} height={48} priority />
        <a
          href="#download"
          className="text-sm font-semibold px-4 py-2 rounded-full transition-opacity hover:opacity-80"
          style={{ background: "var(--black)", color: "var(--bg)" }}
        >
          Get the app
        </a>
      </div>
    </header>
  );
}

// For already-framed app screenshots (new mockups)
function PhoneDisplay({ src, alt, width = 280 }: { src: string; alt: string; width?: number }) {
  return (
    <div style={{ width, maxWidth: "100%", flexShrink: 0, filter: "drop-shadow(0 32px 64px rgba(0,0,0,0.2))" }}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={Math.round(width * 2.045)}
        loading="eager"
        style={{ display: "block", width: "100%", height: "auto" }}
      />
    </div>
  );
}

// For raw screenshots (mini features)
function PhoneFrame({ src, alt, width = 260 }: { src: string; alt: string; width?: number }) {
  const pad = 10;
  const r = Math.round(width * 0.177);
  const ir = Math.round(width * 0.148);
  const inner = width - pad * 2;
  return (
    <div
      style={{
        width,
        background: "#111",
        borderRadius: r,
        padding: pad,
        boxShadow:
          "0 48px 96px rgba(0,0,0,0.2), 0 8px 24px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.08), inset 0 0 0 1px rgba(255,255,255,0.06)",
        position: "relative",
        flexShrink: 0,
      }}
    >
      <div style={{ position: "absolute", right: -3, top: Math.round(width * 0.41), width: 3, height: Math.round(width * 0.17), background: "#2a2a2a", borderRadius: "0 2px 2px 0" }} />
      <div style={{ position: "absolute", left: -3, top: Math.round(width * 0.30), width: 3, height: Math.round(width * 0.10), background: "#2a2a2a", borderRadius: "2px 0 0 2px" }} />
      <div style={{ position: "absolute", left: -3, top: Math.round(width * 0.45), width: 3, height: Math.round(width * 0.14), background: "#2a2a2a", borderRadius: "2px 0 0 2px" }} />
      <div style={{ position: "absolute", left: -3, top: Math.round(width * 0.63), width: 3, height: Math.round(width * 0.14), background: "#2a2a2a", borderRadius: "2px 0 0 2px" }} />
      <div style={{ borderRadius: ir, overflow: "hidden" }}>
        <Image
          src={src}
          alt={alt}
          width={inner}
          height={Math.round(inner * 2.165)}
          loading="eager"
          style={{ display: "block", width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Image
              src="/tallo-logo-tagline.svg"
              alt="Tallo Smarter Shopping"
              width={400}
              height={120}
              className="mb-8 mx-auto block"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <div
              className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full text-xs font-semibold"
              style={{ background: "#E8F5EE", color: "#2A8A50" }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#2A8A50" }} />
              Now live on iOS and Android
            </div>
            <h1
              className="text-4xl md:text-5xl font-bold leading-none mb-6"
              style={{ letterSpacing: "-0.04em", color: "var(--black)" }}
            >
              Know exactly what your groceries cost{" "}
              <span style={{ color: "var(--blue)" }}>before you leave home.</span>
            </h1>
            <p className="text-lg leading-relaxed mb-10" style={{ color: "var(--muted)" }}>
              Tallo compares 20,000+ products across Coles, Woolworths and Aldi, plus beer, wine and spirits across Dan Murphy&apos;s, Liquorland and BWS. Independent, unsponsored and your data stays on your device.
            </p>
            <div className="flex flex-col gap-4">
              <StoreBadges />
              <p className="text-xs" style={{ color: "var(--muted)" }}>
                Free to download on the App Store and Google Play
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <PhoneDisplay
              src="/screenshots/home-screen.png"
              alt="Tallo home screen showing price comparison, meal planning and recipe costs"
              width={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  const stats = [
    { value: "20,000+", label: "products tracked" },
    { value: "6", label: "stores compared" },
    { value: "Zero", label: "ads ever" },
    { value: "On-device", label: "data storage" },
  ];
  return (
    <div className="px-6 py-10" style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-2xl font-bold mb-1" style={{ letterSpacing: "-0.03em", color: "var(--black)" }}>
              {s.value}
            </div>
            <div className="text-xs font-medium" style={{ color: "var(--muted)" }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Bullet({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span
        className="flex items-center justify-center shrink-0"
        style={{ width: 20, height: 20, borderRadius: "50%", background: "#E8F0FE", marginTop: 2 }}
      >
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
      <span className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{text}</span>
    </li>
  );
}

function FeatureSection({
  label,
  title,
  body,
  bullets,
  screenshot,
  screenshotAlt,
  phoneRight = false,
}: {
  label: string;
  title: string;
  body: string;
  bullets?: string[];
  screenshot: string;
  screenshotAlt: string;
  phoneRight?: boolean;
}) {
  return (
    <section className="py-16 md:py-28 px-6" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className={`flex justify-center ${phoneRight ? "lg:order-last" : ""}`}>
            <PhoneDisplay src={screenshot} alt={screenshotAlt} width={280} />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--blue)" }}>
              {label}
            </p>
            <h2 className="text-4xl font-bold mb-6" style={{ letterSpacing: "-0.03em", color: "var(--black)" }}>
              {title}
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
              {body}
            </p>
            {bullets && (
              <ul className="mt-6 space-y-3">
                {bullets.map((b) => (
                  <Bullet key={b} text={b} />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const miniFeatures = [
  {
    label: "Barcode Scanner",
    body: "Point your camera at any grocery barcode to compare prices across all three stores in seconds. 20,000+ barcodes in the database.",
    screenshot: "/screenshots/scanner.jpg",
    alt: "Barcode scanner screen",
  },
  {
    label: "Price Watch",
    body: "Tallo tracks price changes and size reductions across the catalogue every week. Catch shrinkflation and price rises before they catch you.",
    screenshot: "/screenshots/price-tracker.jpg",
    alt: "Price watch screen tracking price rises and shrinkflation",
  },
  {
    label: "Loyalty Cards",
    body: "Store your Flybuys and Everyday Rewards barcodes in the app. Always on hand when you reach the checkout.",
    screenshot: "/screenshots/loyalty-card.jpg",
    alt: "Loyalty cards screen",
  },
];

function MiniFeatures() {
  return (
    <section className="py-16 md:py-28 px-6" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--blue)" }}>
            More features
          </p>
          <h2 className="text-4xl font-bold max-w-lg" style={{ letterSpacing: "-0.03em", color: "var(--black)" }}>
            Everything else you&apos;d want.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {miniFeatures.map((f) => (
            <div key={f.label} className="flex flex-col gap-6">
              <div className="flex justify-center">
                <PhoneFrame src={f.screenshot} alt={f.alt} width={190} />
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-2" style={{ color: "var(--black)" }}>
                  {f.label}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Independence() {
  const pillars = [
    {
      title: "Not affiliated with anyone",
      body: "Tallo has no relationship with Coles, Woolworths, Aldi, Dan Murphy's, Liquorland or BWS. No sponsorship, no paid placements, no affiliate deals. Prices are sourced directly from public catalogues.",
    },
    {
      title: "Your data stays on your phone",
      body: "Shopping data is stored locally on your device. Nothing is sold or shared with third parties. No behavioural tracking, no ad targeting.",
    },
    {
      title: "One person, one product",
      body: "No VC money, no team, no corporate agenda. Just a solo Australian developer building something that genuinely helps people save money on their weekly shop.",
    },
  ];

  return (
    <section className="py-16 md:py-28 px-6" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-20 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--blue)" }}>
              Built different
            </p>
            <h2
              className="text-4xl font-bold"
              style={{ letterSpacing: "-0.03em", color: "var(--black)", lineHeight: 1.1 }}
            >
              Independent.
              <br />
              Unsponsored.
              <br />
              Private.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {pillars.map((p) => (
              <div key={p.title}>
                <div
                  className="flex items-center justify-center mb-4"
                  style={{ width: 36, height: 36, borderRadius: 10, background: "#E8F0FE" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold mb-3" style={{ color: "var(--black)" }}>{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Download() {
  return (
    <section id="download" className="py-28 px-6" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="rounded-3xl p-12 md:p-20 text-center" style={{ background: "var(--black)" }}>
          <Image
            src="/tallo-icon-white.svg"
            alt=""
            width={56}
            height={56}
            className="mx-auto mb-8 rounded-2xl"
            style={{ background: "rgba(255,255,255,0.08)" }}
          />
          <p className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: "rgba(255,255,255,0.35)" }}>
            Get Tallo
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ letterSpacing: "-0.04em", color: "#fff" }}>
            Available now on iOS and Android.
          </h2>
          <p className="text-lg mb-10 max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
            Free to download on the App Store and Google Play. No invite code needed.
          </p>

          <div className="flex justify-center">
            <StoreBadges height={56} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 px-6" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <Image src="/tallo-logo-tagline.svg" alt="Tallo Smarter Shopping" width={140} height={42} />
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm" style={{ color: "var(--muted)" }}>
          <a
            href="mailto:info@talloapp.com.au"
            className="transition-opacity hover:opacity-70"
            style={{ color: "inherit" }}
          >
            Get in touch: info@talloapp.com.au
          </a>
          <Link href="/privacy" className="transition-opacity hover:opacity-70" style={{ color: "inherit" }}>
            Privacy Policy
          </Link>
          <Link href="/terms" className="transition-opacity hover:opacity-70" style={{ color: "inherit" }}>
            Terms &amp; Conditions
          </Link>
          <span>© {new Date().getFullYear()} Tallo. Australia.</span>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <FeatureSection
          label="Weekly Store Winner"
          title="Know which store wins this week."
          body="Every Wednesday, Tallo counts which store is cheaper on more products and shows the result on your home screen. See the score at a glance, then browse that store's specials. Updated weekly from live prices."
          bullets={[
            "Weekly count across Coles, Woolworths and Aldi",
            "Direct link to browse that store's current specials",
            "Last 5 winners shown so you can spot patterns",
          ]}
          screenshot="/screenshots/weekly-winner.png"
          screenshotAlt="Home screen showing this week's cheapest store with product count comparison"
          phoneRight
        />
        <FeatureSection
          label="Liquor"
          title="Beer, wine and spirits - compared."
          body="The Liquor tab brings Dan Murphy's, Liquorland and BWS into one place. Browse weekly specials by category, search across all three stores in one tap and see who has your favourite bottle cheaper before you make a trip."
          bullets={[
            "Dan Murphy's, Liquorland and BWS all in one app",
            "Weekly specials and discounted lines highlighted",
            "Search across all three stores in one place",
          ]}
          screenshot="/screenshots/liquor-home.png"
          screenshotAlt="Liquor tab showing specials from Dan Murphy's, Liquorland and BWS"
        />
        <FeatureSection
          label="Multishop"
          title="Let Tallo split your shop for you."
          body="Multishop calculates the cheapest combination of stores for your whole list. One item from Woolworths, four from Coles, one from Aldi - automatically worked out. Toggle Aldi on or off and see the full per-store breakdown before you leave home."
          bullets={[
            "Best price split calculated across all stores",
            "Optional Aldi toggle for flexible planning",
            "Full per-store breakdown before you shop",
          ]}
          screenshot="/screenshots/multishop.png"
          screenshotAlt="Multishop screen showing best price split of $22 across Woolworths, Coles and Aldi"
          phoneRight
        />
        <FeatureSection
          label="Shopping List"
          title="Your list, priced across every store."
          body="Add products as you browse and your list instantly shows the running total at Coles, Woolworths and Aldi. The cheapest store is always highlighted. Tap Let's Go Shopping and items are ready to check off as you go."
          bullets={[
            "Live totals for all three grocery stores",
            "Cheapest store badge calculated automatically",
            "In-store mode with checkboxes and quantities",
          ]}
          screenshot="/screenshots/shopping-list-v2.png"
          screenshotAlt="Shopping list showing store totals with Coles highlighted as cheapest at $23.31"
        />
        <FeatureSection
          label="Meal Planning"
          title="Plan your week. Know what it will cost."
          body="Slot recipes into Breakfast, Lunch and Dinner for each day of the week. See a cost estimate per serving and a running daily total as you plan. Tap Add to list and everything goes straight to your shopping list in one go."
          bullets={[
            "Plan every meal across a full week",
            "Live cost estimate per day and per serve",
            "Add the whole week to your shopping list at once",
          ]}
          screenshot="/screenshots/meal-planner.png"
          screenshotAlt="Meals tab showing weekly planner with breakfast, lunch and dinner with cost per serve"
          phoneRight
        />
        <FeatureSection
          label="Recipes"
          title="Recipes with real ingredient costs."
          body="Every recipe shows a live cost breakdown matched to actual supermarket products. See exactly how much each ingredient costs, the per-serve price and a total estimate before you commit. Rate recipes, read reviews and add everything to your list in one tap."
          bullets={[
            "Ingredient costs matched to live supermarket prices",
            "Per-serve and total cost estimated automatically",
            "Rate recipes, leave reviews and share with others",
          ]}
          screenshot="/screenshots/recipe-detail.png"
          screenshotAlt="Recipe detail showing Porridge with Honey and Banana with ingredient cost breakdown"
        />
        <MiniFeatures />
        <Independence />
        <Download />
      </main>
      <Footer />
    </>
  );
}
