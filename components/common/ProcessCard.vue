<!-- eslint-disable @stylistic/no-trailing-spaces -->
<script setup lang="ts">
withDefaults(defineProps<{
	cardNumber: string
	kickerColor?: string
	title: string
	description?: string
}>(),
{
	kickerColor: 'text-zinc-600',
	description: undefined,
	cta: undefined,
})

const parentEl = useParentElement()
const grandParentEl = useParentElement(parentEl)
const cardRef = ref<HTMLElement | null>(null)
const cardContainerRef = ref<HTMLElement | null>(null)

const { isOutside } = useMouseInElement(cardContainerRef)
const { x, y } = useMouse({ target: grandParentEl, type: 'client' })
const { top, left } = useElementBounding(cardContainerRef)
const { tilt, roll, source } = useParallax(cardContainerRef)
</script>

<template>
	<div
		ref="cardContainerRef"
		style="perspective: 300px"
		class="
			group
			col-span-6

			hover:cursor-default
		"
	>
		<div
			ref="cardRef"
			:style="{
				'--x': `${x - left}px`,
				'--y': `${y - top}px`,
				'transform': !isOutside ? `rotateX(${roll}deg) rotateY(${tilt}deg)` : 'none',
			}"
			class="
				h-full
				relative
				px-6
				py-8
			"
		>
			<div
				class="
					absolute
					left-[-1px]
					top-[-1px]
					z-[-1]
					size-[calc(100%+2px)]
					rounded-lg
					bg-zinc-800
					translate-z-0
				"
			/>
			<div
				class="
					absolute
					left-[-1px]
					top-[-1px]
					z-[-1]
					size-[calc(100%+2px)]
					rounded-lg
					bg-[radial-gradient(15vw_circle_at_var(--x)_var(--y),_theme(colors.blue.600)_0,_transparent_100%)]
					transition-all
					translate-z-0

					
					group-hover:bg-[linear-gradient(theme(colors.blue.600),_theme(colors.blue.600))]
				"
			/>
			<div
				class="
					absolute
					top-0
					left-0
					w-full
					h-full
					bg-[radial-gradient(15vw_circle_at_var(--x)_var(--y),_theme(colors.zinc.900)_0,_theme(colors.zinc.950)_100%)]
					rounded-lg

					
					group-hover:bg-[radial-gradient(15vw_circle_at_var(--x)_var(--y),_theme(colors.blue.950)_0,_theme(colors.zinc.950)_100%)]
				"
			/>
			<div
				class="
					pointer-events-none
					mb-4
					flex
					items-end
					justify-between
					translate-z-1
				"
			>
				<h3
					class="
						text-4xl
						font-bold
						text-zinc-300
						transition-all

						group-hover:text-blue-600
					"
				>
					{{ title }}
				</h3>
				<span
					class="
						block
						text-7xl
						font-semibold
						text-zinc-950
						transition-all
						text-stroke-zinc-500

						group-hover:text-blue-600
						group-hover:text-stroke-blue-600
					"
				>{{ cardNumber }}</span>
			</div>

			<p
				class="
					pointer-events-none
					text-lg
					text-zinc-400
					translate-z-1
				"
			>
				{{ description }}
			</p>
		</div>
	</div>
</template>
