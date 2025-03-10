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

const cardRef = ref<HTMLElement | null>(null)
const cardContainerRef = ref<HTMLElement | null>(null)

const { isOutside } = useMouseInElement(cardContainerRef)
const { top, left } = useElementBounding(cardContainerRef)
const smoothMouse = useSmoothMouse()
const { roll, tilt, source } = useParallax(cardContainerRef)
const device = useDevice()
const visible = useElementVisibility(cardContainerRef, {
	threshold: device.isMobileOrTablet ? 1 : 0.2,
})

const x = ref(smoothMouse.value[0] - left.value)
const y = ref(smoothMouse.value[1] - top.value)

const { pause, resume } = watchPausable([smoothMouse.value, top], () => {
	x.value = smoothMouse.value[0] - left.value
	y.value = smoothMouse.value[1] - top.value
})

watch(visible, (isVisible) => {
	if (isVisible) {
		resume()
	}
	else {
		pause()
	}
}, {
	immediate: true,

})

const parallax = ref([tilt.value, roll.value])

watchThrottled([roll, tilt], ([roll, tilt]) => {
	if (!visible.value) return
	parallax.value = [roll, tilt]
}, {
	throttle: 100,
})
</script>

<template>
	<div
		ref="cardContainerRef"
		style="perspective: 300px"
		class="
			group
			hover:cursor-default
		"
	>
		<div
			ref="cardRef"
			:style="{
				'--x': `${x}px`,
				'--y': `${y}px`,
				'transform': !isOutside ? `rotateX(${parallax[0] * -2}deg) rotateY(${parallax[1] * -2}deg)` : 'none',
			}"
			class="relative h-full px-6 py-8 transition-transform ease-linear"
		>
			<div
				class="absolute left-[-1px] top-[-1px] z-[-1] size-[calc(100%+2px)] rounded-lg bg-zinc-800 translate-z-0"
			/>
			<div
				class="
					absolute left-[-1px] top-[-1px] z-[-1] size-[calc(100%+2px)] rounded-lg bg-[radial-gradient(var(--circle-size)_circle_at_var(--x)_var(--y),_theme(colors.blue.600)_0,_transparent_100%)] transition-all translate-z-0
					group-hover:bg-[linear-gradient(theme(colors.blue.600),_theme(colors.blue.600))]
				"
				:class="{
					'!bg-[linear-gradient(theme(colors.blue.600),_theme(colors.blue.600))]': visible && device.isMobileOrTablet,
				}"
			/>
			<div
				class="
					absolute left-0 top-0 h-full w-full rounded-lg bg-[radial-gradient(var(--circle-size)_circle_at_var(--x)_var(--y),_theme(colors.zinc.900)_0,_theme(colors.zinc.950)_100%)]
					group-hover:bg-[radial-gradient(var(--circle-size)_circle_at_var(--x)_var(--y),_theme(colors.blue.950)_0,_theme(colors.zinc.950)_100%)]
				"
				:class="{
					'!bg-[radial-gradient(var(--circle-size)_circle_at_var(--x)_var(--y),_theme(colors.blue.950)_0,_theme(colors.zinc.950)_100%)]': visible && device.isMobileOrTablet,
				}"
			/>
			<div
				class="pointer-events-none mb-4 flex items-end justify-between translate-z-1"
			>
				<h3
					class="
						text-4xl font-bold text-zinc-300 transition-all
						group-hover:text-blue-600
					"
					:class="{
						'!text-blue-600': visible && device.isMobileOrTablet,
					}"
				>
					{{ title }}
				</h3>
				<span
					class="
						block text-7xl font-semibold text-zinc-950 transition-all text-stroke-zinc-500
						group-hover:text-blue-600 group-hover:text-stroke-blue-600
					"
					:class="{
						'!text-blue-600 !text-stroke-blue-600': visible && device.isMobileOrTablet,
					}"
				>{{ cardNumber }}</span>
			</div>

			<p
				class="
					prose pointer-events-none text-zinc-400 translate-z-1
					lg:prose-lg
				"
			>
				{{ description }}
			</p>
		</div>
	</div>
</template>
