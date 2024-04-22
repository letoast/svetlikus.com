<script setup lang="ts">
withDefaults(defineProps<{
	data: {
		title: string
		description: string
		price?: string
		pricePeriod?: string
		pricePeriodSuperscript?: string
		items: string[]
		cta: {
			text: string
			link: string
		}
		exposed?: boolean
	}
}>(), {
	data: () => ({
		title: '',
		description: '',
		price: '',
		pricePeriod: '',
		pricePeriodSuperscript: '',
		items: [],
		cta: {
			text: '',
			link: '',
		},
		exposed: false,
	}),
})

const cardRef = ref<HTMLElement | null>(null)

const { top, left } = useElementBounding(cardRef)
const smoothMouse = useSmoothMouse()
</script>

<template>
	<div
		class="
			flex
			flex-col
			gap-2
			items-end
		"
	>
		<span
			v-if="data.exposed"
			class="
				block
				text-base
				font-medium
				leading-[19.20px]
				text-purple-500
				uppercase
			"
		>
			MOST POPULAR*
		</span>
		<div
			ref="cardRef"
			:style="{
				'--x': `${smoothMouse[0] - left}px`,
				'--y': `${smoothMouse[1] - top}px`,
			}"
			class="
				flex
				flex-col
				gap-3
				p-10
				rounded-lg
				relative

				before:absolute
				before:z-[-1]
				before:rounded-lg
				before:transition-all
				before:duration-300
				before:content-['']
			"
			:class="{
				'shadow-2xl shadow-purple-600 before:bg-[radial-gradient(20vw_circle_at_var(--x)_var(--y),_theme(colors.purple.500)_0%,_theme(colors.neutral.300)00_62.24%),linear-gradient(149.04deg,_theme(colors.purple.600)_13.47%,_theme(colors.neutral.800)00_62.24%)] bg-[radial-gradient(20vw_circle_at_var(--x)_var(--y),_theme(colors.purple.950)_0%,_theme(colors.purple.950)00_62.24%),linear-gradient(210deg,_theme(colors.neutral.900)_-2.85%,_#090909_100%)] before:-left-px before:-top-px before:size-[calc(100%+2px)] hover:before:bg-[linear-gradient(theme(colors.purple.700),_theme(colors.purple.500))]': data.exposed,
				'before:bg-[radial-gradient(20vw_circle_at_var(--x)_var(--y),_theme(colors.neutral.300)_0%,_theme(colors.neutral.300)00_62.24%),linear-gradient(149.04deg,_theme(colors.neutral.600)_13.47%,_theme(colors.neutral.800)00_62.24%)] bg-[radial-gradient(20vw_circle_at_var(--x)_var(--y),_theme(colors.neutral.900)_0%,_theme(colors.neutral.900)00_62.24%),linear-gradient(210deg,_theme(colors.neutral.900)_-2.85%,_#090909_100%)] before:-left-px before:-top-px before:size-[calc(100%+2px)] hover:before:bg-[linear-gradient(theme(colors.neutral.500),_theme(colors.neutral.500))]': !data.exposed,
			}"
		>
			<h3
				class="
					text-3xl
					font-bold
					leading-[33.60px]
				"
				:class="data.exposed ? 'text-purple-500' : 'text-neutral-100'"
			>
				{{ data.title }}
			</h3>
			<p
				class="
					text-lg
					font-book
					leading-[21.60px]
					text-neutral-300
				"
			>
				{{ data.description }}
			</p>
			<p
				class="
					flex
					gap-3
					items-baseline
					text-xl
					font-semibold
					text-neutral-100
				"
			>
				<span
					class="
						text-4xl
						inline-block
					"
				>{{ data.price }}</span>
				<span class="inline-block">{{ data.pricePeriod }} <sup>{{ data.pricePeriodSuperscript }}</sup></span>
			</p>
			<hr
				class="
					border
					border-neutral-800
				"
			>
			<p
				class="
					text-lg
					font-book
					leading-[21.60px]
					text-neutral-400
				"
			>
				What’s included?
			</p>
			<ul class="">
				<li
					v-for="item, itemIndex in data.items"
					:key="itemIndex"
					class="
						text-lg
						mb-2
						flex
						gap-3
						items-baseline
						text-neutral-200
					"
				>
					<CommonIconsCheckmark
						:class="data.exposed ? 'text-purple-500' : 'text-neutral-100'"
					/>

					{{ item }}
				</li>
			</ul>
		</div>
	</div>
</template>
