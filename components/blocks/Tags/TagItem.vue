<script setup lang="ts">
defineProps<{
	data: unknown
}>()

const cardRef = ref<HTMLElement | null>(null)

const { top, left } = useElementBounding(cardRef, {
	immediate: true,
})
const smoothMouse = useSmoothMouse()
const visible = useElementVisibility(cardRef)

// const x = ref(smoothMouse.value[0] - left.value)
// const y = ref(smoothMouse.value[1] - top.value)
let x = smoothMouse.value[0] - left.value
let y = smoothMouse.value[1] - top.value

// const { pause, resume } = watchPausable([smoothMouse.value, top], () => {
// 	x.value = smoothMouse.value[0] - left.value
// 	y.value = smoothMouse.value[1] - top.value
// })

const { pause, resume } = useRafFn(() => {
	x = smoothMouse.value[0] - left.value
	y = smoothMouse.value[1] - top.value

	cardRef.value.style.setProperty('--x', `${x}px`)
	cardRef.value.style.setProperty('--y', `${y}px`)
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
</script>

<template>
	<div
		ref="cardRef"
		class="
			relative me-2 inline-flex items-center justify-center rounded bg-neutral-900 bg-[radial-gradient(20vw_circle_at_var(--x)_var(--y),_theme(colors.purple.950)_0%,_theme(colors.purple.950)00_62.24%),linear-gradient(210deg,_theme(colors.neutral.900)_-2.85%,_#090909_100%)] px-3.5 py-[7px]
			before:absolute before:-left-px before:-top-px before:z-[-1] before:size-[calc(100%+2px)] before:rounded before:bg-[radial-gradient(20vw_circle_at_var(--x)_var(--y),_theme(colors.purple.500)_0%,_theme(colors.neutral.300)00_62.24%),linear-gradient(149.04deg,_theme(colors.neutral.800)_13.47%,_theme(colors.neutral.800)00_62.24%)] before:transition-all before:duration-300
			hover:before:bg-[linear-gradient(theme(colors.purple.700),_theme(colors.purple.500))] hover:before:bg-[linear-gradient(theme(colors.purple.700),_theme(colors.purple.500))]efore:content-['']
		"
	>
		<p
			class="text-xs font-book text-center leading-[20.78px] text-[#eaeaea] text-opacity-40"
		>
			{{ data?.title }}
		</p>
	</div>
</template>
