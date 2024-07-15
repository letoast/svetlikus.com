<script setup lang="ts">
defineProps<{
	data: unknown
}>()

const canvas = ref(null)

const { $script } = useScriptNpm({
	packageName: 'confetti-js',
	file: 'dist/index.js',
	version: '0.0.18',
	scriptOptions: {
		use() {
			return { JSConfetti: window.ConfettiGenerator }
		},
	},
})

const visible = useElementVisibility(canvas)
let confetti

watch(visible, async (isVisible) => {
	if (isVisible) {
		const { JSConfetti } = await $script
		confetti = new JSConfetti({
			target: canvas.value,
			max: '100',
			animate: true,
			props: ['circle', 'square', 'triangle', 'line'],
			colors: [[165, 104, 246], [230, 61, 135], [0, 199, 228], [253, 214, 126]],
			clock: '80',
		})
		confetti.render()
	}
	else {
		confetti.clear()
	}
})
</script>

<template>
	<section class="relative">
		<canvas
			ref="canvas"
			class="absolute left-0 top-0 h-full w-full"
		/>
		<div class="relative">
			<CommonExposedText
				:data="{
					kicker: data?.kicker,
					title: data?.title,
					description: data?.lead,
				}"
				:kicker-color="'text-purple-500'"
			/>
			<div
				class="container grid grid-cols-12 gap-x-8 gap-y-8"
			>
				<UButton
					class="
						col-span-10 col-start-2 mt-8
						lg:col-span-2 lg:col-start-6
					"
					:label="data?.cta?.label"
					:to="data?.cta?.href"
				/>
			</div>
		</div>
	</section>
</template>
