// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			htmlAttrs: {
				class: 'dark h-full'
			},
			bodyAttrs: {
				class: 'h-full'
			},
		}
	},
	modules: [
		'@nuxtjs/tailwindcss',
		'@nuxtjs/eslint-module',
	],
	devtools: { enabled: true }
})