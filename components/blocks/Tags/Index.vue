<script setup lang="ts">
const sectionRef = ref<HTMLElement | null>(null)

const visible = useElementVisibility(sectionRef)

const { $directus, $readItems } = useNuxtApp()
const { localeProperties } = useI18n()

const { data: tags } = await useLazyAsyncData('tags', async () => {
	return await $directus.request($readItems('svetlikus_projects_tags', {
		deep: {
			translations: {
				_filter: {
					_and: [
						{
							languages_code: { _eq: localeProperties.value.iso },
						},
					],
				},
			},
		},
		fields: ['*.*'],
	}))
}, {
	transform: (data) => {
		return data.map(item => item?.translations?.[0])
	},
})

const tags1 = tags.value
	?.map(value => ({ value, sort: Math.random() }))
	?.sort((a, b) => a.sort - b.sort)
	?.map(({ value }) => value)

const tags2 = tags.value
	?.map(value => ({ value, sort: Math.random() }))
	?.sort((a, b) => a.sort - b.sort)
	?.map(({ value }) => value)

const tags3 = tags.value
	?.map(value => ({ value, sort: Math.random() }))
	?.sort((a, b) => a.sort - b.sort)
	?.map(({ value }) => value)

defineProps<{
	data: unknown
}>()
</script>

<template>
	<section ref="sectionRef">
		<div
			class="flex max-w-[100vw] flex-col gap-1 overflow-hidden"
		>
			<NuxtMarquee
				class="py-1"
				:speed="20"
				:play="visible"
			>
				<BlocksTagsTagItem
					v-for="item, index in tags1"
					:key="index"
					:data="item"
				/>
			</NuxtMarquee>
			<NuxtMarquee
				direction="right"
				class="py-1"
				:speed="20"
				:play="visible"
			>
				<BlocksTagsTagItem
					v-for="item, index in tags2"
					:key="index"
					:data="item"
				/>
			</NuxtMarquee>
			<NuxtMarquee
				class="py-1"
				:speed="20"
				:play="visible"
			>
				<BlocksTagsTagItem
					v-for="item, index in tags3"
					:key="index"
					:data="item"
				/>
			</NuxtMarquee>
		</div>
	</section>
</template>
