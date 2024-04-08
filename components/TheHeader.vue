<script setup lang="ts">
</script>

<template>
	<div class="container py-10">
		<div class="grid grid-cols-12">
			<div class="col-span-2">
				<NuxtLink
					to="/"
					class="scroll-me-5 text-secondary"
				>
					<CommonLogo class="h-6" />
				</NuxtLink>
			</div>
			<div class="col-span-8 flex justify-between">
				<NuxtLink to="/">
					<Icon
						name="tabler:home"
						size="24"
					/>
				</NuxtLink>
				<NuxtLink to="/">
					Process
				</NuxtLink>
				<NuxtLink to="/">
					Services
				</NuxtLink>
				<NuxtLink to="/">
					Work
				</NuxtLink>
				<NuxtLink to="/">
					Pricing
				</NuxtLink>
				<NuxtLink to="/">
					Benefits
				</NuxtLink>
				<NuxtLink to="/">
					About
				</NuxtLink>
				<NuxtLink to="/">
					FAQ
				</NuxtLink>
				<NuxtLink to="/">
					Login
				</NuxtLink>
			</div>
		</div>
	</div>
</template>
