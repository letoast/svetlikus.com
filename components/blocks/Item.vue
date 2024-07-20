<script setup lang="ts">
import { NuxtErrorBoundary } from '#build/components'

const props = defineProps<{
	block: unknown
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
	<NuxtErrorBoundary>
		<component
			:is="componentFile"
			class="py-14"
			:data="block?.item"
			:container="!useRoute().name?.toString().startsWith('projects-slug')"
		/>
	</NuxtErrorBoundary>
</template>
