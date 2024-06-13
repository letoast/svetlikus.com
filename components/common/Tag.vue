<script setup lang="ts">
const props = defineProps<{
	color?: 'rose' | 'cyan' | 'yellow'
}>()

const wrapperClass = computed(() => {
	return {
		'bg-[linear-gradient(theme(colors.rose.500)20_0%,theme(colors.rose.500)20_0%),linear-gradient(theme(colors.neutral.950)_0%,theme(colors.neutral.950)_0%)] before:bg-[linear-gradient(149.04deg,_theme(colors.rose.500)_0%,_theme(colors.neutral.800)00_100%)]': props.color === 'rose',
		'bg-[linear-gradient(theme(colors.yellow.500)20_0%,theme(colors.yellow.500)20_0%),linear-gradient(theme(colors.neutral.950)_0%,theme(colors.neutral.950)_0%)] before:bg-[linear-gradient(149.04deg,_theme(colors.yellow.500)_0%,_theme(colors.neutral.800)00_100%)]': props.color === 'yellow',
		'bg-[linear-gradient(theme(colors.cyan.500)20_0%,theme(colors.cyan.500)20_0%),linear-gradient(theme(colors.neutral.950)_0%,theme(colors.neutral.950)_0%)] before:bg-[linear-gradient(149.04deg,_theme(colors.cyan.500)_0%,_theme(colors.neutral.800)00_100%)]': props.color === 'cyan',
	}
})
</script>

<template>
	<div
		class="
			relative flex items-center justify-center rounded px-2
			before:absolute before:-left-px before:-top-px before:z-[-1] before:size-[calc(100%+2px)] before:rounded before:transition-all before:duration-300 before:content-['']
		"
		:class="wrapperClass"
	>
		<span
			class="text-xs font-book text-center leading-[20.78px] text-white"
		>
			<slot />
		</span>
	</div>
</template>
