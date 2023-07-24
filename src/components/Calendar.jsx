import { unlock2 } from "../assets";
import { Button } from "../components";

const Calendar = () => {
	return (
		<section id="customer" className="px-12 py-10 lg:px-32">
			<div className="container">
				<div className="flex flex-wrap items-center justify-between w-full">
					<div className="w-full mb-10 lg:w-1/2 lg:mb-0">
						<img src={unlock2} alt="unlock" className="object-contain mx-auto" />
					</div>
					<div className="w-full text-center lg:w-1/2 lg:text-left">
						<h2 className="text-4xl font-semibold text-neutral-600">How to design your site footer like we did</h2>
						<p className="my-8 text-sm font-normal text-neutral-500">
							Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis
							erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies,
							non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero.
							Donec consectetur faucibus ipsum id gravida.
						</p>
						<Button text="Learn More" style="bg-green-500 text-white px-5 py-3" link="#" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Calendar;
