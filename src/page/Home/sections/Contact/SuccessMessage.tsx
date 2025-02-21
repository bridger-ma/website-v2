import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export function SuccessMessage() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 50 }}
			className="fixed bottom-5 right-5 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center"
		>
			<FaCheckCircle className="mr-2" />
			<span>Thank you! Your message has been sent successfully.</span>
		</motion.div>
	);
}

export default SuccessMessage;
