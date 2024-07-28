<script setup lang="ts">
const route = useRoute()

const { $getPage, $directus } = useNuxtApp()

const { localeProperties } = useI18n()

const { data: page } = await useAsyncData(`page${route.params.slug}`, async () => {
	return await $getPage(route.params.slug, localeProperties.value.iso)
}, {
	transform: (data) => {
		return data?.[0].translations[0]
	},
})

useSeoMeta({
	title: page.value?.seo_title,
	description: page.value?.seo_description,
	ogImage: `${$directus.url}assets/${page.value?.seo_image}?format=auto`,
})
</script>

<template>
	<div>
		<Blocks
			v-if="page?.blocks?.length"
			:blocks="page.blocks"
		/>
	</div>
</template>
