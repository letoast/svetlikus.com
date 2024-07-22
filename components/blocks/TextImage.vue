<script setup lang="ts">
defineProps<{
	data: unknown
	container: boolean
}>()
</script>

<template>
	<section>
		<div
			class="grid grid-cols-12 items-center gap-x-8 gap-y-6"
			:class="{
				container: container,
			}"
		>
			<div
				class="
					col-span-12
					lg:col-span-5
				"
				:class="data?.direction === 'left' ? 'order-1': `
					order-2
					lg:col-start-8
				`"
			>
				<div
					class="
						prose
						lg:prose-xl
					"
					v-html="data?.text"
				/>
			</div>
			<div
				class="
					col-span-12
					lg:col-span-6
				"
				:class="data?.direction === 'left' ? `
					order-2
					lg:col-start-7
				`: 'order-1'"
			>
				<img
					v-if="data?.image"
					:src="`${$directus.url}assets/${data?.image?.id}?format=auto`"
					class="w-full rounded-lg object-cover"
					:alt="data?.image?.title"
					loading="lazy"
				>
			</div>
		</div>
	</section>
</template>
