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
            Last updated: 25 June 2026
          </p>
        </div>
        <div className="prose-legal">
          <Section title="1. Introduction">
            <p>
              This Privacy Policy (the &quot;Policy&quot;) sets out how Tallo (&quot;Tallo&quot;,
              &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) collects, holds, uses, and discloses Personal
              Information in connection with the Tallo mobile application (the &quot;App&quot;).
            </p>
            <p>
              Tallo is committed to the responsible handling of Personal Information in
              accordance with the <em>Privacy Act 1988</em> (Cth) and the Australian Privacy
              Principles (&quot;APPs&quot;) set out in Schedule 1 of that Act.
            </p>
            <p>
              This Policy is available at talloapp.com.au/privacy and from within the App
              at any time via <strong>Settings → Privacy Policy</strong>. By creating an account
              or using the App, you acknowledge that you have read and understood this Policy.
            </p>
          </Section>

          <Section title="2. Definitions">
            <p>In this Policy:</p>
            <ul>
              <li><strong>&quot;Personal Information&quot;</strong> has the meaning given in the <em>Privacy Act 1988</em> (Cth), and includes any information or opinion about an identified individual, or an individual who is reasonably identifiable.</li>
              <li><strong>&quot;Device Data&quot;</strong> means information that exists solely on your device and is never transmitted to Tallo&apos;s servers.</li>
              <li><strong>&quot;Server Data&quot;</strong> means information stored on Tallo&apos;s servers, hosted by Google LLC via Firebase.</li>
              <li><strong>&quot;Firebase&quot;</strong> means the suite of backend services provided by Google LLC, including Firebase Authentication, Cloud Firestore, and Firebase Storage.</li>
            </ul>
          </Section>

          <Section title="3. Contact Information">
            <p>
              <strong>Email:</strong> <a href="mailto:info@talloapp.com.au">info@talloapp.com.au</a><br />
              <strong>Website:</strong> talloapp.com.au
            </p>
          </Section>

          <Section title="4. Collection of Personal Information">
            <h4>4.1 Device Data (not transmitted to Tallo)</h4>
            <p>The following information is stored solely on your device and is not transmitted to Tallo&apos;s servers under any circumstances:</p>
            <ul>
              <li><strong>Favourites</strong> — products you save as favourites are stored in your device&apos;s local storage. Tallo does not receive, access, or hold this information.</li>
              <li><strong>Shopping list</strong> — your shopping list is held in application memory for the duration of your session only and is not persisted to any server.</li>
              <li><strong>Loyalty card numbers</strong> — if you elect to save a Flybuys or Everyday Rewards card number, it is stored on your device only and is not transmitted to Tallo&apos;s servers.</li>
              <li><strong>Camera</strong> — the App requests access to your device camera for the sole purpose of scanning grocery barcodes. The live camera feed is not recorded, stored, or transmitted. Only the decoded barcode value is used, and only where you elect to submit a product contribution.</li>
            </ul>

            <h4>4.2 Server Data (stored on Tallo&apos;s servers)</h4>
            <p>Tallo collects the following Personal Information:</p>
            <ul>
              <li><strong>Account information</strong> — upon signing in with Google or Apple, Tallo receives a unique identifier and basic profile information (name and email address) from the relevant provider.</li>
              <li><strong>Recipe ratings</strong> — where you submit a star rating for a recipe, that rating is stored in Tallo&apos;s database linked to your user identifier.</li>
              <li><strong>Recipe comments</strong> — where you submit a comment on a recipe, the comment text and your display name are stored in Tallo&apos;s database.</li>
              <li><strong>Feedback and bug reports</strong> — content submitted through the in-app feedback form, including any accompanying name or email address.</li>
              <li><strong>Barcode and price contributions</strong> — product information you submit to assist in improving the product catalogue.</li>
            </ul>

            <h4>4.3 Automatically Collected Information</h4>
            <ul>
              <li><strong>Authentication identifier</strong> — upon sign-in, Tallo receives a unique identifier from your chosen sign-in provider (Google or Apple).</li>
              <li><strong>Anonymous session identifier</strong> — prior to sign-in, Firebase generates a randomly assigned installation identifier to enable basic App functionality. This identifier is not linked to your identity.</li>
              <li><strong>Firebase SDK diagnostic data</strong> — the Firebase SDK may automatically collect limited technical data including app version, SDK version, and installation identifiers for the purposes of SDK stability. This data is collected by Google LLC pursuant to their own privacy policy and is not accessible to or controlled by Tallo.</li>
            </ul>

            <h4>4.4 Information Tallo Does Not Collect</h4>
            <p>Tallo does not collect:</p>
            <ul>
              <li>Precise geolocation data</li>
              <li>Device contacts or media library content</li>
              <li>Payment or financial information</li>
              <li>Health or biometric data</li>
              <li>Browsing history outside the App</li>
              <li>Behavioural profiles or advertising identifiers</li>
            </ul>
          </Section>

          <Section title="5. Use of Personal Information">
            <p>Tallo collects and uses Personal Information only for the following purposes:</p>
            <table>
              <thead>
                <tr>
                  <th>Purpose</th>
                  <th>Information used</th>
                  <th>Storage location</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Authenticating users and enabling App functionality</td><td>Sign-in details, anonymous session identifier</td><td>Firebase (Google LLC)</td></tr>
                <tr><td>Displaying community recipe ratings</td><td>User identifier, star rating</td><td>Firebase (Google LLC)</td></tr>
                <tr><td>Displaying recipe comments</td><td>User identifier, display name, comment text</td><td>Firebase (Google LLC)</td></tr>
                <tr><td>Responding to feedback and bug reports</td><td>Name, email address, message content</td><td>Email / Firebase (Google LLC)</td></tr>
                <tr><td>Improving the product catalogue</td><td>Barcode and price contribution data</td><td>Firebase (Google LLC)</td></tr>
                <tr><td>Fraud prevention and abuse detection</td><td>Account identifier, sign-in provider</td><td>Firebase (Google LLC)</td></tr>
                <tr><td>Firebase SDK stability and performance</td><td>Anonymous installation and version data (Google LLC)</td><td>Google LLC</td></tr>
                <tr><td>Compliance with legal obligations</td><td>Any relevant information</td><td>As required by law</td></tr>
              </tbody>
            </table>
            <p>Tallo does not use Personal Information for advertising, behavioural profiling, or any commercial purpose beyond providing the App.</p>
          </Section>

          <Section title="6. Disclosure of Personal Information">
            <h4>6.1 Third-Party Service Providers</h4>
            <p>Tallo discloses limited Personal Information to the following third-party service providers solely for the purpose of operating the App:</p>
            <p>
              <strong>Google LLC (Firebase)</strong><br />
              Firebase Authentication, Cloud Firestore, and Firebase Storage are operated by Google LLC. Personal Information stored in Firebase is subject to Google&apos;s privacy policy (policies.google.com/privacy) and Firebase&apos;s privacy and security terms (firebase.google.com/support/privacy).
            </p>
            <p>
              <strong>Google LLC (Sign-in)</strong><br />
              Where you elect to sign in with Google, Google LLC will transmit your name, email address, and a unique identifier to Tallo pursuant to Google&apos;s OAuth 2.0 terms.
            </p>
            <p>
              <strong>Apple Inc. (Sign-in)</strong><br />
              Where you elect to sign in with Apple, Apple Inc. may transmit your name and email address (or a private relay email address) to Tallo pursuant to Apple&apos;s Sign in with Apple terms.
            </p>

            <h4>6.2 No Sale or Commercial Exploitation of Personal Information</h4>
            <p>Tallo does not sell, rent, licence, trade, or otherwise commercially exploit Personal Information to or with any third party.</p>

            <h4>6.3 Disclosure Required by Law</h4>
            <p>Tallo may disclose Personal Information where required to do so by a court order, subpoena, or other lawful authority. In such circumstances, Tallo will disclose only the minimum information required to satisfy that obligation.</p>
          </Section>

          <Section title="7. Cross-Border Disclosure">
            <p>
              Google LLC operates infrastructure in multiple jurisdictions, including jurisdictions outside Australia. By using the App, you consent to the transfer and processing of your Personal Information on servers that may be located outside Australia, including in the United States of America.
            </p>
            <p>
              Tallo takes reasonable steps to ensure that any overseas recipient of Personal Information is subject to privacy obligations that are substantially similar to the Australian Privacy Principles, including by relying on Google LLC&apos;s compliance with applicable data protection frameworks.
            </p>
          </Section>

          <Section title="8. Data Storage and Security">
            <h4>8.1 Device Data</h4>
            <p>The following information is stored solely on your device and is not held by Tallo:</p>
            <table>
              <thead>
                <tr><th>Data</th><th>Storage mechanism</th></tr>
              </thead>
              <tbody>
                <tr><td>Favourites</td><td>Device local storage</td></tr>
                <tr><td>Shopping list</td><td>Application memory (session only)</td></tr>
                <tr><td>Loyalty card numbers</td><td>Device local storage</td></tr>
              </tbody>
            </table>

            <h4>8.2 Server Data</h4>
            <p>The following information is stored on Firebase infrastructure operated by Google LLC:</p>
            <table>
              <thead>
                <tr><th>Data</th><th>Purpose</th></tr>
              </thead>
              <tbody>
                <tr><td>Account information (name, email address, user identifier)</td><td>Authentication and App personalisation</td></tr>
                <tr><td>Recipe ratings</td><td>Display of community average ratings</td></tr>
                <tr><td>Recipe comments</td><td>Recipe community functionality</td></tr>
                <tr><td>Feedback and bug reports</td><td>App improvement</td></tr>
                <tr><td>Barcode and price contributions</td><td>Product catalogue improvement</td></tr>
              </tbody>
            </table>
            <p>All data held in Firebase is protected by industry-standard encryption in transit (TLS) and at rest. Administrative access to Tallo&apos;s Firebase project is restricted to senior app developers.</p>
            <p>Tallo does not aggregate, commercially analyse, or use Server Data for any purpose beyond those stated in this Policy.</p>
          </Section>

          <Section title="9. Retention of Personal Information">
            <table>
              <thead>
                <tr><th>Information</th><th>Retention period</th></tr>
              </thead>
              <tbody>
                <tr><td>Account information (name, email address, user identifier)</td><td>Until account deletion</td></tr>
                <tr><td>Recipe ratings</td><td>Until account deletion or written request for removal</td></tr>
                <tr><td>Recipe comments</td><td>Until deletion by the user, account deletion, or written request for removal</td></tr>
                <tr><td>Feedback and bug reports</td><td>Up to two (2) years from submission, then deleted</td></tr>
                <tr><td>Barcode and price contributions</td><td>Retained indefinitely as part of the product catalogue</td></tr>
                <tr><td>Anonymous session identifiers</td><td>Until sign-in or uninstallation of the App</td></tr>
                <tr><td>Firebase SDK diagnostic data</td><td>Subject to Google LLC&apos;s retention policy</td></tr>
              </tbody>
            </table>
          </Section>

          <Section title="10. Your Rights">
            <p>Under the Australian Privacy Principles, you have the following rights:</p>
            <ul>
              <li><strong>Access</strong> — you may request access to the Personal Information Tallo holds about you.</li>
              <li><strong>Correction</strong> — you may request correction of Personal Information that is inaccurate, out of date, incomplete, or misleading.</li>
              <li><strong>Deletion</strong> — you may delete your account and all associated Server Data at any time from within the App via <strong>Settings → Delete Account</strong>. This action permanently deletes your account information, ratings, and comments from Tallo&apos;s servers. Device Data is removed upon uninstallation of the App.</li>
              <li><strong>Complaint</strong> — you may lodge a complaint if you believe Tallo has interfered with your privacy.</li>
            </ul>
            <p>
              To exercise any of the above rights, or for assistance with account deletion, contact Tallo at{" "}
              <a href="mailto:brett@talloapp.com.au">brett@talloapp.com.au</a>. Tallo will respond within 30 days of receipt of your request.
            </p>
            <p>
              If you are not satisfied with Tallo&apos;s response, you may lodge a complaint with the{" "}
              <strong>Office of the Australian Information Commissioner (OAIC)</strong>:
            </p>
            <ul>
              <li>Website: oaic.gov.au</li>
              <li>Phone: 1300 363 992</li>
            </ul>
          </Section>

          <Section title="11. Children">
            <p>
              The App is not directed at children under the age of 13. Tallo does not knowingly collect
              Personal Information from children under 13. If you have reason to believe that a child under
              13 has provided Personal Information to Tallo, please contact{" "}
              <a href="mailto:info@talloapp.com.au">info@talloapp.com.au</a> and Tallo will take prompt
              steps to delete that information.
            </p>
          </Section>

          <Section title="12. Analytics and Tracking">
            <p>
              Tallo does not use any third-party analytics services, advertising networks, or behavioural
              tracking tools. Tallo does not engage in cross-app or cross-website tracking. The only
              automated data collection in the App is the Firebase SDK diagnostic data described in clause
              4.3(c), which is collected by Google LLC and is not used by Tallo for any analytical purpose.
            </p>
          </Section>

          <Section title="13. Notifiable Data Breaches">
            <p>In the event of an eligible data breach that is likely to result in serious harm to one or more affected individuals, Tallo will, as soon as practicable:</p>
            <ul>
              <li>notify all affected individuals; and</li>
              <li>notify the Office of the Australian Information Commissioner,</li>
            </ul>
            <p>
              in accordance with the Notifiable Data Breaches scheme under Part IIIC of the{" "}
              <em>Privacy Act 1988</em> (Cth). Tallo will also take immediate steps to contain the breach
              and prevent further unauthorised access to or disclosure of Personal Information.
            </p>
          </Section>

          <Section title="14. Changes to This Policy">
            <p>
              Tallo may amend this Policy from time to time. The current version is identified by the
              &quot;Last updated&quot; date at the top of this document. Where an amendment is material, Tallo
              will notify users within the App prior to the change taking effect. Continued use of the App
              following notification of an amendment constitutes acceptance of the amended Policy.
            </p>
          </Section>

          <Section title="15. Governing Law">
            <p>
              This Policy is governed by the laws of the State of Victoria, Australia. You submit to the
              non-exclusive jurisdiction of the courts of Victoria and the federal courts of Australia.
            </p>
          </Section>

          <Section title="16. Severability">
            <p>
              If any provision of this Policy is held to be invalid, unlawful, or unenforceable, that
              provision will be severed and the remaining provisions will continue in full force and effect.
            </p>
          </Section>

          <Section title="17. Contact">
            <p>
              <strong>Operator:</strong> TalloApp<br />
              <strong>Email:</strong> <a href="mailto:info@talloapp.com.au">info@talloapp.com.au</a><br />
              <strong>Website:</strong> talloapp.com.au<br />
              <strong>Jurisdiction:</strong> New South Wales, Australia
            </p>
            <p>
              <em>
                This Policy is prepared in accordance with the Privacy Act 1988 (Cth), the Australian
                Privacy Principles, and the requirements of the Apple App Store and Google Play Store.
              </em>
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
