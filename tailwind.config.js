/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				lunchtype: ['lunchtype22', 'sans-serif'],
				gentium: ['gentiumbookbasic', 'serif'],
			},
			colors: {
				primary: '#c800ff',
				secondary: '#860aa8',
			},
		},
	},
	plugins: [],
}
