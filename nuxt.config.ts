// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			link: [
				{ rel: 'stylesheet', href: 'https://use.typekit.net/tit7gaj.css' },
			],
		},
	},
	modules: [
		'@nuxtjs/tailwindcss',
		'shadcn-nuxt',
		'nuxt-icon',
		'@vueuse/nuxt',
		'@nuxt/eslint',
	],
	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
				quotes: 'single',
			},
		},
	},
	tailwindcss: {
		configPath: '@/tailwind.config.ts',
		cssPath: '@/assets/css/tailwind.css',
		exposeConfig: true,
	},
	devtools: { enabled: true },
	shadcn: {
		prefix: '',
		componentDir: './components/ui',
	},
})
