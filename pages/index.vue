<script setup lang="ts">
import tailwindConfig from '#tailwind-config'

const { $getPage } = useNuxtApp()

const { localeProperties } = useI18n()

const { data: page } = await useAsyncData('home', () => $getPage('home', localeProperties.value.iso!), {
	transform: (data) => {
		return data?.[0].translations[0]
	},
})

useSeoMeta({
	title: page.value?.seo_title,
	description: page.value?.seo_description,
})
</script>

<template>
	<div>
		<Blocks
			v-if="page?.blocks?.length"
			:blocks="page?.blocks"
		/>
	</div>
</template>
