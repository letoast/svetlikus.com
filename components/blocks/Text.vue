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
			<div v-html="data?.content" />
		</div>
	</section>
</template>
