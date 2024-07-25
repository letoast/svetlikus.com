<script setup lang="ts">
defineProps<{
	data: unknown
	container: boolean
}>()
</script>

<template>
	<section>
		<div
			class="
				gap-y-6
				lg:gap-x-8
			"
			:class="{
				container: container,
			}"
		>
			<div
				class="
					prose
					lg:prose-xl
				"
				v-html="data?.content"
			/>
		</div>
	</section>
</template>
