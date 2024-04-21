<script setup lang="ts">
const headerRef = ref<HTMLElement | null>(null)
const fixedHeaderRef = ref<HTMLElement | null>(null)

const { y } = useWindowScroll()
const { height: headerHeight } = useElementBounding(headerRef)
const { height: fixedHeaderHeight } = useElementBounding(fixedHeaderRef)

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
			height: setHeaderHeight > 0 ? `${setHeaderHeight + fixedHeaderHeight}px` : 'auto',
		}"
	>
		<div
			ref="headerRef"
			class="
				container
				py-10
			"
		>
			<div
				class="
					grid
					grid-cols-12
					items-center
				"
			>
				<div
					class="col-span-2"
					:class="{
						'hidden col-span-1': setHeaderHeight > 0,
					}"
				>
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
					ref="fixedHeaderRef"
					class="
						col-span-8
						flex
						items-center
						justify-center
						gap-6
						py-4
						px-6
					"
					:class="{
						'animate-fade-up col-auto fixed bottom-6 left-1/2 -translate-x-1/2 z-50 rounded-xl border border-white/20 border-solid backdrop-blur-xl drop-shadow-xl bg-neutral-950/40': setHeaderHeight > 0,
					}"
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
