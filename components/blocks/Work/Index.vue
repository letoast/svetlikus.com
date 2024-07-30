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
			:kicker-color="'text-cyan-400'"
			:container
		/>
		<div
			class="col-span-12 flex justify-center pb-10 pt-4"
		>
			<CommonCTA
				v-if="data?.cta"
				class="col-span-2 col-start-6"
				color="secondary"
				:to="data?.cta?.href"
				:label="data?.cta?.label"
				:variant="data?.cta?.variant"
			/>
		</div>
		<div
			:class="{
				container: container,
			}"
		>
			<div
				class="
					grid grid-cols-12 gap-y-10
					lg:gap-x-8 lg:gap-y-20
				"
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
			<CommonCTA
				v-if="data.cta_2"
				class="col-span-2 col-start-6 mt-8"
				color="secondary"
				:to="data?.cta_2?.href"
				:label="data?.cta_2?.label"
			/>
		</div>
	</section>
</template>
