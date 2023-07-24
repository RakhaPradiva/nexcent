import { blogs } from "../constants";
import { Button } from "../components";

const Blog = () => {
	return (
		<section className="px-12 py-10 mb-16 lg:px-32" id="blog">
			<div className="container">
				<div className="w-full">
					<div className="px-4 mb-5 text-center">
						<h2 className="mb-3 text-4xl font-semibold text-neutral-600">Caring is the new marketing</h2>
						<p className="text-base font-normal text-neutral-500">
							The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who &apos;s joining the community, read about how our community
							are increasing their membership income and lot &apos;s more.
						</p>
					</div>

					<ul className="flex flex-wrap justify-center w-full gap-20 lg:gap-16 xl:gap-0 lg:justify-evenly">
						{blogs.map((blog) => (
							<li key={blog.id} className="rounded-sm max-w-[23rem] w-full relative">
								<img src={blog.thumbnail} alt={blog.title} className="object-contain rounded-sm" />
								<div className="absolute z-10 p-4 mx-5 text-center rounded-md shadow-md bg-slate-50 -bottom-14 lg:-bottom-10 ">
									<h3 className="mb-4 text-base font-semibold text-neutral-500 lg:text-xl">{blog.title}</h3>
									<Button text={blog.action} style="text-green-500 text-base lg:text-xl font-semibold" link="#" />
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Blog;
