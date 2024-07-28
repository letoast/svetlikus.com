<script setup lang="ts">
import { ImgComparisonSlider } from '@img-comparison-slider/vue'

defineProps<{
	data: unknown
	container: boolean
}>()

const { $directus } = useNuxtApp()
</script>

<template>
	<div>
		<ImgComparisonSlider
			class="
				h-auto w-full rounded-lg
				focus:outline-none
			"
		>
			<!-- eslint-disable -->
				<img
					slot="first"
					class="w-full"
					:src="`${$directus.url}assets/${data?.before?.id}?format=auto`"
					:alt="data?.before?.title"
				>
				<img
					slot="second"
					class="w-full"
					:src="`${$directus.url}assets/${data?.after?.id}?format=auto`"
					:alt="data?.after?.title"
				>
			<!-- eslint-enable -->
		</ImgComparisonSlider>
	</div>
</template>
