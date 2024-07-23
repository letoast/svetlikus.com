<script setup lang="ts">
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
			class="grid grid-cols-12 gap-x-8 gap-y-8"
			:class="{
				container: container,
			}"
		>
			<div
				v-for="item, index in data?.benefits"
				:key="index"
				class="
					col-span-6 flex flex-col items-center gap-4 text-neutral-400 transition-all duration-300
					lg:col-span-3
				"
				:class="{
					'hover:text-emerald-500': item?.color === 'emerald',
					'hover:text-blue-500': item?.color === 'blue',
					'hover:text-rose-500': item?.color === 'rose',
					'hover:text-yellow-500': item?.color === 'yellow',
					'hover:text-purple-500': item?.color === 'purple',
					'hover:text-cyan-500': item?.color === 'cyan',
					'hover:text-gray-500': item?.color === 'gray',
					'hover:text-neutral-500': !item?.color,
				}"
			>
				<DynamicSVG
					:url="`${$directus.url}assets/${item.icon.key}`"
					:alt="item?.title"
				/>
				<h6
					class="text-center text-2xl font-bold leading-[28.80px]"
				>
					{{ item?.title }}
				</h6>
				<p
					class="
						prose font-book text-center leading-[21.60px] text-neutral-500
						lg:prose-xl
					"
				>
					{{ item?.description }}
				</p>
			</div>
			<div
				class="col-span-12 flex justify-center pt-4"
			>
				<CommonCTA
					v-if="data.cta"
					class="col-span-2 col-start-6 mt-8"
					color="secondary"
					:variant="data.cta.variant"
					:to="data?.cta?.href"
					:label="data?.cta?.label"
				/>
			</div>
		</div>
	</section>
</template>
