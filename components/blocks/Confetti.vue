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
			:kicker-color="'text-purple-500'"
		/>
		<div
			class="container grid grid-cols-12 gap-x-8 gap-y-8"
		>
			<UButton
				class="
					col-span-10 col-start-2 mt-8
					lg:col-span-2 lg:col-start-6
				"
				:label="data?.cta?.label"
				:to="data?.cta?.href"
			/>
		</div>
	</section>
</template>
