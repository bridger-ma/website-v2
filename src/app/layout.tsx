import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { defaultMetadata } from "@/lib/seo-config";
import { GoogleAnalytics } from "@/lib/analytics";
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
		<html lang="en" className={inter.variable}>
			<body className={`text-text-primary min-h-screen relative font-sans`}>
				<GoogleAnalytics />
				<div className="relative z-10">{children}</div>
			</body>
		</html>
	);
}
