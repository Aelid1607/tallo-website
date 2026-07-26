import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy: Tallo",
  description: "How Tallo collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <header style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="transition-opacity hover:opacity-70">
            <Image src="/tallo-logo-tagline.svg" alt="Tallo" width={140} height={42} />
          </Link>
          <Link href="/" className="text-sm" style={{ color: "var(--muted)" }}>
            Back
          </Link>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-20">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--blue)" }}>
            Legal
          </p>
          <h1 className="text-4xl font-bold mb-3" style={{ letterSpacing: "-0.03em", color: "var(--black)" }}>
            Privacy Policy
          </h1>
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            Last updated: 22 July 2026
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
              at any time via <strong>Settings &rarr; Privacy Policy</strong>. By creating an account
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

          <Section title="3. Who We Are">
            <p>Tallo is operated by Tallo Pty Ltd (ACN 699 854 692), registered in Australia.</p>
            <p>
              <strong>Email:</strong> <a href="mailto:privacy@talloapp.com.au">privacy@talloapp.com.au</a><br />
              <strong>Website:</strong> talloapp.com.au
            </p>
          </Section>

          <Section title="4. Collection of Personal Information">
            <h4>4.1 Device Data (stored on your device by default)</h4>
            <p>
              The following information is stored on your device by default. Where you elect to use the
              optional cloud backup feature, this data is also uploaded to Tallo&apos;s servers as described
              in clause 4.2(f).
            </p>
            <ul>
              <li><strong>(a) Favourites</strong> - products you save as favourites are stored in your device&apos;s local storage.</li>
              <li><strong>(b) Shopping list and saved lists</strong> - your current shopping list and any saved lists are stored in your device&apos;s local storage.</li>
              <li><strong>(c) Loyalty card numbers</strong> - if you elect to save a Flybuys or Everyday Rewards card number, it is stored on your device&apos;s local storage.</li>
              <li><strong>(d) Meal plan, liquor list, shop history, and lifetime stats</strong> - these items are stored in your device&apos;s local storage.</li>
              <li><strong>(e) Camera</strong> - the App requests access to your device camera for the purpose of scanning product barcodes and adding photos to recipes you create. The live camera feed is not recorded, stored, or transmitted. Only the decoded barcode value, or a photo you deliberately capture and attach to a recipe, is used, and a barcode value is used only where you elect to submit a product contribution.</li>
              <li><strong>(f) Fuel station favourites</strong> - petrol stations you save as favourites in the Fuel feature are stored in your device&apos;s local storage.</li>
            </ul>

            <h4>4.2 Server Data (stored on Tallo&apos;s servers)</h4>
            <p>Tallo collects the following Personal Information:</p>
            <ul>
              <li><strong>(a) Account information</strong> - upon signing in with Google or Apple, Tallo receives a unique identifier and basic profile information (name and email address) from the relevant provider.</li>
              <li><strong>(b) Recipe ratings</strong> - where you submit a star rating for a recipe, that rating is stored in Tallo&apos;s database linked to your user identifier.</li>
              <li><strong>(c) Recipe comments</strong> - where you submit a comment on a recipe, the comment text and your display name are stored in Tallo&apos;s database.</li>
              <li><strong>(d) Feedback and bug reports</strong> - content submitted through the in-app feedback form, including any accompanying name or email address.</li>
              <li><strong>(e) Barcode and price contributions</strong> - product information you submit to assist in improving the product catalogue.</li>
              <li><strong>(f) Cloud backup data</strong> - where you elect to use the cloud backup feature, the full contents of your device&apos;s local storage are uploaded to Tallo&apos;s servers. This includes your shopping list, saved lists, favourites, loyalty card numbers, meal plan, liquor list, shop history, lifetime stats, and fuel station favourites. Backup data is stored under your user identifier and is accessible only to you. No backup is created unless you explicitly initiate one.</li>
              <li><strong>(g) Shared shopping lists</strong> - where you elect to share a shopping list, the list items (including product names, store names, prices, quantities, and internal product identifiers) are written to Tallo&apos;s servers without a user identifier. Shared lists expire automatically after 48 hours and are then permanently deleted.</li>
              <li><strong>(h) Push notification token</strong> - where you grant notification permission, Tallo stores a device push notification token and your device platform type (iOS or Android) under your user identifier to enable delivery of in-app notifications.</li>
              <li><strong>(i) Watchlist product identifiers</strong> - the internal product identifiers corresponding to items in your active shopping list are automatically synchronised to Tallo&apos;s servers under your user identifier to support watchlist and price-alert functionality.</li>
              <li><strong>(j) Approximate location (Fuel feature)</strong> - when you use the Fuel feature, your device&apos;s approximate location is sent to Tallo&apos;s servers for the sole purpose of identifying fuel stations near you. It is used only to perform that search. It is not stored on Tallo&apos;s servers and is not linked to your identity.</li>
              <li><strong>(k) Subscription status</strong> - if you purchase a Tallo subscription, Tallo stores a record of your subscription status linked to your user identifier so that premium features can be made available to you. Payment is processed by the relevant app store (Apple or Google). Tallo does not receive or store your card or payment details.</li>
              <li><strong>(l) Recipe import data</strong> - when you choose to import a recipe from a web address or a social media link, that link and the content of the page are processed solely to extract the recipe for you. This processing may involve third-party service providers, some located overseas (see clauses 6 and 7). The link and page content are not stored against your identity, and the resulting recipe is saved in your device&apos;s local storage.</li>
            </ul>

            <h4>4.3 Automatically Collected Information</h4>
            <ul>
              <li><strong>(a) Authentication identifier</strong> - upon sign-in, Tallo receives a unique identifier from your chosen sign-in provider (Google or Apple).</li>
              <li><strong>(b) Anonymous session identifier</strong> - prior to sign-in, Firebase generates a randomly assigned installation identifier to enable basic App functionality. This identifier is not linked to your identity.</li>
              <li><strong>(c) Firebase SDK diagnostic data</strong> - the Firebase SDK may automatically collect limited technical data including app version, SDK version, and installation identifiers for the purposes of SDK stability. This data is collected by Google LLC pursuant to their own privacy policy and is not accessible to or controlled by Tallo.</li>
            </ul>

            <h4>4.4 Information Tallo Does Not Collect</h4>
            <p>Tallo does not collect:</p>
            <ul>
              <li>Device contacts or media library content</li>
              <li>Payment or financial information</li>
              <li>Health or biometric data</li>
              <li>Browsing history outside the App</li>
              <li>Behavioural profiles or advertising identifiers</li>
            </ul>
            <p>
              Tallo requests your approximate location only for the Fuel feature, as described in clause
              4.2(j). It does not track or store your location for any other purpose.
            </p>
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
                <tr><td>Cloud backup and restore</td><td>Shopping list, saved lists, favourites, loyalty card numbers, meal plan, liquor list, shop history, lifetime stats, fuel station favourites</td><td>Firebase (Google LLC)</td></tr>
                <tr><td>List sharing</td><td>List item names, store names, prices, quantities, product identifiers (no user identifier)</td><td>Firebase (Google LLC)</td></tr>
                <tr><td>Push notifications</td><td>Device push token, device platform</td><td>Firebase (Google LLC)</td></tr>
                <tr><td>Watchlist and price alerts</td><td>Shopping list product identifiers</td><td>Firebase (Google LLC)</td></tr>
                <tr><td>Finding fuel stations near you</td><td>Approximate device location</td><td>Processed transiently to perform the search; not stored</td></tr>
                <tr><td>Displaying maps</td><td>Approximate location, map interactions</td><td>Mapping provider (Google LLC)</td></tr>
                <tr><td>Verifying your subscription</td><td>User identifier, subscription status</td><td>Subscription-management provider / Firebase (Google LLC)</td></tr>
                <tr><td>Extracting recipes you choose to import</td><td>Recipe web address or social link, page content</td><td>Third-party processing providers (some located overseas); not stored against your identity</td></tr>
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
            <p>
              <strong>Google LLC (Maps)</strong><br />
              The App displays fuel station locations on a map using Google Maps. Your approximate location and map interactions are processed by Google LLC to provide mapping functionality, subject to Google&apos;s privacy policy (policies.google.com/privacy).
            </p>
            <p>
              <strong>Other service providers</strong><br />
              Tallo uses a small number of additional third-party service providers to deliver specific features, including a subscription-management provider (to verify your subscription status), an automated content-extraction provider (to interpret recipes you choose to import), and providers used to retrieve publicly shared social media posts you choose to import. These providers receive only the limited information necessary to perform their function, are not permitted to use it for their own purposes, and some are located outside Australia (see clause 7).
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
              In addition to Google LLC, a small number of other service providers engaged by Tallo (including the provider that interprets recipes you choose to import) operate infrastructure outside Australia, including in the United States of America. Where Tallo discloses Personal Information to such a provider, it does so only to the extent necessary to deliver the relevant feature.
            </p>
            <p>
              Tallo takes reasonable steps to ensure that any overseas recipient of Personal Information is subject to privacy obligations that are substantially similar to the Australian Privacy Principles, including by relying on the relevant provider&apos;s compliance with applicable data protection frameworks.
            </p>
          </Section>

          <Section title="8. Data Storage and Security">
            <h4>8.1 Device Data</h4>
            <p>
              The following information is stored on your device. Items marked with an asterisk (*) are also
              uploaded to Firebase if you choose to use the cloud backup feature.
            </p>
            <table>
              <thead>
                <tr><th>Data</th><th>Storage mechanism</th></tr>
              </thead>
              <tbody>
                <tr><td>Favourites *</td><td>Device local storage</td></tr>
                <tr><td>Shopping list and saved lists *</td><td>Device local storage</td></tr>
                <tr><td>Loyalty card numbers *</td><td>Device local storage</td></tr>
                <tr><td>Meal plan, liquor list, shop history, lifetime stats *</td><td>Device local storage</td></tr>
                <tr><td>Fuel station favourites *</td><td>Device local storage</td></tr>
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
                <tr><td>Cloud backup (shopping list, saved lists, favourites, loyalty card numbers, meal plan, liquor list, shop history, lifetime stats, fuel station favourites)</td><td>User-initiated cloud backup and restore</td></tr>
                <tr><td>Shared list items (product names, store names, prices, quantities, product identifiers)</td><td>Temporary list sharing between users (48-hour expiry)</td></tr>
                <tr><td>Push notification token, device platform</td><td>Delivery of in-app push notifications</td></tr>
                <tr><td>Shopping list product identifiers (watchlist)</td><td>Watchlist and price-alert functionality</td></tr>
                <tr><td>Subscription status (linked to user identifier)</td><td>Providing access to premium features</td></tr>
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
                <tr><td>Cloud backup data</td><td>Automatically deleted 30 days after creation, or sooner when you overwrite it, successfully restore it, delete your account, or submit a written request for removal</td></tr>
                <tr><td>Shared list data</td><td>Automatically deleted 48 hours after creation</td></tr>
                <tr><td>Push notification token and device platform</td><td>Until account deletion or written request for removal</td></tr>
                <tr><td>Watchlist product identifiers</td><td>Until the shopping list is cleared, account deletion, or written request for removal</td></tr>
                <tr><td>Subscription status</td><td>Until your subscription ends, or until account deletion</td></tr>
                <tr><td>Fuel search location</td><td>Not retained. Used only to perform the nearby-stations search</td></tr>
                <tr><td>Imported recipe link and page content</td><td>Not retained against your identity. The imported recipe is stored in your device&apos;s local storage</td></tr>
                <tr><td>Anonymous session identifiers</td><td>Until sign-in or uninstallation of the App</td></tr>
                <tr><td>Firebase SDK diagnostic data</td><td>Subject to Google LLC&apos;s retention policy</td></tr>
              </tbody>
            </table>
          </Section>

          <Section title="10. Your Rights">
            <p>Under the Australian Privacy Principles, you have the following rights:</p>
            <ul>
              <li><strong>(a) Access</strong> - you may request access to the Personal Information Tallo holds about you.</li>
              <li><strong>(b) Correction</strong> - you may request correction of Personal Information that is inaccurate, out of date, incomplete, or misleading.</li>
              <li><strong>(c) Deletion</strong> - you may delete your account and all associated Server Data at any time from within the App via <strong>Settings &rarr; Delete Account</strong>, or by visiting <a href="/delete-account">talloapp.com.au/delete-account</a>. This action permanently deletes your account information, ratings, comments, cloud backup, push notification token, subscription record, and watchlist data from Tallo&apos;s servers. Shared lists you have created expire automatically after 48 hours regardless of account status. Device Data is removed upon uninstallation of the App.</li>
              <li><strong>(d) Complaint</strong> - you may lodge a complaint if you believe Tallo has interfered with your privacy.</li>
            </ul>
            <p>
              To exercise any of the above rights, or for assistance with account deletion, contact Tallo at{" "}
              <a href="mailto:info@talloapp.com.au">info@talloapp.com.au</a>. Tallo will respond within 30 days of receipt of your request.
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
              <a href="mailto:privacy@talloapp.com.au">privacy@talloapp.com.au</a> and Tallo will take
              prompt steps to delete that information.
            </p>
          </Section>

          <Section title="12. Analytics and Tracking">
            <p>
              Tallo does not use any third-party analytics services, advertising networks, or behavioural
              tracking tools, and does not engage in cross-app or cross-website tracking. The limited
              automated data collection in the App is confined to what is necessary to operate its features,
              such as the Firebase SDK diagnostic data described in clause 4.3(c), verification of your
              subscription status, and mapping. None of this information is used by Tallo for behavioural
              profiling, advertising, or any analytical purpose.
            </p>
          </Section>

          <Section title="13. Notifiable Data Breaches">
            <p>In the event of an eligible data breach that is likely to result in serious harm to one or more affected individuals, Tallo will, as soon as practicable:</p>
            <ul>
              <li>(a) notify all affected individuals; and</li>
              <li>(b) notify the Office of the Australian Information Commissioner,</li>
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
              This Policy is governed by the laws of the State of New South Wales, Australia. You submit to the
              non-exclusive jurisdiction of the courts of New South Wales and the federal courts of Australia.
            </p>
          </Section>

          <Section title="16. Severability">
            <p>
              If any provision of this Policy is held to be invalid, unlawful, or unenforceable, that
              provision will be severed and the remaining provisions will continue in full force and effect.
            </p>
          </Section>

          <Section title="17. Contact">
            <p>For all privacy-related enquiries, requests, or complaints:</p>
            <p>
              <strong>Operator:</strong> Tallo Pty Ltd (ACN 699 854 692)<br />
              <strong>Privacy enquiries:</strong> <a href="mailto:privacy@talloapp.com.au">privacy@talloapp.com.au</a><br />
              <strong>General enquiries:</strong> <a href="mailto:info@talloapp.com.au">info@talloapp.com.au</a><br />
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
          <Link href="/" className="transition-opacity hover:opacity-70">
            <Image src="/tallo-logo-tagline.svg" alt="Tallo" width={140} height={42} />
          </Link>
          <div className="flex items-center gap-6 text-sm" style={{ color: "var(--muted)" }}>
            <Link href="/privacy" style={{ color: "inherit" }}>Privacy Policy</Link>
            <Link href="/terms" style={{ color: "inherit" }}>Terms &amp; Conditions</Link>
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
