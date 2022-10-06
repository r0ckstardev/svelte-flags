/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		colors: {
			darkBg: '#191919',
			textColor: '#e8e8e8'
		}
	},
	plugins: [
		require('@tailwindcss/forms')({
			strategy: 'base', // only generate global styles
			strategy: 'class' // only generate classes
		})
	]
};
