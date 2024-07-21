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
			:kicker-color="'text-yellow-500'"
			class="pb-5"
			:container
		/>
		<div
			class="grid grid-cols-12 gap-x-8 gap-y-8"
			:class="{
				container: container,
			}"
		>
			<div class="col-span-12 flex flex-col items-center gap-4 text-neutral-400">
				<NuxtLinkLocale
					:to="data?.cta?.href"
					class="text-yellow-500"
				>
					{{ data?.cta?.label }}
					<Icon
						name="tabler:chevron-right"
						class="h-4 w-4"
					/>
				</NuxtLinkLocale>
			</div>

			<div class="col-span-12 flex flex-col items-center gap-4 text-neutral-400">
				<img
					v-if="data?.image"
					:src="`${$directus.url}assets/${data?.image?.id}?format=auto`"
					class="aspect-[3/1] rounded object-cover"
					:alt="data?.image?.title"
					loading="lazy"
				>
			</div>
		</div>
	</section>
</template>
