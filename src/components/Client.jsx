import { clients } from "../constants";

const Client = () => (
	<section id="client" className="text-center px-36">
		<div className="my-5">
			<h2 className="font-inter font-semibold text-[36px]">Our Clients</h2>
			<p className="font-inter my-3 text-[16px] font-normal">
				We have been working with some Fortune 500+ clients
			</p>
		</div>
		<ul className="flex flex-wrap justify-between items-center gap-[30px]">
			{clients.map((client) => (
				<li key={client.id}>
					<img src={client.logo} alt="client" className="object-contain" />
				</li>
			))}
		</ul>
	</section>
);

export default Client;
