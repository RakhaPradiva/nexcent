import { customers } from "../constants";
import { mainCustomer } from "../assets";
import { Button } from "../components";

const Customer = () => {
	return (
		<section id="customer" className="px-12 py-10 lg:px-32">
			<div className="container">
				<div className="flex flex-wrap justify-between w-full">
					<div className="w-full lg:w-1/4 ">
						<img src={mainCustomer} alt="customer" className="object-contain w-full mx-auto" />
					</div>
					<div className="w-full lg:w-3/4 lg:pl-20">
						<p className="text-base font-medium text-neutral-500">
							Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero
							ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse
							cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
							sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet
							magna.
						</p>
						<h3 className="my-4 text-xl font-semibold text-green-500">Tim Smith</h3>
						<p className="mb-5 text-base font-normal text-gray-400">British Dragon Boat Racing Association</p>
						<div className="flex items-center">
							<div className="flex flex-wrap items-center justify-center w-full gap-10 lg:justify-start">
								{customers.map((customer) => (
									<img src={customer.logo} alt={customer.id} className="object-contain w-12 my-2" key={customer.id} />
								))}
								<Button text="Meet All Customer →" style="text-green-500 text-xl font-semibold py-3 px-5" link="#" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Customer;
