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
	duration: 0.5,
	delay: 0,
	startWhenVisible: false,
	component: 'div',
})

const { $gsap } = useNuxtApp()

const wrapper = ref<HTMLElement | null>(null)
const visible = useElementVisibility(wrapper, {
	threshold: 0.5,
})

const show = ref(false)

onNuxtReady(() => {
	console.log(wrapper.value)
	for (const child of wrapper.value?.children || []) {
		if (!child) return
		if (child.classList.contains('line')) return
		// console.log(child)
		const splits = new SplitType(child, { types: 'words,lines' })
		for (const line of splits.lines || []) {
			line.style.overflow = 'hidden'
			// console.log(line.children)
		}

		$gsap.set(splits.words, { y: '100%' })

		if (props.startWhenVisible) {
			const watcherStop = watch(visible, (isVisible) => {
				if (isVisible) {
					show.value = true
					$gsap.to(splits.words, {
						y: '0',
						duration: props.duration,
						delay: props.delay,
						stagger: { amount: 0.5 },
						ease: 'power2.out',
						onComplete: () => {
							splits.revert()
							watcherStop()
						},
					})
				}
			}, {
				once: true,
			})
		}
		else {
			show.value = true
			$gsap.to(splits.words, {
				y: '0',
				duration: props.duration,
				delay: props.delay,
				stagger: { amount: 0.5 },
				ease: 'power2.out',
				onComplete: () => {
					splits.revert()
				},
			})
		}
	}
})
</script>

<template>
	<div
		v-if="html"
		ref="wrapper"
		style="show ? 'opacity: 1' : 'opacity: 0'"
		v-html="html"
	/>
	<component
		:is="component"
		v-else
		ref="wrapper"
		style="show ? 'opacity: 1' : 'opacity: 0'"
	>
		<slot />
	</component>
</template>
