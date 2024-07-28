<script setup lang="ts">
const props = defineProps<{
	block: unknown
	isLast: boolean
	isFirst: boolean
}>()

const componentFile = resolveComponent(`LazyBlocks${toSentenceCase(props.block?.collection?.replace('svetlikus_block_', ''))
	.split('_')
	.map(toSentenceCase)
	.join('')
	.replace(' ', '')}`)

function toSentenceCase(text: string) {
	return text?.replace(/([A-Z])/g, ' $1')?.replace(/^./, str => str?.toUpperCase())
}

function clearAndUpper(text: string) {
	return text?.replace(/-/, '')?.toUpperCase()
}
</script>

<template>
	<component
		:is="componentFile"
		:id="block?.custom_id"
		:class="[
			isFirst && 'pt-0',
			isLast && $route.name?.toString()?.startsWith('projects-slug') && 'pb-0',
			block?.no_vertical_padding ? 'py-0' : `
				py-10
				lg:py-14
			`,
		]"
		:data="block?.item"
		:container="!useRoute().name?.toString().startsWith('projects-slug')"
	/>
</template>
