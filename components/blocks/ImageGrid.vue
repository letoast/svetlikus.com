<script setup lang="ts">
defineProps<{
	data: unknown
	container: boolean
}>()
</script>

<template>
	<section>
		<div
			class="
				gap-y-6
				lg:gap-x-8
			"
			:class="{
				container: container,
			}"
		>
			<div
				v-if="data?.lead"
				class="
					prose mb-4 text-gray-300
					lg:prose-xl
				"
				v-html="data.lead"
			/>
			<div
				class="grid gap-4"
				:class="{
					'grid-cols-1': data?.images?.length === 1,
					'grid-cols-2': data?.images?.length === 2,
					'grid-cols-3': data?.images?.length === 3,
					'grid-cols-4': data?.images?.length === 4,
				}"
			>
				<img
					v-for="image in data?.images"
					:key="image.directus_files_id"
					:src="`${$directus.url}assets/${image.directus_files_id.id}?format=auto`"
					class="h-auto w-full rounded-lg"
					loading="lazy"
				>
			</div>
		</div>
	</section>
</template>
