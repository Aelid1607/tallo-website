import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { createPageMetadata } from "@/app/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Delete Your Account",
  description: "How to delete your Tallo account and what data is removed.",
  path: "/delete-account",
});

export default function DeleteAccountPage() {
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
            Your account
          </p>
          <h1 className="text-4xl font-bold mb-3" style={{ letterSpacing: "-0.03em", color: "var(--black)" }}>
            Delete your account
          </h1>
          <p className="text-lg" style={{ color: "var(--muted)" }}>
            You can delete your Tallo account at any time. Deletion is permanent and cannot be undone.
          </p>
        </div>

        <div className="prose-legal">

          <div className="legal-section">
            <h2>How to delete your account</h2>
            <p>Account deletion is done from within the app:</p>
            <ol>
              <li>Open Tallo on your device.</li>
              <li>Tap <strong>Profile</strong> in the bottom navigation bar.</li>
              <li>Tap <strong>Settings</strong>.</li>
              <li>Tap <strong>Delete Account</strong>.</li>
              <li>Confirm the deletion when prompted.</li>
            </ol>
            <p>
              Your account and all associated server data are permanently deleted immediately.
              The action cannot be reversed.
            </p>
          </div>

          <div className="legal-section">
            <h2>What gets deleted</h2>
            <p>Deleting your account permanently removes the following data from Tallo&apos;s servers:</p>
            <table>
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Outcome</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Account information (name, email address, user identifier)</td>
                  <td>Permanently deleted immediately</td>
                </tr>
                <tr>
                  <td>Recipe ratings you submitted</td>
                  <td>Permanently deleted immediately</td>
                </tr>
                <tr>
                  <td>Recipe comments you submitted</td>
                  <td>Permanently deleted immediately</td>
                </tr>
                <tr>
                  <td>Cloud backup (shopping list, saved lists, favourites, meal plan, etc.)</td>
                  <td>Permanently deleted immediately</td>
                </tr>
                <tr>
                  <td>Push notification token</td>
                  <td>Permanently deleted immediately</td>
                </tr>
                <tr>
                  <td>Watchlist product identifiers</td>
                  <td>Permanently deleted immediately</td>
                </tr>
                <tr>
                  <td>Shared shopping lists you created</td>
                  <td>Expire automatically within 48 hours of creation</td>
                </tr>
              </tbody>
            </table>

            <h3>Data that is not deleted</h3>
            <p>The following data is retained after account deletion:</p>
            <ul>
              <li><strong>Barcode and price contributions</strong> - product information you submitted is retained indefinitely as part of the product catalogue. It is not linked to your identity after account deletion.</li>
              <li><strong>Device data</strong> - favourites, shopping list, loyalty card numbers, meal plan, and other data stored on your device is not affected by account deletion. This data is removed when you uninstall the app.</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>Can&apos;t access the app?</h2>
            <p>
              If you no longer have access to the app and would like your account data deleted,
              email us at{" "}
              <a href="mailto:privacy@talloapp.com.au">privacy@talloapp.com.au</a>{" "}
              with the subject line <strong>Account deletion request</strong> and the email address
              associated with your account. We will process your request within 30 days.
            </p>
          </div>

          <div className="legal-section">
            <h2>Questions</h2>
            <p>
              For any questions about account deletion or your data, contact us at{" "}
              <a href="mailto:privacy@talloapp.com.au">privacy@talloapp.com.au</a>.
            </p>
            <p>
              For more detail on how Tallo handles your data, see the{" "}
              <Link href="/privacy">Privacy Policy</Link>.
            </p>
          </div>

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
