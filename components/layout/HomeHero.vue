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
						>
							<!-- {{ data.title }} -->
							<span
								v-for="word, wordIndex in titleSplitToWords"
								:key="wordIndex"
								class="relative inline-block"
							>
								<div
									v-if="word === data.titleStarString"
									class="absolute -right-12 -top-12 blur-sm"
								>
									<CommonHeaderStar
										class="h-24"
										:style="{
											transform: `rotate(${output / 10}deg)`,
										}"
									/>
								</div>
								<CommonHeaderStar
									v-if="word === data.titleStarString"
									class="absolute -right-12 -top-12 h-24"
									:style="{
										transform: `rotate(${output / 10}deg)`,

									}"
								/>
								<span class="relative">
									{{ `${word}` }}{{ `${wordIndex !== titleSplitToWords.length - 1 ? '&nbsp;' : ''}` }}
								</span>
							</span>
						</h1>
					</div>
				</div>
				<div
					class="col-span-8 col-start-3 mt-10"
				>
					<p
						class="lead text-center text-neutral-300"
					>
						{{ data.lead }}
					</p>
				</div>
			</div>
			<div
				class="mt-10 grid grid-cols-12 gap-x-8"
			>
				<Button
					variant="outline"
					class="col-span-2 col-start-5"
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
