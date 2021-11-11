module.exports = {
	purge: ["./public/**/*.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				"dark-main": "#18191A",
				"dark-second": "#242526",
				"dark-third": "#3A3B3C",
				"dark-text": "#B8BBBF",
			},
			fontFamily: {
				sans: ["Netflix Sans Regular"],
			},
		},
	},
	variants: {
		extend: {
			display: ["group-hover"],
			transform: ["group-hover"],
			scale: ["group-hover"],
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
