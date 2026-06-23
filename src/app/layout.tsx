import type { Metadata } from "next";
import localFont from "next/font/local";
import { SITE_URL, person } from "@/content/site";
import "./globals.css";

// Fonts are self-hosted (next/font/local) for no layout shift and zero build-time
// or runtime dependency on a font CDN. OFL-licensed variable woff2 builds, vendored
// under ./fonts with their license text. The system is techno + monospace to match
// the reference: a heavy grotesque for titles, geometric numerals for the big
// numbers, and a monospace for body, labels, and metadata.

// Display titles: heavy wide grotesque.
const archivo = localFont({
  src: "./fonts/archivo-variable.woff2",
  variable: "--font-archivo",
  display: "swap",
  weight: "100 900",
});

// Big project numbers: geometric techno numerals.
const orbitron = localFont({
  src: "./fonts/orbitron-variable.woff2",
  variable: "--font-orbitron",
  display: "swap",
  weight: "400 900",
});

// Body, labels, metadata: monospace.
const jetbrains = localFont({
  src: "./fonts/jetbrains-mono-variable.woff2",
  variable: "--font-jetbrains",
  display: "swap",
  weight: "100 800",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${person.name}, ${person.role.toLowerCase()}`,
    template: `%s | ${person.name}`,
  },
  description: person.tagline,
  applicationName: `${person.name} portfolio`,
  authors: [{ name: person.name }],
  creator: person.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: `${person.name}, ${person.role.toLowerCase()}`,
    title: `${person.name}, ${person.role.toLowerCase()}`,
    description: person.tagline,
    url: SITE_URL,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${person.name}, ${person.role.toLowerCase()}`,
    description: person.tagline,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${orbitron.variable} ${jetbrains.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
