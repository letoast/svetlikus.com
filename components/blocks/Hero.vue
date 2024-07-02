<script setup lang="ts">
import { TransitionPresets } from '@vueuse/core'

const props = defineProps<{
	data: {
		title: string
		titleStarString: string
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

const mouseVector = useSmoothMouse()

const rotation = ref(0)
const sectionRef = ref<HTMLElement | null>(null)

const output = useTransition(rotation, {
	duration: 0,
	transition: TransitionPresets.linear,
})

const titleSplitToWords = computed(() => {
	return props.data.title.split(' ')
})

const { pause, resume, isActive } = useRafFn(() => {
	rotation.value += 10
}, {
	fpsLimit: 60,
})

const isSectionVisible = useElementVisibility(sectionRef)

watch(isSectionVisible, (isVisible) => {
	if (isVisible) {
		resume()
	}
	else {
		pause()
	}
})

watch(() => mouseVector.value[1], (currVal, prevVal) => {
	if (!isSectionVisible.value) return
	rotation.value += currVal - prevVal
})

watch(() => mouseVector.value[0], (currVal, prevVal) => {
	if (!isSectionVisible.value) return
	rotation.value += currVal - prevVal
})
</script>

<template>
	<section ref="sectionRef">
		<div class="container">
			<div
				class="grid grid-cols-12 gap-x-8"
			>
				<div
					class="col-span-10 col-start-2 flex justify-center"
				>
					<div class="relative">
						<h1
							class="relative text-center text-9xl font-bold uppercase"
							v-html="data.title"
						/>
					</div>
				</div>
				<div
					class="col-span-8 col-start-3 mt-10"
				>
					<div
						class="lead text-center text-neutral-300"
						v-html="data.lead"
					/>
				</div>
			</div>
			<div
				class="mt-10 grid grid-cols-12 gap-x-8"
			>
				<UButton
					color="primary"
					class="col-span-2 col-start-5"
					:label="data?.cta?.label"
					:variant="data?.cta?.variant || 'solid'"
				/>
				<UButton
					color="primary"
					class="col-span-2"
					:label="data?.cta_2?.label"
					:variant="data?.cta_2?.variant || 'outline'"
				/>
			</div>
		</div>
	</section>
</template>
