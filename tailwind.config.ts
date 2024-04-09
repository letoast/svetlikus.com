import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import animate from 'tailwindcss-animate'
import colors from 'tailwindcss/colors'

const srcDir = "."

export default {
	// mode: 'jit',
	darkMode: ["class"],
	content: [
		`${srcDir}/components/**/*.{vue,js,ts}`,
		`${srcDir}/layouts/**/*.vue`,
		`${srcDir}/pages/**/*.vue`,
		`${srcDir}/composables/**/*.{js,ts}`,
		`${srcDir}/plugins/**/*.{js,ts}`,
		`${srcDir}/utils/**/*.{js,ts}`,
		`${srcDir}/App.{js,ts,vue}`,
		`${srcDir}/app.{js,ts,vue}`,
		`${srcDir}/Error.{js,ts,vue}`,
		`${srcDir}/error.{js,ts,vue}`,
		`${srcDir}/app.config.{js,ts}`
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				primary: '#A54CFE',
				secondary: '#06CAD6',
			},
			fontFamily: {
				'sans': ['futura-pt', 'sans-serif']
			},
			fontSize: {
				base: '1.5rem'
			},
			keyframes: {
				"accordion-down": {
					from: { height: 0 },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: 0 },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [
		animate,
		// plugin(function ({ addBase, theme }) {
		// 	addBase({
		// 		'a': {
		// 			color: colors.white,
		// 			fontWeight: theme('fontWeight.medium'),
		// 			filter: `drop-shadow(0 4px 4px ${theme('colors.secondary')}00)`,
		// 			transitionProperty: 'all',
		// 			transitionDuration: '300ms',
		// 			'&:hover': {
		// 				color: theme('colors.secondary'),
		// 				filter: `drop-shadow(0 4px 4px ${theme('colors.secondary')}88)`,
		// 				'@apply font-medium drop-shadow-[0 4px 4px rgba(6,202,214,0.00)] transition-all duration-300 hover:drop-shadow-[0 4px 4px rgba(6,202,214,0.88)]',
		// 			},
		// 		}
		// 	})
		// }),
	],
} satisfies Config
