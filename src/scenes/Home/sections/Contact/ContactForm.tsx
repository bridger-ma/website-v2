import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { FaPaperPlane } from "react-icons/fa";
import {
	contactFormSchema,
	type ContactFormValues,
} from "@/lib/schemas/contact";
import ContactFormFields from "./ContactFormFields";
import { toast } from "sonner";

interface ContactFormProps {
	onSubmitSuccess?: () => void;
}

export default function ContactForm({ onSubmitSuccess }: ContactFormProps) {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const form = useForm<ContactFormValues>({
		resolver: zodResolver(contactFormSchema),
		defaultValues: {
			name: "",
			email: "",
			company: "",
			phone: "",
			inquiryType: "General Inquiry",
			message: "",
			subject: "",
			preferredContact: "email",
			newsletter: false,
		},
	});

	async function onSubmit(data: ContactFormValues) {
		setIsSubmitting(true);
		try {
			// Simulate API call
			await new Promise((resolve) => setTimeout(resolve, 2000));
			console.log("Form submitted:", data);
			form.reset();
			onSubmitSuccess?.();
			toast.success("Message sent successfully!");
		} catch (error) {
			toast.error("Failed to send message. Please try again.");
			console.error("Form submission error:", error);
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="relative bg-black/60 backdrop-blur-xl p-8 rounded-lg shadow-[0_8px_32px_rgba(0,0,0,0.36)] border border-gray-800/50"
			>
				<ContactFormFields control={form.control} />

				<Button
					type="submit"
					className="mt-8 w-full bg-black/60 backdrop-blur-xl border border-gray-800/50 hover:bg-gray-900/60 hover:border-cyan-500/50 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.36)] hover:shadow-[0_8px_32px_rgba(0,128,255,0.25)]"
					disabled={isSubmitting}
				>
					{isSubmitting ? (
						<>
							<span className="animate-spin mr-2 text-cyan-500">⏳</span>
							Sending...
						</>
					) : (
						<>
							<FaPaperPlane className="mr-2 text-cyan-500" />
							Send Message
						</>
					)}
				</Button>

				<p className="text-gray-400 text-sm mt-4 text-center">
					We typically respond within 24-48 business hours.
				</p>
			</form>
		</Form>
	);
}
