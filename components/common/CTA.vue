<script setup lang="ts">
defineProps<{
	cta: {
		text: string
		link: string
	}
}>()
</script>

<template>
	<NuxtLink
		:to="cta?.link"
		class="
			flex items-center gap-2 text-lg font-book text-cyan-400
			hover:text-cyan-300
		"
	>
		{{ cta?.text }}
		<Icon name="tabler:chevron-right" />
	</NuxtLink>
</template>
