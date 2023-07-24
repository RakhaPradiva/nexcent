import { unlock } from "../assets";
import { Button } from "../components";

const Unlock = () => {
	return (
		<section className="px-12 py-10 lg:px-32">
			<div className="container">
				<div className="flex flex-col items-center w-full lg:flex-row">
					<div className="w-full px-2 py-14 lg:w-1/2">
						<img src={unlock} alt="Unlock" className="object-contain mx-auto" />
					</div>
					<div className="w-full text-center lg:w-1/2 lg:text-left">
						<h2 className="text-4xl font-bold text-neutral-600">The unseen of spending three years at Pixelgrade</h2>
						<p className="my-5 text-sm font-normal text-neutral-500">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum
							lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
							elementum pulvinar odio.
						</p>
						<Button text="Learn More" style="bg-green-500 text-white px-5 py-3" link="#" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Unlock;
