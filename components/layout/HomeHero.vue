<script setup lang="ts">
import { TransitionPresets } from '@vueuse/core'

defineProps<{
	data: {
		title: string
		lead: string
		cta_primary: {
			text: string
			link: string
		}
		cta_secondary: {
			text: string
			link: string
		}
	}
}>()

const { y: mouseY, x: mouseX } = useMouse({ type: 'page' })

const rotation = ref(0)

const output = useTransition(rotation, {
	duration: 0,
	transition: TransitionPresets.linear,
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
			<div
				class="
      grid
      grid-cols-12
      gap-x-8
    "
			>
				<div
					class="
       col-span-10
       col-start-2
       flex
       justify-center
     "
				>
					<div class="relative">
						<div
							class="
         absolute
         -right-12
         -top-12
         blur-sm
       "
						>
							<CommonHeaderStar
								class="h-24"
								:style="{
									transform: `rotate(${output / 10}deg)`,
								}"
							/>
						</div>
						<CommonHeaderStar
							class="
         absolute
         -right-12
         -top-12
         h-24
       "
							:style="{
								transform: `rotate(${output / 10}deg)`,

							}"
						/>
						<h1
							class="
         relative
         text-6xl
         font-bold
         uppercase
       "
						>
							{{ data.title }}
						</h1>
					</div>
				</div>
				<div
					class="
       col-span-8
       col-start-3
       mt-14
     "
				>
					<p
						class="
        lead
        text-center
        text-neutral-300
      "
					>
						{{ data.lead }}
					</p>
				</div>
			</div>
			<div
				class="
      mt-14
      grid
      grid-cols-12
      gap-x-8
    "
			>
				<Button
					variant="outline"
					class="
       col-span-2
       col-start-5
     "
				>
					{{ data.cta_primary.text }}
				</Button>
				<Button
					class="col-span-2"
				>
					{{ data.cta_secondary.text }}
				</Button>
			</div>
		</div>
	</section>
</template>
