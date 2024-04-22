<script setup lang="ts">
const cardRef = ref<HTMLElement | null>(null)

const { top, left } = useElementBounding(cardRef)
const smoothMouse = useSmoothMouse()
</script>

<template>
	<div
		ref="cardRef"
		:style="{
			'--x': `${smoothMouse[0] - left}px`,
			'--y': `${smoothMouse[1] - top}px`,
		}"
		class="
			inline-flex
			items-center
			justify-center
			bg-neutral-900
			rounded
			px-3.5
			py-[7px]
			me-2
			relative
			bg-[radial-gradient(20vw_circle_at_var(--x)_var(--y),_theme(colors.purple.950)_0%,_theme(colors.purple.950)00_62.24%),linear-gradient(210deg,_theme(colors.neutral.900)_-2.85%,_#090909_100%)]

			
			hover:before:bg-[linear-gradient(theme(colors.purple.700),_theme(colors.purple.500))]

			before:-left-px
			before:-top-px
			before:size-[calc(100%+2px)]
			before:absolute
			before:z-[-1]
			before:rounded
			before:transition-all
			before:duration-300
			before:bg-[radial-gradient(20vw_circle_at_var(--x)_var(--y),_theme(colors.purple.500)_0%,_theme(colors.neutral.300)00_62.24%),linear-gradient(149.04deg,_theme(colors.neutral.800)_13.47%,_theme(colors.neutral.800)00_62.24%)]

			
			hover:before:bg-[linear-gradient(theme(colors.purple.700),_theme(colors.purple.500))]efore:content-['']
		"
	>
		<p
			class="
				text-xs
				font-book
				leading-[20.78px]
				text-center
				text-[#eaeaea]
				text-opacity-40
			"
		>
			Web Development
		</p>
	</div>
</template>
