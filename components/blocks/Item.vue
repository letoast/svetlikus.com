<script setup lang="ts">
const props = defineProps<{
	block: unknown
}>()

const componentFile = resolveComponent(`Blocks${toSentenceCase(props.block?.collection?.replace('svetlikus_block_', ''))}`)

function toSentenceCase(text: string) {
	return text.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())
}

function clearAndUpper(text: string) {
	return text.replace(/-/, '').toUpperCase()
}
</script>

<template>
	<component
		:is="componentFile"
		:data="block.item"
	/>
</template>
