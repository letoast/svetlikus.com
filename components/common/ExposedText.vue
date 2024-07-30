<script setup lang="ts">
withDefaults(defineProps<{
	data: {
		kicker?: string
		title: string
		description?: string
		cta?: {
			text: string
			link: string
		}
	}
	kickerColor?: string
	container?: boolean
}>(),
{
	kickerColor: 'text-neutral-600',
})
</script>

<template>
	<div
		:class="{
			container: container,
		}"
	>
		<div
			class="
				grid grid-cols-12 gap-y-6
				lg:gap-x-8
			"
		>
			<div
				class="
					col-span-12 flex flex-col justify-center gap-2 text-center
					lg:col-span-6 lg:col-start-4 lg:gap-4
				"
			>
				<span
					v-if="data.kicker"
					class="
						font-bold uppercase
						lg:text-xl/6
					"
					:class="kickerColor"
				>
					{{ data.kicker }}
				</span>
				<div
					v-if="data.title"
					class="
						text-[1.75rem]/[2.25rem] font-bold text-gray-100
						lg:text-[2.75rem]/[3.25rem]
					"
					v-html="data.title"
				/>
			</div>
			<div
				v-if="data.description"
				class="
					prose col-span-12 max-w-full text-center leading-normal text-gray-400
					lg:prose-2xl lg:col-span-8 lg:col-start-3 lg:leading-normal
				"
				v-html="data.description"
			/>
		</div>
	</div>
</template>
