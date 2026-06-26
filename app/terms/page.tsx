import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions — Tallo",
  description: "The terms and conditions governing your use of the Tallo app.",
};

export default function TermsPage() {
  return (
    <>
      <header style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold transition-opacity hover:opacity-70"
            style={{ color: "var(--black)", letterSpacing: "-0.03em" }}
          >
            tallo
          </Link>
          <Link href="/" className="text-sm" style={{ color: "var(--muted)" }}>
            ← Back
          </Link>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-20">
        <div className="mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--blue)" }}
          >
            Legal
          </p>
          <h1
            className="text-4xl font-bold mb-3"
            style={{ letterSpacing: "-0.03em", color: "var(--black)" }}
          >
            Terms & Conditions
          </h1>
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            Last updated: 20 June 2026
          </p>
        </div>
        <div className="prose-legal">
          <Section title="1. Agreement to These Terms">
            <p>
              By downloading, installing, or using the Tallo mobile application
              (&quot;the App&quot;), you agree to be bound by these Terms and
              Conditions (&quot;Terms&quot;). If you do not agree, do not use the App.
            </p>
            <p>
              These Terms constitute a legally binding agreement between you and
              Tallo (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), a sole trader business registered
              in Australia (talloapp.com.au).
            </p>
            <p>
              These Terms should be read together with our{" "}
              <Link href="/privacy">Privacy Policy</Link>.
            </p>
          </Section>

          <Section title="2. Licence Grant">
            <p>
              We grant you a limited, non-exclusive, non-transferable, revocable
              licence to download and use the App on a device you own or control,
              solely for your personal, non-commercial use.
            </p>
            <p>This licence does not include the right to:</p>
            <ul>
              <li>Copy, modify, or distribute the App or its content</li>
              <li>Reverse engineer, decompile, or disassemble the App</li>
              <li>Rent, lease, or lend the App to any third party</li>
              <li>Use the App for any commercial purpose</li>
              <li>Remove any proprietary notices or labels on the App</li>
            </ul>
          </Section>

          <Section title="3. Your Account">
            <p>
              To access certain features (favourites, list saving, barcode
              contributions), you must create an account by signing in with
              Google or Apple.
            </p>
            <p>You agree to:</p>
            <ul>
              <li>Provide accurate and truthful information</li>
              <li>Keep your sign-in credentials secure</li>
              <li>Notify us immediately at <a href="mailto:brett@talloapp.com.au">brett@talloapp.com.au</a> if you suspect unauthorised access</li>
              <li>Take responsibility for all activity that occurs under your account</li>
            </ul>
          </Section>

          <Section title="4. Acceptable Use">
            <p>You agree not to use the App to:</p>
            <ul>
              <li>Submit false, misleading, or inaccurate product prices or barcode information</li>
              <li>Spam, harass, or abuse other users or our team via the feedback system</li>
              <li>Attempt to gain unauthorised access to our systems or data</li>
              <li>Use automated tools (bots, scrapers) to access the App or its data</li>
              <li>Engage in any activity that is unlawful under Australian law</li>
              <li>Violate the intellectual property rights of any third party</li>
            </ul>
          </Section>

          <Section title="5. Price Information and Accuracy">
            <p>
              The App displays grocery prices sourced from Coles, Woolworths, and
              Aldi Australia. By using the App, you acknowledge that:
            </p>
            <ul>
              <li><strong>Prices may not be current.</strong> Our product catalogue is updated periodically but prices change frequently. Always verify prices in store or on the retailer&apos;s website before making purchasing decisions.</li>
              <li><strong>Prices may vary by location.</strong> Store prices can differ between locations and may not reflect the price at your local store.</li>
              <li><strong>Specials and promotions.</strong> Special pricing shown in the App may have expired or may not be available at your nearest store.</li>
              <li><strong>We are not affiliated with Coles, Woolworths, or Aldi.</strong> Tallo is an independent price comparison service.</li>
            </ul>
            <p>We make no guarantee that using the App will result in savings.</p>
          </Section>

          <Section title="6. User-Submitted Content">
            <p>
              The App allows you to submit barcode information, price corrections,
              and product details (&quot;User Content&quot;) to help improve our catalogue.
            </p>
            <p>By submitting User Content, you:</p>
            <ul>
              <li>Grant us a perpetual, worldwide, royalty-free licence to use, store, display, and incorporate your submission into the App and our dataset</li>
              <li>Confirm that your submission is accurate to the best of your knowledge</li>
              <li>Agree that we may accept, reject, or modify submissions at our sole discretion</li>
            </ul>
          </Section>

          <Section title="7. Intellectual Property">
            <p>
              The App, including its design, code, content, branding, and the
              Tallo name and logo, is owned by us and protected by Australian and
              international intellectual property laws.
            </p>
            <p>
              Product names, brand names, and trademarks displayed in the App
              belong to their respective owners. Their use in the App does not
              imply any affiliation with or endorsement by those owners.
            </p>
          </Section>

          <Section title="8. Third-Party Services">
            <p>
              The App uses third-party services including Google Firebase and
              Google Sign-In. Your use of those services is also subject to their
              respective terms.
            </p>
          </Section>

          <Section title="9. Disclaimers">
            <p>To the maximum extent permitted by Australian law:</p>
            <ul>
              <li>The App is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind</li>
              <li>We do not warrant that the App will be uninterrupted, error-free, or free of viruses</li>
              <li>We do not warrant the accuracy, completeness, or currency of any price or product information</li>
              <li>We are not responsible for any decisions you make based on information in the App</li>
            </ul>
            <p>
              Nothing in these Terms excludes, restricts, or modifies any
              guarantee, condition, warranty, right, or remedy that you have under
              the <em>Competition and Consumer Act 2010</em> (Cth) (including the
              Australian Consumer Law) that cannot be excluded by agreement.
            </p>
          </Section>

          <Section title="10. Limitation of Liability">
            <p>
              To the maximum extent permitted by law, our total liability to you
              for any loss or damage arising from your use of the App is limited
              to the amount you paid us in the 12 months preceding the claim, or
              AUD $100, whichever is greater.
            </p>
            <p>
              We are not liable for any indirect, incidental, special,
              consequential, or punitive damages.
            </p>
          </Section>

          <Section title="11. Indemnification">
            <p>
              You agree to indemnify and hold us harmless from any claims,
              losses, damages, liabilities, costs, and expenses arising from your
              use of the App in violation of these Terms, your User Content, or
              your violation of any law or the rights of a third party.
            </p>
          </Section>

          <Section title="12. App Store Terms">
            <p>
              <strong>Apple App Store:</strong> If you downloaded the App from
              the Apple App Store, you also agree to Apple&apos;s App Store Terms
              of Service. Apple is not a party to these Terms.
            </p>
            <p>
              <strong>Google Play Store:</strong> If you downloaded the App from
              Google Play, you also agree to Google Play&apos;s Terms of Service.
            </p>
          </Section>

          <Section title="13. Termination">
            <p>
              We may suspend or terminate your access to the App at any time,
              with or without notice, if you breach these Terms, we are required
              to do so by law, or we discontinue the App.
            </p>
            <p>
              To delete your account, contact us at{" "}
              <a href="mailto:brett@talloapp.com.au">brett@talloapp.com.au</a>.
            </p>
          </Section>

          <Section title="14. Changes to These Terms">
            <p>
              We may update these Terms from time to time. We will notify you of
              material changes within the App. Continued use of the App after
              changes are posted constitutes acceptance.
            </p>
          </Section>

          <Section title="15. Governing Law">
            <p>
              These Terms are governed by the laws of New South Wales, Australia.
              You and we submit to the exclusive jurisdiction of the courts of
              New South Wales for any dispute arising from these Terms.
            </p>
          </Section>

          <Section title="16. Contact Us">
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:brett@talloapp.com.au">brett@talloapp.com.au</a>
              <br />
              <strong>Website:</strong> talloapp.com.au
              <br />
              <strong>Business:</strong> Tallo, Australia
            </p>
          </Section>
        </div>
      </main>
      <footer className="py-10 px-6" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-base font-bold" style={{ color: "var(--black)", letterSpacing: "-0.03em" }}>tallo</span>
          <div className="flex items-center gap-6 text-sm" style={{ color: "var(--muted)" }}>
            <Link href="/privacy" style={{ color: "inherit" }}>Privacy Policy</Link>
            <Link href="/terms" style={{ color: "inherit" }}>Terms & Conditions</Link>
            <span>© {new Date().getFullYear()} Tallo. Australia.</span>
          </div>
        </div>
      </footer>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="legal-section">
      <h2>{title}</h2>
      {children}
    </div>
  );
}
