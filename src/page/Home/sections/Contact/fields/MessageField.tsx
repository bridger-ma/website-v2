import { Control } from "react-hook-form";
import { ContactFormValues } from "@/lib/schemas/contact";
import {
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { FaCommentAlt } from "react-icons/fa";

interface MessageFieldProps {
	control: Control<ContactFormValues>;
}

export function MessageField({ control }: MessageFieldProps) {
	return (
		<div className="mt-6">
			<FormField
				control={control}
				name="message"
				render={({ field }) => (
					<FormItem>
						<FormLabel className="flex items-center">
							<FaCommentAlt className="mr-2 text-cyan-500" />
							Message
						</FormLabel>
						<FormControl>
							<Textarea
								placeholder="Tell us about your project or inquiry..."
								className="min-h-[120px] bg-gray-950/50 border-gray-700/50 text-white placeholder:text-gray-500"
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
export default MessageField;
