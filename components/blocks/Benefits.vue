<script setup lang="ts">
defineProps<{
	data: unknown
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
		/>
		<div
			class="container grid grid-cols-12 gap-x-8 gap-y-8"
		>
			<div
				v-for="item, index in data?.benefits"
				:key="index"
				class="col-span-3 flex flex-col items-center gap-4 text-neutral-400 transition-all duration-300"
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
					class="text-lg font-book text-center leading-[21.60px] text-neutral-500"
				>
					{{ item?.description }}
				</p>
			</div>
		</div>
	</section>
</template>
