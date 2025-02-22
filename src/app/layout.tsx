import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { defaultMetadata } from "@/lib/seo-config";
import { GoogleAnalytics } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/theme-provider";
import PageTransition from "@/components/PageTransition";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleAnalytics />
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          inter.className
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <PageTransition>{children}</PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
