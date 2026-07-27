# Tallo Website: Project Handoff

**Version:** 5

**Updated:** 27 July 2026

**Repository:** `/Users/bretthevers/Documents/tallo-website`

**Branch:** `main`

**Last committed revision:** `37719a1 redesign: refresh Tallo marketing site`

**Current state:** Phase 1 through Phase 4 are implemented locally. The working tree contains uncommitted website changes. Nothing has been deployed or published.

---

## 1. What This Website Is Now

This is the marketing and organic-search website for Tallo, a free Australian shopping app.

Tallo currently helps people:

- Compare grocery prices across Coles, Woolworths and Aldi
- Compare liquor prices across BWS, Liquorland and Dan Murphy's
- Build, save and share shopping lists
- Compare complete store totals and use Multi-shop to find the cheapest split
- Scan product barcodes
- Plan meals and browse or create recipes
- Import recipes from supported website, social and video links
- View nearby fuel prices in a list or on a map
- Track completed shops and savings

The website is no longer a pre-launch waitlist page. Tallo is live, free and available on iOS and Android.

### Primary objectives

1. Explain Tallo clearly and convert visitors into app downloads.
2. Build trust through genuine product information, founder information, legal pages and useful answers.
3. Expand the site's organic-search surface beyond a single brochure page.
4. Create a foundation for recurring, data-led Australian grocery content.
5. Preserve the strong existing Tallo design rather than rebuilding the visual identity.

---

## 2. Why We Are Doing This Work

The supplied SEO plan identified that the previous single-page website gave search engines only one meaningful URL to index. It also lacked structured data, internal linking, a founder story, useful FAQ content and a content publishing strategy.

The current work deliberately separates that problem into phases:

- **Phase 1:** Fix the technical and homepage foundations.
- **Phase 2:** Add trustworthy, crawlable supporting pages and a focused download page.
- **Phase 3:** Build the recurring content engine that can earn non-branded search traffic.
- **Phase 4:** Add feature deep-dives and a press/media surface.
- **Phase 5+:** Scale authority using Tallo's real price data, publishing cadence and genuine performance signals.

The design approach is conservative: keep the established visual style and make only calculated changes needed for clarity, responsiveness, conversion or search visibility.

---

## 3. Product and Brand Facts

Treat these as source-of-truth guardrails for future copy.

- **Company:** Tallo Pty Ltd
- **Founder and Director:** Brett Hevers
- **Availability:** Australia-wide
- **Price caveat:** Some prices vary by state or location, particularly liquor prices
- **Price refresh:** Displayed grocery and liquor prices are updated weekly and include weekly specials
- **Platforms:** iOS and Android
- **Price:** Free to download and use
- **Public contact:** `info@talloapp.com.au`
- **Facebook:** `https://www.facebook.com/profile.php?id=61591547923897`
- **Instagram:** Placeholder only; Brett will provide the real URL later
- **TikTok:** Placeholder only; Brett will provide the real URL later

### Founder story now used

Brett is a father of two and has two dogs. Before Tallo, he ran a home-services business for ten years. The initial idea came after trying to verify a supermarket special while in a store with patchy reception. Tallo began as a simple A-or-B price comparison and grew into an all-in-one grocery, liquor, meal-planning, recipe and fuel app.

The founder principles reflected on the site are:

- Useful data
- Thoughtful privacy
- Ease of use in real shopping conditions

The approved founder quote is:

> “I want people to feel more in control of their weekly shop, with useful data, thoughtful privacy and less gaslighting.”
>
> Brett Hevers, Founder and Director

Do not invent founder details, download counts, review scores, savings totals, press coverage or product capabilities. Add those only when Brett supplies or verifies them.

---

## 4. Technical Stack and Hosting

- Next.js `16.2.9`
- App Router
- React `19.2.4`
- TypeScript
- Tailwind CSS v4 plus substantial custom CSS
- No third-party UI library
- Next.js Metadata API for titles, descriptions, canonical URLs and robots rules
- JSON-LD for app, FAQ and organisation/founder structured data

### Hosting decision

Vercel remains the intended platform.

It is the lowest-friction fit for this Next.js project, supports the current route handlers and static pages, and avoids introducing a hosting migration while the SEO structure is still being expanded.

There is no `.openai/hosting.json` Sites project in this repository. Do not migrate the project away from Vercel unless Brett explicitly changes the hosting decision.

---

## 5. Local Development

```bash
cd /Users/bretthevers/Documents/tallo-website
npm run dev
```

The local preview normally runs at:

`http://localhost:3000`

Production checks:

```bash
npm run lint
npm run build
```

As of 26 July 2026:

- ESLint passes
- TypeScript passes
- The production build passes
- All public marketing pages are statically generated
- `/api/waitlist` and `/receive/[code]` remain dynamic

The local development server was started in the current Codex session and should be kept running while Brett reviews the site.

### Known non-blocking development warnings

- Next.js reports that some nav/footer logo images have only one CSS dimension overridden at responsive sizes. Add the complementary `width: auto` or `height: auto` when doing the next CSS cleanup.
- Next.js recommends adding `data-scroll-behavior="smooth"` to the root `<html>` element because the global stylesheet uses smooth scrolling.

These warnings do not block the current build, but should be cleaned up before or alongside the next deployment review.

---

## 6. Current Routes

| Route | Indexing | Purpose |
|---|---:|---|
| `/` | Index | Main marketing page and primary grocery price-comparison landing page |
| `/features` | Index | Feature hub and internal-linking spine |
| `/blog` | Index | Article hub for weekly specials, price comparisons and saving guides |
| `/blog/weekly-specials` | Index | Stable weekly-specials page updated in place each Wednesday |
| `/blog/aldi-vs-woolworths-vs-coles` | Index | Honest supermarket-comparison methodology and guidance |
| `/blog/cheapest-supermarket-australia` | Index | Basket-led guide to finding the cheapest supermarket |
| `/blog/how-to-save-money-groceries` | Index | Evergreen Australian grocery-saving guide |
| `/about` | Index | Founder story, mission, company and trust information |
| `/faq` | Index | Useful product questions plus FAQPage structured data |
| `/download` | **Noindex, follow** | Focused paid-campaign/app-download landing page with no main navigation |
| `/privacy` | Index | Privacy policy |
| `/terms` | Index | Terms and conditions |
| `/delete-account` | Index | Account-deletion instructions |
| `/receive/[code]` | **Noindex, nofollow** | Shared-list app handoff route |
| `/robots.txt` | Not applicable | Generated robots rules |
| `/sitemap.xml` | Not applicable | Generated XML sitemap |
| `/api/waitlist` | Not applicable | Legacy Firestore waitlist endpoint; not currently linked from the marketing pages |

The `/download` route is intentionally left crawlable so search engines can read its `noindex` directive. It is intentionally excluded from the sitemap.

---

## 7. Homepage Structure

The homepage currently contains:

1. Fixed marketing navigation
2. Hero with direct App Store and Google Play downloads
3. Six-retailer logo rail
4. Grocery comparison and weekly-specials section
5. My Shop and Multi-shop section
6. Liquor comparison section
7. Nearby fuel section
8. Saved/shared lists and barcode scanning section
9. Meal planning and recipe pricing section
10. Recipe-import section
11. Savings/history/trust section
12. Final app-download section
13. Shared footer with internal and social links

Real app screenshots are used in reusable CSS phone frames. Promotional assets have been prioritised over generated imagery.

---

## 8. Completed Work

### Phase 1: Foundation and homepage SEO

Status: **Complete locally**

- Preserved and extended the current Tallo visual style
- Updated the homepage H1 to target grocery price comparison
- Added stronger homepage title and description
- Connected real App Store and Google Play destinations
- Added canonical URLs and social metadata
- Added a 1200×630 social-preview image
- Added MobileApplication JSON-LD to the homepage
- Added generated `robots.txt`
- Added generated `sitemap.xml`
- Added real app screenshots in reusable phone frames
- Expanded homepage product coverage to include fuel and recipe import
- Added per-page metadata helpers
- Added correct indexing rules for private/utility routes
- Fixed the Next.js/Turbopack project-root configuration

### Phase 2: Site structure, trust and conversion

Status: **Complete locally**

- Added `/features`
- Added `/about`
- Added `/faq`
- Added `/download`
- Expanded primary navigation and footer internal links
- Linked the My Shop and Meal Planner navigation items directly to their
  dedicated feature pages
- Added FAQPage structured data
- Added AboutPage/organisation/founder structured data
- Added Brett's genuine founder story and approved founder quote
- Added Australia-wide availability and state-based pricing guidance
- Added the real Facebook link
- Added non-clickable Instagram and TikTok placeholders
- Added unique metadata and canonical URLs for every new indexable page
- Kept `/download` out of organic results with `noindex, follow`
- Added new indexable pages to the sitemap
- Reused current screenshots and branding instead of changing the design language
- Verified lint, TypeScript, static generation and production build

---

## 9. Design Guardrails

Brett likes the current design. Future work should stay close to it.

### Current design language

- Off-white base: `#f6f5f0`
- Near-black: `#101113`
- Tallo blue: `#0877f9`
- Lime accent: `#caff52`
- Muted grey: `#6d6e70`
- Strong, tightly tracked headings
- Large rounded editorial panels
- Dark and electric-blue feature sections
- Real product screenshots inside consistent phone mockups
- Spacious desktop layouts with deliberate mobile stacking

### Rules for future changes

- **Strict punctuation rule:** Do not use em dashes anywhere in website copy,
  metadata, structured data, media materials or project documentation. Use
  commas, colons, semicolons, parentheses or full stops instead.
- Reuse `MarketingNav`, `MarketingFooter`, `InternalPage`, `PageHero`, `PageCta`, `Phone` and `JsonLd`.
- Reuse existing screenshots and promotional assets before sourcing or generating replacements.
- Keep marketing pages server-rendered/static unless an interaction genuinely requires a client component.
- Do not add a UI framework just for new marketing pages.
- Do not redesign the homepage while adding content pages.
- Avoid unverified statistics, testimonials or ratings.
- Keep copy Australian and practical rather than overly corporate.
- Ensure every new page works at desktop, tablet and mobile widths.

---

## 10. Key Files

| Purpose | File |
|---|---|
| Root layout and site-wide metadata | `app/layout.tsx` |
| Homepage | `app/page.tsx` |
| Shared metadata and store/social URLs | `app/lib/site.ts` |
| Shared navigation, footer and store badges | `app/components/MarketingChrome.tsx` |
| Shared internal-page structure | `app/components/InternalPage.tsx` |
| Reusable phone screenshot frame | `app/components/Phone.tsx` |
| Safe JSON-LD renderer | `app/components/JsonLd.tsx` |
| Homepage/global styling | `app/globals.css` |
| Internal-page styling | `app/marketing-pages.css` |
| Features hub | `app/features/page.tsx` |
| About/founder page | `app/about/page.tsx` |
| FAQ content and schema | `app/faq/page.tsx` |
| Focused download page | `app/download/page.tsx` |
| Feature content registry | `app/lib/features.ts` |
| Reusable feature deep-dive layout | `app/components/FeatureDetailPage.tsx` |
| Feature deep-dive route | `app/features/[slug]/page.tsx` |
| Feature deep-dive styling | `app/features/feature-detail.css` |
| Press and media page | `app/press/page.tsx` |
| Press-page styling | `app/press/press.css` |
| Downloadable media kit | `public/media/tallo-media-kit.zip` |
| Media-kit information sheet | `public/media/press-information.txt` |
| Blog article registry | `app/lib/articles.ts` |
| Blog hub | `app/blog/page.tsx` |
| Reusable article route and structured data | `app/blog/[slug]/page.tsx` |
| Article content | `app/blog/[slug]/ArticleContent.tsx` |
| Article cards and headers | `app/components/ArticleChrome.tsx` |
| Blog styling | `app/blog/blog.css` |
| Weekly-specials data | `content/weekly-specials.json` |
| Weekly content workflow | `content/README.md` |
| Content validation | `scripts/validate-content.mjs` |
| Sitemap | `app/sitemap.ts` |
| Robots rules | `app/robots.ts` |
| Legacy waitlist endpoint | `app/api/waitlist/route.ts` |

### Source material

- SEO plan: `/Users/bretthevers/Downloads/tallo_seo_website_plan.html`
- Product facts: `/Users/bretthevers/Documents/tallo-website/Tallo Information .txt`
- Promotional assets: `/Users/bretthevers/Documents/Tallo Promotional`
- Public website images: `public/`
- App screenshots: `public/screenshots/`
- Retailer logos: `public/stores/`

---

## 11. Phase 3: Recurring Search Content

Status: **Complete locally**

Phase 3 uses a lightweight, repository-managed content system with no CMS.

### Implemented

- Added a crawlable `/blog` guide hub
- Added one statically generated reusable article route
- Added per-article titles, descriptions, canonicals and social metadata
- Added BlogPosting, BreadcrumbList and visible FAQ structured data
- Added author, published and updated information
- Added related articles and contextual feature/download links
- Added Guides links to the primary navigation and footer
- Added all article URLs and modification dates to the generated sitemap
- Added responsive article, price-card, comparison-table and CTA layouts
- Added a manual weekly content file with build-time and standalone validation
- Added a documented Wednesday publishing workflow
- Published the four recommended launch articles locally

### Current weekly edition

The first local edition covers **22–28 July 2026** and uses Tallo's public
catalogue exports checked on 22 July.

- Five verified Coles specials
- Five verified Woolworths specials
- Three location-caveated liquor price checks
- No Aldi specials were invented: the current export contains Aldi everyday
  prices but zero Aldi products marked as on special
- Every listed deal includes its retailer source URL

The page remains at `/blog/weekly-specials` and must be updated in place each
Wednesday.

### Data and editorial guardrails

- Keep the current manual, reviewable JSON workflow until publishing volume
  justifies automation or a CMS.
- Publish only products explicitly marked as on special with a valid lower
  current price.
- Keep state/location caveats, particularly for liquor.
- Do not use the Aldi catalogue for unreviewed cross-store winner claims. The
  app handoff notes that Aldi equivalence coverage needs extra care because
  much of the range is private label.
- Run `npm run validate:content`, `npm run lint` and `npm run build` before
  publishing each edition.

### Measurement and discovery

- Verify the production domain in Google Search Console
- Submit `/sitemap.xml`
- Add Google Analytics 4 after Brett supplies the measurement ID
- Run PageSpeed Insights against the deployed production pages
- Monitor indexed pages, impressions and queries weekly

### Email capture decision

The old waitlist is no longer the right message because the app has launched.

If email capture returns, it should have a current purpose such as:

- Weekly specials digest
- Saving tips/newsletter
- Product updates

Choose the purpose and provider before exposing a form. Do not reconnect the legacy waitlist form without updating its consent language, abuse controls and backend rules.

---

## 12. Phase 4: Feature Depth and Press

Status: **Complete locally**

### Feature deep-dive pages

Added six dedicated, internally linked pages:

- `/features/grocery-prices`
- `/features/liquor-prices`
- `/features/myshop`
- `/features/meal-planner`
- `/features/barcode-scanner`
- `/features/fuel-checker`

Each deep-dive includes:

- One keyword-focused H1
- A practical three-step explanation and real feature walkthrough
- Relevant screenshots
- Clear limitations or data-refresh information
- Links to related features and articles
- App download CTA
- Unique metadata and canonical URL
- MobileApplication, BreadcrumbList and FAQPage structured data

The pages are generated from `app/lib/features.ts` through one reusable static
route. This keeps product facts, related links, screenshots and limitations
consistent while allowing each page to target a distinct search intent.

### Press and media page

Added `/press` with:

- Copy-ready Tallo description
- Brett's approved short bio and founder quote
- App Store and Google Play links
- High-resolution logos and screenshots
- Media contact
- Direct individual asset downloads
- A downloadable ZIP media kit containing verified copy, four brand assets and
  five current app screenshots

No coverage logos or links were added because none were supplied. A branded
founder card is used instead of inventing or sourcing an unapproved headshot.

### Conversion improvements

- Added campaign parameters to feature-page and press-page store links
- Kept the original App Store and Google Play destinations
- Added the press page to the shared footer
- Added all six feature pages and the press page to the sitemap
- Linked the feature hub cards to their detailed pages
- Redesigned the My Shop page below the hero with a clearer three-stage
  workflow, paired product walkthroughs, contained guidance and FAQ panels, and
  a simpler related-content grid
- Redesigned the Meal Planner page below the hero with pastel workflow cards,
  paired recipe walkthroughs, softer guidance and FAQ panels, and pastel
  related-content and download sections

Device-aware CTA emphasis remains optional. Conversion event tracking remains
intentionally deferred until Brett supplies a GA4 measurement ID.

### Phase 4 verification

- `npm run validate:content`: passed
- `npm run lint`: passed
- `npm run build`: passed
- All six feature pages: HTTP 200 locally
- `/press`: HTTP 200 locally
- `/media/tallo-media-kit.zip`: HTTP 200 locally and archive integrity passed
- `/sitemap.xml`: HTTP 200 locally

---

## 13. Phase 5: Authority, Data and Scale

Status: **Planned**

Phase 5 turns the completed local website into a measurable, trusted Australian
shopping-data publication. It should not begin by producing dozens of thin
articles. The priorities are to publish the approved Phase 1 through Phase 4
work, establish measurement, protect the weekly publishing cadence and then
build defensible first-party data content.

The traffic, ranking, backlink and indexed-page figures in the supplied SEO plan
are stretch ambitions rather than forecasts. Success should be measured through
useful content, qualified organic traffic, app-store intent and genuine earned
coverage rather than page count alone.

### 13.1 Launch and establish a baseline

Before expanding the site further:

1. Review the current site with Brett at desktop, tablet and mobile sizes.
2. Resolve the remaining image-sizing and smooth-scroll development warnings.
3. Run content validation, linting, TypeScript and the production build.
4. Commit the approved Phase 1 through Phase 4 work.
5. Deploy to Vercel only after Brett gives explicit approval.
6. Verify the preferred-domain and `www` redirect/canonical behaviour.
7. Test the sitemap, robots rules, structured data, store links and the
   `/download` `noindex, follow` directive in production.
8. Verify Google Search Console and submit `/sitemap.xml`.
9. Add GA4 after Brett supplies the measurement ID.
10. Record baseline PageSpeed, index coverage, organic-query and app-store-click
    measurements.

Adding more local pages before the current work is published will not create
organic-search results.

### 13.2 Protect the Wednesday publishing cadence

The recurring `/blog/weekly-specials` page remains the highest-priority content
asset.

Every Wednesday:

- Replace the previous edition on the same stable URL.
- Use only verified specials with valid current and previous prices.
- Record the retailer, source URL, checked date, offer dates and any geographic
  caveats.
- Do not manufacture Aldi specials when the source data identifies none.
- Clearly distinguish supermarket specials from location-dependent liquor
  prices.
- Update the title, description, visible dates and sitemap modification date.
- Run the content validator, review the shortlist and complete production checks
  before publishing.

The next scheduled edition is Wednesday 29 July 2026.

### 13.3 Make Tallo's data defensible

Before publishing stronger comparison claims, add and use a consistent
methodology covering:

- How prices are collected and refreshed
- Which locations or states the data represents
- How equivalent products, brands and pack sizes are matched
- How unit prices, specials and unavailable products are treated
- How a representative basket is constructed
- Who reviewed the results and when
- Important limitations, especially Aldi private-label matching and liquor
  geography

Phase 5 content enters cost-of-living and household-budget territory. Report
“prices observed in Tallo's dataset” unless the evidence genuinely supports a
broader national or household-spending claim.

### 13.4 Publish the next data-led articles

Proposed order:

1. **Dan Murphy's vs BWS vs Liquorland:** Publish after the liquor export's
   geographic scope is confirmed.
2. **Is split shopping worth it?** Compare a one-store total with Tallo
   Multi-shop using a disclosed basket.
3. **Australian grocery budget guide:** Combine authoritative external
   statistics with clearly labelled Tallo examples.
4. **Budget family dinners under $20:** Use real recipe quantities and current
   retailer prices.
5. **Aldi dupes and equivalents:** Publish only after Brett reviews every
   product match.
6. **Best Australian grocery comparison apps:** Use honest comparison criteria
   and clearly disclose that Tallo publishes the article.
7. **Meal-planning and fuel guides:** Support the matching feature pages and
   broaden relevant search coverage.

Each article should contain first-party evidence, accurate authorship,
methodology, sources, useful internal links, appropriate structured data and a
clear app-download CTA. Do not publish to a target word count or mass-produce
pages only to increase the number indexed by Google.

### 13.5 Produce the flagship quarterly price report

The quarterly Tallo grocery price report is the centrepiece of Phase 5.

The first report should include:

- A fixed, reproducible basket and comparison methodology
- Store and category totals
- Unit-price comparisons where appropriate
- The largest observed price increases and decreases
- Clear separation between everyday pricing and specials
- Geographic, matching and product-availability limitations
- Tables or charts that can be quoted accurately
- A downloadable, appropriately anonymised data summary if permitted
- A concise press release and media pitch based on the verified findings

Publish the report as a genuine source journalists and other publications can
cite. Preserve individual quarterly editions when they remain useful, rather
than changing dates without materially updating the content.

### 13.6 Earn genuine coverage and links

Use the existing press page and media kit to prepare focused outreach for:

- Finder and CHOICE
- Australian consumer and personal-finance publications
- Cost-of-living journalists
- Parenting and family-budget publications
- Australian startup publications
- Relevant podcasts and existing app roundups

Lead with useful data or a genuine founder/product story, not a request for a
backlink. Track the contact, pitch angle, response, coverage, link and referral
traffic.

Avoid purchased links, automated submissions, artificial guest-post schemes and
optimised forum-link campaigns. Links should be earned through useful resources,
real reporting and authentic participation.

### 13.7 Improve conversion using evidence

After analytics is operating:

- Track App Store and Google Play clicks as separate conversion events.
- Standardise campaign parameters across all page and CTA types.
- Measure organic-page-to-store click-through rates.
- Emphasise the likely device's store button without making the other platform
  inaccessible.
- Test CTA wording and placement on pages already receiving meaningful traffic.
- Add email capture only after choosing its purpose, provider, consent language
  and abuse protection.
- Add download, review, savings or rating figures only when they are verified and
  current.
- Add publication logos only after genuine coverage exists.
- Add aggregate-rating schema only when the real store rating and rating count
  are supplied and current.

### 13.8 Review performance and choose expansion topics

Weekly review:

- Search Console indexing and crawl issues
- Queries, impressions, clicks and average position
- Weekly-specials freshness and retailer-link accuracy
- App-store CTA conversion events

Monthly review:

- Pages receiving impressions but weak click-through
- Relevant queries ranking around positions 5–20
- Internal-link gaps
- Referring domains and earned coverage
- PageSpeed and Core Web Vitals
- Organic-landing-page to app-store-click conversion
- Content requiring a substantive update

Use Search Console evidence to select future category comparisons. Potential
topics include meat, dairy, pantry staples and household essentials, but they
should be published only when Tallo has sufficiently complete and comparable
data.

FAQ structured data may help systems understand the page, but commercial sites
should not expect Google FAQ rich results. Structured data must reflect visible,
verified content and does not guarantee enhanced search results.

### 13.9 Proposed sequence

- **Week 1:** Final review, cleanup, deployment and measurement setup
- **Every Wednesday:** Publish the verified weekly-specials edition
- **Weeks 2–4:** Methodology framework, liquor comparison and split-shopping
  study
- **Month 2:** Grocery-budget and family-dinner content; begin focused outreach
- **Month 3:** First quarterly price report and coordinated media outreach
- **Ongoing:** Use Search Console and conversion evidence to improve existing
  pages and choose the next data-led topics

### 13.10 Inputs required for Phase 5

- Explicit approval to commit and deploy
- Google Search Console access or verification method
- Google Analytics 4 measurement ID
- Confirmation of the liquor data's geographic scope
- A nominated reviewer for the weekly-specials shortlist
- Brett's approval of product-equivalence and basket methodologies
- A decision on newsletter purpose and provider before adding email capture
- Verified download, savings, rating or review figures before using social proof

Consider a CMS only when the recurring repository-managed publishing workflow
becomes difficult to maintain.

---

## 14. Inputs Still Needed From Brett

None of these block the current Phase 4 implementation.

- Instagram profile URL
- TikTok profile URL
- Optional founder photo/headshot
- Google Analytics 4 measurement ID
- Google Search Console verification method or access
- Confirmation of the geographic scope represented by the liquor export
- Confirmation of who will review/update the weekly-specials shortlist each Wednesday
- Any verified download count, savings total or store review metrics

---

## 15. Legacy Waitlist/Firebase Notes

The project still contains:

- `app/components/WaitlistForm.tsx`
- `app/api/waitlist/route.ts`

The current marketing pages do not use them.

The endpoint writes to the Firebase project `shopsmartau-7657e` and its rule-deployment status is unknown. It also has no explicit rate limiting, CAPTCHA or duplicate-email handling.

Before reusing it:

1. Confirm the Firestore rules are deployed and limited correctly.
2. Add abuse protection and duplicate handling.
3. Update the purpose from “launch waitlist” to a clearly described newsletter or product-update subscription.
4. Add appropriate consent and privacy copy.

Otherwise, remove the unused form and endpoint in a later cleanup.

---

## 16. Deployment and Release Checklist

Vercel is still the intended production host, but deployment has not been performed in this work session.

Before deploying, after local review and approval:

- [ ] Review the uncommitted Phase 1 through Phase 4 changes
- [ ] Confirm no unrelated user changes are accidentally included
- [ ] Commit the approved website work
- [ ] Push the repository used by Vercel
- [ ] Deploy or allow Vercel to build from the pushed branch
- [ ] Verify `talloapp.com.au` and preferred `www` redirect/canonical behaviour
- [ ] Confirm `/robots.txt`
- [ ] Confirm `/sitemap.xml`
- [ ] Confirm `/download` returns `noindex, follow`
- [ ] Confirm App Store and Google Play links
- [ ] Submit the sitemap in Google Search Console
- [ ] Run production PageSpeed Insights on mobile and desktop
- [ ] Check social preview image on a deployed public URL

Do not deploy placeholder statistics, fake reviews, invented comparison results or unverified weekly prices.

---

## 17. Immediate Recommended Next Step

After Brett reviews the Phase 4 pages locally:

1. Make any visual/copy adjustments.
2. Confirm the liquor data's geographic scope and approve the current weekly shortlist.
3. Test the final approved site again.
4. Commit the approved Phase 1 through Phase 4 work.
5. Publish only when Brett explicitly requests it.
6. After publishing, verify Search Console and submit the sitemap.
7. Add GA4 after Brett supplies the measurement ID.
8. Update `/blog/weekly-specials` with the next catalogue refresh on Wednesday
   29 July 2026.
