<script setup lang="ts">
</script>

<template>
	<div>
		<NuxtLoadingIndicator />
		<TheHeader ref="defaultHeaderRef" />
		<CommonVerticalSideText />
		<slot />
	</div>
</template>
