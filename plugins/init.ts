export default defineNuxtPlugin({
	name: 'init',
	async setup() {
		const { $directus, $readSingleton } = useNuxtApp()

		const initData = ref({})

		initData.value = await useAsyncData('init', () => $directus.request($readSingleton('svetlikus_global', {
			fields: ['*', {
				translations: ['menu'],
			}],
		})))

		return {
			provide: { initData },
		}
	},
})
