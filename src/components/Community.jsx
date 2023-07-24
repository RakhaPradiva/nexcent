import { community } from "../constants";

const Community = () => {
	return (
		<section className="py-10">
			<div className="container">
				<div className="w-full text-center">
					<div className="px-6 mb-10 lg:px-4">
						<h2 className="mb-2 text-4xl font-semibold text-neutral-600">Manage your entire community in a single system</h2>
						<p className="text-base font-normal text-neutral-500">Who is Nextcent suitable for?</p>
					</div>
					<ul className="flex flex-wrap justify-between w-full px-12 lg:px-36">
						{community.map((item) => (
							<li key={item.id} className="group flex flex-col gap-2 py-6 px-8 items-center lg:max-w-[18.675rem] w-full">
								<img src={item.icon} alt="icon" className="object-contain mx-auto" />
								<div className="w-full">
									<h3 className="mb-2 text-2xl font-semibold text-neutral-600">{item.title}</h3>
									<p className="text-base text-neutral-500">{item.description}</p>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Community;
