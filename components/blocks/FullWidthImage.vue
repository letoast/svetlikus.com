<script setup lang="ts">
defineProps<{
	data: unknown
}>()
</script>

<template>
	<section>
		<img
			:src="`${$directus.url}assets/${data?.image}?format=auto`"
			class="aspect-[2.5/1] w-full object-cover"
			loading="lazy"
		>
	</section>
</template>
