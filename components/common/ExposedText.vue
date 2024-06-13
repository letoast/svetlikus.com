<script setup lang="ts">
withDefaults(defineProps<{
	data: {
		kicker: string
		title: string
		description?: string
		cta?: {
			text: string
			link: string
		}
	}
	kickerColor?: string
}>(),
{
	kickerColor: 'text-neutral-600',
})
</script>

<template>
	<div class="container grid grid-cols-12 gap-x-8 gap-y-6">
		<div class="col-span-6 col-start-4 flex flex-col justify-center gap-4 text-center">
			<span
				class="text-xl/6 font-bold uppercase"
				:class="kickerColor"
			>
				{{ data.kicker }}
			</span>
			<h2 class="text-[2.75rem]/[3.25rem] font-bold">
				{{ data.title }}
			</h2>
		</div>
		<div
			v-if="data.description"
			class="col-span-8 col-start-3 text-center"
		>
			<p class="lead">
				{{ data.description }}
			</p>
		</div>
	</div>
</template>
