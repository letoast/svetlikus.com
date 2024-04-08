// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			// htmlAttrs: {
			// 	class: 'dark h-full'
			// },
		}
	},
	modules: [
		'@nuxtjs/tailwindcss',
		'shadcn-nuxt',
		'@nuxtjs/eslint-module',
		'nuxt-icon'
	],
	devtools: { enabled: true },
	shadcn: {
		/**
     * Prefix for all the imported component
     */
		prefix: '',
		/**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
		componentDir: './components/ui'
	}
})
