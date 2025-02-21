"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
	FaTools,
	FaBriefcase,
	FaEnvelope,
	FaHome,
	FaUsers,
	FaBlog,
	FaQuestionCircle,
} from "react-icons/fa";

const navItems = {
	Home: { icon: FaHome, href: "/" },
	Services: { icon: FaTools, href: "#services" },
	Portfolio: { icon: FaBriefcase, href: "#portfolio" },
	"Case Studies": { icon: FaUsers, href: "#case-studies" },
	Testimonials: { icon: FaUsers, href: "#testimonials" },
	Blog: { icon: FaBlog, href: "#blog" },
	FAQ: { icon: FaQuestionCircle, href: "#faq" },
	Contact: { icon: FaEnvelope, href: "#contact" },
};

export function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState("home");

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}

			// Check if we're at the top of the page
			if (window.scrollY === 0) {
				setActiveSection("home");
			}
		};

		const observerOptions = {
			root: null,
			rootMargin: "0px",
			threshold: 0.5,
		};

		const observerCallback = (entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setActiveSection(entry.target.id);
				}
			});
		};

		const observer = new IntersectionObserver(
			observerCallback,
			observerOptions
		);

		Object.entries(navItems).forEach(([key, { href }]) => {
			if (href !== "/") {
				const element = document.querySelector(href);
				if (element) observer.observe(element);
			}
		});

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
			observer.disconnect();
		};
	}, []);

	const handleNavClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		href: string
	) => {
		e.preventDefault();
		if (href === "/") {
			window.scrollTo({ top: 0, behavior: "smooth" });
			setActiveSection("home");
		} else {
			const targetElement = document.querySelector(href);
			if (targetElement) {
				targetElement.scrollIntoView({ behavior: "smooth" });
				setActiveSection(href.slice(1));
			}
		}
		setIsOpen(false);
	};

	return (
		<header
			className={`fixed w-full z-50 transition-all duration-300 ${
				isScrolled ? "bg-black/70 backdrop-blur-md" : "bg-transparent"
			}`}
		>
			<div className="container mx-auto px-4 py-4 flex justify-between items-center">
				<Link
					href="/"
					className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 hover:opacity-80 transition-opacity"
					onClick={(e) => handleNavClick(e, "/")}
				>
					Bridger
				</Link>
				<nav className="hidden lg:flex space-x-6">
					{Object.entries(navItems).map(([item, { icon: Icon, href }]) => (
						<a
							key={item}
							href={href}
							onClick={(e) => handleNavClick(e, href)}
							className={`text-white hover:text-cyan-400 transition-all duration-300 relative group py-2 flex items-center text-sm ${
								activeSection === (href === "/" ? "home" : href.slice(1))
									? "text-cyan-400"
									: ""
							}`}
						>
							<Icon className="mr-1 text-base" />
							<span className="relative z-10">{item}</span>
							<span
								className={`absolute left-0 bottom-0 w-full h-0.5 bg-cyan-400 transform transition-transform duration-300 origin-left ${
									activeSection === (href === "/" ? "home" : href.slice(1))
										? "scale-x-100"
										: "scale-x-0"
								} group-hover:scale-x-100`}
							></span>
						</a>
					))}
				</nav>
				<button
					className="lg:hidden text-white focus:outline-none"
					onClick={() => setIsOpen(!isOpen)}
				>
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>
			{isOpen && (
				<div
					className={`lg:hidden py-2 ${
						isScrolled
							? "bg-black/70 backdrop-blur-md"
							: "bg-black bg-opacity-90"
					}`}
				>
					{Object.entries(navItems).map(([item, { href, icon: Icon }]) => (
						<a
							key={item}
							href={href}
							className={`flex items-center px-4 py-2 text-white hover:bg-cyan-500 hover:text-black transition-colors duration-300 ${
								activeSection === (href === "/" ? "home" : href.slice(1))
									? "bg-cyan-500/30"
									: ""
							}`}
							onClick={(e) => handleNavClick(e, href)}
						>
							<Icon className="mr-2 text-lg" />
							{item}
						</a>
					))}
				</div>
			)}
		</header>
	);
}
export default Header;
