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
			<div
				class="
					col-span-12 text-center
					lg:col-span-4 lg:text-start
				"
			>
				<span
					v-if="data.kicker"
					class="text-xl/6 font-bold uppercase text-yellow-500"
				>
					{{ data.kicker }}
				</span>
				<div
					v-if="data.title"
					class="
						text-[1.75rem]/[2.25rem] font-bold text-gray-100
						lg:text-[2.75rem]/[3.25rem]
					"
					v-html="data.title"
				/>
				<div
					v-if="data.lead"
					class="col-span-8 col-start-3 lead text-gray-400"
					v-html="data.lead"
				/>
			</div>
			<div
				class="
					col-span-12
					lg:col-span-8
				"
			>
				<UAccordion
					:items="data.items.map(item => ({
						label: item.question,
						content: item.answer,
					}))"
					:ui="{
						container: 'border-b border-neutral-700 py-2',
					}"
				>
					<template #default="{ item: { label }, open }">
						<UButton
							variant="link"
							color="white"
							:label="label"
							:block="false"
							class="justify-between px-0 text-start text-xl"
							:icon="open ? 'tabler:minus' : 'tabler:plus'"
							trailing
						/>
					</template>
					<template #item="{ item: { content } }">
						<div
							class="text-lg"
							v-html="content"
						/>
					</template>
				</UAccordion>
			</div>
		</div>
	</section>
</template>
