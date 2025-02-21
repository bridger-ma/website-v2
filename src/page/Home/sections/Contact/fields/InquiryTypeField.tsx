import { Control } from "react-hook-form";
import { ContactFormValues } from "@/lib/schemas/contact";
import {
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from "@/components/ui/form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { FaCommentAlt } from "react-icons/fa";

const inquiryTypes = [
	"General Inquiry",
	"Digital Transformation Consultation",
	"AI Solutions",
	"Automation Services",
	"Web Development",
	"Other",
] as const;

interface InquiryTypeFieldProps {
	control: Control<ContactFormValues>;
}

export function InquiryTypeField({ control }: InquiryTypeFieldProps) {
	return (
		<div className="mt-6">
			<FormField
				control={control}
				name="inquiryType"
				render={({ field }) => (
					<FormItem>
						<FormLabel className="flex items-center">
							<FaCommentAlt className="mr-2 text-cyan-500" />
							Inquiry Type
						</FormLabel>
						<Select onValueChange={field.onChange} defaultValue={field.value}>
							<FormControl>
								<SelectTrigger className="bg-gray-950/50 border-gray-700/50 text-white">
									<SelectValue placeholder="Select an inquiry type" />
								</SelectTrigger>
							</FormControl>
							<SelectContent className="bg-gray-900 border border-gray-700">
								{inquiryTypes.map((type) => (
									<SelectItem
										key={type}
										value={type}
										className="text-white hover:bg-gray-800 focus:bg-gray-800"
									>
										{type}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
						<FormMessage />
					</FormItem>
				)}
			/>
		</div>
	);
}

export default InquiryTypeField;
