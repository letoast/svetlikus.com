<script setup lang="ts">
const props = defineProps<{
	colorFrom: string
	colorTo: string
	bgFrom: string
	bgTo: string
}>()
</script>

<template>
	<div
		class="
			gradient-border
			absolute
			w-[calc(100%+2px)]
			h-[calc(100%+2px)]
			rounded-xl
			border-solid
		"
		:class="`bg-[linear-gradient(transparent,transparent),linear-gradient(to_right,_${colorFrom},_${colorTo})]`"
	/>
</template>

<style scoped>
.gradient-border {
	border: double 1px transparent;
	background-origin: border-box;
	background-clip: content-box, border-box;
}
</style>
