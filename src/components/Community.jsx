import { community } from "../constants";

const Community = () => (
	<section id="community" className="text-center">
		<div className="my-5">
			<h2 className="font-inter font-semibold text-[36px]">
				Manage your entire community <br /> in a single system
			</h2>
			<p className="font-inter my-3 text-[16px] font-normal">
				Who is Nextcent suitable for?
			</p>
		</div>
		<ul className="flex flex-wrap items-center justify-evenly">
			{community.map((community) => (
				<li
					key={community.id}
					className="w-[300px] h-[260px] flex flex-col justify-center gap-[20px] items-center"
				>
					<img
						src={community.icon}
						alt="community"
						className="object-contain"
					/>
					<div className="flex items-center justify-center flex-col">
						<h3 className="font-inter my-2 font-bold text-[28px]">
							{community.title}
						</h3>
						<p className="font-inter text-[16px] font-normal">
							{community.description}
						</p>
					</div>
				</li>
			))}
		</ul>
	</section>
);

export default Community;
