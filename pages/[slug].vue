<script setup lang="ts">
const route = useRoute()

const { $getPage } = useNuxtApp()

const { localeProperties } = useI18n()

const { data: page } = await useAsyncData(`page${route.params.slug}`, async () => {
	return await $getPage(route.params.slug, localeProperties.value.iso)
}, {
	transform: (data) => {
		return data?.[0].translations[0].blocks
	},
})
</script>

<template>
	<div>
		<Blocks
			v-if="page?.length"
			:blocks="page"
		/>
	</div>
</template>
