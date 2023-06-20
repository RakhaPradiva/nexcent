import Button from "./Button";
import { unlock2 } from "../assets";

const Calendar = () => (
	<section
		id="calendar"
		className="flex justify-between items-center my-0 px-36"
	>
		<div className="w-[440px]">
			<img
				src={unlock2}
				alt="unlock"
				className="object-contain w-full h-full"
			/>
		</div>

		<div className="w-[660px] flex flex-col justify-between items-start">
			<h2 className="font-inter text-[36px] font-semibold">
				How to design your site footer like we did
			</h2>
			<p className="font-inter my-3 text-[16px] font-normal text-[]">
				Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue
				nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat
				a magna. Donec quis erat at libero ultrices mollis. In hac habitasse
				platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis
				finibus. In euismod augue vitae nisi ultricies, non aliquet urna
				tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis
				massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis
				libero. Donec consectetur faucibus ipsum id gravida.
			</p>
			<div className="mt-5">
				<Button title="Learn More" />
			</div>
		</div>
	</section>
);

export default Calendar;
