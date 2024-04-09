<script setup lang="ts">
import { TransitionPresets } from '@vueuse/core'
const { y: mouseY, x: mouseX} = useMouse()

const rotation = ref(0)

const output = useTransition(rotation, {
	duration: 0,
	transition: TransitionPresets.linear
})

watch(mouseY, (currVal, prevVal) => {
	rotation.value += currVal - prevVal
})

watch(mouseX, (currVal, prevVal) => {
	rotation.value += currVal - prevVal
})
</script>
<template>
	<section class="">
		<div class="container">
			<div class="flex flex-col items-center">
				<div class="relative">
					<div class="absolute -right-12 -top-12 blur-sm">
						<CommonHeaderStar
							class="h-24"
							:style="{
								transform: `rotate(${output / 10}deg)`
							}"
						/>
					</div>
					<CommonHeaderStar
						class="absolute -right-12 -top-12 h-24"
						:style="{
							transform: `rotate(${output / 10}deg)`,

						}"
					/>
					<h1 class="relative text-6xl font-bold uppercase">
						Propel your brand foRward
					</h1>
				</div>
				<p class="lead pt-10 text-center text-gray-300">
					On-demand design services for a monthly fee delivered by industry professionals.
					<br>
					Solving design for Founders and CEOs.
				</p>
				<div class="mt-14 flex gap-4">
					<Button
						variant="outline"
						class="px-16"
					>
						See Plans
					</Button>
					<Button class="px-16">
						Let’s Talk!
					</Button>
				</div>
			</div>
		</div>
	</section>
</template>
