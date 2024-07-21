<script setup lang="ts">
defineProps<{
	data: unknown
	container?: boolean
}>()

const canvas = ref(null)

const { $script } = useScriptNpm({
	packageName: 'js-confetti',
	file: 'dist/js-confetti.browser.js',
	version: '0.12.0',
	scriptOptions: {
		use() {
			return { JSConfetti: window.JSConfetti }
		},
	},
})

const visible = useElementVisibility(canvas)

watch(visible, async (isVisible) => {
	if (isVisible) {
		const { JSConfetti } = await $script
		const confetti = new JSConfetti()
		confetti.addConfetti({
			colors: ['#A54CFE', '#FF3355', '#0063E5', '#00E2F0', '#FFD919', '#00E599'],
			confettiRadius: 3,
			confettiNumber: 200,
		})
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
