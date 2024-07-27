import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import animate from 'tailwindcss-animate'
import colors from 'tailwindcss/colors'
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette'

const hexToRgb = (hex) => {
	hex = hex.replace('#', '')
	hex = hex.length === 3 ? hex.replace(/./g, '$&$&') : hex
	const r = parseInt(hex.substring(0, 2), 16)
	const g = parseInt(hex.substring(2, 4), 16)
	const b = parseInt(hex.substring(4, 6), 16)
	return `${r} ${g} ${b}`
}


const srcDir = '.'

export default {
	// mode: 'jit',
	darkMode: ['class'],
	// content: [
	// 	`${srcDir}/components/**/*.{vue,js,ts}`,
	// 	`${srcDir}/layouts/**/*.vue`,
	// 	`${srcDir}/pages/**/*.vue`,
	// 	`${srcDir}/composables/**/*.{js,ts}`,
	// 	`${srcDir}/plugins/**/*.{js,ts}`,
	// 	`${srcDir}/utils/**/*.{js,ts}`,
	// 	`${srcDir}/App.{js,ts,vue}`,
	// 	`${srcDir}/app.{js,ts,vue}`,
	// 	`${srcDir}/Error.{js,ts,vue}`,
	// 	`${srcDir}/error.{js,ts,vue}`,
	// 	`${srcDir}/app.config.{js,ts}`,
	// ],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: {
				'DEFAULT': '1rem',
				'sm': '1rem',
				'lg': '2rem',
				'xl': '2rem',
				'2xl': '2rem',
			},
			screens: {
				'2xl': '82rem',
			},
		},
		extend: {
			colors: {
				'svetlikus-purple': {
					50: '#faf5ff',
					100: '#f3e7ff',
					200: '#e8d3ff',
					300: '#d7b1ff',
					400: '#be7fff',
					500: '#a54cfe',
					600: '#912bf2',
					700: '#7d1bd5',
					800: '#6a1bae',
					900: '#58178c',
					950: '#3a0368',
					DEFAULT: '#a54cfe',
				},
				'secondary': {
					50: '#ecfffe',
					100: '#cffefe',
					200: '#a5fbfc',
					300: '#67f5f9',
					400: '#22e5ee',
					500: '#06cad6',
					600: '#08a0b2',
					700: '#0e7f90',
					800: '#156675',
					900: '#165563',
					950: '#083844',
					DEFAULT: '#06cad6',
				},
			},
			fontFamily: {
				sans: ['futura-pt', 'sans-serif'],
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'fade-up': {
					'0%': {
						translate: '-50% 100% 0',
						opacity: '0',
					},
					'100%': {
						translate: '-50% 0 0',
						opacity: '1',
					},
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-up': 'fade-up 0.3s ease-out',
			},
			typography: {
				DEFAULT: {
					css: {
						'--tw-prose-body': colors.slate[200],
						'--tw-prose-headings': colors.slate[100],
						'--tw-prose-lead': 'inherit',
						'--tw-prose-links': colors.slate[200],
						'--tw-prose-bold': 'inherit',
						'--tw-prose-counters': 'inherit',
						'--tw-prose-bullets': 'inherit',
						'--tw-prose-hr': colors.slate[200],
						'--tw-prose-quotes': 'inherit',
						'--tw-prose-quote-borders': colors.slate[200],
						'--tw-prose-captions': 'inherit',
						'--tw-prose-kbd': 'inherit',
						'--tw-prose-kbd-shadows': hexToRgb(colors.slate[900]),
						'--tw-prose-code': 'inherit',
						'--tw-prose-pre-code': 'inherit',
						'--tw-prose-pre-bg': 'inherit',
						'--tw-prose-th-borders': colors.slate[300],
						'--tw-prose-td-borders': colors.slate[200],
						'--tw-prose-invert-body': colors.slate[300],
						'--tw-prose-invert-headings': colors.white,
						'--tw-prose-invert-lead': colors.slate[400],
						'--tw-prose-invert-links': colors.white,
						'--tw-prose-invert-bold': colors.white,
						'--tw-prose-invert-counters': colors.slate[400],
						'--tw-prose-invert-bullets': colors.slate[600],
						'--tw-prose-invert-hr': colors.slate[700],
						'--tw-prose-invert-quotes': colors.slate[100],
						'--tw-prose-invert-quote-borders': colors.slate[700],
						'--tw-prose-invert-captions': colors.slate[400],
						'--tw-prose-invert-kbd': colors.white,
						'--tw-prose-invert-kbd-shadows': hexToRgb(colors.white),
						'--tw-prose-invert-code': colors.white,
						'--tw-prose-invert-pre-code': colors.slate[300],
						'--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
						'--tw-prose-invert-th-borders': colors.slate[600],
						'--tw-prose-invert-td-borders': colors.slate[700],
					},
				},
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
				'cyan-500': colors.cyan[500],
				'rose-500': colors.rose[500],
				'neutral-500': colors.neutral[500],
			},
			background: {
				'cyan-500': colors.cyan[500],
				'rose-500': colors.rose[500],
				'neutral-950': colors.neutral[950],
				'neutral-900': colors.neutral[900],
				'neutral-800': colors.neutral[800],
				'neutral-950/20': `${colors.neutral[950]}20`,
			},
		},

	},
	plugins: [
		animate,
		require('@tailwindcss/typography'),
		require('tailwindcss-border-gradient-radius'),
		require('tailwindcss-3d'),
		plugin(function ({ matchUtilities, addUtilities }) {
			matchUtilities({
				'text-stroke': color => ({
					textShadow: `-1px -1px 0 ${color}, 1px -1px 0 ${color}, -1px 1px 0 ${color}, 1px 1px 0 ${color}`,
				}),
			},
			{
				values: { ...flattenColorPalette(colors) },
			})
			addUtilities({
				// https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode
				'.horizontal-writing-tb': { 'writing-mode': 'horizontal-tb' },
				'.vertical-writing-rl': { 'writing-mode': 'vertical-rl' },
				'.vertical-writing-lr': { 'writing-mode': 'vertical-lr' },
				// https://developer.mozilla.org/en-US/docs/Web/CSS/text-orientation
				'.orientation-mixed': { 'text-orientation': 'mixed' },
				'.orientation-upright': { 'text-orientation': 'upright' },
				'.orientation-sideways-right': { 'text-orientation': 'sideways-right' },
				'.orientation-sideways': { 'text-orientation': 'sideways' },
				'.orientation-glyph': { 'text-orientation': 'use-glyph-orientation' },
			})
		}),
	],
} satisfies Config
