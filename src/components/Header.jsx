import { logo } from "../assets";
import { Navbar } from "../components";

const Header = () => {
	return (
		<header className="sticky top-0 left-0 z-50 flex items-center w-full h-20 shadow-sm bg-slate-50">
			<div className="container">
				<div className="flex items-center justify-between w-full">
					<div className="px-4">
						<a href="#" className="block">
							<img src={logo} alt="logo" className="object-contain w-full h-full" />
						</a>
					</div>
					<div className="flex items-center">
						<Navbar />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
