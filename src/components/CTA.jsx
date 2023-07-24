import { Button } from "../components";

const CTA = () => {
	return (
		<section id="cta" className="px-12 py-10 bg-slate-50 lg:px-32">
			<div className="container">
				<div className="w-full text-center">
					<div className="px-4">
						<h2 className="mb-8 text-4xl font-semibold text-gray-800 lg:text-6xl">Pellentesque suscipit fringilla libero eu.</h2>
					</div>
					<div className="px-4">
						<Button text="Get a Demo" style="px-8 py-3.5 bg-green-500 text-white text-base font-medium" link="#" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default CTA;
