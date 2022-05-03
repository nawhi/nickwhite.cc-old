/** @type import('tailwindcss').Config */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			screens: {
				xs: '480px'
			}
		}
	},

	darkMode: "media",

	plugins: []
};

module.exports = config;
