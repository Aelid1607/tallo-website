import Image from "next/image";
import Link from "next/link";
import WaitlistForm from "./components/WaitlistForm";

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
        <Image
          src="/tallo-logo.svg"
          alt="Tallo"
          width={160}
          height={48}
          priority
        />
        <a
          href="#download"
          className="text-sm font-medium px-4 py-2 rounded-full transition-opacity hover:opacity-80"
          style={{ background: "var(--black)", color: "var(--bg)" }}
        >
          Get the app
        </a>
      </div>
    </header>
  );
}

function PhoneMockup() {
  return (
    <div className="relative flex justify-center items-start">
      <div
        style={{
          width: 260,
          height: 540,
          background: "#111",
          borderRadius: 44,
          padding: 10,
          boxShadow: "0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.08), inset 0 0 0 1px rgba(255,255,255,0.06)",
          position: "relative",
          flexShrink: 0,
        }}
      >
        {/* Side buttons */}
        <div style={{ position: "absolute", right: -3, top: 100, width: 3, height: 40, background: "#2a2a2a", borderRadius: "0 2px 2px 0" }} />
        <div style={{ position: "absolute", left: -3, top: 88, width: 3, height: 28, background: "#2a2a2a", borderRadius: "2px 0 0 2px" }} />
        <div style={{ position: "absolute", left: -3, top: 126, width: 3, height: 28, background: "#2a2a2a", borderRadius: "2px 0 0 2px" }} />
        <div style={{ position: "absolute", left: -3, top: 164, width: 3, height: 52, background: "#2a2a2a", borderRadius: "2px 0 0 2px" }} />

        {/* Screen */}
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "#F5F5F3",
            borderRadius: 36,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Dynamic island */}
          <div style={{ display: "flex", justifyContent: "center", paddingTop: 12, paddingBottom: 4, background: "#F5F5F3" }}>
            <div style={{ width: 80, height: 22, background: "#111", borderRadius: 11 }} />
          </div>

          {/* Status bar */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "2px 20px 6px", fontSize: 9, fontWeight: 600, color: "#0A0A0A" }}>
            <span>9:41</span>
            <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
              <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                <rect x="0" y="3" width="2" height="6" rx="1" fill="#0A0A0A" />
                <rect x="3" y="2" width="2" height="7" rx="1" fill="#0A0A0A" />
                <rect x="6" y="1" width="2" height="8" rx="1" fill="#0A0A0A" />
                <rect x="9" y="0" width="2" height="9" rx="1" fill="#0A0A0A" />
              </svg>
              <svg width="14" height="9" viewBox="0 0 14 9" fill="none">
                <rect x="1" y="1" width="10" height="7" rx="2" stroke="#0A0A0A" strokeWidth="1.2" />
                <rect x="2.5" y="2.5" width="7" height="4" rx="1" fill="#0A0A0A" />
                <path d="M12 3.5v2a1 1 0 0 0 0-2z" fill="#0A0A0A" />
              </svg>
            </div>
          </div>

          {/* App header */}
          <div style={{ padding: "6px 16px 10px", background: "#F5F5F3" }}>
            <div style={{ fontSize: 18, fontWeight: 700, color: "#0A0A0A", letterSpacing: "-0.03em", marginBottom: 10 }}>
              tallo<span style={{ color: "#0070F3" }}>.</span>
            </div>
            {/* Search bar */}
            <div style={{ background: "#E8E8E6", borderRadius: 12, padding: "8px 12px", display: "flex", alignItems: "center", gap: 8 }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2.5" strokeLinecap="round">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
              <span style={{ fontSize: 11, color: "#888" }}>Search 21,000 products…</span>
            </div>
          </div>

          {/* Store tabs */}
          <div style={{ display: "flex", gap: 6, padding: "0 16px 10px", overflowX: "auto" }}>
            {["All", "Coles", "Woolworths", "Aldi"].map((s, i) => (
              <div key={s} style={{ flexShrink: 0, fontSize: 10, fontWeight: 600, padding: "4px 10px", borderRadius: 20, background: i === 0 ? "#0A0A0A" : "#E8E8E6", color: i === 0 ? "#fff" : "#555" }}>{s}</div>
            ))}
          </div>

          {/* Products */}
          <div style={{ flex: 1, overflowY: "auto", padding: "0 16px", display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { name: "Tim Tam Original", weight: "200g", coles: "$3.50", woolies: "$3.50", aldi: "$2.99", best: "aldi" },
              { name: "Weet-Bix", weight: "750g", coles: "$4.50", woolies: "$4.00", aldi: "–", best: "woolies" },
              { name: "Mainland Tasty Cheddar", weight: "500g", coles: "$8.50", woolies: "$7.50", aldi: "$6.99", best: "aldi" },
            ].map((p) => (
              <div key={p.name} style={{ background: "#fff", borderRadius: 14, padding: "10px 12px", boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: "#0A0A0A", marginBottom: 2 }}>{p.name}</div>
                <div style={{ fontSize: 9, color: "#888", marginBottom: 8 }}>{p.weight}</div>
                <div style={{ display: "flex", gap: 6 }}>
                  {[
                    { store: "Coles", price: p.coles, key: "coles", color: "#E31837" },
                    { store: "Woolies", price: p.woolies, key: "woolies", color: "#007837" },
                    { store: "Aldi", price: p.aldi, key: "aldi", color: "#004A96" },
                  ].map((s) => (
                    <div
                      key={s.store}
                      style={{
                        flex: 1,
                        textAlign: "center",
                        padding: "5px 4px",
                        borderRadius: 8,
                        background: p.best === s.key ? "#E8F0FE" : "#F5F5F3",
                        border: p.best === s.key ? "1px solid #0070F3" : "1px solid transparent",
                      }}
                    >
                      <div style={{ fontSize: 7.5, color: s.color, fontWeight: 600, marginBottom: 2 }}>{s.store}</div>
                      <div style={{ fontSize: 11, fontWeight: 700, color: p.best === s.key ? "#0070F3" : "#0A0A0A" }}>{s.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Specials pill */}
            <div style={{ background: "#0070F3", borderRadius: 14, padding: "10px 14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, color: "#fff" }}>This week&apos;s specials</div>
                <div style={{ fontSize: 8.5, color: "rgba(255,255,255,0.7)" }}>243 products on sale now</div>
              </div>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Bottom nav */}
          <div style={{ display: "flex", justifyContent: "space-around", padding: "10px 8px 14px", background: "#fff", borderTop: "1px solid #E8E8E6" }}>
            {[
              { label: "Home", active: true, icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg> },
              { label: "List", active: false, icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg> },
              { label: "Scan", active: false, icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg> },
              { label: "Profile", active: false, icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg> },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3, color: item.active ? "#0070F3" : "#999" }}>
                {item.icon}
                <span style={{ fontSize: 7.5, fontWeight: item.active ? 600 : 400 }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: copy */}
          <div>
            <div
              className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full text-xs font-medium"
              style={{ background: "#E8F0FE", color: "var(--blue)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--blue)" }} />
              Coming soon to iPhone &amp; Android
            </div>
            <h1
              className="text-5xl font-bold leading-none mb-6"
              style={{ letterSpacing: "-0.04em", color: "var(--black)" }}
            >
              Know what your
              <br />
              grocery shop costs
              <br />
              <span style={{ color: "var(--blue)" }}>before you leave.</span>
            </h1>
            <p className="text-lg leading-relaxed mb-10" style={{ color: "var(--muted)" }}>
              Tallo compares prices across Coles, Woolworths, and Aldi so you
              always know where to shop — and how much you&apos;ll save.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 flex-wrap">
                {/* iOS — intentionally inactive */}
                <div
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold select-none"
                  style={{ background: "var(--black)", color: "rgba(255,255,255,0.5)", cursor: "default" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  App Store
                </div>
                {/* Android — intentionally inactive */}
                <div
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold select-none"
                  style={{ background: "#E8F5EE", color: "#5DAA7A", cursor: "default" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.523 15.341A6.979 6.979 0 0 0 19 11a7 7 0 0 0-7-7 7 7 0 0 0-7 7 6.98 6.98 0 0 0 1.477 4.341L4 19h16l-2.477-3.659zM7.5 11a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z" />
                  </svg>
                  Google Play
                </div>
              </div>
              <p className="text-xs font-medium" style={{ color: "var(--muted)" }}>
                Available soon — <a href="#download" className="underline underline-offset-2">get notified at launch ↓</a>
              </p>
            </div>
          </div>

          {/* Right: phone mockup — scaled up, pinned to top */}
          <div className="flex justify-center lg:justify-end" style={{ marginTop: "-24px" }}>
            <div style={{ transform: "scale(1.28)", transformOrigin: "top center" }}>
              <PhoneMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
    title: "Three stores, one search",
    body: "Search any product and instantly see what it costs at Coles, Woolworths, and Aldi side by side. No tab-switching, no guesswork.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    title: "Specials worth knowing about",
    body: "See every current special across all three stores, filtered by category. Sorted by percentage saving so the best deals float to the top.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="3" y1="15" x2="21" y2="15" />
        <line x1="9" y1="3" x2="9" y2="21" />
        <line x1="15" y1="3" x2="15" y2="21" />
      </svg>
    ),
    title: "Filter by diet",
    body: "Browse gluten-free, vegan, vegetarian, or high-protein across the full catalogue. Find what works for you without scrolling through everything else.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Save what you buy",
    body: "Favourite your regular products and build a shopping list as you browse. Everything is saved to your account so it's there when you need it.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    title: "Scan a barcode",
    body: "Point your camera at any grocery barcode to instantly look up the product. Can't find something? Submit it and help improve the catalogue.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "~21,000 products",
    body: "A catalogue built from real supermarket data, refreshed regularly. If something's missing or wrong, report it directly from the app.",
  },
];

function WhatIsTallo() {
  return (
    <section id="what-is-tallo" className="py-28 px-6" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--blue)" }}>
            What is Tallo
          </p>
          <h2 className="text-4xl font-bold max-w-2xl" style={{ letterSpacing: "-0.03em", color: "var(--black)" }}>
            A smarter way to shop for groceries in Australia.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "var(--border)" }}>
          {features.map((f) => (
            <div key={f.title} className="p-8 flex flex-col gap-4" style={{ background: "var(--bg)" }}>
              <div style={{ color: "var(--blue)" }}>{f.icon}</div>
              <h3 className="text-base font-semibold" style={{ color: "var(--black)" }}>{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const stats = [
  { label: "Products in the catalogue", value: "~21,000" },
  { label: "Stores compared", value: "3" },
  { label: "Australian-made", value: "100%" },
  { label: "Ads shown", value: "Zero" },
];

function About() {
  return (
    <section id="about" className="py-28 px-6" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--blue)" }}>
              Who we are
            </p>
            <h2 className="text-4xl font-bold mb-8" style={{ letterSpacing: "-0.03em", color: "var(--black)" }}>
              Built in Australia,<br />for Australians.
            </h2>
            <div className="space-y-5 text-base leading-relaxed" style={{ color: "var(--muted)" }}>
              <p>
                Tallo was built by{" "}
                <span style={{ color: "var(--black)", fontWeight: 500 }}>Brett</span>,
                a solo developer based in Australia. The idea came from a simple frustration:
                why is it so hard to know which supermarket is actually cheaper before you get there?
              </p>
              <p>
                Every week, millions of Australians make the same guesses — Aldi for this, Woolies
                for that, Coles for the specials. Tallo removes the guesswork. One app, three stores,
                real prices.
              </p>
              <p>
                There&apos;s no funding, no team, no corporate backing. Just a product that
                genuinely tries to save people money on their weekly shop.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center justify-between p-6"
                style={{ border: "1px solid var(--border)", borderRadius: "12px" }}
              >
                <span className="text-sm" style={{ color: "var(--muted)" }}>{stat.label}</span>
                <span className="text-2xl font-bold" style={{ color: "var(--black)", letterSpacing: "-0.03em" }}>
                  {stat.value}
                </span>
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
            Download
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ letterSpacing: "-0.04em", color: "#fff" }}>
            Coming soon to iPhone &amp; Android.
          </h2>
          <p className="text-lg mb-10 max-w-md mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
            Tallo is in final testing ahead of its App Store and Google Play launch. Drop your email and we&apos;ll let you know the moment it&apos;s live.
          </p>
          <WaitlistForm />
          <div className="flex items-center justify-center gap-3 flex-wrap mt-8">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium select-none"
              style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.35)", cursor: "default" }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              App Store — Available soon
            </div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium select-none"
              style={{ background: "rgba(61,220,132,0.08)", color: "rgba(61,220,132,0.4)", cursor: "default" }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.523 15.341A6.979 6.979 0 0 0 19 11a7 7 0 0 0-7-7 7 7 0 0 0-7 7 6.98 6.98 0 0 0 1.477 4.341L4 19h16l-2.477-3.659zM7.5 11a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z" />
              </svg>
              Google Play — Available soon
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 px-6" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <Image src="/tallo-logo.svg" alt="Tallo" width={100} height={30} />
        <div className="flex items-center gap-6 text-sm" style={{ color: "var(--muted)" }}>
          <Link href="/privacy" className="transition-opacity hover:opacity-70" style={{ color: "inherit" }}>
            Privacy Policy
          </Link>
          <Link href="/terms" className="transition-opacity hover:opacity-70" style={{ color: "inherit" }}>
            Terms & Conditions
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
        <WhatIsTallo />
        <About />
        <Download />
      </main>
      <Footer />
    </>
  );
}
