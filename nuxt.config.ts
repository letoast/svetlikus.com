// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			link: [
				// { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
				{ rel: 'dns-prefetch', href: 'https://svetlikus.datalog.si' },
				{ rel: 'preconnect', href: 'https://svetlikus.datalog.si' },
				// Typekit
				// { rel: 'preconnect', href: 'https://use.typekit.net' },
				// { rel: 'dns-prefetch', href: 'https://use.typekit.net' },
				// { rel: 'preconnect', href: 'https://p.typekit.net' },
				// { rel: 'dns-prefetch', href: 'https://p.typekit.net' },
				// { rel: 'preload', as: 'style', href: 'https://use.typekit.net/tit7gaj.css', onload: 'this.onload=null;this.rel="stylesheet"' },
			],
			// noscript: [
			// 	{ rel: 'stylesheet', href: 'https://use.typekit.net/tit7gaj.css' },
			// ],
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
		// 'nuxt-icon',
		'@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxt/eslint', 'nuxt-marquee', '@nuxt/ui', '@nuxtjs/i18n', '@nuxt/scripts', '@nuxtjs/device', '@formkit/nuxt', '@nuxt/fonts',
	],
	formkit: {
		// Experimental support for auto loading (see note):
		autoImport: true,
	},
	fonts: {
		families: [
			{
				name: 'Jost',
				provider: 'google',
				display: 'swap',
			},
		],
	},
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
