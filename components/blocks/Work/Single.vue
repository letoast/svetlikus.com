<script setup lang="ts">
const props = defineProps<{
	data: {
		id: number
	}
}>()

const { $directus, $readItems, $readItem } = useNuxtApp()
const { data: projectData, error, refresh } = await useLazyAsyncData(`project-${props.data?.svetlikus_projects_id?.id}`, async () => {
	return await $directus.request($readItem('svetlikus_projects', props.data?.svetlikus_projects_id?.id, {
		fields: ['id', { translations: ['*', { image: ['*'] }] }, { tags: [{ svetlikus_projects_tags_id: ['color', { translations: ['*'] }] }] }],
	}))
}, {
	// transform: (data) => {
	// 	return data?.translations?.[0]
	// },
})

const project = computed(() => {
	return projectData.value?.translations?.[0]
})
</script>

<template>
	<div class="col-span-6">
		<div
			class="overflow-hidden rounded-lg"
		>
			<img
				:src="`${$directus.url}assets/${project?.image?.filename_disk}`"
				class="size-full object-cover"
			>
		</div>
	</div>
	<div
		class="col-span-4 flex flex-col justify-center gap-4"
	>
		<div
			class="flex flex-wrap gap-3"
		>
			<CommonTag
				v-for="item, index in projectData.tags"
				:key="index"
				:color="item?.svetlikus_projects_tags_id?.color"
			>
				{{ item?.svetlikus_projects_tags_id?.translations?.[0].title }}
			</CommonTag>
		</div>
		<h3
			class="text-3xl font-bold text-neutral-300"
		>
			{{ project?.title }}
		</h3>
		<div
			class="text-lg font-book text-neutral-400"
			v-html="project?.description"
		/>
		<CommonCTA
			:cta="{
				text: 'View Case Study',
				link: '/work/ek-water-blocks',
			}"
		/>
	</div>
</template>
