import { customers } from "../constants";
import { mainCustomer } from "../assets";

const Customer = () => (
	<section
		id="customer"
		className="flex justify-between px-36 py-8 bg-slate-100"
	>
		<div className="w-[326px] h-[326px] flex justify-center items-center">
			<img src={mainCustomer} alt="main customer" className="object-contain" />
		</div>
		<div className="w-[750px] h-[325px]">
			<p className="font-inter font-normal text-[16px]">
				Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
				sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
				Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
				molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie,
				nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices,
				quis tristique nulla sodales. Suspendisse eget lorem eu turpis
				vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien,
				vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget
				efficitur libero condimentum id. Curabitur id nibh id sem dignissim
				finibus ac sit amet magna.
			</p>
			<h3 className="font-inter mt-4 mb-2 font-semibold text-[20px] text-green-600">
				Tim Smith
			</h3>
			<p className="font-inter font-light text-[16px]">
				British Dragon Boat Racing Association
			</p>
			<ul className="flex gap-10 w-full items-center h-[50px] mt-4">
				{customers.map((customer) => (
					<li key={customer.id} className="flex items-center">
						<img
							src={customer.logo}
							alt={customer.id}
							className="w-[50px] h-[50px] object-contain"
						/>
					</li>
				))}
				<button className="font-inter font-semibold text-green-600 text-[20px]">
					Meet all customers <span>&#8594;</span>
				</button>
			</ul>
		</div>
	</section>
);

export default Customer;
