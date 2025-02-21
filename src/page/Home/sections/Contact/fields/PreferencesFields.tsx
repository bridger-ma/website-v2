import { Control } from "react-hook-form";
import { ContactFormValues } from "@/lib/schemas/contact";
import {
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { FaBell, FaGlobe } from "react-icons/fa";
import { Input } from "@/components/ui/input";

interface PreferencesFieldsProps {
	control: Control<ContactFormValues>;
}

export function PreferencesFields({ control }: PreferencesFieldsProps) {
	return (
		<div className="space-y-6 border-t border-gray-800/50 pt-6">
			<FormField
				control={control}
				name="preferredContact"
				render={({ field }) => (
					<FormItem className="space-y-3">
						<FormLabel className="flex items-center text-gray-200">
							<FaBell className="mr-2 text-cyan-500" />
							Preferred Contact Method
						</FormLabel>
						<FormControl>
							<RadioGroup
								onValueChange={field.onChange}
								defaultValue={field.value}
								className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4"
							>
								<FormItem className="flex items-center space-x-3">
									<RadioGroupItem
										value="email"
										className="border-gray-700 text-cyan-500"
									/>
									<FormLabel className="font-normal text-gray-300">
										Email
									</FormLabel>
								</FormItem>
								<FormItem className="flex items-center space-x-3">
									<RadioGroupItem
										value="phone"
										className="border-gray-700 text-cyan-500"
									/>
									<FormLabel className="font-normal text-gray-300">
										Phone
									</FormLabel>
								</FormItem>
							</RadioGroup>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>

			<FormField
				control={control}
				name="newsletter"
				render={({ field }) => (
					<FormItem className="flex items-center space-x-3">
						<FormControl>
							<Checkbox
								checked={field.value}
								onCheckedChange={field.onChange}
								className="border-gray-700 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
							/>
						</FormControl>
						<div className="leading-none">
							<FormLabel className="text-sm text-gray-300">
								Subscribe to our newsletter for updates and insights
							</FormLabel>
						</div>
					</FormItem>
				)}
			/>
		</div>
	);
}

export default PreferencesFields;
