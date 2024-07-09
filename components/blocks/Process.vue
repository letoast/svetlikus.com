<script setup lang="ts">
defineProps<{
	data: unknown
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
		/>
		<div
			class="container grid grid-cols-12 gap-x-8 gap-y-6"
		>
			<CommonProcessCard
				v-for="card, cardIndex in data?.processes"
				:key="cardIndex"
				:card-number="`0${cardIndex + 1}`"
				:title="card.title"
				:description="card.description"
			/>
			<UButton
				class="col-span-2 col-start-6 mt-8"
				:label="data?.cta?.label"
				:to="data?.cta?.href"
			/>
		</div>
	</section>
</template>
