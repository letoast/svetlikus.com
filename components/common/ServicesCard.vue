<script setup lang="ts">
withDefaults(defineProps<{
	data: {
		title: string
		description: string
		items: string[]
	}
	exposed: boolean
}>(),
{
	exposed: false
})
</script>
<template>
	<div
		class="group relative col-span-4 rounded-lg p-8 after:absolute after:z-[-1] after:rounded-lg after:bg-[linear-gradient(149.04deg,_#A8A8A8_13.47%,_rgba(168,_168,_168,_0)_62.24%)] after:transition-all after:duration-300 after:content-[''] hover:cursor-default "
		:class="{
			'bg-[linear-gradient(180deg,_#1a030a_-2.85%,_#090909_100%)] after:left-[-2px] after:top-[-2px] after:size-[calc(100%+4px)] after:bg-[linear-gradient(149.04deg,_theme(colors.rose.600)_13.47%,_rgba(168,_168,_168,_0)_62.24%)]': exposed,
			'bg-[linear-gradient(180deg,_theme(colors.neutral.900)_-2.85%,_#090909_100%)] after:-left-px after:-top-px after:size-[calc(100%+2px)]': !exposed
		}"
	>
		<h3
			class="mb-3 text-4xl font-bold text-neutral-300"
			:class="{
				'text-rose-500': exposed
			}"
		>
			{{ data.title }}
		</h3>
		<p
			v-if="data.description"
			class="text-lg text-neutral-400"
			:class="{
				'text-neutral-200': exposed
			}"
		>
			{{ data.description }}
		</p>
		<ul class="mt-10">
			<li
				v-for="item, itemIndex in data.items"
				:key="itemIndex"
				class="text-lg font-bold text-neutral-500"
				:class="{
					'text-neutral-200': exposed
				}"
			>
				{{ item }}
			</li>
		</ul>
	</div>
</template>
