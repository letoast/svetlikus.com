<script setup lang="ts">
defineProps<{
	cta: {
		text: string
		link: string
		target?: '_blank' | '_self'
	}
}>()
</script>

<template>
	<NuxtLinkLocale
		:to="cta?.link"
		class="
			prose flex items-center gap-2 font-book text-cyan-400
			hover:text-cyan-300
			lg:prose-xl
		"
		:target="cta.target ?? '_self'"
	>
		{{ cta?.text }}
		<Icon name="tabler:chevron-right" />
	</NuxtLinkLocale>
</template>
