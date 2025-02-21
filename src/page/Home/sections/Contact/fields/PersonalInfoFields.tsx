import { Control } from "react-hook-form";
import { ContactFormValues } from "@/lib/schemas/contact";
import {
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FaUser, FaEnvelope, FaBuilding, FaPhone } from "react-icons/fa";

interface PersonalInfoFieldsProps {
	control: Control<ContactFormValues>;
}

export function PersonalInfoFields({ control }: PersonalInfoFieldsProps) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
			<FormField
				control={control}
				name="name"
				render={({ field }) => (
					<FormItem>
						<FormLabel className="flex items-center text-gray-200">
							<FaUser className="mr-2 text-cyan-500" />
							Name
						</FormLabel>
						<FormControl>
							<Input
								placeholder="John Doe"
								className="bg-gray-950/50 border-gray-700/50 text-white placeholder:text-gray-500 focus:border-cyan-500 focus:ring-cyan-500/20"
								{...field}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>

			<FormField
				control={control}
				name="email"
				render={({ field }) => (
					<FormItem>
						<FormLabel className="flex items-center text-gray-200">
							<FaEnvelope className="mr-2 text-cyan-500" />
							Email
						</FormLabel>
						<FormControl>
							<Input
								type="email"
								placeholder="john@example.com"
								className="bg-gray-950/50 border-gray-700/50 text-white placeholder:text-gray-500 focus:border-cyan-500 focus:ring-cyan-500/20"
								{...field}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>

			<FormField
				control={control}
				name="phone"
				render={({ field }) => (
					<FormItem>
						<FormLabel className="flex items-center text-gray-200">
							<FaPhone className="mr-2 text-cyan-500" />
							Phone
						</FormLabel>
						<FormControl>
							<Input
								type="tel"
								placeholder="+1 (555) 000-0000"
								className="bg-gray-950/50 border-gray-700/50 text-white placeholder:text-gray-500 focus:border-cyan-500 focus:ring-cyan-500/20"
								{...field}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>

			<FormField
				control={control}
				name="company"
				render={({ field }) => (
					<FormItem>
						<FormLabel className="flex items-center text-gray-200">
							<FaBuilding className="mr-2 text-cyan-500" />
							Company
						</FormLabel>
						<FormControl>
							<Input
								placeholder="Your Company"
								className="bg-gray-950/50 border-gray-700/50 text-white placeholder:text-gray-500 focus:border-cyan-500 focus:ring-cyan-500/20"
								{...field}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
		</div>
	);
}

export default PersonalInfoFields;
