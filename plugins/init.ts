export default defineNuxtPlugin(async () => {
	const { $directus, $readSingleton } = useNuxtApp()

	const initData = ref({})

	initData.value = await $directus.request($readSingleton('svetlikus_global'))

	return {
		provide: { initData },
	}
})
