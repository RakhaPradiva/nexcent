import { stats } from "../constants";

const Achievements = () => (
	<section
		id="achievement"
		className="flex justify-between py-16 px-36 bg-slate-100"
	>
		<div className="w-[540px] h-[120px]">
			<h2 className="font-inter font-semibold text-[36px]">
				Helping a local <br />
				<span className="text-green-600">business reinvent itself</span>
				<p className="font-inter font-normal my-3 text-[16px]">
					We reached here with our hard work and dedication
				</p>
			</h2>
		</div>
		<ul className="flex flex-row flex-wrap items-center justify-center gap-10 w-[540px]">
			{stats.map((stat) => (
				<li key={stat.id} className="w-[250px] flex items-center gap-[16px]">
					<img
						src={stat.icon}
						alt={stat.title}
						className="w-[48px] h-[48px] object-contain"
					/>
					<div>
						<h3 className="font-inter font-semibold text-[36px]">
							{stat.value}
						</h3>
						<p className="font-inter font-normal text-[16px]">{stat.title}</p>
					</div>
				</li>
			))}
		</ul>
	</section>
);

export default Achievements;
