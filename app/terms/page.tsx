import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions: Tallo",
  description: "The terms and conditions governing your use of the Tallo app.",
};

export default function TermsPage() {
  return (
    <>
      <header style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="transition-opacity hover:opacity-70">
            <Image src="/tallo-logo-tagline.svg" alt="Tallo" width={140} height={42} />
          </Link>
          <Link href="/" className="text-sm" style={{ color: "var(--muted)" }}>
            ← Back
          </Link>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-20">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--blue)" }}>
            Legal
          </p>
          <h1 className="text-4xl font-bold mb-3" style={{ letterSpacing: "-0.03em", color: "var(--black)" }}>
            Terms &amp; Conditions
          </h1>
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            Last updated: 25 June 2026
          </p>
        </div>
        <div className="prose-legal">

          <Section title="1. Interpretation">
            <h4>1.1 Definitions</h4>
            <p>In these Terms:</p>
            <ul>
              <li><strong>&ldquo;App&rdquo;</strong> means the Tallo mobile application, including all features, content, and updates.</li>
              <li><strong>&ldquo;Content&rdquo;</strong> means all text, images, data, recipes, pricing information, product details, and other material made available through the App.</li>
              <li><strong>&ldquo;Retailer&rdquo;</strong> means any grocery retailer whose product or pricing information is displayed in the App, including but not limited to Coles Supermarkets Australia Pty Ltd, Woolworths Group Limited, and ALDI Stores.</li>
              <li><strong>&ldquo;Tallo&rdquo;</strong>, <strong>&ldquo;we&rdquo;</strong>, <strong>&ldquo;us&rdquo;</strong>, <strong>&ldquo;our&rdquo;</strong> means the operator of the App.</li>
              <li><strong>&ldquo;Terms&rdquo;</strong> means these Terms and Conditions, as amended from time to time.</li>
              <li><strong>&ldquo;User Content&rdquo;</strong> means any content you submit to the App, including barcode information, price reports, recipe comments, and star ratings.</li>
              <li><strong>&ldquo;you&rdquo;</strong>, <strong>&ldquo;your&rdquo;</strong> means the individual accessing or using the App.</li>
            </ul>
            <h4>1.2 Interpretation</h4>
            <p>In these Terms, unless the context otherwise requires:</p>
            <p>(a) a reference to a statute includes all regulations and instruments made under it and any amendment, re-enactment, or replacement of it;</p>
            <p>(b) the singular includes the plural and vice versa;</p>
            <p>(c) headings are for convenience only and do not affect interpretation.</p>
          </Section>

          <Section title="2. Acceptance of Terms">
            <p><strong>2.1</strong> By downloading, installing, or using the App, you agree to be bound by these Terms and our Privacy Policy, available at talloapp.com.au/privacy. These Terms and the Privacy Policy together constitute the entire agreement between you and Tallo in relation to your use of the App.</p>
            <p><strong>2.2</strong> If you do not agree to these Terms, you must not use the App.</p>
            <p><strong>2.3</strong> You represent that you are at least 13 years of age. If you are under 18, you represent that you have obtained the consent of a parent or legal guardian to use the App.</p>
          </Section>

          <Section title="3. Licence Grant">
            <p><strong>3.1</strong> Tallo grants you a limited, personal, non-exclusive, non-transferable, revocable licence to install and use the App on a device you own or control, solely for your personal, non-commercial use, in accordance with these Terms.</p>
            <p><strong>3.2</strong> This licence does not include the right to:</p>
            <p>(a) copy, modify, adapt, translate, or create derivative works of the App or its Content;</p>
            <p>(b) reverse engineer, decompile, disassemble, or otherwise attempt to derive the source code of the App;</p>
            <p>(c) rent, lease, lend, sell, sublicence, or otherwise transfer the App or your rights under these Terms to any third party;</p>
            <p>(d) use the App or its Content for any commercial purpose without our prior written consent;</p>
            <p>(e) use automated tools, bots, scrapers, or scripts to access, extract, or collect data from the App;</p>
            <p>(f) remove, alter, or obscure any proprietary notices, trade marks, or labels in the App.</p>
            <p><strong>3.3</strong> All rights not expressly granted in these Terms are reserved by Tallo.</p>
          </Section>

          <Section title="4. Account Registration and Security">
            <p><strong>4.1</strong> Certain features of the App require you to register an account by signing in with Google or Apple. By registering, you agree to:</p>
            <p>(a) provide accurate and complete information;</p>
            <p>(b) maintain the security and confidentiality of your sign-in credentials;</p>
            <p>(c) notify us promptly at <a href="mailto:info@talloapp.com.au">info@talloapp.com.au</a> if you become aware of any unauthorised access to or use of your account;</p>
            <p>(d) accept responsibility for all activity conducted through your account.</p>
            <p><strong>4.2</strong> Tallo is not liable for any loss or damage arising from your failure to maintain the security of your account credentials.</p>
            <p><strong>4.3</strong> Tallo reserves the right to suspend or terminate your account at any time if it reasonably believes you have violated these Terms.</p>
          </Section>

          <Section title="5. Acceptable Use">
            <p><strong>5.1</strong> You agree to use the App only for lawful purposes and in accordance with these Terms. You must not:</p>
            <p>(a) submit false, misleading, or inaccurate product prices, barcodes, or other information;</p>
            <p>(b) post comments or content that is defamatory, offensive, harassing, threatening, or otherwise objectionable;</p>
            <p>(c) impersonate any person or entity or misrepresent your affiliation with any person or entity;</p>
            <p>(d) attempt to gain unauthorised access to any part of the App, its servers, or any systems or networks connected to the App;</p>
            <p>(e) use the App in any manner that could damage, disable, overburden, or impair it or interfere with any other party&apos;s use;</p>
            <p>(f) use the App to harvest, collect, or store personal information about other users;</p>
            <p>(g) engage in any conduct that violates any applicable Australian law or regulation.</p>
            <p><strong>5.2</strong> Tallo reserves the right to remove any User Content that, in its sole discretion, violates these Terms or is otherwise objectionable, without notice.</p>
          </Section>

          <Section title="6. Product and Price Information">
            <h4>6.1 Nature of Price Information</h4>
            <p>The App displays product and pricing information sourced from publicly available sources. By using the App, you acknowledge and agree that:</p>
            <p>(a) <strong>Prices may not be current.</strong> The App&apos;s product catalogue is updated periodically. Grocery prices change frequently and the information displayed may not reflect current in-store or online prices at the time of your visit.</p>
            <p>(b) <strong>Prices may vary by location.</strong> Store prices can differ between individual store locations and may not reflect the price available at your nearest store.</p>
            <p>(c) <strong>Promotional pricing.</strong> Special, promotional, or discounted pricing displayed in the App may have expired or may not be available at your nearest store.</p>
            <p>(d) <strong>Product availability.</strong> Products displayed in the App may not be available at all store locations or may be subject to stock limitations.</p>
            <h4>6.2 No Guarantee of Savings</h4>
            <p>Tallo makes no guarantee or representation that use of the App will result in any financial saving or that any price displayed is the lowest available price for that product.</p>
            <h4>6.3 Verification</h4>
            <p>You are solely responsible for verifying current prices and product availability directly with the relevant Retailer before making any purchasing decision. Tallo accepts no liability for any loss suffered as a result of reliance on price or product information displayed in the App.</p>
          </Section>

          <Section title="7. Third-Party Retailer Disclaimer">
            <h4>7.1 No Affiliation</h4>
            <p>Tallo is an independent price comparison, grocery and meal planning service. Tallo is not affiliated with, endorsed by, sponsored by, or in any way associated with Coles Supermarkets Australia Pty Ltd, Woolworths Group Limited, ALDI Stores, or any other Retailer whose products or prices appear in the App. No Retailer has endorsed or sponsored the App or its Content, and no Retailer has any commercial relationship with Tallo in connection with the App.</p>
            <h4>7.2 Independent Compilation</h4>
            <p>Product and pricing information displayed in the App is independently compiled and maintained by Tallo from publicly available sources. Tallo does not represent that such information has been provided by, verified by, or approved by any Retailer.</p>
            <h4>7.3 Retailer Trade Marks</h4>
            <p>The names, logos, trade marks, and branding of Retailers and product manufacturers displayed in the App remain the property of their respective owners. Their appearance in the App is for the sole purpose of product identification and price comparison, and does not imply any affiliation with, endorsement by, or commercial relationship with those owners.</p>
            <h4>7.4 Consumer Information Purpose</h4>
            <p>The price comparison functionality of the App is provided as a consumer information service to assist users in making informed purchasing decisions. Nothing in the App constitutes a retail offer, and Tallo does not facilitate or process any transaction between you and any Retailer.</p>
          </Section>

          <Section title="8. Meal Planning and Recipe Content">
            <p><strong>8.1</strong> The App provides meal planning features including recipe browsing, meal preparation planning, and a lunchbox builder. Recipe and nutritional content displayed in the App is provided for general informational and convenience purposes only.</p>
            <p><strong>8.2</strong> Tallo does not warrant that any recipe content is accurate, complete, suitable for your dietary requirements, or free from allergens. You are solely responsible for verifying that any recipe or meal plan is appropriate for your individual circumstances, including any dietary restrictions, allergies, or health conditions.</p>
            <p><strong>8.3</strong> Nothing in the App constitutes dietary, nutritional, or medical advice. You should seek professional advice before making any significant dietary changes.</p>
            <p><strong>8.4</strong> Ingredient price estimates generated by the App&apos;s meal planning features are indicative only and subject to the same accuracy limitations set out in clause 6.</p>
          </Section>

          <Section title="9. User-Submitted Content">
            <h4>9.1 Licence</h4>
            <p>By submitting User Content to the App, you grant Tallo a perpetual, irrevocable, worldwide, royalty-free, non-exclusive licence to use, reproduce, store, modify, adapt, publish, display, and incorporate your User Content into the App and its associated datasets for the purpose of operating and improving the App.</p>
            <h4>9.2 Representations</h4>
            <p>By submitting User Content, you represent and warrant that:</p>
            <p>(a) you own or have the necessary rights to submit the content;</p>
            <p>(b) the content is accurate to the best of your knowledge;</p>
            <p>(c) the submission does not infringe the intellectual property rights, privacy rights, or other rights of any third party;</p>
            <p>(d) the content does not contain any material that is false, misleading, defamatory, offensive, or otherwise unlawful.</p>
            <h4>9.3 Moderation</h4>
            <p>Tallo may accept, reject, modify, or remove any User Content at its sole discretion and without notice or obligation to you.</p>
            <h4>9.4 Ownership</h4>
            <p>Tallo claims no intellectual property rights over your User Content beyond the licence granted in clause 9.1. Tallo is under no obligation to attribute or credit you for any submission.</p>
          </Section>

          <Section title="10. Intellectual Property">
            <p><strong>10.1</strong> The App, including its design, source code, functionality, branding, the Tallo name and logo, and all Content created by Tallo, is owned by Tallo and is protected under Australian and international intellectual property laws. For the avoidance of doubt, this clause does not assert any ownership over product names, pricing data, or other information sourced from third parties, which remains the property of their respective owners.</p>
            <p><strong>10.2</strong> Nothing in these Terms transfers any intellectual property rights to you. You may not use the Tallo name, logo, or branding without our prior written consent.</p>
            <p><strong>10.3</strong> Product names, brand names, trade marks, and other intellectual property of Retailers and third-party manufacturers displayed in the App remain the property of their respective owners. Nothing in these Terms or in the App grants you any rights in respect of those marks.</p>
          </Section>

          <Section title="11. Third-Party Services">
            <p><strong>11.1</strong> The App integrates third-party services including Google Firebase, Google Sign-In, and Apple Sign in with Apple. Your use of those services is subject to their respective terms and policies:</p>
            <ul>
              <li>Google Terms of Service: policies.google.com/terms</li>
              <li>Apple Media Services Terms and Conditions: apple.com/legal/internet-services/terms/site.html</li>
            </ul>
            <p><strong>11.2</strong> Tallo is not responsible for the availability, accuracy, content, products, or practices of any third-party service provider. Any issues with third-party services should be directed to the relevant provider.</p>
          </Section>

          <Section title="12. Disclaimers">
            <p><strong>12.1</strong> To the maximum extent permitted by law, the App and all Content is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind, whether express or implied, including any implied warranty of merchantability, fitness for a particular purpose, or non-infringement.</p>
            <p><strong>12.2</strong> Tallo does not warrant that:</p>
            <p>(a) the App will be available, uninterrupted, timely, or error-free;</p>
            <p>(b) defects in the App will be corrected;</p>
            <p>(c) the App or its servers are free of viruses or other harmful components;</p>
            <p>(d) the price or product information displayed in the App is accurate, complete, or current.</p>
            <p><strong>12.3</strong> Nothing in these Terms excludes, restricts, or modifies any consumer guarantee, right, or remedy you may have under the <em>Competition and Consumer Act 2010</em> (Cth) (including the Australian Consumer Law) that cannot be excluded, restricted, or modified by agreement.</p>
          </Section>

          <Section title="13. Limitation of Liability">
            <p><strong>13.1</strong> To the maximum extent permitted by law, Tallo&apos;s total liability to you for any loss or damage arising out of or in connection with your use of the App, whether in contract, tort (including negligence), statute, or otherwise, is limited to AUD $100.</p>
            <p><strong>13.2</strong> To the maximum extent permitted by law, Tallo is not liable for any:</p>
            <p>(a) indirect, incidental, special, consequential, or punitive loss or damage;</p>
            <p>(b) loss of profits, revenue, savings, data, goodwill, or business opportunity;</p>
            <p>(c) loss arising from your reliance on price or product information displayed in the App;</p>
            <p>(d) loss arising from the acts or omissions of any Retailer or third-party service provider.</p>
            <p><strong>13.3</strong> The limitations in this clause 13 do not apply to the extent that liability cannot be excluded under the Australian Consumer Law.</p>
          </Section>

          <Section title="14. Indemnification">
            <p>You agree to indemnify, defend, and hold harmless Tallo and its officers, employees, and agents from and against any claims, liabilities, damages, losses, costs, and expenses (including reasonable legal fees) arising out of or in connection with:</p>
            <p>(a) your use of the App in breach of these Terms;</p>
            <p>(b) your User Content;</p>
            <p>(c) your violation of any applicable law or regulation; or</p>
            <p>(d) your infringement of any rights of a third party.</p>
          </Section>

          <Section title="15. App Store Terms">
            <h4>15.1 Apple App Store</h4>
            <p>If you downloaded the App from the Apple App Store, the following applies:</p>
            <p>(a) These Terms are between you and Tallo only, not Apple Inc. Apple is not a party to these Terms and has no obligation to provide any maintenance, support, warranty, or liability in relation to the App.</p>
            <p>(b) In the event of any conflict between these Terms and Apple&apos;s App Store terms, Apple&apos;s terms will prevail to the extent of the inconsistency.</p>
            <p>(c) Apple and its subsidiaries are third-party beneficiaries of these Terms and, upon your acceptance of these Terms, Apple will have the right to enforce these Terms against you as a third-party beneficiary.</p>
            <h4>15.2 Google Play Store</h4>
            <p>If you downloaded the App from the Google Play Store, your use is also subject to Google Play&apos;s Terms of Service.</p>
          </Section>

          <Section title="16. Suspension and Termination">
            <p><strong>16.1</strong> Tallo may suspend or terminate your access to the App at any time, with or without notice, if:</p>
            <p>(a) you breach any provision of these Terms;</p>
            <p>(b) Tallo is required to do so by law or order of a court or regulator; or</p>
            <p>(c) Tallo discontinues the App.</p>
            <p><strong>16.2</strong> You may cease using the App at any time. You may delete your account from within the App via <strong>Settings &gt; Delete Account</strong>.</p>
            <p><strong>16.3</strong> Upon termination of your access:</p>
            <p>(a) your licence to use the App terminates immediately;</p>
            <p>(b) you must cease all use of the App.</p>
            <p><strong>16.4</strong> Clauses 9, 10, 12, 13, 14, and 18 survive termination of these Terms.</p>
          </Section>

          <Section title="17. Changes to These Terms">
            <p><strong>17.1</strong> Tallo may amend these Terms from time to time. The current version is identified by the &ldquo;Last updated&rdquo; date at the top of this document.</p>
            <p><strong>17.2</strong> Where an amendment is material, Tallo will notify you within the App prior to the change taking effect. Continued use of the App following that notification constitutes your acceptance of the amended Terms.</p>
            <p><strong>17.3</strong> If you do not agree to an amendment, you must cease using the App and delete it from your device.</p>
          </Section>

          <Section title="18. Governing Law and Jurisdiction">
            <p>These Terms are governed by the laws of the State of New South Wales, Australia. You submit to the non-exclusive jurisdiction of the courts of New South Wales and the federal courts of Australia in respect of any dispute arising out of or in connection with these Terms or your use of the App.</p>
          </Section>

          <Section title="19. Severability">
            <p>If any provision of these Terms is held to be invalid, unlawful, or unenforceable, that provision will be severed and the remaining provisions will continue in full force and effect.</p>
          </Section>

          <Section title="20. Waiver">
            <p>A failure or delay by Tallo to exercise any right or remedy under these Terms does not constitute a waiver of that right or remedy. A waiver of any breach of these Terms does not constitute a waiver of any subsequent breach.</p>
          </Section>

          <Section title="21. Entire Agreement">
            <p>These Terms, together with the Privacy Policy at talloapp.com.au/privacy, constitute the entire agreement between you and Tallo in relation to your use of the App and supersede all prior agreements, representations, and understandings in relation to that subject matter.</p>
          </Section>

          <Section title="22. Contact">
            <p>For all enquiries relating to these Terms:</p>
            <p><strong>Email:</strong> <a href="mailto:info@talloapp.com.au">info@talloapp.com.au</a></p>
            <p><strong>Website:</strong> talloapp.com.au</p>
            <p><em>These Terms are prepared in accordance with the Competition and Consumer Act 2010 (Cth), the Australian Consumer Law, and the requirements of the Apple App Store and Google Play Store.</em></p>
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
