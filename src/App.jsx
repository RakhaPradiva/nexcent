import {
	Navbar,
	Hero,
	Client,
	Community,
	Unlock,
	Achievements,
	Calendar,
	Customer,
	Blog,
	CTA,
	Footer,
} from "./components";

const App = () => {
	return (
		<>
			<header className="px-10 h-[84px] flex items-center">
				<Navbar />
			</header>
			<main className="flex flex-col gap-[40px]">
				<Hero />
				<Client />
				<Community />
				<Unlock />
				<Achievements />
				<Calendar />
				<Customer />
				<Blog />
				<div className="py-10 sm:py-5" />
				<CTA />
			</main>
			<Footer />
		</>
	);
};

export default App;
