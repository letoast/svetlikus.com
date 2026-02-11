<script setup lang="ts">
const { locale } = useI18n()
useHead({
	htmlAttrs: {
		lang: locale.value,
	},
})

function onEnter(_el, done) {
	// window.scrollTo({
	// 	top: 0,
	// 	behavior: 'instant',
	// })
	done()
}
</script>

<template>
	<NuxtLayout>
		<NuxtPage
			:transition="{
				mode: 'out-in',
				onEnter,
			}"
		/>
	</NuxtLayout>
</template>
