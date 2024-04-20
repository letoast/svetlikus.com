import eslintPluginTailwindCSS from 'eslint-plugin-tailwindcss'
import eslintPluginReadableTailwind from 'eslint-plugin-readable-tailwind'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
	plugins: {
		'tailwindcss/recommended': eslintPluginTailwindCSS,
		'readable-tailwind': eslintPluginReadableTailwind,
	},
	rules: {
		'vue/html-indent': ['error', 'tab'],
		'vue/no-v-html': 'off',
		'vue/html-closing-bracket-newline': 'error',
		'vue/require-default-prop': 'off',
		'vue/script-setup-uses-vars': 'error',
		'vue/no-v-for-template-key': 'off',
		'readable-tailwind/multiline': ['warn', { classesPerLine: 1, indent: 'tab' }],
		'vue/multi-word-component-names': ['off'],
		'tailwindcss/no-custom-classname': ['off'],
		'@stylistic/no-trailing-spaces': ['off'],
		'@stylistic/no-multiple-empty-lines': ['off'],
		'@stylistic/linebreak-style': ['error', 'unix'],
		'@typescript-eslint/no-explicit-any': ['error', { fixToUnknown: true }],
		'indent': ['error', 'tab'],
		'no-tabs': 'off',
		'no-console':
			process.env.NODE_ENV === 'production'
				? 'error'
				: 'off',
		'camelcase': 'off',
	},
})
