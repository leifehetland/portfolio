import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Fonts are self-hosted (next/font/local) for no layout shift and zero build-time
// or runtime dependency on a font CDN. Source files are the OFL-licensed variable
// woff2 builds, vendored under ./fonts with their license text.

// Display face: characterful high-contrast serif for giant numbers and titles.
// DRAFT choice (docs/02 calls for a characterful display face, not a default).
const fraunces = localFont({
  src: "./fonts/fraunces-variable.woff2",
  variable: "--font-fraunces",
  display: "swap",
  weight: "100 900",
});

// Body / label face: a clean grotesque for body, metadata, and labels.
// DRAFT choice (pairs a quiet sans against the serif personality).
const hanken = localFont({
  src: "./fonts/hanken-grotesk-variable.woff2",
  variable: "--font-hanken",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Leif Hetland, senior full-stack engineer",
  description:
    "Senior full-stack TypeScript engineer. Architecture, full-stack delivery, and the systems behind them.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${hanken.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
