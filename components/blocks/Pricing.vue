<script setup lang="ts">
import emblaCarouselVue from 'embla-carousel-vue'

const props = defineProps<{
	data: unknown
}>()


const [emblaRef, emblaApi] = emblaCarouselVue()

const canScrollNext = ref(true)
const canScrollPrev = ref(true)
const currentSlide = ref(0)
const totalSlides = ref(props.data?.testimonials?.length || 0)


watchEffect(() => {
	if (emblaApi.value) {
		emblaApi.value?.on('init', updateRefs)
	}
})

onMounted(() => {
	emblaApi.value.on('select', updateRefs)
})

onUnmounted(() => {
	emblaApi.value.off('select', updateRefs)
	emblaApi.value?.off('init', updateRefs)
})

function updateRefs() {
	canScrollNext.value = emblaApi.value?.canScrollNext()
	canScrollPrev.value = emblaApi.value?.canScrollPrev()
	currentSlide.value = emblaApi.value?.selectedScrollSnap()
	totalSlides.value = emblaApi.value?.scrollSnapList()?.length
}
</script>

<template>
	<section>
		<CommonExposedText
			:data="{
				kicker: data?.kicker,
				title: data?.title,
				description: data?.lead,
				cta: {
					text: data?.cta?.label,
					link: data?.cta?.href,
				},
			}"
			:kicker-color="'text-purple-500'"
			class="pb-10"
		/>

		<div
			class="
				container relative
				before:absolute before:-left-4 before:-top-4 before:z-[-1] before:h-[calc(100%+4rem)] before:w-[calc(100%+2rem)] before:rounded-2xl before:bg-[linear-gradient(to_bottom,_theme(colors.transparent),_theme(colors.neutral.900))] before:content-['']
			"
		>
			<div
				class="grid grid-cols-12 items-end gap-x-8 gap-y-8"
			>
				<div
					v-for="item, index in data?.pricing_table"
					:key="index"
					class="relative col-span-4 w-full"
				>
					<CommonPricingCard
						:data="item"
					/>
				</div>
				<div
					class="col-span-12 rounded-xl border border-neutral-100/20 bg-[linear-gradient(135deg,_rgba(234,_234,_234,_0.1)_0%,_rgba(234,_234,_234,_0.005)_100%)] p-6"
				>
					<div
						class="flex items-center gap-8"
					>
						<div
							ref="emblaRef"
							class="relative overflow-hidden"
						>
							<div
								class="flex"
							>
								<div
									v-for="item in data?.testimonials"
									:key="item"
									class="flex w-full flex-shrink-0 flex-grow basis-full items-center gap-8"
								>
									<div
										class="flex flex-shrink-0 flex-grow items-center gap-4"
									>
										<img
											src="/slide.png"
											alt="TODO"
											class="h-20 w-20 rounded-md object-cover"
										>
										<div>
											<p
												class="text-lg font-bold leading-[21.60px] text-white text-opacity-50"
											>
												Ime Priimek
											</p>
											<p
												class="text-lg font-book leading-[21.60px] text-white text-opacity-50"
											>
												Founder of Growth Lab
											</p>
										</div>
									</div>
									<p
										class="text-lg font-book leading-[21.60px] opacity-50"
									>
										“I absolutely adore collaborating with them on projects. They really do amazing research work and provide practical, beautiful and pragmatic solutions. Much recommended!”
									</p>
								</div>
							</div>
						</div>

						<div
							class="flex items-center gap-5"
						>
							<UButton
								class="border p-3 text-white backdrop-blur-sm"
								variant="ghost"
								:class="{
									'cursor-not-allowed opacity-30': !canScrollPrev,
									'hover:border-secondary hover:bg-secondary/30 hover:shadow-lg hover:shadow-secondary/30': canScrollPrev,
								}"
								@click="emblaApi?.scrollPrev"
							>
								<Icon name="tabler:chevron-left" />
							</UButton>
							<div class="whitespace-nowrap">
								{{ currentSlide + 1 }} / {{ totalSlides }}
							</div>
							<UButton
								class="border p-3 text-white backdrop-blur-sm"
								variant="ghost"
								:class="{
									'cursor-not-allowed opacity-30': !canScrollNext,
									'hover:border-secondary hover:bg-secondary/30 hover:shadow-lg hover:shadow-secondary/30': canScrollNext,
								}"
								@click="emblaApi?.scrollNext"
							>
								<Icon name="tabler:chevron-right" />
							</UButton>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
