<script setup lang="ts">
withDefaults(defineProps<{
	data: {
		kicker?: string
		title: string
		description?: string
		cta?: {
			text: string
			link: string
		}
	}
	kickerColor?: string
	container?: boolean
}>(),
{
	kickerColor: 'text-neutral-600',
})
</script>

<template>
	<CommonScrollTrigger
		v-slot="{
			isVisible,
		}"
	>
		<div
			:class="{
				container: container,
			}"
		>
			<div
				class="
					grid grid-cols-12 gap-y-6
					lg:gap-x-8
				"
			>
				<div
					class="
						col-span-12 flex flex-col justify-center gap-2 text-center
						lg:col-span-6 lg:col-start-4 lg:gap-4
					"
				>
					<CommonSplitText
						v-if="data?.kicker"
						:start-now="isVisible"
						class="
							block font-bold uppercase
							lg:text-xl/6
						"
						:class="kickerColor"
						component="div"
						:delay="0.5"
					>
						<span>
							{{ data.kicker }}
						</span>
					</CommonSplitText>

					<CommonSplitText
						v-if="data.title"
						class="
							text-[1.75rem]/[2.25rem] font-bold text-gray-100
							lg:text-[2.75rem]/[3.25rem]
						"
						:delay="0.35"
						:html="data.title"
						:start-now="isVisible"
					/>
				</div>

				<CommonSplitText
					v-if="data?.description"
					class="
						prose col-span-12 max-w-full text-center leading-normal text-gray-400
						lg:prose-2xl lg:col-span-8 lg:col-start-3 lg:leading-normal
					"
					:html="data.description"
					:delay="0.5"
					:start-now="isVisible"
				/>
			</div>
		</div>
	</CommonScrollTrigger>
</template>
