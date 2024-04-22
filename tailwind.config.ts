import type { Config } from 'tailwindcss'
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
				'2xl': '82rem',
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
				'fade-up': {
					'0%': {
						translate: '-50% 100% 0',
						opacity: 0,
					},
					'100%': {
						translate: '-50% 0 0',
						opacity: 1,
					},
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-up': 'fade-up 0.3s ease-out',
			},
		},
		linearBorderGradients: {
			directions: { // defaults to these values
				t: 'to top',
				tr: 'to top right',
				r: 'to right',
				br: 'to bottom right',
				b: 'to bottom',
				bl: 'to bottom left',
				l: 'to left',
				tl: 'to top left',
			},
			colors: { // defaults to {}
				'purple': colors.purple[500],
				'neutral-500': colors.neutral[500],
			},
			background: {
				'neutral-950': colors.neutral[950],
				'neutral-900': colors.neutral[900],
				'neutral-800': colors.neutral[800],
				'neutral-950/20': `${colors.neutral[950]}20`,
			},
		},

	},
	plugins: [
		animate,
		require('tailwindcss-border-gradient-radius'),
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
