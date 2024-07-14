<script setup lang="ts">
const props = defineProps<{
	url: string
	alt?: string
}>()

const { data } = useLazyAsyncData(props.url, async () => {
	const data = await $fetch(props.url, {
		mode: 'no-cors',
		headers: {
			'Content-Type': 'image/svg+xml',
		},
	})

	return await data.text()
})
</script>

<template>
	<div
		:alt
		v-html="data"
	/>
</template>
