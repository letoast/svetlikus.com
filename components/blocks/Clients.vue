<script setup lang="ts">
import { useClamp } from '@vueuse/math'
import emblaCarouselVue from 'embla-carousel-vue'
import type { EmblaCarouselType } from 'embla-carousel'

interface Client {
	image: string
	title: string
	link?: string
}

const props = defineProps<{
	data: unknown
	container: boolean
}>()
const sectionRef = ref<HTMLElement | null>(null)

const emblaRef = ref<HTMLElement | null>(null)
const { top, bottom, height: sectionHeight, width: sectionWidth } = useElementBounding(emblaRef, {
	immediate: true,
})
const { height: windowHeight } = useWindowSize({
	initialHeight: 1,
})
const { pixelRatio } = useDevicePixelRatio()

const { y } = useWindowScroll()
const translateX = ref(50)
const percentageComputed = computed(() => (windowHeight.value - bottom.value) / windowHeight.value)
const percentage = useClamp(percentageComputed, 0, 1)
const visible = useElementVisibility(sectionRef)

// const [emblaRef, emblaApi] = emblaCarouselVue({ loop: true, dragFree: true })

// let internalEngine: ReturnType<EmblaCarouselType['internalEngine']>
// let target: ReturnType<EmblaCarouselType['internalEngine']>['target']

// watch(emblaApi, () => {
// 	if (emblaApi.value) {
// 		internalEngine = emblaApi.value.internalEngine()
// 		target = internalEngine.target
// 	}
// }, { once: true })

// watchThrottled(y, (currVal, prevVal) => {
// 	if (!visible.value) return
// 	if (top.value > windowHeight.value || bottom.value < 0) return
// 	if (currVal > prevVal) {
// 		target.add((currVal - prevVal) * 2 / pixelRatio.value)
// 	}
// 	else {
// 		target.subtract((prevVal - currVal) * 2 / pixelRatio.value)
// 	}
// 	internalEngine.animation.start()
// }, {
// 	throttle: 100,
// })

// watchDebounced(y, () => {
// 	if (top.value > windowHeight.value || bottom.value < 0) return
// 	internalEngine.animation.stop()
// }, {
// 	debounce: 1000,
// })


// watch(y, (currVal, prevVal) => {
// 	if (!visible.value) return
// 	if (top.value > windowHeight.value || bottom.value < 0) return
// 	if (currVal > prevVal) {
// 		translateX.value = translateX.value + ((currVal - prevVal) * 2 / pixelRatio.value) / 100
// 	}
// 	else {
// 		translateX.value = translateX.value - ((prevVal - currVal) * 2 / pixelRatio.value) / 100
// 	}
// })

function clientData(client: unknown) {
	return client?.svetlikus_clients_id
}
</script>

<template>
	<section ref="sectionRef">
		<CommonExposedText
			:data="{
				title: data?.title,
				description: data?.lead,
			}"
			:kicker-color="'text-emerald-400'"
			class="lg:pb-8"
			:container
		/>
		<div
			ref="emblaRef"
			class="relative mt-5 overflow-hidden"
		>
			<div
				v-if="data?.clients?.length"
				class="top-0 flex gap-3"
			>
				<NuxtMarquee
					class="py-1"
					:play="visible"
				>
					<div
						v-for="client, index in data?.clients"
						:key="index"
						class="shrink-0 rounded px-12 py-4"
						:class="{
							'ms-3': index === 0,
						}"
					>
						<a
							:href="clientData(client)?.url"
							:title="clientData(client)?.title"
							target="_blank"
						>
							<img
								class="h-9"
								:src="`${$directus.url}assets/${clientData(client)?.image}`"
								:alt="clientData(client)?.title"
								loading="lazy"
							>
						</a>
					</div>
				</NuxtMarquee>
			</div>
		</div>
	</section>
</template>
