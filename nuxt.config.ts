// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			link: [
				{ rel: 'stylesheet', href: 'https://use.typekit.net/tit7gaj.css' },
			],
		},
	},

	components: [
		{
			global: true,
			path: '@/components',
		},
	],
	experimental: {
		asyncContext: true,
		defaults: {
			useAsyncData: {
				deep: false,
			},
		},
	},
	modules: ['@nuxtjs/tailwindcss', // 'shadcn-nuxt',
		// 'nuxt-icon',
		'@vueuse/nuxt', '@nuxt/eslint', 'nuxt-marquee', '@nuxt/ui', '@nuxtjs/i18n'],

	icon: {
		mode: 'svg',
	},

	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
				quotes: 'single',
			},
		},
	},

	i18n: {
		defaultLocale: 'en',
		strategy: 'prefix',
		locales: [
			{ code: 'en', iso: 'en-US', file: './i18n/en.ts' },
		],
	},

	tailwindcss: {
		configPath: '@/tailwind.config.ts',
		cssPath: '@/assets/css/tailwind.css',
		exposeConfig: true,
	},

	devtools: { enabled: true },
	compatibilityDate: '2024-07-14',
})
