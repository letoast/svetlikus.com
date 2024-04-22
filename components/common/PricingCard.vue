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
						items-center
						text-neutral-200
					"
				>
					<svg
						width="15"
						height="16"
						viewBox="0 0 15 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						:class="data.exposed ? 'text-purple-500' : 'text-neutral-100'"
					>
						<g clip-path="url(#clip0_839_1917)">
							<mask
								id="mask0_839_1917"
								style="mask-type:luminance"
								maskUnits="userSpaceOnUse"
								x="0"
								y="0"
								width="15"
								height="16"
							>
								<path
									d="M15 0.5H0V15.5H15V0.5Z"
									fill="white"
								/>
							</mask>
							<g mask="url(#mask0_839_1917)">
								<path
									d="M7.5 0.5C3.36466 0.5 0 3.86466 0 8C0 12.1353 3.36466 15.5 7.5 15.5C11.6353 15.5 15 12.1353 15 8C15 3.86466 11.6353 0.5 7.5 0.5ZM11.6917 6.02631L6.8985 10.782C6.61654 11.0639 6.16541 11.0827 5.86466 10.8007L3.32707 8.48873C3.02632 8.20677 3.00751 7.73685 3.27068 7.4361C3.55263 7.13533 4.02255 7.11654 4.32331 7.3985L6.33458 9.2406L10.6203 4.95489C10.9211 4.65414 11.391 4.65414 11.6917 4.95489C11.9925 5.25564 11.9925 5.72556 11.6917 6.02631Z"
									fill="currentColor"
								/>
							</g>
						</g>
						<defs>
							<clipPath id="clip0_839_1917">
								<rect
									width="15"
									height="15"
									fill="white"
									transform="translate(0 0.5)"
								/>
							</clipPath>
						</defs>
					</svg>

					{{ item }}
				</li>
			</ul>
		</div>
	</div>
</template>
