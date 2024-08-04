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
			:kicker-color="'text-emerald-400'"
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
					grid grid-cols-12 items-baseline gap-y-6
					lg:gap-x-8
				"
			>
				<CommonScrollTrigger
					v-for="service, index in data?.services"
					:key="index"
					v-slot="{ isVisible }"
					class="
						col-span-12
						lg:col-span-4
					"
				>
					<CommonFadeMoveUp
						:start-now="isVisible"
						:delay="index * 0.2"
						y="10rem"
					>
						<CommonServicesCard
							:data="{
								title: service.title,
								description: service?.description,
								items: service?.service.map(item => item?.title),
							}"
							:custom-color="service.color"
						/>
					</CommonFadeMoveUp>
				</CommonScrollTrigger>
				<CommonCTA
					v-if="data?.cta"
					class="
						col-span-10 col-start-2 mt-8
						lg:col-span-2 lg:col-start-6
					"
					:label="data?.cta?.label"
					:to="data?.cta?.href"
				/>
			</div>
		</div>
	</section>
</template>
