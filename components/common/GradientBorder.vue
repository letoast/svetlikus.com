<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
	colorFrom: string
	colorTo: string
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
		"
		:class="`bg-[linear-gradient(white,white),linear-gradient(149.04deg,_${colorFrom}_13.47%,_${colorTo}00_62.24%)]`"
	/>
</template>

<style scoped>
.gradient-border {
  border: double 1px transparent;
  background-origin: border-box;
  background-clip: content-box, border-box;
}
</style>
