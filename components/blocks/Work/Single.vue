<script setup lang="ts">
const props = defineProps<{
	data: unknown
}>()

const { $directus } = useNuxtApp()

const project = computed(() => {
	return props.data?.svetlikus_projects_id?.translations?.[0]
})

const tags = computed(() => {
	return props.data?.svetlikus_projects_id?.tags
})
</script>

<template>
	<NuxtErrorBoundary>
		<div
			class="
				col-span-12
				lg:col-span-6
			"
		>
			<div
				class="overflow-hidden rounded-lg"
			>
				<img
					:src="`${$directus.url}assets/${project?.image?.filename_disk}?format=auto&quality=60`"
					class="aspect-video size-full object-cover"
				>
			</div>
		</div>
		<div
			class="
				col-span-12 flex flex-col justify-center gap-4
				lg:col-span-4
				md:col-span-6
			"
		>
			<div
				class="flex flex-wrap gap-3"
			>
				<CommonTag
					v-for="item, index in tags"
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
					link: `/projects/${project?.slug}`,
				}"
			/>
		</div>
	</NuxtErrorBoundary>
</template>
