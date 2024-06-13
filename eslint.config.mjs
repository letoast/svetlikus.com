import eslintPluginTailwindCSS from 'eslint-plugin-tailwindcss'
import eslintPluginReadableTailwind from 'eslint-plugin-readable-tailwind'
import {
	getDefaultClassAttributes,
} from 'eslint-plugin-readable-tailwind/api/defaults'
import { MatcherType } from 'eslint-plugin-readable-tailwind/api/types'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
	plugins: {
		'tailwindcss': eslintPluginTailwindCSS,
		'readable-tailwind': eslintPluginReadableTailwind,
	},
	rules: {
		'readable-tailwind/multiline': ['warn', { indent: 'tab', printWidth: 0, group: 'newLine' }],
		'readable-tailwind/no-unnecessary-whitespace': ['warn'],
		'readable-tailwind/sort-classes': ['warn', {
			order: 'improved',
			classAttributes: [
				...getDefaultClassAttributes(),
				// Add because of nuxt/ui
				[
					':classes', [
						{
							match: MatcherType.ObjectValue,
							pathPattern: '^[a-zA-Z0-9_ ]*$|\\.[a-zA-Z0-9_ ]*$',
						},
					],
				],
				// Add because of nuxt/ui
				[
					':ui', [
						{
							match: MatcherType.ObjectValue,
							pathPattern: '^[a-zA-Z0-9_ ]*$|\\.[a-zA-Z0-9_ ]*$',
						},
					],
				],
			],
		}],
		'tailwindcss/classnames-order': 'off',
		'vue/html-indent': ['error', 'tab'],
		'vue/no-v-html': 'off',
		'vue/html-closing-bracket-newline': 'error',
		'vue/require-default-prop': 'off',
		'vue/no-v-for-template-key': 'off',
		'vue/multi-word-component-names': ['off'],
		'tailwindcss/no-custom-classname': ['off'],
		'@stylistic/no-trailing-spaces': ['off'],
		'@stylistic/no-multiple-empty-lines': ['off'],
		'@stylistic/linebreak-style': ['error', 'unix'],
		'@typescript-eslint/no-explicit-any': ['error', { fixToUnknown: true }],
		'@typescript-eslint/no-unused-vars': ['warn'],
		'@stylistic/indent': ['error', 'tab'],
		'no-tabs': 'off',
		'no-console':
			process.env.NODE_ENV === 'production'
				? 'error'
				: 'off',
		'camelcase': 'off',
	},
})
