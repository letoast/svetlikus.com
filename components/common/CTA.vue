<script setup lang="ts">
defineProps<{
	to?: string
	label?: string
	variant?: 'solid' | 'outline' | 'soft' | 'ghost' | 'link'
	color?: string
	cta?: {
		text: string
		link: string
		target?: '_blank' | '_self'
	}
}>()
</script>

<template>
	<UButton
		v-if="to"
		:label
		:to
		:target="to.startsWith('http') ? '_blank' : '_self'"
		:color
		:variant
		trailing-icon="tabler:chevron-right"
		class="
			prose font-book
			lg:prose-xl
		"
	/>
	<NuxtLinkLocale
		v-else
		:to="cta?.link"
		class="
			prose flex items-center gap-2 font-book text-cyan-400
			hover:text-cyan-300
			lg:prose-xl
		"
		:target="cta.target ?? '_self'"
	>
		{{ cta?.text }}
		<Icon
			name="tabler:chevron-right"
			size="16"
		/>
	</NuxtLinkLocale>
</template>
