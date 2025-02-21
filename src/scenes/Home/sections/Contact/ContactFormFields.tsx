import { Control } from "react-hook-form";
import { ContactFormValues } from "@/lib/schemas/contact";
import PersonalInfoFields from "./fields/PersonalInfoFields";
import SubjectField from "./fields/SubjectField";
import InquiryTypeField from "./fields/InquiryTypeField";
import MessageField from "./fields/MessageField";
import PreferencesFields from "./fields/PreferencesFields";

interface ContactFormFieldsProps {
	control: Control<ContactFormValues>;
}

export default function ContactFormFields({ control }: ContactFormFieldsProps) {
	return (
		<div className="space-y-6">
			<PersonalInfoFields control={control} />
			<InquiryTypeField control={control} />
			<SubjectField control={control} />
			<MessageField control={control} />
			<PreferencesFields control={control} />
		</div>
	);
}
