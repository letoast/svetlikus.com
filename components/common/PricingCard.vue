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
				font-demi
				leading-[19.20px]
				text-purple-500
				uppercase
			"
		>
			MOST POPULAR*
		</span>
		<div
			class="
				flex
				flex-col
				gap-3
				p-10
				gradient-border-1
				rounded-xl
			"
			:class="data.exposed ? 'border-gradient-tl-purple-neutral-900 shadow-2xl shadow-purple-600' : 'border-gradient-tl-neutral-500-neutral-900'"
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
