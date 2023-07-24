import { clients } from "../constants";

const Client = () => {
	return (
		<section className="py-10">
			<div className="container">
				<div className="w-full text-center">
					<div className="px-6 mb-10 lg:px-4">
						<h2 className="mb-2 text-4xl font-semibold text-neutral-600">Our Clients</h2>
						<p className="text-base font-normal text-neutral-500">We have been working with some Fortune 500+ clients</p>
					</div>
					<ul className="flex flex-wrap items-center w-full gap-10 justify-evenly lg:gap-0">
						{clients.map((client) => (
							<li key={client.id} className="group">
								<img src={client.logo} alt="client" className="object-contain w-full" />
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Client;
