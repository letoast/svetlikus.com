import eslintPluginTailwindCSS from 'eslint-plugin-tailwindcss'
import eslintPluginReadableTailwind from 'eslint-plugin-readable-tailwind'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
	plugins: {
		'tailwindcss/recommended': eslintPluginTailwindCSS,
		'readable-tailwind': eslintPluginReadableTailwind,
	},
	rules: {
		'readable-tailwind/multiline': ['warn', { classesPerLine: 1, indent: 'tab' }],
		'indent': ['error', 'tab'],
		'vue/html-indent': ['error', 'tab'],
		'vue/multi-word-component-names': ['off'],
		'tailwindcss/no-custom-classname': ['off'],
		'@stylistic/no-trailing-spaces': ['off'],
		'@stylistic/no-multiple-empty-lines': ['off'],
	},
})
