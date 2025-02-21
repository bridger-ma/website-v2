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
import { FaHeading } from "react-icons/fa";

interface SubjectFieldProps {
	control: Control<ContactFormValues>;
}

export function SubjectField({ control }: SubjectFieldProps) {
	return (
		<FormField
			control={control}
			name="subject"
			render={({ field }) => (
				<FormItem>
					<FormLabel className="flex items-center">
						<FaHeading className="mr-2 text-cyan-500" />
						Subject
					</FormLabel>
					<FormControl>
						<Input
							placeholder="Brief description of your inquiry"
							className="bg-gray-950/50 border-gray-700/50 text-white placeholder:text-gray-500"
							{...field}
						/>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}

export default SubjectField;
