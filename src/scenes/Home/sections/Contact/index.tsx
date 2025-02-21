"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "./ContactForm";
import { SuccessMessage } from "./SuccessMessage";

export default function Contact() {
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmitSuccess = () => {
		setIsSubmitted(true);
		setTimeout(() => setIsSubmitted(false), 5000);
	};

	return (
		<section id="contact" className="py-20 bg-black relative overflow-hidden">
			<div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-5 animate-pulse" />
			<div className="container mx-auto px-4 relative z-10">
				<SectionTitle
					title="Contact Us"
					description="Have questions or want to discuss your digital transformation needs? We're here to help. Reach out to us, and let's start a conversation about your future."
				/>
				<div className="relative max-w-4xl mx-auto mt-12">
					<div
						className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 opacity-20 animate-gradient-x rounded-lg"
						style={{ filter: "blur(25px)" }}
					/>
					<ContactForm onSubmitSuccess={handleSubmitSuccess} />
				</div>
			</div>

			<AnimatePresence>{isSubmitted && <SuccessMessage />}</AnimatePresence>
		</section>
	);
}
