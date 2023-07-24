import { logoWhite, send } from "../assets";
import { socials, footerLinks } from "../constants";

const Footer = () => {
	return (
		<footer className="w-full px-12 py-16 bg-gray-800 lg:px-36">
			<div className="container">
				<div className="flex flex-col flex-wrap justify-between gap-12 lg:gap-32 lg:flex-row">
					<div className="flex flex-col gap-10">
						<img src={logoWhite} alt="logo" className="object-contain w-1/2 lg:w-full" />
						<p className="text-sm font-normal leading-tight text-slate-50">
							Copyright &copy; 2023 Nexcent ltd. <br className="hidden mt-5 lg:block" /> All rights reserved
						</p>
						<div className="flex gap-4">
							{socials.map((social) => (
								<a href={social.link} key={social.id}>
									<img src={social.icon} alt={social.name} className="object-contain" />
								</a>
							))}
						</div>
					</div>
					<div className="flex flex-col gap-10 lg:flex-row">
						{footerLinks.map((link) => (
							<ul key={link.id} className="flex flex-col gap-5 ">
								<li className="text-white">
									<h3 className="mb-6 text-xl font-semibold">{link.title}</h3>
									<ul className="flex flex-col gap-5">
										{link.links.map((item) => (
											<li key={item.id} className="text-sm font-normal text-slate-50">
												<a href={item.link}>{item.title}</a>
											</li>
										))}
									</ul>
								</li>
							</ul>
						))}
						<form className="flex flex-col gap-6">
							<h2 className="text-xl font-bold text-white">Stay up to date</h2>
							<div className="relative">
								<input type="email" className="w-full h-10 bg-gray-700 text-slate-50 px-4 rounded-[8px] outline-none" placeholder="Your email address" required />
								<button type="submit" className="absolute top-3 right-3">
									<img src={send} alt="send" />
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
