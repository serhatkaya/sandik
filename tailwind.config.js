/** @type {import('tailwindcss').Config} */
module.exports = {
	theme: {
		extend: {},
	},
	plugins: [],
	darkMode: 'class',
	purge: {
		content: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	},
};
