<script setup lang="ts">
const { $gsap } = useNuxtApp()

const props = withDefaults(defineProps<{
	startNow?: boolean
	duration?: number
	delay?: number
	y?: number | string
}>(), {
	duration: 0.6,
	delay: 0,
	startNow: true,
	y: '100%',
})

const wrapper = ref<HTMLElement | null>(null)
const go = ref(false)

watch([() => props.startNow, go], ([val, goVal]) => {
	if (!import.meta.client) return
	if (val || goVal) {
		$gsap.fromTo(wrapper.value, {
			y: props.y,
			opacity: 0,
			willChange: 'y, opacity',
		}, {
			y: '0',
			opacity: 1,
			duration: props.duration,
			delay: props.delay,
			stagger: { amount: 0.2 },
			ease: 'cubic-bezier(0.375, 0.075, 0.005, 0.960)',
		})
	}
}, {
	once: true,
})

onNuxtReady(() => {
	if (props.startNow) {
		go.value = true
	}
})
</script>

<template>
	<div
		ref="wrapper"
		class="opacity-0"
	>
		<slot />
	</div>
</template>
