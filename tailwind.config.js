/** @type {import('tailwindcss').Config} */
export default {
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/container-queries'),
	],
	content: [],
	theme: {
		extend: {
			colors: {
				'background': '#090909',
			}
		},
		container: {
			center: true
		},
	},
}

