// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			link: [
				{ rel: 'stylesheet', href: 'https://use.typekit.net/tit7gaj.css' }
			]
		}
	},
	modules: [
		'@nuxtjs/tailwindcss',
		'shadcn-nuxt',
		'@nuxtjs/eslint-module',
		'nuxt-icon'
	],
	tailwindcss: {
		configPath: '@/tailwind.config.ts',
		cssPath: '@/assets/css/tailwind.css',
	},
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
