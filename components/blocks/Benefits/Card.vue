<script setup lang="ts">
defineProps<{
	color: string
	title: string
	description: string
	icon: string
}>()

const device = useDevice()
const cardRef = ref<HTMLElement | null>(null)
const isVisible = useElementVisibility(cardRef, {
	threshold: device.isMobileOrTablet ? 1 : 0.2,
})
</script>

<template>
	<div
		ref="cardRef"
	>
		<div
			class="flex flex-col items-center gap-4 text-neutral-400 transition-all duration-300"
			:class="{
				'hover:text-emerald-500': color === 'emerald',
				'!text-emerald-500': color === 'emerald' && $device.isMobileOrTablet && isVisible,
				'hover:text-blue-500': color === 'blue',
				'!text-blue-500': color === 'blue' && $device.isMobileOrTablet && isVisible,
				'hover:text-rose-500': color === 'rose',
				'!text-rose-500': color === 'rose' && $device.isMobileOrTablet && isVisible,
				'hover:text-yellow-500': color === 'yellow',
				'!text-yellow-500': color === 'yellow' && $device.isMobileOrTablet && isVisible,
				'hover:text-purple-500': color === 'purple',
				'!text-purple-500': color === 'purple' && $device.isMobileOrTablet && isVisible,
				'hover:text-cyan-500': color === 'cyan',
				'!text-cyan-500': color === 'cyan' && $device.isMobileOrTablet && isVisible,
				'hover:text-gray-500': color === 'gray',
				'!text-gray-500': color === 'gray' && $device.isMobileOrTablet && isVisible,
				'hover:text-neutral-500': !color,
				'!text-neutral-500': !color && $device.isMobileOrTablet && isVisible,
			}"
		>
			<DynamicSVG
				:url="`${$directus.url}assets/${icon}`"
				:alt="title"
			/>
			<h6
				class="text-center text-2xl font-bold leading-[28.80px]"
			>
				{{ title }}
			</h6>
			<p
				class="
					prose font-book text-center leading-[21.60px] text-neutral-500
					lg:prose-xl
				"
			>
				{{ description }}
			</p>
		</div>
	</div>
</template>
