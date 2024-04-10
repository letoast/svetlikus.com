<script setup lang="ts">
withDefaults(defineProps<{
	cardNumber: string
	kickerColor?: string
	title: string
	description?: string
}>(),
{
	kickerColor: 'text-neutral-600',
	description: undefined,
	cta: undefined
})
</script>
<template>
	<div
		class="group relative col-span-6 rounded-lg bg-neutral-950 px-6 py-8 after:absolute after:left-[-2px] after:top-[-2px] after:z-[-1] after:size-[calc(100%+4px)] after:rounded-lg after:bg-[linear-gradient(146.21deg,_#1C1C1C_-7.27%,_rgba(168,_168,_168,_0)_88.64%)] after:transition-all after:duration-300 after:content-[''] hover:cursor-default hover:after:bg-[linear-gradient(146.21deg,_theme(colors.blue.600)_-7.27%,_rgba(168,_168,_168,_0)_88.64%)]"
	>
		<div class="mb-4 flex items-end justify-between">
			<h3 class="text-4xl font-bold text-neutral-300 transition-all duration-300 group-hover:text-blue-600">
				{{ title }}
			</h3>
			<span class="block text-7xl font-semibold text-neutral-950 transition-all duration-300 text-stroke-neutral-500 group-hover:text-blue-600 group-hover:text-stroke-blue-600">{{ cardNumber }}</span>
		</div>

		<p class="text-lg text-neutral-400">
			{{ description }}
		</p>
	</div>
</template>
