import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Dancing_Script } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const script = Dancing_Script({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const description = `${site.fullName} offers professional, reliable, and affordable residential and commercial cleaning serving ${site.serviceArea}. Deep cleaning, recurring service, move-in and move-out, offices, salons and more. Free estimates.`;

export const metadata: Metadata = {
  metadataBase: new URL("https://sparkandshinecleaning.com"),
  title: {
    default: `${site.fullName} | Luxury Home & Office Cleaning`,
    template: `%s | ${site.fullName}`,
  },
  description,
  keywords: [
    "cleaning service",
    "house cleaning",
    "deep cleaning",
    "office cleaning",
    "move out cleaning",
    "Massachusetts cleaning service",
    "Spark and Shine Cleaning",
  ],
  authors: [{ name: site.owner.name }],
  openGraph: {
    title: `${site.fullName} | Luxury Home & Office Cleaning`,
    description,
    type: "website",
    siteName: site.fullName,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.fullName}`,
    description,
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0d1f2d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${script.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
