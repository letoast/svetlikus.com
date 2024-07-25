<script setup lang="ts">
import Autoplay from 'embla-carousel-autoplay'
import emblaCarouselVue from 'embla-carousel-vue'

const props = defineProps<{
	data: unknown
	container: boolean
}>()

const { $directus } = useNuxtApp()

const [emblaRef, emblaApi] = emblaCarouselVue(
	{},
	[Autoplay({ playOnInit: true, delay: 3000 })],
)

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
			:container
		/>

		<div
			class="
				relative
				before:absolute before:-left-4 before:-top-4 before:z-[-1] before:h-[calc(100%+4rem)] before:w-[calc(100%+2rem)] before:rounded-2xl before:bg-[linear-gradient(to_bottom,_theme(colors.transparent),_theme(colors.neutral.900))] before:content-['']
			"
			:class="{
				container: container,
			}"
		>
			<div
				class="
					grid grid-cols-12 items-end gap-y-8
					lg:gap-x-8
				"
			>
				<div
					v-for="item, index in data?.pricing_table"
					:key="index"
					class="
						relative col-span-12 w-full
						lg:col-span-4
					"
				>
					<CommonPricingCard
						:data="item"
					/>
				</div>
				<div
					class="col-span-12 overflow-hidden rounded-xl border border-neutral-100/20 bg-[linear-gradient(135deg,_rgba(234,_234,_234,_0.1)_0%,_rgba(234,_234,_234,_0.005)_100%)] p-6"
				>
					<div
						class="
							flex flex-col items-center gap-8
							lg:flex-row
						"
					>
						<div
							ref="emblaRef"
							class="relative max-w-full overflow-hidden"
						>
							<div
								class="flex max-w-full items-center"
							>
								<div
									v-for="item in data?.testimonials"
									:key="item"
									class="
										flex max-w-full flex-shrink-0 flex-grow flex-col gap-8
										lg:mr-2 lg:basis-full lg:flex-row lg:items-center
									"
								>
									<div
										class="
											flex items-center gap-4
											lg:max-w-[30%] lg:flex-shrink-0 lg:flex-grow
										"
									>
										<img
											v-if="item?.svetlikus_testimonials_id?.image"
											:src="`${$directus.url}assets/${item?.svetlikus_testimonials_id?.image?.id}?format=auto`"
											:alt="item?.svetlikus_testimonials_id?.image?.title"
											class="h-20 w-20 rounded-md object-cover"
											loading="lazy"
										>
										<div>
											<p
												class="
													prose font-bold text-gray-200
													lg:prose-xl
												"
											>
												{{ item?.svetlikus_testimonials_id?.name }}
											</p>
											<p
												class="text-md font-book text-white text-opacity-50"
											>
												{{ item?.svetlikus_testimonials_id?.translations?.[0].position }}
											</p>
											<UIcon
												v-for="star, index in item?.svetlikus_testimonials_id?.rating"
												:key="index"
												name="gravity-ui:star-fill"
												class="me-1 text-gray-300"
											/>
										</div>
									</div>
									<ClientOnly>
										<p
											class="
												prose font-book w-full
												lg:prose-xl
											"
											v-html="item?.svetlikus_testimonials_id?.translations?.[0]?.quote"
										/>
									</ClientOnly>
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
								title="Previous slide"
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
								title="Next slide"
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
