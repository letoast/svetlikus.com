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
				v-if="item?.item"
				:block="item"
				:is-first="index === 0"
				:is-last="index === blocks.length - 1"
				class="max-w-full"
				:class="index === blocks.length - 1 && !$route.name?.startsWith('projects') ? 'pb-28' : ''"
			/>
		</NuxtErrorBoundary>
	</div>
</template>
