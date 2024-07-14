<script setup lang="ts">
import tailwindConfig from '#tailwind-config'

const { $directus, $readItems } = useNuxtApp()
const { localeProperties } = useI18n()

const { data: page, error, refresh } = await useAsyncData('page', async () => {
	return await $directus.request($readItems('svetlikus_pages', {
		deep: {
			translations: {
				_filter: {
					_and: [
						{
							languages_code: { _eq: localeProperties.value.iso },
						},
						{
							slug: { _eq: 'home' },
						},
					],
				},
			},
		},
		fields: ['*.*.*.*.*.*.*.*.*'],
		limit: 1,
	}))
}, {
	transform: (data) => {
		return data?.[0].translations[0].blocks
	},
})
</script>

<template>
	<div>
		<Blocks
			v-if="page?.length"
			:blocks="page"
		/>
	</div>
</template>
