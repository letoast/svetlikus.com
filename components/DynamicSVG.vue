<script setup lang="ts">
const props = defineProps<{
	url: string
	alt?: string
}>()

const { data, error, status } = useLazyAsyncData(props.url, () =>
	$fetch(props.url, {
		headers: {
			'Content-Type': 'image/svg+xml',
		},
		parseResponse: txt => txt,
	}),
)
</script>

<template>
	<div
		v-if="status === 'success'"
		:alt
		v-html="data"
	/>
</template>
