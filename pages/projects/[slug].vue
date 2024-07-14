<script setup lang="ts">
const route = useRoute()

const { $directus, $readItem, $readItems } = useNuxtApp()

const { data: pageIds } = await useAsyncData('projectIds', async () => {
	return await $directus.request($readItems('svetlikus_projects', {
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
})

const { data: project } = await useAsyncData('projectId', async () => {
	const pageId = pageIds.value?.find(page => page?.translations?.[0]?.slug === route?.params?.slug)?.id
	console.log(pageIds.value)

	return await $directus.request($readItem('svetlikus_projects', pageId, {
		fields: ['*.*.*.*.*.*.*'],
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
}, {
	transform: (data) => {
		return data?.translations?.[0]
	},
})
</script>

<template>
	<div>
		<Blocks
			v-if="project?.blocks?.length"
			:blocks="project.blocks"
		/>
	</div>
</template>
