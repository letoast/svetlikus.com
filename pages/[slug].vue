<script setup lang="ts">
const { $directus, $readItems } = useNuxtApp()
const { localeProperties } = useI18n()

const route = useRoute()

const { data: page, error, refresh } = await useAsyncData('page', async () => {
	return await $directus.request($readItems('svetlikus_pages', {
		filter: {
			_and: [
				{
					translations: {
						languages_code: { _eq: localeProperties.value.iso },
						slug: { _eq: route.params.slug },
					},
				},
			],
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
