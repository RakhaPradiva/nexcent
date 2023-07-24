import { stats } from "../constants";
const Stats = () => {
	return (
		<section id="stats" className="px-12 py-14 lg:px-32 bg-slate-50">
			<div className="container">
				<div className="flex flex-wrap items-center justify-between">
					<div className="w-full mb-5 text-center lg:w-1/2 lg:text-left">
						<h2 className="mb-3 text-4xl font-semibold text-neutral-600">
							Helping a local <br className="hidden lg:block" /> <span className="text-green-500">business reinvent itself</span>
						</h2>
						<p className="text-base font-normal text-zinc-900">We reached here with our hard work and dedication</p>
					</div>
					<div className="w-full lg:w-1/2">
						<ul className="flex flex-wrap items-center justify-center w-full gap-5">
							{stats.map((stat) => (
								<li key={stat.id} className="flex items-center justify-center w-full py-2 lg:justify-start lg:py-0 lg:w-64">
									<img src={stat.icon} className="object-contain" />
									<div className="ml-5">
										<h3 className="mb-1 text-3xl font-bold text-neutral-600">{stat.value}</h3>
										<p className="text-base font-normal text-neutral-500">{stat.title}</p>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Stats;
