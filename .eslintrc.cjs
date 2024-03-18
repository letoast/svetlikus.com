module.exports = {
	plugins: [
		'@stylistic'
	],
	root: true,
	extends: [
		'@nuxt/eslint-config',
		'plugin:vue/vue3-recommended',
	],
	rules: {
		indent: ["error", "tab"],
		'vue/html-indent': ['error', 'tab'],
	}
}
