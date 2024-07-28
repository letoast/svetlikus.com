import type { CustomDirectusTypes } from '../types'

export default defineNuxtPlugin({
	name: 'init',
	async setup() {
		const { $directus, $readSingleton, $i18n } = useNuxtApp()
		const { localeProperties } = $i18n

		const initData = ref<CustomDirectusTypes['svetlikus_global'] | object>({})
		const locales = ref<CustomDirectusTypes['svetlikus_locales_translations'] | object>({})

		const { data: initDataResponse } = await useAsyncData('init', () => $directus.request($readSingleton('svetlikus_global', {
			filter: {
				translations: {
					languages_code: { _eq: localeProperties.value.iso },
				},
			},
			fields: ['*',
				'all_projects_page.translations.slug',
				{
					translations: ['menu', 'footer'],
				},
			],
		})))

		if (initDataResponse) {
			initData.value = initDataResponse.value
		}

		const { data: localesResponse } = await useAsyncData('locales', () => $directus.request($readSingleton('svetlikus_locales', {
			filter: {
				translations: {
					languages_code: { _eq: localeProperties.value.iso },
				},
			},
			fields: ['*', {
				translations: ['*'],
			}],
		})), {
			transform: (data) => {
				return data?.translations?.[0]
			},
		})

		if (localesResponse.value) {
			locales.value = localesResponse.value
		}

		return {
			provide: {
				initData,
				locales,
			},
		}
	},
})

declare module '#app' {
	interface NuxtApp {
		$initData: CustomDirectusTypes['svetlikus_global']
		$locales: CustomDirectusTypes['svetlikus_locales_translations'][0]
	}
}
