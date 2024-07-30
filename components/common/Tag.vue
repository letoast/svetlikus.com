<script setup lang="ts">
const props = defineProps<{
	color?: 'rose' | 'cyan' | 'yellow'
}>()

const wrapperClass = computed(() => {
	return {
		'group-hover:ring-rose-500 group-hover:bg-rose-500/25 group-hover:cursor-default': props.color === 'rose',
		'group-hover:ring-yellow-500 group-hover:bg-yellow-500/25 group-hover:cursor-default': props.color === 'yellow',
		'group-hover:ring-cyan-500 group-hover:bg-cyan-500/25 group-hover:cursor-default': props.color === 'cyan',
	}
})
</script>

<template>
	<div
		class="relative flex items-center justify-center rounded px-2 ring-[1px] ring-gray-600 transition-all duration-300"
		:class="wrapperClass"
	>
		<span
			class="
				text-xs font-book text-center leading-[20.78px] text-gray-600
				group-hover:text-white
			"
		>
			<slot />
		</span>
	</div>
</template>
