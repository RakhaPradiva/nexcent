import { unlock } from "../assets";
import Button from "./Button";

const Unlock = () => (
	<section id="unlock" className="flex justify-between items-center my-0 px-36">
		<div className="w-[440px]">
			<img src={unlock} alt="unlock" className="object-contain w-full h-full" />
		</div>

		<div className="w-[660px] flex flex-col justify-between items-start">
			<h2 className="font-inter text-[36px] font-semibold">
				The unseen of spending three years at Pixelgrade
			</h2>
			<p className="font-inter my-3 text-[16px] font-normal text-[]">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
				justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque
				placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis.
				Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa
				pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
			</p>
			<div className="mt-5">
				<Button title="Learn More" />
			</div>
		</div>
	</section>
);

export default Unlock;
