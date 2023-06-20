import { blogs } from "../constants";

const Blog = () => (
	<section
		id="blog"
		className="w-fullmax-h-[560px] flex flex-col items-center gap-4"
	>
		<div className="max-w-[570px] text-center">
			<h2 className="font-inter text-[36px] font-semibold">
				Caring is the new marketing
			</h2>
			<p className="font-inter text-[16px] font-normal">
				The Nexcent blog is the best place to read about the latest membership
				insights, trends and more. See who's joining the community, read about
				how our community are increasing their membership income and lot's
				more.​
			</p>
		</div>

		<ul className="px-36 flex justify-between flex-wrap items-center gap-5">
			{blogs.map((blog) => (
				<li
					key={blog.id}
					className="w-[370px] h-[365px] flex flex-col justify-center items-center bg-sky-500 relative rounded-[8px]"
				>
					<img
						src={blog.thumbnail}
						alt={blog.id}
						className="w-full h-full object-cover absolute top-0 left-0 rounded-[8px]"
					/>
					<div className="absolute bg-white text-center flex flex-col gap-4 justify-center z-[3] -bottom-16 w-full max-w-[320px] h-[175px] shadow-xl rounded-[8px] px-5">
						<h3 className="font-inter text-[20px] text-slate-600 font-semibold">
							{blog.title}
						</h3>
						<button className="font-inter  text-green-600 text-[16px] font-semibold px-4 py-2">
							{blog.action + " " + "→"}
						</button>
					</div>
				</li>
			))}
		</ul>
	</section>
);

export default Blog;
