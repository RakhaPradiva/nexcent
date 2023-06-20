/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {},
			fontFamily: { inter: ["Inter", "sans-serif"] },
		},
		screens: {
			"max-sm": { max: "480px" },
			"max-md": { max: "768px" },
			"max-lg": { max: "976px" },
			"max-xl": { max: "1440px" },
		},
	},
	plugins: [],
};
