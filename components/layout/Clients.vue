<script setup lang="ts">
import { useClamp } from '@vueuse/math'
import emblaCarouselVue from 'embla-carousel-vue'
import type { EmblaCarouselType } from 'embla-carousel'

interface Client {
	image: string
	title: string
	link?: string
}

const props = defineProps<{ clients: Client[] }>()
const sectionRef = ref<HTMLElement | null>(null)

const { top, bottom, height: sectionHeight, width: sectionWidth } = useElementBounding(sectionRef, {
	immediate: true,
})
const { height: windowHeight } = useWindowSize({
	initialHeight: 1,
})
const { pixelRatio } = useDevicePixelRatio()

const { y } = useWindowScroll()
const percentageComputed = computed(() => (windowHeight.value - top.value) / windowHeight.value)
const percentage = useClamp(percentageComputed, 0, 1)

const [emblaRef, emblaApi] = emblaCarouselVue({ loop: true, dragFree: true })

let internalEngine: ReturnType<EmblaCarouselType['internalEngine']>
let target: ReturnType<EmblaCarouselType['internalEngine']>['target']

watch(emblaApi, () => {
	if (emblaApi.value) {
		internalEngine = emblaApi.value.internalEngine()
		target = internalEngine.target
	}
}, { once: true })

watchThrottled(y, (currVal, prevVal) => {
	if (top.value > windowHeight.value || bottom.value < 0) return
	if (currVal > prevVal) {
		target.add((currVal - prevVal) * 2 / pixelRatio.value)
	}
	else {
		target.subtract((prevVal - currVal) * 2 / pixelRatio.value)
	}
	internalEngine.animation.start()
}, {
	throttle: 50,
})

watchDebounced(y, () => {
	if (top.value > windowHeight.value || bottom.value < 0) return
	internalEngine.animation.stop()
}, {
	debounce: 1000,
})
</script>

<template>
	<section ref="sectionRef">
		<div class="container">
			<div
				class="
					flex
					justify-center
				"
			>
				<p
					class="
						text-2xl
						text-neutral-300
					"
				>
					Over the years we flew with some amazing brands.
				</p>
			</div>
		</div>
		<div
			ref="emblaRef"
			class="
				relative
				mt-14
				overflow-hidden
			"
		>
			<div
				v-if="clients.length"
				class="
					flex
					gap-3
				"
			>
				<div
					v-for="client, index in [...clients, ...clients]"
					:key="index"
					class="
						shrink-0
						rounded
						px-12
						py-4
					"
					:class="{
						'ms-3': index === 0,
					}"
				>
					<div>
						<img
							class="h-12"
							:src="client.image"
							:alt="client.title"
						>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
