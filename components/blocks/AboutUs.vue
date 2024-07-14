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
			:kicker-color="'text-yellow-500'"
			class="pb-5"
		/>
		<div
			class="container grid grid-cols-12 gap-x-8 gap-y-8"
		>
			<div class="col-span-12 flex flex-col items-center gap-4 text-neutral-400 transition-all duration-300">
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

			<div class="col-span-12 flex flex-col items-center gap-4 text-neutral-400 transition-all duration-300">
				<img
					:src="`${$directus.url}assets/${data?.image?.filename_disk}`"
					class="aspect-[3/1] rounded object-cover-lg"
				>
			</div>
		</div>
	</section>
</template>
