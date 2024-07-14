<script setup lang="ts">
defineProps<{
	data: unknown
}>()

const { $directus } = useNuxtApp()
</script>

<template>
	<section>
		<div
			class="container grid grid-cols-12 gap-x-8 gap-y-8"
		>
			<div class="col-span-4">
				<span
					v-if="data.kicker"
					class="text-xl/6 font-bold uppercase text-yellow-500"
				>
					{{ data.kicker }}
				</span>
				<div
					v-if="data.title"
					class="text-[2.75rem]/[3.25rem] font-bold text-gray-100"
					v-html="data.title"
				/>
				<div
					v-if="data.lead"
					class="col-span-8 col-start-3 lead text-gray-400"
					v-html="data.lead"
				/>
			</div>
			<div class="col-span-8">
				<UAccordion
					:items="data.items.map(item => ({
						label: item.question,
						content: item.answer,
					}))"
				>
					<template #default="{ item: { label }, open }">
						<UButton
							variant="link"
							color="white"
							:label="label"
							:block="false"
							class="justify-start px-0"
							:icon="open ? 'tabler:plus' : 'tabler:minus'"
						/>
					</template>
					<template #item="{ item: { content } }">
						<div v-html="content" />
					</template>
				</UAccordion>
			</div>
		</div>
	</section>
</template>
