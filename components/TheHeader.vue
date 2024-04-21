<script setup lang="ts">
const headerRef = ref<HTMLElement | null>(null)

const { y } = useWindowScroll()
const { height: headerHeight } = useElementBounding(headerRef)

const setHeaderHeight = computed(() => {
	if (y.value > headerHeight.value) {
		return headerHeight.value
	}
	else {
		return 0
	}
})
</script>

<template>
	<header
		:style="{
			'padding-top': `${setHeaderHeight}px`,
		}"
	>
		<div
			ref="headerRef"
			class="
				container
				py-10
			"
			:class="{
				'fixed bottom-0 left-1/2 right-0 -translate-x-1/2 z-50': setHeaderHeight > 0,
			}"
		>
			<div
				class="
					grid
					grid-cols-12
				"
			>
				<div class="col-span-2">
					<NuxtLink
						to="/"
						class="
							scroll-me-5
							text-secondary
						"
					>
						<CommonLogo class="h-6" />
					</NuxtLink>
				</div>
				<div
					class="
						col-span-8
						flex
						justify-between
					"
				>
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
	</header>
</template>
