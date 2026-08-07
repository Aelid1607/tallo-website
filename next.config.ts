import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";

const nextConfig: NextConfig = {
  turbopack: {
    root: fileURLToPath(new URL(".", import.meta.url)),
  },
  async redirects() {
    return [
      // Apex -> www, except /.well-known/*. Google's App Links verifier does
      // not follow redirects, so assetlinks.json (and the AASA) must be served
      // with a direct 200 on every host the app declares. Requires the Vercel
      // domain-level "Redirect to www" setting on talloapp.com.au to be OFF,
      // with the apex assigned to this project, or this rule never runs.
      {
        source: "/:path((?!\\.well-known(?:/|$)).*)",
        has: [{ type: "host", value: "talloapp.com.au" }],
        destination: "https://www.talloapp.com.au/:path",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        // No extension, so Next would otherwise serve it as octet-stream.
        source: "/.well-known/apple-app-site-association",
        headers: [{ key: "Content-Type", value: "application/json" }],
      },
    ];
  },
};

export default nextConfig;
