const Button = ({ text, style, link }) => {
	return (
		<a href={link} className={`${style} inline-block rounded-md text-center text-base font-medium shadow-sm transition-opacity duration-300 ease-in-out hover:opacity-80`}>
			{text}
		</a>
	);
};

export default Button;
