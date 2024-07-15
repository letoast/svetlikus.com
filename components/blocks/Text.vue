<script setup lang="ts">
defineProps<{
	data: unknown
}>()
</script>

<template>
	<section>
		<div class="container">
			<div v-html="data?.content" />
		</div>
	</section>
</template>
