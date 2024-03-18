/** @type {import('tailwindcss').Config} */
export default {
	content: [],
	theme: {
		container: {
			center: true,
		},
		extend: {
			colors: {
				'background': '#090909',
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/container-queries'),
	],
}

