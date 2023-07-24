import { hero } from "../assets";
import { Button } from "../components";

const Hero = () => {
	return (
		<section id="home" className="px-20 py-32 bg-slate-50">
			<div className="container">
				<div className="flex flex-col-reverse items-center justify-between w-full lg:flex-row">
					<div className="flex flex-col items-center w-full text-center lg:w-1/2 lg:text-left lg:items-start">
						<h1 className="text-2xl font-semibold md:text-4xl text-neutral-600 lg:text-6xl">
							Lessons and insights <br className="hidden lg:block" />
							<span className="text-green-500">from 8 years</span>
						</h1>
						<p className="my-5 text-neutral-600 lg:my-0 lg:mt-4 lg:mb-8">Where to grow your business as a photographer: site or social media?</p>
						<Button text="Register" style="bg-green-500 text-white px-5 py-3" link="#register" />
					</div>
					<div className="w-full lg:w-1/2">
						<img src={hero} alt="hero" className="object-contain mx-auto" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
