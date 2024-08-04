<script setup lang="ts">
import { UseElementVisibility } from '@vueuse/components'
</script>

<template>
	<UseElementVisibility v-slot="{ isVisible }">
		<slot :is-visible="isVisible" />
	</UseElementVisibility>
</template>
