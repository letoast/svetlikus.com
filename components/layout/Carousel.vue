<script setup lang="ts">
import emblaCarouselVue from 'embla-carousel-vue'

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

function updateRefs () {
	canScrollNext.value = emblaApi.value?.canScrollNext()
	canScrollPrev.value = emblaApi.value?.canScrollPrev()
	currentSlide.value = emblaApi.value?.selectedScrollSnap()
	totalSlides.value = emblaApi.value?.scrollSnapList().length
}
</script>
<template>
	<section>
		<div class="container">
			<div
				ref="emblaRef"
				class="relative overflow-hidden rounded-2xl"
			>
				<div class="flex">
					<div class="aspect-[2/1.13] min-w-0 shrink-0 grow-0 basis-full">
						<img
							src="/slide.png"
							class="size-full object-cover"
						>
					</div>
					<div class="aspect-[2/1.13] min-w-0 shrink-0 grow-0 basis-full">
						<img
							src="/slide.png"
							class="size-full object-cover"
							alt=""
						>
					</div>
					<div class="aspect-[2/1.13] min-w-0 shrink-0 grow-0 basis-full">
						<img
							src="/slide.png"
							class="size-full object-cover"
							alt=""
						>
					</div>
				</div>

				<div
					class="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-5"
				>
					<Button
						class="border backdrop-blur-sm transition-all "
						variant="ghost"
						:class="{
							'cursor-not-allowed opacity-30': !canScrollPrev,
							'hover:border-secondary hover:bg-secondary/30 hover:shadow-lg hover:shadow-secondary/30': canScrollPrev
						}"
						@click="emblaApi?.scrollPrev"
					>
						<Icon name="tabler:arrow-left" />
					</Button>
					<div>
						{{ currentSlide + 1 }} / {{ totalSlides }}
					</div>
					<Button
						class="border backdrop-blur-sm transition-all "
						variant="ghost"
						:class="{
							'cursor-not-allowed opacity-30': !canScrollNext,
							'hover:border-secondary hover:bg-secondary/30 hover:shadow-lg hover:shadow-secondary/30': canScrollNext
						}"
						@click="emblaApi?.scrollNext"
					>
						<Icon name="tabler:arrow-right" />
					</Button>
				</div>
			</div>
		</div>
	</section>
</template>

