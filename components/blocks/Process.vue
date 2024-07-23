<script setup lang="ts">
defineProps<{
	data: unknown
	container: boolean
}>()
</script>

<template>
	<section>
		<CommonExposedText
			:data="{
				kicker: data?.kicker,
				title: data?.title,
				description: data?.lead,
			}"
			:kicker-color="'text-blue-600'"
			class="pb-10"
			:container
		/>
		<div
			class="grid grid-cols-12 gap-x-8 gap-y-6"
			:class="{
				container: container,
			}"
		>
			<CommonProcessCard
				v-for="card, cardIndex in data?.processes"
				:key="cardIndex"
				:card-number="`0${cardIndex + 1}`"
				:title="card.title"
				:description="card.description"
			/>
			<CommonCTA
				class="
					col-span-10 col-start-2 mt-8
					lg:col-span-2 lg:col-start-6
				"
				:label="data?.cta?.label"
				:to="data?.cta?.href"
				:variant="data?.cta?.variant"
			/>
		</div>
	</section>
</template>
