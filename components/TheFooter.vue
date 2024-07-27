<script setup lang="ts">
const { $initData } = useNuxtApp()

const cols = computed(() => {
	return $initData.value?.translations?.[0].footer
})
</script>

<template>
	<footer class="pb-28">
		<div class="container">
			<div class="grid grid-cols-6 gap-x-4 gap-y-8">
				<div
					v-for="col, index in cols"
					:key="index"
					class="
						flex flex-col items-start gap-3 text-neutral-400
						lg:gap-4
					"
					:class="index === 0 ? `
						col-span-6
						lg:col-span-2
					` : `
						col-span-3
						lg:col-span-1
					`"
				>
					<h5
						v-if="col.title"
						class="text-xl font-bold leading-normal text-neutral-100"
					>
						{{ col.title }}
					</h5>
					<template
						v-for="item, index in col.items"
						:key="index"
					>
						<!-- {{ item }} -->
						<NuxtLinkLocale
							v-if="item?.href"
							:to="item.href"
							class="flex items-center gap-2"
						>
							<div v-html="item?.text" />
							<Icon
								name="tabler:chevron-right"
								class="h-4 w-4"
							/>
						</NuxtLinkLocale>
						<div
							v-else
							class="text-neutral-400"
							v-html="item?.text"
						/>
					</template>
				</div>
			</div>
		</div>
	</footer>
</template>
