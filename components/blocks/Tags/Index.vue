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

defineProps<{
	data: unknown
}>()
</script>

<template>
	<section ref="sectionRef">
		<div
			class="flex flex-col gap-1"
		>
			<NuxtMarquee
				class="py-1"
				:speed="35"
				:play="visible"
			>
				<BlocksTagsTagItem
					v-for="item, index in tags
						?.map(value => ({ value, sort: Math.random() }))
						?.sort((a, b) => a.sort - b.sort)
						?.map(({ value }) => value)"
					:key="index"
					:data="item"
				/>
			</NuxtMarquee>
			<NuxtMarquee
				direction="right"
				class="py-1"
				:play="visible"
			>
				<BlocksTagsTagItem
					v-for="item, index in tags
						?.map(value => ({ value, sort: Math.random() }))
						?.sort((a, b) => a.sort - b.sort)
						?.map(({ value }) => value)"
					:key="index"
					:data="item"
				/>
			</NuxtMarquee>
			<NuxtMarquee
				class="py-1"
				:play="visible"
			>
				<BlocksTagsTagItem
					v-for="item, index in tags
						?.map(value => ({ value, sort: Math.random() }))
						?.sort((a, b) => a.sort - b.sort)
						?.map(({ value }) => value)"
					:key="index"
					:data="item"
				/>
			</NuxtMarquee>
		</div>
	</section>
</template>
