"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="flex flex-col items-center gap-2 py-4"
        style={{ color: "#fff" }}
      >
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center mb-2"
          style={{ background: "rgba(255,255,255,0.1)" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <p className="text-base font-semibold">You&apos;re on the list.</p>
        <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
          We&apos;ll notify you at {email} when Tallo launches.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <p className="text-sm font-medium mb-3" style={{ color: "rgba(255,255,255,0.6)" }}>
        Notify me when it launches
      </p>
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="flex-1 px-4 py-3 rounded-full text-sm outline-none"
          style={{
            background: "rgba(255,255,255,0.1)",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-5 py-3 rounded-full text-sm font-semibold transition-opacity hover:opacity-90 disabled:opacity-50"
          style={{ background: "#fff", color: "var(--black)", flexShrink: 0 }}
        >
          {status === "loading" ? "..." : "Notify me"}
        </button>
      </div>
      {status === "error" && (
        <p className="mt-2 text-xs text-center" style={{ color: "rgba(255,100,100,0.9)" }}>
          Something went wrong — try again or email brett@talloapp.com.au
        </p>
      )}
    </form>
  );
}
