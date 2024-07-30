<script setup lang="ts">
const props = defineProps<{
	data: unknown
}>()

const { $directus, $locales } = useNuxtApp()
const device = useDevice()

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
					:src="`${$directus.url}assets/${project?.image.id}?format=auto`"
					class="size-full rounded-lg"
					loading="lazy"
					:alt="project?.image.title"
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
				v-if="!device.isMobileOrTablet"
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
				class="
					prose font-book text-neutral-400
					lg:prose-lg
				"
				v-html="project?.description"
			/>
			<CommonCTA
				:cta="{
					text: $locales.view_project_button_label,
					link: `/projects/${project?.slug}`,
				}"
			/>
		</div>
	</NuxtErrorBoundary>
</template>
