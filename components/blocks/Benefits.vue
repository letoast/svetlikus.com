<script setup lang="ts">
import { UseElementVisibility } from '@vueuse/components'

defineProps<{
	data: unknown
	container: boolean
}>()

const { $directus } = useNuxtApp()
</script>

<template>
	<section>
		<CommonExposedText
			:data="{
				kicker: data?.kicker,
				title: data?.title,
				description: data?.lead,
			}"
			:kicker-color="'text-rose-600'"
			class="pb-10"
			:container
		/>
		<div
			:class="{
				container: container,
			}"
		>
			<div
				class="
					grid grid-cols-2 gap-y-8
					lg:grid-cols-12 lg:gap-x-8
				"
			>
				<BlocksBenefitsCard
					v-for="item, index in data?.benefits"
					:key="index"
					class="lg:col-span-3"
					:title="item?.title"
					:description="item?.description"
					:color="item?.color"
					:icon="item?.icon?.key"
				/>
				<div
					v-if="data.cta"
					class="
						col-span-2 flex justify-center pt-4
						lg:col-span-12
					"
				>
					<CommonCTA
						class="col-span-2 col-start-6 mt-8"
						color="secondary"
						:variant="data.cta.variant"
						:to="data?.cta?.href"
						:label="data?.cta?.label"
					/>
				</div>
			</div>
		</div>
	</section>
</template>
