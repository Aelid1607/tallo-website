import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Tallo",
  description: "How Tallo collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
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
          <Link
            href="/"
            className="text-sm"
            style={{ color: "var(--muted)" }}
          >
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
            Privacy Policy
          </h1>
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            Last updated: 20 June 2026
          </p>
        </div>
        <div className="prose-legal">
          <Section title="1. About This Policy">
            <p>
              This Privacy Policy explains how Tallo (&quot;we&quot;, &quot;us&quot;,
              &quot;our&quot;) collects, uses, stores, and discloses your personal
              information when you use the Tallo mobile application
              (&quot;the App&quot;).
            </p>
            <p>
              We are committed to protecting your privacy in accordance with
              the <em>Privacy Act 1988</em> (Cth) and the Australian Privacy
              Principles (APPs). By using the App, you agree to the practices
              described in this policy.
            </p>
            <p>
              <strong>Who we are:</strong> Tallo is operated as a sole trader
              business registered in Australia.
              <br />
              Contact:{" "}
              <a href="mailto:brett@talloapp.com.au">brett@talloapp.com.au</a>
              <br />
              Website: talloapp.com.au
            </p>
          </Section>

          <Section title="2. What Information We Collect">
            <h4>Information you provide directly</h4>
            <ul>
              <li><strong>Name and email address</strong> — when you sign in with Google or Apple, or when you submit feedback or a bug report</li>
              <li><strong>Loyalty card numbers</strong> — if you choose to save your Flybuys or Everyday Rewards card number in the App (stored locally on your device only, never transmitted to our servers)</li>
              <li><strong>Feedback and bug reports</strong> — the content of any message you send us through the in-app feedback form</li>
              <li><strong>Barcode and price contributions</strong> — product information you submit to help improve our catalogue</li>
            </ul>
            <h4>Information collected automatically</h4>
            <ul>
              <li><strong>Sign-in provider information</strong> — when you sign in with Google or Apple, we receive a unique identifier and basic profile information (name, email) from that provider</li>
              <li><strong>Anonymous usage session</strong> — before you sign in, the App creates an anonymous session so it functions without requiring an account</li>
            </ul>
            <h4>Information we do NOT collect</h4>
            <ul>
              <li>Precise location</li>
              <li>Device contacts or photos</li>
              <li>Payment or financial information</li>
              <li>Health data</li>
              <li>Browsing history outside the App</li>
            </ul>
          </Section>

          <Section title="3. How We Collect Information">
            <p>We collect information:</p>
            <ul>
              <li>Directly from you when you create an account, submit feedback, or contribute product data</li>
              <li>Through Firebase Authentication (Google LLC) when you sign in with Google or Apple</li>
              <li>Through Firebase Firestore (Google LLC) when product catalogue data is fetched</li>
            </ul>
          </Section>

          <Section title="4. Why We Collect It and How We Use It">
            <table>
              <thead>
                <tr>
                  <th>Purpose</th>
                  <th>Information used</th>
                  <th>Legal basis</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Provide the App and its features</td><td>Sign-in details, anonymous session</td><td>Necessary to perform our service</td></tr>
                <tr><td>Allow you to save favourites and shopping lists</td><td>Account identifier</td><td>Necessary to perform our service</td></tr>
                <tr><td>Respond to feedback and bug reports</td><td>Name, email, message</td><td>Legitimate interest / your consent</td></tr>
                <tr><td>Improve the product catalogue</td><td>Barcode and price contributions</td><td>Legitimate interest</td></tr>
                <tr><td>Prevent fraud and abuse</td><td>Account identifier, sign-in provider</td><td>Legitimate interest</td></tr>
                <tr><td>Comply with legal obligations</td><td>Any relevant data</td><td>Legal obligation</td></tr>
              </tbody>
            </table>
            <p>We do not use your personal information for advertising, profiling, or sale to third parties.</p>
          </Section>

          <Section title="5. Disclosure to Third Parties">
            <p>We share limited information with the following third parties to operate the App:</p>
            <p><strong>Google LLC (Firebase)</strong><br />
            Firebase Authentication, Firestore database, and Firebase Storage are provided by Google LLC. When you use the App, data may be processed on Google&apos;s infrastructure.</p>
            <p><strong>Google LLC (Sign-in)</strong><br />
            If you choose to sign in with Google, Google will share your name, email address, and a unique identifier with us under Google&apos;s OAuth terms.</p>
            <p><strong>Apple Inc. (Sign-in)</strong><br />
            If you choose to sign in with Apple, Apple may share your name and email address (or a private relay email) with us under Apple&apos;s Sign in with Apple terms.</p>
            <p>We do not sell, rent, or trade your personal information to any other third party.</p>
          </Section>

          <Section title="6. Cross-Border Disclosure">
            <p>
              Google LLC operates servers in multiple countries, including outside Australia. By using the App, you consent to your information being processed on servers that may be located outside Australia, including in the United States. Google maintains appropriate data protection standards as described in their privacy policy.
            </p>
          </Section>

          <Section title="7. Data Storage and Security">
            <ul>
              <li>Loyalty card numbers are stored locally on your device using encrypted device storage and are never transmitted to our servers</li>
              <li>Shopping lists and favourites are currently stored locally on your device</li>
              <li>Account information and submissions are stored in Firebase Firestore, which applies industry-standard encryption in transit (TLS) and at rest</li>
              <li>We restrict access to personal information to authorised personnel only</li>
            </ul>
          </Section>

          <Section title="8. How Long We Keep Your Information">
            <table>
              <thead>
                <tr><th>Information</th><th>Retention period</th></tr>
              </thead>
              <tbody>
                <tr><td>Account information</td><td>Until you delete your account</td></tr>
                <tr><td>Feedback and bug reports</td><td>Up to 2 years, then deleted</td></tr>
                <tr><td>Barcode and price contributions</td><td>Indefinitely (used to improve the catalogue)</td></tr>
                <tr><td>Anonymous session data</td><td>Until you sign in or uninstall the App</td></tr>
              </tbody>
            </table>
          </Section>

          <Section title="9. Your Rights">
            <p>Under the Australian Privacy Principles, you have the right to:</p>
            <ul>
              <li><strong>Access</strong> the personal information we hold about you</li>
              <li><strong>Correct</strong> inaccurate or out-of-date information</li>
              <li><strong>Request deletion</strong> of your account and associated data</li>
              <li><strong>Complain</strong> if you believe we have breached the Australian Privacy Principles</li>
            </ul>
            <p>To exercise any of these rights, contact us at <a href="mailto:brett@talloapp.com.au">brett@talloapp.com.au</a>. We will respond within 30 days.</p>
          </Section>

          <Section title="10. Children's Privacy">
            <p>The App is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13.</p>
          </Section>

          <Section title="11. Analytics">
            <p>We do not currently use third-party analytics services to track your behaviour within the App beyond what is described in this policy.</p>
          </Section>

          <Section title="12. Changes to This Policy">
            <p>We may update this policy from time to time. When we do, we will update the &quot;Last updated&quot; date at the top of this page. If changes are material, we will notify you within the App.</p>
          </Section>

          <Section title="13. Contact Us">
            <p>
              <strong>Email:</strong> <a href="mailto:brett@talloapp.com.au">brett@talloapp.com.au</a><br />
              <strong>Website:</strong> talloapp.com.au<br />
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
