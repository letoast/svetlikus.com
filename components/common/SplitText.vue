<script setup lang="ts">
import SplitType from 'split-type'

const props = withDefaults(defineProps<{
	duration?: number
	delay?: number
	html?: string
	text?: string
	component?: string
	startWhenVisible?: boolean
}>(), {
	duration: 1,
	delay: 0,
	startWhenVisible: false,
	component: 'div',
})

const { $gsap } = useNuxtApp()

const wrapper = ref<HTMLElement | null>(null)
const visible = useElementVisibility(wrapper, {
	threshold: 0.5,
})

onNuxtReady(() => {
	// console.log(wrapper.value)
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
		if (props.startWhenVisible) {
			const watcherStop = watch(visible, (isVisible) => {
				if (isVisible) {
					wrapper.value?.classList.remove('invisible')
					$gsap.to(splits.lines, {
						y: '0',
						duration: props.duration,
						delay: props.delay,
						stagger: { amount: 0.1 },
						ease: 'power4.out',
						// onComplete: () => {
						// 	splits.revert()
						// 	watcherStop()
						// },
					})
					watcherStop()
				}
			}, {
				immediate: true,
			})
		}
		else {
			wrapper.value?.classList.remove('invisible')
			$gsap.to(splits.lines, {
				y: '0',
				duration: props.duration,
				delay: props.delay,
				stagger: { amount: 0.1 },
				ease: 'power4.out',
				// onComplete: () => {
				// 	splits.revert()
				// },
			})
		}
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
