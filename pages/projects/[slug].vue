<script setup lang="ts">
const route = useRoute()

const { $directus, $readItem, $readItems } = useNuxtApp()

const { data: page, error, refresh } = await useLazyAsyncData('page', async () => {
	const pageIds = await $directus.request($readItems('svetlikus_projects', {
		fields: ['id', 'translations.*'],
		deep: {
			translations: {
				_filter: {
					_and: [
						{
							languages_code: { _eq: 'en-US' },
						},
					],
				},
			},
		},
	}))
	const page = await $directus.request($readItem('svetlikus_projects', pageIds.find(page => page.translations?.[0].slug === route.params.slug).id, {
		fields: ['*.*'],
		deep: {
			translations: {
				_filter: {
					_and: [
						{
							languages_code: { _eq: 'en-US' },
						},
					],
				},
			},
		},
	}))
	return page
}, {
	transform: (data) => {
		return data
	},
})
</script>

<template>
	<div>
		{{ page }}
		<Blocks
			v-if="page?.length"
			:blocks="page"
		/>
	</div>
</template>
