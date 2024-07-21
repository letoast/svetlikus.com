<script setup lang="ts">
import tailwindConfig from '#tailwind-config'

const { $getPage } = useNuxtApp()

const { localeProperties } = useI18n()

const { data: page } = await useAsyncData('home', () => $getPage('home', localeProperties.value.iso!), {
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
