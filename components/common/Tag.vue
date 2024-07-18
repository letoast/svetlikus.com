<script setup lang="ts">
const props = defineProps<{
	color?: 'rose' | 'cyan' | 'yellow'
}>()

const wrapperClass = computed(() => {
	return {
		'ring-rose-500/50 hover:ring-rose-500 hover:bg-rose-500/25 hover:shadow-lg hover:shadow-rose-500/25 hover:cursor-default': props.color === 'rose',
		'ring-yellow-500/50 hover:ring-yellow-500 hover:bg-yellow-500/25 hover:shadow-lg hover:shadow-yellow-500/25 hover:cursor-default': props.color === 'yellow',
		'ring-cyan-500/50 hover:ring-cyan-500 hover:bg-cyan-500/25 hover:shadow-lg hover:shadow-cyan-500/25 hover:cursor-default': props.color === 'cyan',
	}
})
</script>

<template>
	<div
		class="relative flex items-center justify-center rounded px-2 ring ring-[1px]"
		:class="wrapperClass"
	>
		<span
			class="text-xs font-book text-center leading-[20.78px] text-white"
		>
			<slot />
		</span>
	</div>
</template>
