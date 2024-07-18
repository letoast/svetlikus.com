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
			:kicker-color="'text-cyan-400'"
		/>
		<div
			class="col-span-12 flex justify-center pb-10 pt-4"
		>
			<UButton
				v-if="data?.cta"
				class="col-span-2 col-start-6"
				color="secondary"
				:to="data?.cta?.href"
				:label="data?.cta?.label"
			/>
		</div>
		<div class="container">
			<div
				class="grid grid-cols-12 gap-x-8 gap-y-8"
			>
				<BlocksWorkSingle
					v-for="project, index in data?.projects"
					:key="index"
					:data="project"
				/>
			</div>
		</div>
		<div
			class="col-span-12 flex justify-center pt-4"
		>
			<UButton
				v-if="data.cta_2"
				class="col-span-2 col-start-6 mt-8"
				color="secondary"
				:to="data?.cta_2?.href"
				:label="data?.cta_2?.label"
			/>
		</div>
	</section>
</template>
