import { socialLinks } from "@/mocks";
import SocialMediaIcon from "./SocialMediaIcon";

export default function SecialMediaIcons() {
	return (
		<>
			{socialLinks.map((social, index) => (
				<SocialMediaIcon key={social.name} {...social} index={index} />
			))}
		</>
	);
}
