import Header from "./sections/MainHeader";
import Hero from "./sections/Hero";
import Description from "./sections/Description";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import Clients from "./sections/Clients";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import CaseStudies from "./sections/CaseStudies";
import Testimonials from "./sections/Testimonials";
import Blog from "./sections/Blog";
import FAQ from "./sections/FAQ";
import {
	BLOG_POSTS,
	FAQ_DATA,
	TESTIMONIALS,
	CLIENTS,
	SERVICES,
	PORTFOLIO_PROJECTS,
	CASE_STUDIES,
} from "@/mocks";

export function HomePage() {
	return (
		<div className="relative min-h-screen overflow-hidden bg-black">
			<Header />
			<main className="relative z-10">
				<Hero />
				<Description />
				<Services services={SERVICES} />
				<Portfolio projects={PORTFOLIO_PROJECTS} />
				<CaseStudies caseStudies={CASE_STUDIES} />
				<Testimonials testimonials={TESTIMONIALS} />
				<Blog blogPosts={BLOG_POSTS} />
				<FAQ faqs={FAQ_DATA} />
				<Clients clients={CLIENTS} />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}

export default HomePage;
