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
			<div class="grid grid-cols-12 gap-x-8">
				<div class="col-span-10 col-start-2 flex justify-center">
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
				</div>
				<div class="col-span-8 col-start-3 mt-14">
					<p class="lead text-center text-neutral-300">
						On-demand design services for a monthly fee delivered by industry professionals. Solving design for Founders and CEOs.
					</p>
				</div>
			</div>
			<div class="mt-14 grid grid-cols-12 gap-x-8">
				<Button
					variant="outline"
					class="col-span-2 col-start-5"
				>
					See Plans
				</Button>
				<Button
					class="col-span-2"
				>
					Let’s Talk!
				</Button>
			</div>
		</div>
	</section>
</template>
