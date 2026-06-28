import Image from "next/image";
import Link from "next/link";
import WaitlistForm from "./components/WaitlistForm";

const TESTFLIGHT_URL = "https://testflight.apple.com/join/4VfPe7z1";

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
          href={TESTFLIGHT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold px-4 py-2 rounded-full transition-opacity hover:opacity-80"
          style={{ background: "var(--black)", color: "var(--bg)" }}
        >
          Try on iOS
        </a>
      </div>
    </header>
  );
}

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
      {/* Power button */}
      <div style={{ position: "absolute", right: -3, top: Math.round(width * 0.41), width: 3, height: Math.round(width * 0.17), background: "#2a2a2a", borderRadius: "0 2px 2px 0" }} />
      {/* Silent + volume */}
      <div style={{ position: "absolute", left: -3, top: Math.round(width * 0.30), width: 3, height: Math.round(width * 0.10), background: "#2a2a2a", borderRadius: "2px 0 0 2px" }} />
      <div style={{ position: "absolute", left: -3, top: Math.round(width * 0.45), width: 3, height: Math.round(width * 0.14), background: "#2a2a2a", borderRadius: "2px 0 0 2px" }} />
      <div style={{ position: "absolute", left: -3, top: Math.round(width * 0.63), width: 3, height: Math.round(width * 0.14), background: "#2a2a2a", borderRadius: "2px 0 0 2px" }} />

      <div style={{ borderRadius: ir, overflow: "hidden" }}>
        <Image
          src={src}
          alt={alt}
          width={inner}
          height={Math.round(inner * 2.165)}
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
            />
            <div
              className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full text-xs font-semibold"
              style={{ background: "#E8F5EE", color: "#2A8A50" }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#2A8A50" }} />
              Now live on iOS TestFlight
            </div>
            <h1
              className="text-5xl font-bold leading-none mb-6"
              style={{ letterSpacing: "-0.04em", color: "var(--black)" }}
            >
              Know exactly what
              <br />
              your groceries cost
              <br />
              <span style={{ color: "var(--blue)" }}>before you leave home.</span>
            </h1>
            <p className="text-lg leading-relaxed mb-10" style={{ color: "var(--muted)" }}>
              Tallo compares 20,000+ products across Coles, Woolworths and Aldi.
              Independent, unsponsored and your data stays on your device.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 flex-wrap">
                <a
                  href={TESTFLIGHT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full text-sm font-semibold transition-opacity hover:opacity-85"
                  style={{ background: "var(--black)", color: "#fff" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  Download on TestFlight
                </a>
                <div
                  className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full text-sm font-semibold select-none"
                  style={{ background: "#E8F5EE", color: "#5DAA7A", cursor: "default" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.523 15.341A6.979 6.979 0 0 0 19 11a7 7 0 0 0-7-7 7 7 0 0 0-7 7 6.98 6.98 0 0 0 1.477 4.341L4 19h16l-2.477-3.659zM7.5 11a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z" />
                  </svg>
                  Android, coming soon
                </div>
              </div>
              <p className="text-xs" style={{ color: "var(--muted)" }}>
                Free to join, no invite code needed
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end" style={{ marginTop: "-16px" }}>
            <div style={{ transform: "scale(1.12)", transformOrigin: "top center" }}>
              <PhoneFrame
                src="/screenshots/price-comparison.png"
                alt="Tallo showing price comparison across Coles, Woolworths and Aldi"
                width={280}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  const stats = [
    { value: "20,000+", label: "products tracked" },
    { value: "3", label: "stores compared" },
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
    <section className="py-28 px-6" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className={`flex justify-center ${phoneRight ? "lg:order-last" : ""}`}>
            <PhoneFrame src={screenshot} alt={screenshotAlt} width={280} />
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
    body: "Point your camera at any grocery barcode to compare prices across all three stores in seconds. 22,000+ barcodes in the database.",
    screenshot: "/screenshots/scanner.jpg",
    alt: "Barcode scanner screen",
  },
  {
    label: "Dietary Filters",
    body: "Filter the full catalogue by Gluten Free, Vegan, Vegetarian or High Protein. Browse 20,000 products your way.",
    screenshot: "/screenshots/dietary-filters.png",
    alt: "Dietary filters screen",
  },
  {
    label: "Loyalty Cards",
    body: "Store your Flybuys and Everyday Rewards barcodes in the app. Always on hand when you reach the checkout.",
    screenshot: "/screenshots/loyalty-card.jpg",
    alt: "Loyalty cards screen",
  },
  {
    label: "Favourites",
    body: "Heart any product to save it. Quick access from your profile with live pricing every time you check.",
    screenshot: "/screenshots/favourite-list.jpg",
    alt: "Favourites list screen",
  },
];

function MiniFeatures() {
  return (
    <section className="py-28 px-6" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--blue)" }}>
            More features
          </p>
          <h2 className="text-4xl font-bold max-w-lg" style={{ letterSpacing: "-0.03em", color: "var(--black)" }}>
            Everything else you&apos;d want.
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
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
      body: "Tallo has no relationship with Coles, Woolworths or Aldi. No sponsorship, no paid placements, no affiliate deals. Prices are sourced directly from public catalogues.",
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
    <section className="py-28 px-6" style={{ borderTop: "1px solid var(--border)" }}>
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
            Available now on iOS.
          </h2>
          <p className="text-lg mb-10 max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
            Join the public beta on TestFlight. Free to download, no invite code needed.
          </p>

          <a
            href={TESTFLIGHT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-semibold transition-opacity hover:opacity-90 mb-16"
            style={{ background: "#fff", color: "var(--black)" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download on TestFlight
          </a>

          <div className="flex items-center gap-4 max-w-sm mx-auto mb-10">
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.1)" }} />
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.25)" }}>
              Android waitlist
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.1)" }} />
          </div>

          <WaitlistForm />
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
          label="Weekly Specials"
          title="Every special, across every store."
          body="Browse this week's specials by store and category. A 5-week tracker shows which store has run more deals over time, so you know where the real value is, not just this week."
          bullets={[
            "5,000+ specials tracked each week",
            "Filter by store and product category",
            "5-week history chart to spot patterns",
          ]}
          screenshot="/screenshots/savings.jpg"
          screenshotAlt="Weekly specials screen showing discounts across all stores"
        />
        <FeatureSection
          label="Smart Shopping List"
          title="See your list sorted by where it&rsquo;s cheapest."
          body="Add products as you browse and your list automatically calculates the total at each store. Switch into in-store Shopping Mode and items are organised by category, ready to grab and go."
          bullets={[
            "Running totals for Coles, Woolworths and Aldi",
            "Cheapest store badge calculated automatically",
            "In-store mode with checkboxes by category",
          ]}
          screenshot="/screenshots/shopping-list.jpg"
          screenshotAlt="Shopping list screen with store totals and cheapest store badge"
          phoneRight
        />
        <FeatureSection
          label="Recipes"
          title="Recipes that show you what they actually cost."
          body="Browse curated recipes with the real cost to make based on live supermarket prices. Choose your store, swap ingredients for cheaper options, and add everything straight to your shopping list in one tap."
          bullets={[
            "Real ingredient prices, updated weekly",
            "Choose which store you're shopping at",
            "One tap to add all ingredients to your list",
          ]}
          screenshot="/screenshots/recipe-screen.png"
          screenshotAlt="Recipe screen showing Bacon & Eggs with ingredient costs"
        />
        <FeatureSection
          label="Meal Planning"
          title="Plan your week. Know what it&rsquo;ll cost."
          body="Slot recipes into Breakfast, Lunch and Dinner across the week. Use Feeling Lucky to auto-fill your week, then tap Add to List to shop for everything at once. A separate Lunchbox Planner covers Mon–Fri with Main, Fruit, Snack and Drink slots."
          bullets={[
            "Full week view with estimated cost per day",
            "Feeling Lucky auto-fills your week",
            "Separate Lunchbox Planner for school days",
          ]}
          screenshot="/screenshots/meal-planning.jpg"
          screenshotAlt="Meal planning screen showing a week with breakfast, lunch and dinner"
          phoneRight
        />
        <FeatureSection
          label="Price Watch"
          title="See what&rsquo;s gone up and what&rsquo;s been shrunk."
          body="Tallo tracks price changes and size reductions across the catalogue every week. See exactly when prices rose, by how much, and catch shrinkflation before it catches you."
          bullets={[
            "Price rises, drops and shrinkflation tracked",
            "Filter by category",
            "Confirmed changes with exact detection dates",
          ]}
          screenshot="/screenshots/price-tracker.jpg"
          screenshotAlt="Price watch screen tracking price rises and shrinkflation"
        />
        <MiniFeatures />
        <Independence />
        <Download />
      </main>
      <Footer />
    </>
  );
}
