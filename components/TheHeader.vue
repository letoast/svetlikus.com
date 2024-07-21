<script setup lang="ts">
const headerRef = ref<HTMLElement | null>(null)
const fixedHeaderRef = ref<HTMLElement | null>(null)

const { y } = useWindowScroll()
const { height: headerHeight } = useElementBounding(headerRef)
const { height: fixedHeaderHeight } = useElementBounding(fixedHeaderRef)
// const fps = useFps()
const { $initData } = useNuxtApp()

const menuItems = computed(() => {
	return $initData.value?.data?.translations?.[0]?.menu
})

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
			class="container py-10"
		>
			<div
				class="grid grid-cols-12 items-center"
			>
				<div
					class="
						col-span-2 hidden
						lg:block
					"
					:class="{
						'col-span-1 hidden': setHeaderHeight > 0,
					}"
				>
					<NuxtLink
						to="/"
						class="scroll-me-5 text-secondary"
						title="svetlikus"
					>
						<CommonLogo class="h-6" />
					</NuxtLink>
				</div>
				<div
					ref="fixedHeaderRef"
					class="
						col-span-12 flex max-w-[100vw] items-center justify-center gap-6 overflow-auto px-6 py-4
						lg:col-span-8
					"
					:class="{
						'fixed bottom-6 left-1/2 z-50 col-auto animate-fade-up rounded-xl border border-solid border-white/20 bg-neutral-950/40 drop-shadow-xl backdrop-blur-xl -translate-x-1/2': setHeaderHeight > 0,
					}"
				>
					<NuxtLink
						to="/"
						title="svetlikus"
					>
						<Icon
							name="tabler:home"
							size="24"
						/>
					</NuxtLink>
					<NuxtLink
						v-for="menuItem, index in menuItems"
						:key="index"
						:to="menuItem.url"
						:target="menuItem.target"
					>
						{{ menuItem.title }}
					</NuxtLink>
					<!-- <NuxtLink to="/">
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
					</NuxtLink> -->
				</div>
			</div>
		</div>
	</header>
</template>
