import eslintPluginTailwindCSS from 'eslint-plugin-tailwindcss'
import eslintPluginReadableTailwind from 'eslint-plugin-readable-tailwind'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
	plugins: {
		'readable-tailwind': eslintPluginReadableTailwind,
		'tailwindcss/recommended': eslintPluginTailwindCSS,
	},
	rules: {
		'readable-tailwind/multiline': ['warn', { classesPerLine: 1, indent: 4 }],
		'indent': ['error', 'tab'],
		'vue/html-indent': ['error', 'tab'],
		'vue/multi-word-component-names': ['off'],
		'tailwindcss/no-custom-classname': ['off'],
	},
})
