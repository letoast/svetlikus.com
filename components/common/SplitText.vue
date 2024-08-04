<script setup lang="ts">
import SplitType from 'split-type'

const props = withDefaults(defineProps<{
	duration?: number
	delay?: number
	html?: string
	text?: string
	component?: string
	startNow?: boolean
}>(), {
	duration: 0.6,
	delay: 0,
	startNow: true,
	component: 'div',
})

const { $gsap } = useNuxtApp()

const wrapper = ref<HTMLElement | null>(null)
const go = ref(false)

watch([() => props.startNow, go], ([val, goVal]) => {
	if (!import.meta.client) return
	if (val || goVal) {
		for (const child of wrapper.value?.children || []) {
			if (!child) return
			if (child.classList.contains('line')) return
			// console.log(child)
			const splits = new SplitType(child, { types: 'lines' })

			// Wrap lines in a div to prevent overflow
			for (const line of splits.lines || []) {
				const lineWrapper = document.createElement('div')
				lineWrapper.classList.add('line')
				line.parentNode?.insertBefore(lineWrapper, line)
				lineWrapper.appendChild(line)
				lineWrapper.style.overflow = 'hidden'
			}
			// for (const line of splits.lines || []) {
			// 	line.style.overflow = 'hidden'
			// }

			$gsap.set(splits.lines, {
				y: '100%',
				willChange: 'y',
			})

			// console.log(wrapper.value)
			wrapper.value?.classList.remove('invisible')
			$gsap.to(splits.lines, {
				y: '0',
				duration: props.duration,
				delay: props.delay,
				stagger: { amount: 0.2 },
				ease: 'cubic-bezier(0.375, 0.075, 0.005, 0.960)',
				// onComplete: () => {
				// 	splits.revert()
				// },
			})
		}
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
		v-if="html"
		ref="wrapper"
		class="invisible"
		v-html="html"
	/>
	<component
		:is="component"
		v-else
		ref="wrapper"
		class="invisible"
	>
		<slot />
	</component>
</template>
