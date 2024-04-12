import type { Config } from 'tailwindcss'
import tailwindcss3d from 'tailwindcss-3d'
import plugin from 'tailwindcss/plugin'
import animate from 'tailwindcss-animate'
import colors from 'tailwindcss/colors'
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette'

const srcDir = '.'

export default {
	// mode: 'jit',
	darkMode: ['class'],
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
		`${srcDir}/app.config.{js,ts}`,
	],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				primary: '#A54CFE',
				secondary: '#06CAD6',
			},
			fontFamily: {
				sans: ['futura-pt', 'sans-serif'],
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [
		animate,
		require('tailwindcss-3d'),
		plugin(function ({ matchUtilities }) {
			matchUtilities({
				'text-stroke': color => ({
					textShadow: `-1px -1px 0 ${color}, 1px -1px 0 ${color}, -1px 1px 0 ${color}, 1px 1px 0 ${color}`,
				}),
			},
			{
				values: { ...flattenColorPalette(colors) },
			})
		}),
	],
} satisfies Config
