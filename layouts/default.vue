<script setup lang="ts">
</script>

<template>
	<div class="max-w-[100svw] overflow-x-hidden">
		<NuxtLoadingIndicator />
		<TheHeader ref="defaultHeaderRef" />
		<CommonVerticalSideText />
		<slot />
		<TheFooter />
	</div>
</template>
