<script setup lang="ts">
defineProps<{
	blocks: unknown[]
}>()
</script>

<template>
	<div class="">
		<NuxtErrorBoundary
			v-for="(item, index) in blocks"
			:key="index"
		>
			<BlocksItem
				:block="item"
				class="max-w-full"
				:class="index === blocks.length - 1 ? 'pb-40' : ''"
			/>
		</NuxtErrorBoundary>
	</div>
</template>
