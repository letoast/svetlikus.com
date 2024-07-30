<script setup lang="ts">
const headerRef = ref<HTMLElement | null>(null)
const fixedHeaderRef = ref<HTMLElement | null>(null)

const { y } = useWindowScroll()
const initialHeaderHeight = ref(0)
const { height: headerHeight } = useElementBounding(headerRef)
const { height: fixedHeaderHeight } = useElementBounding(fixedHeaderRef)
// const fps = useFps()
const { $initData } = useNuxtApp()

const showMenu = ref(false)

const menuItems = computed(() => {
	return $initData.value?.translations?.[0]?.menu
})

onMounted(() => {
	initialHeaderHeight.value = headerHeight.value
})

const setHeaderHeight = computed(() => {
	if (y.value > initialHeaderHeight.value && initialHeaderHeight.value) {
		return initialHeaderHeight.value
	}
	else {
		return 0
	}
})

watch(setHeaderHeight, (val) => {
	if (val === 0) {
		showMenu.value = false
	}
})
</script>

<template>
	<header
		:style="{
			height: setHeaderHeight > 0 ? `${setHeaderHeight}px` : 'auto',
		}"
	>
		<div
			ref="headerRef"
			class="
				container py-5
				lg:py-10
			"
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
					<NuxtLinkLocale
						to="/"
						class="scroll-me-5 text-secondary"
						title="svetlikus"
					>
						<CommonLogo class="h-6" />
					</NuxtLinkLocale>
				</div>
				<div
					ref="fixedHeaderRef"
					class="
						col-span-12 max-w-[100vw] overflow-auto overflow-y-hidden py-2
						lg:col-span-8 lg:px-6 lg:py-4
					"
					:class="{
						'fixed bottom-6 left-1/2 z-50 col-auto w-[calc(100%-1rem)] animate-fade-up rounded-xl border border-solid border-white/20 bg-neutral-950/60 drop-shadow-xl backdrop-blur-xl -translate-x-1/2 lg:w-auto': setHeaderHeight > 0,
					}"
				>
					<div class="overflow-hidden">
						<div
							v-if="!$device.isMobileOrTablet || ($device.isMobileOrTablet && showMenu) || setHeaderHeight <= 0"
							v-motion
							class="
								flex items-center justify-center gap-x-6 gap-y-4 px-6 text-lg
								lg:px-0 lg:pb-0 lg:text-base
							"
							:class="{
								'flex-row flex-wrap lg:flex-nowrap': setHeaderHeight <= 0,
								'flex-col lg:flex-row': setHeaderHeight > 0,
								'border-b border-neutral-100/20 py-4 lg:border-transparent': showMenu,
								'border-transparent': !showMenu,
							}"
							:initial="{
								y: fixedHeaderHeight > 0 ? 100 : 0,
							}"
							:enter="{
								y: fixedHeaderHeight > 0 ? 0 : 0,
								transition: {
									type: 'spring',
									stiffness: 250,
									damping: 25,
									mass: 0.5,
								},
							}"
							:exit="{
								y: fixedHeaderHeight > 0 ? 0 : 100,
								transition: {
									type: 'spring',
									stiffness: 250,
									damping: 25,
									mass: 0.5,
								},
							}"
						>
							<NuxtLinkLocale
								to="/"
								title="svetlikus"
								@click="() => {
									showMenu = false
									y = 0
								}"
							>
								<Icon
									name="tabler:home"
									size="24"
								/>
							</NuxtLinkLocale>
							<NuxtLink
								v-for="menuItem, index in menuItems"
								:key="index"
								:to="menuItem.url"
								:target="menuItem.target"
								@click="showMenu = false"
							>
								{{ menuItem.title }}
							</NuxtLink>
						</div>
					</div>

					<div
						v-if="$device.isMobileOrTablet && setHeaderHeight > 0"
						class="relative flex items-center justify-between px-4"
						:class="{
							'mt-4': showMenu,
						}"
					>
						<NuxtLinkLocale
							to="/"
							class="scroll-me-5 text-secondary"
							title="svetlikus"
							@click="y = 0"
						>
							<CommonLogo class="h-3" />
						</NuxtLinkLocale>

						<UButton
							variant="ghost"
							color="white"
							class="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2"
							@click="showMenu = !showMenu"
						>
							<Icon
								:name="showMenu ? 'tabler:x' : 'tabler:menu'"
								size="24"
							/>
						</UButton>
						<div
							class="rounded-md border px-4 py-2 text-sm font-bold"
							:class="$initData?.status ? 'border-green-500' : 'border-rose-600'"
						>
							<!-- TODO: Add translation -->
							{{ $initData.status ? 'Open' : 'Closed' }}
						</div>
					</div>
				</div>
				<div
					class="
						col-span-2 hidden items-center justify-end
						lg:flex
					"
				>
					<div
						class="rounded-md border px-4 py-2 text-sm font-bold"
						:class="$initData?.status ? 'border-green-500' : 'border-rose-600'"
					>
						<!-- TODO: Add translation -->
						{{ $initData?.status ? 'Open' : 'Closed' }}
					</div>
				</div>
			</div>
		</div>
	</header>
</template>
