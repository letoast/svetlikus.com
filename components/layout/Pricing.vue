<script setup lang="ts">
import emblaCarouselVue from 'embla-carousel-vue'

const data = ref({
	items: [
		{
			title: 'Design Sprint',
			description: 'When you need extra help on short notice. Perfect to test our service on a short-form design project.',
			price: '€1,950',
			pricePeriod: '/week',
			pricePeriodSuperscript: '+VAT',
			items: [
				'One design at a time',
				'Design delivery in few business days',
				'One user',
				'As many revisions as you need',
				'Fixed weekly investment fee',
				'Pause or cancel as you like',
				'Simple task managment',
			],
			cta: {
				text: 'Get Started',
				link: '#',
			},
		},
		{
			title: 'Design Bonanza',
			description: 'Flexibility you need to handle multiple design requests for a flat monthly rate. Perfect to propel your business forward!',
			price: '€6,950',
			pricePeriod: '/month',
			pricePeriodSuperscript: '+VAT',
			items: [
				'Work on two designs at a time',
				'Design delivery in few business days',
				'No user limits',
				'As many revisions as you need',
				'Pause or cancel as you like',
				'Seamless support from start to finish line',
				'Simple task managment',
				'Exclusive access to Brand Strategy Workshop',
			],
			cta: {
				text: 'Let\'s talk!',
				link: '#',
			},
			exposed: true,
		},
		{
			title: 'Bespoke project',
			description: 'For single big scope projects or workshops we’ll give you a detailed quote covering everything from design to delivery — with no hidden charges. Tell us what you need.',
			items: [
				'Power ups unlocked',
				'Tailor made offer',
				'Custom payment plans',
				'Initial consultancy',
			],
			cta: {
				text: 'Inquire',
				link: '#',
			},
		},
	],
})

const [emblaRef, emblaApi] = emblaCarouselVue()

const canScrollNext = ref(true)
const canScrollPrev = ref(true)
const currentSlide = ref(0)
const totalSlides = ref(0)


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
	totalSlides.value = emblaApi.value?.scrollSnapList().length
}
</script>

<template>
	<section>
		<CommonExposedText
			:data="{
				kicker: 'Pricing',
				title: 'Collaboration plans that cover all your needs',
				description: 'Simplicity and transparency define our pricing. No hidden surprises or restrictions. Enjoy continuous support whenever you need it.',
				cta: {
					text: 'See all projects',
					link: '#',
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
					v-for="item, index in data.items"
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
									v-for="item in 4"
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
							<Button
								class="border p-3 backdrop-blur-sm transition-all"
								variant="ghost"
								:class="{
									'cursor-not-allowed opacity-30': !canScrollPrev,
									'hover:border-secondary hover:bg-secondary/30 hover:shadow-lg hover:shadow-secondary/30': canScrollPrev,
								}"
								@click="emblaApi?.scrollPrev"
							>
								<Icon name="tabler:arrow-left" />
							</Button>
							<div class="whitespace-nowrap">
								{{ currentSlide + 1 }} / {{ totalSlides }}
							</div>
							<Button
								class="border p-3 backdrop-blur-sm transition-all"
								variant="ghost"
								:class="{
									'cursor-not-allowed opacity-30': !canScrollNext,
									'hover:border-secondary hover:bg-secondary/30 hover:shadow-lg hover:shadow-secondary/30': canScrollNext,
								}"
								@click="emblaApi?.scrollNext"
							>
								<Icon name="tabler:arrow-right" />
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
