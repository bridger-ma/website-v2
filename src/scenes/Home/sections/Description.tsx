import { FaLightbulb, FaCogs, FaChartLine } from "react-icons/fa";
import SectionTitle from "@/components/SectionTitle";

export default function Description() {
	return (
		<section id="company-activities" className="py-20 bg-gray-900">
			<div className="container mx-auto px-4">
				<SectionTitle
					title="Transforming Businesses for the Digital Age"
					description="At Bridger, we specialize in guiding businesses through their digital transformation journey. Our expertise spans across various domains, enabling us to provide comprehensive solutions that drive innovation and growth."
				/>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="bg-black p-6 rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300">
						<FaLightbulb className="text-5xl mb-4 text-cyan-500 mx-auto" />
						<h3 className="text-2xl font-semibold mb-2 text-white text-center">
							Innovation Consulting
						</h3>
						<p className="text-gray-400 text-center">
							Developing cutting-edge strategies to keep you ahead of the curve
							in the rapidly evolving digital landscape.
						</p>
					</div>
					<div className="bg-black p-6 rounded-lg shadow-lg hover:shadow-purple-500/50 transition-shadow duration-300">
						<FaCogs className="text-5xl mb-4 text-purple-500 mx-auto" />
						<h3 className="text-2xl font-semibold mb-2 text-white text-center">
							Technology Implementation
						</h3>
						<p className="text-gray-400 text-center">
							Seamlessly integrating advanced technologies into your business
							processes to enhance efficiency and productivity.
						</p>
					</div>
					<div className="bg-black p-6 rounded-lg shadow-lg hover:shadow-blue-500/50 transition-shadow duration-300">
						<FaChartLine className="text-5xl mb-4 text-blue-500 mx-auto" />
						<h3 className="text-2xl font-semibold mb-2 text-white text-center">
							Digital Optimization
						</h3>
						<p className="text-gray-400 text-center">
							Enhancing your digital presence and operations for maximum
							efficiency and improved customer experiences.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
