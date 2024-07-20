<script setup lang="ts">
defineProps<{
	data: unknown
	container: boolean
}>()
</script>

<template>
	<section>
		<div
			class="gap-x-8 gap-y-6"
			:class="{
				container: container,
			}"
		>
			<div
				v-if="data?.lead"
				class="mb-4 text-lg text-gray-300"
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
					:src="`${$directus.url}assets/${image.directus_files_id}`"
					class="h-auto w-full"
					loading="lazy"
				>
			</div>
		</div>
	</section>
</template>
