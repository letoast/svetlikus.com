// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			link: [
				// { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
				{ rel: 'dns-prefetch', href: 'https://svetlikus.datalog.si' },
				{ rel: 'preconnect', href: 'https://svetlikus.datalog.si' },
				// Typekit
				{ rel: 'preconnect', href: 'https://use.typekit.net' },
				{ rel: 'dns-prefetch', href: 'https://use.typekit.net' },
				{ rel: 'preconnect', href: 'https://p.typekit.net' },
				{ rel: 'dns-prefetch', href: 'https://p.typekit.net' },
				{ rel: 'preload', as: 'style', href: 'https://use.typekit.net/tit7gaj.css', onload: 'this.onload=null;this.rel="stylesheet"' },
			],
			noscript: [
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
	modules: [// 'shadcn-nuxt',
		'@nuxtjs/tailwindcss', // 'nuxt-icon',
		'@vueuse/nuxt',
		'@nuxt/eslint',
		'nuxt-marquee',
		'@nuxt/ui',
		'@nuxtjs/i18n',
		'@nuxt/scripts',
		'@nuxtjs/device',
	],

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
