import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { createPageMetadata } from "@/app/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Terms and Conditions",
  description: "The terms and conditions governing your use of the Tallo app.",
  path: "/terms",
});

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
            Last updated: 22 July 2026
          </p>
        </div>
        <div className="prose-legal">

          <Section title="1. Interpretation">
            <h4>1.1 Definitions</h4>
            <p>In these Terms:</p>
            <ul>
              <li><strong>&quot;App&quot;</strong> means the Tallo mobile application, including all features, content, and updates.</li>
              <li><strong>&quot;Content&quot;</strong> means all text, images, data, recipes, pricing information, product details, and other material made available through the App.</li>
              <li><strong>&quot;Retailer&quot;</strong> means any grocery retailer whose product or pricing information is displayed in the App, including but not limited to Coles Supermarkets Australia Pty Ltd, Woolworths Group Limited, and ALDI Stores.</li>
              <li><strong>&quot;Tallo&quot;</strong>, <strong>&quot;we&quot;</strong>, <strong>&quot;us&quot;</strong>, <strong>&quot;our&quot;</strong> means Tallo Pty Ltd (ACN 699 854 692), the operator of the App.</li>
              <li><strong>&quot;Terms&quot;</strong> means these Terms and Conditions, as amended from time to time.</li>
              <li><strong>&quot;User Content&quot;</strong> means any content you submit to the App, including barcode information, price reports, recipe comments, and star ratings.</li>
              <li><strong>&quot;you&quot;</strong>, <strong>&quot;your&quot;</strong> means the individual accessing or using the App.</li>
            </ul>

            <h4>1.2 Interpretation</h4>
            <p>In these Terms, unless the context otherwise requires:</p>
            <ul>
              <li>(a) a reference to a statute includes all regulations and instruments made under it and any amendment, re-enactment, or replacement of it;</li>
              <li>(b) the singular includes the plural and vice versa;</li>
              <li>(c) headings are for convenience only and do not affect interpretation.</li>
            </ul>
          </Section>

          <Section title="2. Acceptance of Terms">
            <h4>2.1</h4>
            <p>
              By downloading, installing, or using the App, you agree to be bound by these Terms and our
              Privacy Policy, available at <Link href="/privacy">talloapp.com.au/privacy</Link>. These Terms
              and the Privacy Policy together constitute the entire agreement between you and Tallo in
              relation to your use of the App.
            </p>

            <h4>2.2</h4>
            <p>If you do not agree to these Terms, you must not use the App.</p>

            <h4>2.3</h4>
            <p>
              You represent that you are at least 13 years of age. If you are under 18, you represent that
              you have obtained the consent of a parent or legal guardian to use the App.
            </p>
          </Section>

          <Section title="3. Licence Grant">
            <h4>3.1</h4>
            <p>
              Tallo grants you a limited, personal, non-exclusive, non-transferable, revocable licence to
              install and use the App on a device you own or control, solely for your personal,
              non-commercial use, in accordance with these Terms.
            </p>

            <h4>3.2</h4>
            <p>This licence does not include the right to:</p>
            <ul>
              <li>(a) copy, modify, adapt, translate, or create derivative works of the App or its Content;</li>
              <li>(b) reverse engineer, decompile, disassemble, or otherwise attempt to derive the source code of the App;</li>
              <li>(c) rent, lease, lend, sell, sublicence, or otherwise transfer the App or your rights under these Terms to any third party;</li>
              <li>(d) use the App or its Content for any commercial purpose without our prior written consent;</li>
              <li>(e) use automated tools, bots, scrapers, or scripts to access, extract, or collect data from the App;</li>
              <li>(f) remove, alter, or obscure any proprietary notices, trade marks, or labels in the App.</li>
            </ul>

            <h4>3.3</h4>
            <p>All rights not expressly granted in these Terms are reserved by Tallo.</p>
          </Section>

          <Section title="4. Account Registration and Security">
            <h4>4.1</h4>
            <p>
              Certain features of the App require you to register an account by signing in with Google or
              Apple. By registering, you agree to:
            </p>
            <ul>
              <li>(a) provide accurate and complete information;</li>
              <li>(b) maintain the security and confidentiality of your sign-in credentials;</li>
              <li>(c) notify us promptly at <a href="mailto:support@talloapp.com.au">support@talloapp.com.au</a> if you become aware of any unauthorised access to or use of your account;</li>
              <li>(d) accept responsibility for all activity conducted through your account.</li>
            </ul>

            <h4>4.2</h4>
            <p>
              Tallo is not liable for any loss or damage arising from your failure to maintain the security
              of your account credentials.
            </p>

            <h4>4.3</h4>
            <p>
              Tallo reserves the right to suspend or terminate your account at any time if it reasonably
              believes you have violated these Terms.
            </p>
          </Section>

          <Section title="5. Subscriptions and Payments">
            <h4>5.1 Free and paid features</h4>
            <p>
              The App is free to download and provides substantial functionality at no cost. Certain premium
              features are available through a paid subscription (&quot;Tallo Pro&quot;). The features
              included in a paid subscription, and any usage limits that apply to free users, are described
              in the App at the point of purchase.
            </p>

            <h4>5.2 Billing through the app store</h4>
            <p>
              All subscriptions are purchased and billed through the Apple App Store or the Google Play Store
              using the payment method associated with your app store account. Tallo does not process,
              receive, or store your payment card or other financial details. Pricing, applicable taxes, and
              the available subscription periods are displayed in the App and by the app store before you
              confirm a purchase.
            </p>

            <h4>5.3 Auto-renewal</h4>
            <p>
              Paid subscriptions are auto-renewing. Unless you cancel at least 24 hours before the end of the
              current period, your subscription will renew automatically and the applicable price will be
              charged to your app store account for the next period.
            </p>

            <h4>5.4 Managing and cancelling</h4>
            <p>
              You can manage your subscription, or turn off auto-renewal, at any time through your Apple App
              Store or Google Play Store account settings. Cancelling stops future renewals. Cancelling does
              not retroactively refund the current period, and you will retain premium access until the end
              of the period you have already paid for.
            </p>

            <h4>5.5 Refunds</h4>
            <p>
              Purchases are handled by the relevant app store, and refund requests are subject to that app
              store&apos;s policies. Tallo does not directly process refunds for app store purchases. Nothing
              in this clause limits any consumer guarantee, right, or remedy you may have under the
              Australian Consumer Law that cannot be excluded (see clause 13.3).
            </p>

            <h4>5.6 Changes to subscriptions</h4>
            <p>
              Tallo may change the features, usage limits, or price of a subscription from time to time.
              Where a price change applies to your existing subscription, it will take effect in accordance
              with the relevant app store&apos;s rules, which generally require your consent before an
              increased price is charged. A change to the features available on the free tier does not
              entitle you to a refund.
            </p>
          </Section>

          <Section title="6. Acceptable Use">
            <h4>6.1</h4>
            <p>
              You agree to use the App only for lawful purposes and in accordance with these Terms. You must
              not:
            </p>
            <ul>
              <li>(a) submit false, misleading, or inaccurate product prices, barcodes, or other information;</li>
              <li>(b) post comments or content that is defamatory, offensive, harassing, threatening, or otherwise objectionable;</li>
              <li>(c) impersonate any person or entity or misrepresent your affiliation with any person or entity;</li>
              <li>(d) attempt to gain unauthorised access to any part of the App, its servers, or any systems or networks connected to the App;</li>
              <li>(e) use the App in any manner that could damage, disable, overburden, or impair it or interfere with any other party&apos;s use;</li>
              <li>(f) use the App to harvest, collect, or store personal information about other users;</li>
              <li>(g) engage in any conduct that violates any applicable Australian law or regulation.</li>
            </ul>

            <h4>6.2</h4>
            <p>
              Tallo reserves the right to remove any User Content that, in its sole discretion, violates these
              Terms or is otherwise objectionable, without notice.
            </p>
          </Section>

          <Section title="7. Product and Price Information">
            <h4>7.1 Nature of Price Information</h4>
            <p>
              The App displays product and pricing information sourced from publicly available sources. By
              using the App, you acknowledge and agree that:
            </p>
            <ul>
              <li><strong>(a) Prices may not be current.</strong> The App&apos;s product catalogue is updated periodically. Grocery prices change frequently and the information displayed may not reflect current in-store or online prices at the time of your visit.</li>
              <li><strong>(b) Prices may vary by location.</strong> Store prices can differ between individual store locations and may not reflect the price available at your nearest store.</li>
              <li><strong>(c) Promotional pricing.</strong> Special, promotional, or discounted pricing displayed in the App may have expired or may not be available at your nearest store.</li>
              <li><strong>(d) Product availability.</strong> Products displayed in the App may not be available at all store locations or may be subject to stock limitations.</li>
            </ul>

            <h4>7.2 Fuel Price Information</h4>
            <p>
              The App also displays fuel price information sourced from state government feeds and other
              publicly available sources. By using the Fuel feature, you acknowledge and agree that:
            </p>
            <ul>
              <li><strong>(a) Fuel prices change frequently and may not be current.</strong> The prices displayed may not reflect the price at the pump at the time of your visit.</li>
              <li><strong>(b) Some sources are delayed.</strong> Depending on the state or territory, fuel price data may be delayed rather than real-time. Where data is delayed, the App indicates this. You should not treat delayed data as a live price.</li>
              <li><strong>(c) Coverage is limited.</strong> Fuel price data is not available for every state, territory, or station, and station details may be incomplete or out of date.</li>
              <li><strong>(d) Verify before purchasing.</strong> You are solely responsible for verifying the current price directly at the station before making any purchasing decision.</li>
            </ul>

            <h4>7.3 No Guarantee of Savings</h4>
            <p>
              Tallo makes no guarantee or representation that use of the App will result in any financial
              saving or that any price displayed is the lowest available price for that product or fuel type.
            </p>

            <h4>7.4 Verification</h4>
            <p>
              You are solely responsible for verifying current prices and product availability directly with
              the relevant Retailer or fuel station before making any purchasing decision. Tallo accepts no
              liability for any loss suffered as a result of reliance on price or product information
              displayed in the App.
            </p>
          </Section>

          <Section title="8. Third-Party Retailer Disclaimer">
            <h4>8.1 No Affiliation</h4>
            <p>
              Tallo is an independent price comparison, grocery and meal planning service. Tallo is not
              affiliated with, endorsed by, sponsored by, or in any way associated with Coles Supermarkets
              Australia Pty Ltd, Woolworths Group Limited, ALDI Stores, any fuel retailer, or any other
              Retailer whose products or prices appear in the App. No Retailer has endorsed or sponsored the
              App or its Content, and no Retailer has any commercial relationship with Tallo in connection
              with the App.
            </p>

            <h4>8.2 Independent Compilation</h4>
            <p>
              Product and pricing information displayed in the App is independently compiled and maintained by
              Tallo from publicly available sources. Tallo does not represent that such information has been
              provided by, verified by, or approved by any Retailer.
            </p>

            <h4>8.3 Retailer Trade Marks</h4>
            <p>
              The names, logos, trade marks, and branding of Retailers, fuel retailers, and product
              manufacturers displayed in the App remain the property of their respective owners. Their
              appearance in the App is for the sole purpose of product identification and price comparison,
              and does not imply any affiliation with, endorsement by, or commercial relationship with those
              owners.
            </p>

            <h4>8.4 Consumer Information Purpose</h4>
            <p>
              The price comparison functionality of the App is provided as a consumer information service to
              assist users in making informed purchasing decisions. Nothing in the App constitutes a retail
              offer, and Tallo does not facilitate or process any transaction between you and any Retailer.
            </p>
          </Section>

          <Section title="9. Meal Planning and Recipe Content">
            <h4>9.1</h4>
            <p>
              The App provides meal planning features including recipe browsing, meal preparation planning,
              and a lunchbox builder. Recipe and nutritional content displayed in the App is provided for
              general informational and convenience purposes only.
            </p>

            <h4>9.2</h4>
            <p>
              Tallo does not warrant that any recipe content is accurate, complete, suitable for your dietary
              requirements, or free from allergens. You are solely responsible for verifying that any recipe
              or meal plan is appropriate for your individual circumstances, including any dietary
              restrictions, allergies, or health conditions.
            </p>

            <h4>9.3</h4>
            <p>
              Nothing in the App constitutes dietary, nutritional, or medical advice. You should seek
              professional advice before making any significant dietary changes.
            </p>

            <h4>9.4</h4>
            <p>
              Ingredient price estimates generated by the App&apos;s meal planning features are indicative
              only and subject to the same accuracy limitations set out in clause 7.
            </p>

            <h4>9.5 Recipe import</h4>
            <p>
              The App allows you to import recipes from third-party web addresses and from links to publicly
              shared social media posts that you choose to provide. This feature is provided as a convenience
              for your personal, non-commercial use only.
            </p>

            <h4>9.6 Third-party ownership of imported content</h4>
            <p>
              Recipes and related material available at third-party web addresses and on social media are
              owned by their respective authors, publishers, or rights holders. Tallo does not own that
              material, does not claim any rights in it, and does not host or republish it. An imported recipe
              is saved only in your device&apos;s local storage for your personal use.
            </p>

            <h4>9.7 Your responsibility when importing</h4>
            <p>
              You are responsible for ensuring that you are entitled to import and use any content you choose
              to import, and that your use is personal and non-commercial. You must not use the import
              feature to reproduce, distribute, or commercially exploit third-party content.
            </p>

            <h4>9.8 Automated extraction and accuracy</h4>
            <p>
              Imported recipe details are interpreted automatically and may be incomplete or inaccurate,
              including in relation to ingredients, quantities, method, and allergens. Imported content is
              subject to the same limitations and disclaimers set out in clauses 9.1 to 9.4. You should verify
              any imported recipe before relying on it, particularly where you have any dietary restriction,
              allergy, or health condition.
            </p>

            <h4>9.9 Rights holder concerns</h4>
            <p>
              If you are a content owner and believe the import feature is being used in a way that infringes
              your rights, contact <a href="mailto:support@talloapp.com.au">support@talloapp.com.au</a> and
              Tallo will consider and respond to your concerns.
            </p>
          </Section>

          <Section title="10. User-Submitted Content">
            <h4>10.1 Licence</h4>
            <p>
              By submitting User Content to the App, you grant Tallo a perpetual, irrevocable, worldwide,
              royalty-free, non-exclusive licence to use, reproduce, store, modify, adapt, publish, display,
              and incorporate your User Content into the App and its associated datasets for the purpose of
              operating and improving the App. This licence applies only to User Content that you have created
              or that you otherwise own or are entitled to license to Tallo. It does not apply to third-party
              content that you import into the App under clause 9.5, which Tallo stores and processes solely
              to provide the import feature to you and does not use for any other purpose.
            </p>

            <h4>10.2 Representations</h4>
            <p>By submitting User Content, you represent and warrant that:</p>
            <ul>
              <li>(a) you own or have the necessary rights to submit the content;</li>
              <li>(b) the content is accurate to the best of your knowledge;</li>
              <li>(c) the submission does not infringe the intellectual property rights, privacy rights, or other rights of any third party;</li>
              <li>(d) the content does not contain any material that is false, misleading, defamatory, offensive, or otherwise unlawful.</li>
            </ul>

            <h4>10.3 Zero Tolerance for Objectionable Content</h4>
            <p>
              Tallo has a zero-tolerance policy for objectionable content. You must not submit any User
              Content that:
            </p>
            <ul>
              <li>(a) is hateful, discriminatory, or promotes violence against individuals or groups based on race, ethnicity, religion, gender, sexual orientation, disability, or any other characteristic;</li>
              <li>(b) is sexually explicit, pornographic, or obscene;</li>
              <li>(c) harasses, bullies, threatens, or intimidates any individual;</li>
              <li>(d) exploits or endangers minors in any way;</li>
              <li>(e) promotes or facilitates illegal activity.</li>
            </ul>
            <p>
              Tallo will remove any such content promptly upon becoming aware of it. Users who submit
              objectionable content may have their account suspended or terminated without notice.
            </p>
            <p>
              To report objectionable content, contact{" "}
              <a href="mailto:support@talloapp.com.au">support@talloapp.com.au</a>.
            </p>

            <h4>10.4 Moderation</h4>
            <p>
              Tallo may accept, reject, modify, or remove any User Content at its sole discretion and without
              notice or obligation to you.
            </p>

            <h4>10.5 Ownership</h4>
            <p>
              Tallo claims no intellectual property rights over your User Content beyond the licence granted
              in clause 10.1. Tallo is under no obligation to attribute or credit you for any submission.
            </p>
          </Section>

          <Section title="11. Intellectual Property">
            <h4>11.1</h4>
            <p>
              The App, including its design, source code, functionality, branding, the Tallo name and logo,
              and all Content created by Tallo, is owned by Tallo and is protected under Australian and
              international intellectual property laws. For the avoidance of doubt, this clause does not
              assert any ownership over product names, pricing data, or other information sourced from third
              parties, which remains the property of their respective owners.
            </p>

            <h4>11.2</h4>
            <p>
              Nothing in these Terms transfers any intellectual property rights to you. You may not use the
              Tallo name, logo, or branding without our prior written consent.
            </p>

            <h4>11.3</h4>
            <p>
              Product names, brand names, trade marks, and other intellectual property of Retailers and
              third-party manufacturers displayed in the App remain the property of their respective owners.
              Nothing in these Terms or in the App grants you any rights in respect of those marks.
            </p>
          </Section>

          <Section title="12. Third-Party Services">
            <h4>12.1</h4>
            <p>
              The App integrates third-party services including Google Firebase, Google Sign-In, Apple Sign in
              with Apple, Google Maps, and Expo (for push notification delivery). Your use of those services
              is subject to their respective terms and policies:
            </p>
            <ul>
              <li>Google Terms of Service: policies.google.com/terms</li>
              <li>Apple Media Services Terms and Conditions: apple.com/legal/internet-services/terms/site.html</li>
              <li>Expo Terms of Service: expo.dev/terms</li>
            </ul>

            <h4>12.2</h4>
            <p>
              Tallo is not responsible for the availability, accuracy, content, products, or practices of any
              third-party service provider. Any issues with third-party services should be directed to the
              relevant provider.
            </p>
          </Section>

          <Section title="13. Disclaimers">
            <h4>13.1</h4>
            <p>
              To the maximum extent permitted by law, the App and all Content is provided on an &quot;as
              is&quot; and &quot;as available&quot; basis without warranties of any kind, whether express or
              implied, including any implied warranty of merchantability, fitness for a particular purpose, or
              non-infringement.
            </p>

            <h4>13.2</h4>
            <p>Tallo does not warrant that:</p>
            <ul>
              <li>(a) the App will be available, uninterrupted, timely, or error-free;</li>
              <li>(b) defects in the App will be corrected;</li>
              <li>(c) the App or its servers are free of viruses or other harmful components;</li>
              <li>(d) the price or product information displayed in the App is accurate, complete, or current.</li>
            </ul>

            <h4>13.3</h4>
            <p>
              Nothing in these Terms excludes, restricts, or modifies any consumer guarantee, right, or remedy
              you may have under the <em>Competition and Consumer Act 2010</em> (Cth) (including the
              Australian Consumer Law) that cannot be excluded, restricted, or modified by agreement.
            </p>
          </Section>

          <Section title="14. Limitation of Liability">
            <h4>14.1</h4>
            <p>
              To the maximum extent permitted by law, Tallo&apos;s total liability to you for any loss or
              damage arising out of or in connection with your use of the App, whether in contract, tort
              (including negligence), statute, or otherwise, is limited to AUD $100.
            </p>

            <h4>14.2</h4>
            <p>To the maximum extent permitted by law, Tallo is not liable for any:</p>
            <ul>
              <li>(a) indirect, incidental, special, consequential, or punitive loss or damage;</li>
              <li>(b) loss of profits, revenue, savings, data, goodwill, or business opportunity;</li>
              <li>(c) loss arising from your reliance on price or product information displayed in the App;</li>
              <li>(d) loss arising from the acts or omissions of any Retailer or third-party service provider.</li>
            </ul>

            <h4>14.3</h4>
            <p>
              The limitations in this clause 14 do not apply to the extent that liability cannot be excluded
              under the Australian Consumer Law.
            </p>
          </Section>

          <Section title="15. Indemnification">
            <p>
              You agree to indemnify, defend, and hold harmless Tallo and its officers, employees, and agents
              from and against any claims, liabilities, damages, losses, costs, and expenses (including
              reasonable legal fees) arising out of or in connection with:
            </p>
            <ul>
              <li>(a) your use of the App in breach of these Terms;</li>
              <li>(b) your User Content;</li>
              <li>(c) your violation of any applicable law or regulation; or</li>
              <li>(d) your infringement of any rights of a third party.</li>
            </ul>
          </Section>

          <Section title="16. App Store Terms">
            <h4>16.1 Apple App Store</h4>
            <p>If you downloaded the App from the Apple App Store, the following applies:</p>
            <ul>
              <li>(a) These Terms are between you and Tallo only, not Apple Inc. Apple is not a party to these Terms and has no obligation to provide any maintenance, support, warranty, or liability in relation to the App.</li>
              <li>(b) In the event of any conflict between these Terms and Apple&apos;s App Store terms, Apple&apos;s terms will prevail to the extent of the inconsistency.</li>
              <li>(c) Apple and its subsidiaries are third-party beneficiaries of these Terms and, upon your acceptance of these Terms, Apple will have the right to enforce these Terms against you as a third-party beneficiary.</li>
            </ul>

            <h4>16.2 Google Play Store</h4>
            <p>
              If you downloaded the App from the Google Play Store, your use is also subject to Google
              Play&apos;s Terms of Service.
            </p>
          </Section>

          <Section title="17. Suspension and Termination">
            <h4>17.1</h4>
            <p>Tallo may suspend or terminate your access to the App at any time, with or without notice, if:</p>
            <ul>
              <li>(a) you breach any provision of these Terms;</li>
              <li>(b) Tallo is required to do so by law or order of a court or regulator; or</li>
              <li>(c) Tallo discontinues the App.</li>
            </ul>

            <h4>17.2</h4>
            <p>
              You may cease using the App at any time. You may delete your account from within the App via{" "}
              <strong>Settings &rarr; Delete Account</strong>.
            </p>

            <h4>17.3</h4>
            <p>Upon termination of your access:</p>
            <ul>
              <li>(a) your licence to use the App terminates immediately;</li>
              <li>(b) you must cease all use of the App.</li>
            </ul>

            <h4>17.4</h4>
            <p>Clauses 10, 11, 13, 14, 15, and 19 survive termination of these Terms.</p>
          </Section>

          <Section title="18. Changes to These Terms">
            <h4>18.1</h4>
            <p>
              Tallo may amend these Terms from time to time. The current version is identified by the
              &quot;Last updated&quot; date at the top of this document.
            </p>

            <h4>18.2</h4>
            <p>
              Where an amendment is material, Tallo will notify you within the App prior to the change taking
              effect. Continued use of the App following that notification constitutes your acceptance of the
              amended Terms.
            </p>

            <h4>18.3</h4>
            <p>
              If you do not agree to an amendment, you must cease using the App and delete it from your
              device.
            </p>
          </Section>

          <Section title="19. Governing Law and Jurisdiction">
            <p>
              These Terms are governed by the laws of the State of New South Wales, Australia. You submit to
              the non-exclusive jurisdiction of the courts of New South Wales and the federal courts of
              Australia in respect of any dispute arising out of or in connection with these Terms or your use
              of the App.
            </p>
          </Section>

          <Section title="20. Severability">
            <p>
              If any provision of these Terms is held to be invalid, unlawful, or unenforceable, that
              provision will be severed and the remaining provisions will continue in full force and effect.
            </p>
          </Section>

          <Section title="21. Waiver">
            <p>
              A failure or delay by Tallo to exercise any right or remedy under these Terms does not
              constitute a waiver of that right or remedy. A waiver of any breach of these Terms does not
              constitute a waiver of any subsequent breach.
            </p>
          </Section>

          <Section title="22. Entire Agreement">
            <p>
              These Terms, together with the Privacy Policy at{" "}
              <Link href="/privacy">talloapp.com.au/privacy</Link>, constitute the entire agreement between
              you and Tallo in relation to your use of the App and supersede all prior agreements,
              representations, and understandings in relation to that subject matter.
            </p>
          </Section>

          <Section title="23. Contact">
            <p>For all enquiries relating to these Terms:</p>
            <p>
              <strong>Operator:</strong> Tallo Pty Ltd (ACN 699 854 692)<br />
              <strong>Support:</strong> <a href="mailto:support@talloapp.com.au">support@talloapp.com.au</a><br />
              <strong>General enquiries:</strong> <a href="mailto:info@talloapp.com.au">info@talloapp.com.au</a><br />
              <strong>Website:</strong> talloapp.com.au
            </p>
            <p>
              <em>
                These Terms are prepared in accordance with the Competition and Consumer Act 2010 (Cth), the
                Australian Consumer Law, and the requirements of the Apple App Store and Google Play Store.
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
