<script setup lang="ts">
</script>

<template>
	<div class="pb-20">
		<NuxtLoadingIndicator />
		<TheHeader ref="defaultHeaderRef" />
		<CommonVerticalSideText />
		<slot />
	</div>
</template>
