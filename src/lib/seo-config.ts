import type { Metadata } from "next";

export const defaultMetadata: Metadata = {
  title: {
    default: "Bridger - Digital Transformation Solutions",
    template: "%s | Bridger"
  },
  description: "Empowering businesses through innovative digital transformation solutions, AI integration, and automation services.",
  keywords: ["digital transformation", "AI solutions", "business automation", "cloud solutions", "enterprise technology"],
  authors: [{ name: "Bridger" }],
  creator: "Bridger",
  publisher: "Bridger",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bridger.ai",
    siteName: "Bridger",
    title: "Bridger - Digital Transformation Solutions",
    description: "Empowering businesses through innovative digital transformation solutions",
    images: [
      {
        url: "/public/logo.png",
        width: 1200,
        height: 630,
        alt: "Bridger Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Bridger - Digital Transformation Solutions",
    description: "Empowering businesses through innovative digital transformation solutions",
    images: ["/public/logo.png"],
    creator: "@bridger"
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code"
  },
  alternates: {
    canonical: "https://bridger.ai"
  }
};