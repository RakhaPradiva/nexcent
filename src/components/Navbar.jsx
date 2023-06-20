import { useState } from "react";

import { logo } from "../assets";
import { navLinks, navButtons } from "../constants";

const Navbar = () => {
	// const [toggle, setToggle] = useState(false)

	return (
		<nav className="flex items-center justify-between w-full h-full">
			<div className="w-[150px] h-[24px]">
				<img src={logo} alt="logo" className="w-full h-full" />
			</div>

			<ul className="flex items-center justify-center gap-[50px]">
				{navLinks.map((link) => (
					<li key={link.id} className="font-normal text-[16px] text-center">
						<a key={link.id} href={`#${link.id}`}>
							{link.title}
						</a>
					</li>
				))}
			</ul>

			<ul className="flex items-center justify-center gap-[10px]">
				{navButtons.map((btn) => (
					<li key={btn.id} className="font-normal text-[14px] text-center">
						<a
							key={btn.id}
							href={`${btn.id}`}
							className={`px-[20px] py-[10px] ${btn.style} rounded-[6px]`}
						>
							{btn.title}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
