import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

export const metadata: Metadata = {
	title: "Bridger - Digital Transformation Solutions",
	description:
		"Empowering businesses through innovative digital transformation solutions",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={inter.variable}>
			<body className={`text-text-primary min-h-screen relative font-sans`}>
				<div className="relative z-10">{children}</div>
			</body>
		</html>
	);
}
