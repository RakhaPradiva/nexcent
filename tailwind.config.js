/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		container: {
			center: true,
			padding: "1rem",
		},
		screens: {
			sm: "576px",
			md: "768px",
			lg: "1024px",
			xl: "1400px",
		},

		fontFamily: {
			inter: ["Inter", "sans-serif"],
		},
		extend: {},
	},
	plugins: [],
};
