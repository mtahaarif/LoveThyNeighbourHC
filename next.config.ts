import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

// Content-Security-Policy. Inline scripts stay allowed because the App Router streams its payload in
// inline <script> tags on statically prerendered pages (a nonce would force every page to be dynamic).
// Third parties: the TrustedSite seal (cdn/www.trustedsite.com, cdn.ywxi.net, its S3 config) and the
// Google Maps embed on the contact sections.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://cdn.trustedsite.com https://www.trustedsite.com https://cdn.ywxi.net`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  `connect-src 'self'${isDev ? " ws: wss:" : ""} https://s3-us-west-2.amazonaws.com https://*.trustedsite.com https://cdn.ywxi.net`,
  "frame-src https://maps.google.com https://www.google.com https://*.trustedsite.com",
  "frame-ancestors 'self'",
  "form-action 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  poweredByHeader: false,
  images: {
    // AVIF first (smallest), WebP fallback; the optimizer negotiates per browser.
    formats: ["image/avif", "image/webp"],
    // No 2048/3840 variants: the largest photos are ~1920px wide, and the fallback `src` (what clients that
    // ignore srcset download) is the last size in this list.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    // Optimized variants are keyed by source path; 31 days keeps them warm in browsers and the CDN.
    minimumCacheTTL: 2678400,
  },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      // Images crawled from the original site carry content hashes in their names, so they never change.
      { source: "/assets/:path*", headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },
      // Banner photos at the public root keep fixed names (they get replaced in place), so revalidate monthly.
      {
        source: "/:file([\\w-]+\\.(?:png|jpe?g|webp|avif))",
        headers: [{ key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=604800" }],
      },
    ];
  },
};

export default nextConfig;
