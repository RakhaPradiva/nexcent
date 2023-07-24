import { useState } from "react";
import { navButtons, navLinks } from "../constants";
import { menu, close } from "../assets";
import { Button } from "../components";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<>
			<button className="block px-4 lg:hidden" onClick={handleMenu}>
				<img src={isMenuOpen ? close : menu} alt="menu" className="w-6 h-8" />
			</button>

			<nav
				className={`${
					isMenuOpen ? "flex" : "hidden"
				} absolute top-20 right-6 z-10 py-4 items-center flex-col max-w-[17.5rem] w-full shadow-md rounded-lg gap-6 lg:flex lg:flex-row lg:max-w-full bg-slate-50 lg:gap-20 lg:shadow-none lg:static`}
			>
				<ul className="flex flex-col items-center gap-6 lg:flex-row lg:gap-12">
					{navLinks.map((link) => (
						<li key={link.id} className="group">
							<a href={`#${link.id}`} className="text-base font-normal leading-normal transition-colors duration-300 ease-in-out text-zinc-900 group-hover:text-zinc-600">
								{link.title}
							</a>
						</li>
					))}
				</ul>
				<ul className="flex items-center gap-3 lg:flex-row">
					{navButtons.map((button) => (
						<li key={button.id} className="group">
							<Button
								text={button.title}
								style={`${button.style} px-5 py-3  group-hover:opacity-80 transition-opacity duration-300 ease-in-out lg:px-2.5 lg:py1.5 lg:text-sm`}
								link={`#${button.id}`}
							/>
						</li>
					))}
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
