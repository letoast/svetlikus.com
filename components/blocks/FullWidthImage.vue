<script setup lang="ts">
defineProps<{
	data: unknown
	container?: boolean
}>()
</script>

<template>
	<section>
		<img
			v-if="data?.image?.id"
			:src="`${$directus.url}assets/${data?.image?.id}?format=auto`"
			class="aspect-[2.5/1] w-full object-cover"
			loading="lazy"
			:alt="data?.image?.title"
		>
	</section>
</template>
