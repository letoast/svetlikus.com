<script setup lang="ts">
const props = defineProps<{
	url: string
	alt?: string
}>()

const { data, error } = useAsyncData(props.url, () =>
	$fetch(props.url, {
		headers: {
			'Content-Type': 'image/svg+xml',
		},
		parseResponse: txt => txt,
	})
, {
	server: false,
})
</script>

<template>
	<div
		:alt
		v-html="data"
	/>
</template>
