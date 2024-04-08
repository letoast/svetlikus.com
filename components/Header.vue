<script setup lang="ts">
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
} from '@/components/ui/navigation-menu'
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'

</script>

<template>
	<div class="container py-10">
		<div class="grid grid-cols-12">
			<div class="col-span-2">
				<NuxtLink
					to="/"
					class="scroll-me-5"
				>
					Svetlikus
				</NuxtLink>
			</div>
			<div class="col-span-10 flex gap-10">
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
