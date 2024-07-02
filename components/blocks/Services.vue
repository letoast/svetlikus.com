<script setup lang="ts">
defineProps<{
	data: unknown
}>()
</script>

<template>
	<section>
		{{ data }}
		<CommonExposedText
			:data="{
				kicker: 'Services',
				title: data?.title,
				description: data?.lead,
			}"
			:kicker-color="'text-emerald-400'"
			class="pb-10"
		/>
		<div
			class="container grid grid-cols-12 items-baseline gap-x-8 gap-y-6"
		>
			<CommonServicesCard
				v-for="service, index in data?.services"
				:key="index"
				:data="{
					title: service.title,
					description: service.description,
					items: service?.service.map(item => item?.title),
				}"
				:custom-color="service.color"
			/>
			<UButton
				class="col-span-2 col-start-6 mt-8"
				:label="data?.cta?.label"
			/>
		</div>
	</section>
</template>
