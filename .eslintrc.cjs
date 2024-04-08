module.exports = {
	plugins: [
		'@stylistic'
	],
	root: true,
	extends: [
		'@nuxt/eslint-config',
		'plugin:vue/vue3-recommended',
		"plugin:tailwindcss/recommended"
	],
	rules: {
		indent: ['error', 'tab'],
		'vue/html-indent': ['error', 'tab'],
		'vue/multi-word-component-names': ['off'],
		'tailwindcss/no-custom-classname': ['off']
	}
}
