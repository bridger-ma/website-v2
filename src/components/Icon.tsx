import * as FaIcons from "react-icons/fa";
import { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
	robot: FaIcons.FaRobot,
	cogs: FaIcons.FaCogs,
	globe: FaIcons.FaGlobe,
	// Add more icons as needed
	facebook: FaIcons.FaFacebook,
	twitter: FaIcons.FaTwitter,
	linkedin: FaIcons.FaLinkedinIn,
	instagram: FaIcons.FaInstagram,
	youtube: FaIcons.FaYoutube,
	email: FaIcons.FaEnvelope,
	github: FaIcons.FaGithub,
};
export type IconName = keyof typeof iconMap;

interface IconProps {
	name: string;
	className?: string;
}

export function Icon({ name, className }: IconProps) {
	const IconComponent = iconMap[name];
	if (!IconComponent) {
		console.warn(`Icon "${name}" not found`);
		return null;
	}
	return <IconComponent className={className} />;
}
export default Icon;
