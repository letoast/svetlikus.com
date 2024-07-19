<script setup lang="ts">
defineProps<{
	data: unknown
}>()
</script>

<template>
	<section>
		<img
			:src="`${$directus.url}assets/${data?.image?.id}?format=auto&quality=60`"
			class="aspect-[2.5/1] w-full object-cover"
		>
	</section>
</template>
