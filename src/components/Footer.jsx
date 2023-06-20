import { logoWhite, send } from "../assets";
import { socials, footerLinks } from "../constants";

const Footer = () => (
	<footer className="px-40 py-16 items-start max-sm:h-full max-sm:justify-center max-sm:px-0 max-sm:pl-5 max-sm:py-8 flex max-sm:flex-col max-sm:max-w-full gap-[125px] bg-slate-800">
		<div className="flex flex-1 flex-col gap-10 max-w-[350px] max-sm:max-w-full">
			<img src={logoWhite} alt="logo" className="w-[200px] object-contain" />
			<p className="text-slate-300">
				Copyright © 2023 Nexcent ltd. <br className="max-sm:hidden block" />
				All rights reserved.
			</p>
			<ul className="flex gap-5">
				{socials.map((social) => (
					<li key={social.id}>
						<a href={social.link}>
							<img src={social.icon} alt={social.id} />
						</a>
					</li>
				))}
			</ul>
		</div>
		<div className="flex gap-10 max-w-[400px] max-sm:max-w-full max-sm:flex-col max-sm:justify-center max-sm:gap-20">
			{footerLinks.map((link) => (
				<ul key={link.id} className="list-none">
					<li className="text-white flex flex-col gap-5">
						<h3 className="font-inter font-semibold text-[20px] mb-1">
							{link.title}
						</h3>
						{link.links.map((item) => (
							<a
								key={item.id}
								href={item.link}
								className="font-inter font-normal text-[14px]"
							>
								{item.title}
							</a>
						))}
					</li>
				</ul>
			))}
		</div>
		<form className="flex flex-col items-start justify-center w-[255px] gap-6">
			<h2 className="font-inter text-[20px] text-white font-bold">
				Stay up to date
			</h2>
			<div className="w-full relative max-sm:top-0">
				<input
					type="email"
					className="text-slate-300 bg-slate-600 w-full h-10 outline-none px-4 rounded-[8px] absolute "
					placeholder="Your email address"
					name="email"
					id="email"
					required
				/>
				<button type="submit" className="absolute top-3 right-3">
					<img src={send} alt="send" />
				</button>
			</div>
		</form>
	</footer>
);

export default Footer;
