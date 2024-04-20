<script setup lang="ts">
const props = defineProps<{
	data: {
		title: string
		description: string
		items: string[]
	}
	exposed?: boolean
	customColor: 'rose' | 'yellow' | 'cyan'
}>()

const cardRef = ref<HTMLElement | null>(null)
const color = ref(props.customColor === 'rose' ? 'rose' : props.customColor === 'yellow' ? 'yellow' : 'cyan')
const textColor = ref(props.customColor === 'rose' ? 'text-rose-500' : props.customColor === 'yellow' ? 'text-yellow-400' : 'text-cyan-400')
const theme900 = ref(props.customColor === 'rose' ? 'theme(colors.rose.900)' : props.customColor === 'yellow' ? 'theme(colors.yellow.900)' : 'theme(colors.cyan.900)')
const { top, left } = useElementBounding(cardRef)
const smoothMouse = useSmoothMouse()
</script>

<template>
	<div
		ref="cardRef"
		:style="{
			'--x': `${smoothMouse[0] - left}px`,
			'--y': `${smoothMouse[1] - top}px`,
		}"
		class="
			group
			relative
			col-span-4
			rounded-lg
			p-8

			before:absolute
			before:z-[-1]
			before:rounded-lg
			before:transition-all
			before:duration-300
			before:content-['']

			hover:cursor-default
		"
		:class="[
			exposed && 'before:bg-[radial-gradient(20vw_circle_at_var(--x)_var(--y),_theme(colors.rose.500)_13.47%,_theme(colors.neutral.300)00_62.24%),linear-gradient(149.04deg,_theme(colors.rose.600)_13.47%,_theme(colors.neutral.800)00_62.24%)]',
			exposed && 'bg-[radial-gradient(20vw_circle_at_var(--x)_var(--y),_theme(colors.rose.950)_13.47%,_theme(colors.rose.950)00_62.24%),linear-gradient(210deg,_theme(colors.neutral.900)_-2.85%,_#090909_100%)] before:-left-px before:-top-px before:size-[calc(100%+2px)] before:bg-[radial-gradient(20vw_circle_at_var(--x)_var(--y),_theme(colors.rose.500)_13.47%,_theme(colors.rose.500)00_62.24%),linear-gradient(149.04deg,_theme(colors.rose.900)_13.47%,_theme(colors.rose.950)00_62.24%)] hover:before:bg-[linear-gradient(theme(colors.rose.700),_theme(colors.rose.500))]',
			customColor === 'yellow' && 'before:bg-[radial-gradient(20vw_circle_at_var(--x)_var(--y),_theme(colors.yellow.300)_13.47%,_theme(colors.neutral.300)00_62.24%),linear-gradient(149.04deg,_theme(colors.yellow.600)_13.47%,_theme(colors.neutral.800)00_62.24%)]',
			customColor === 'yellow' && `bg-[radial-gradient(20vw_circle_at_var(--x)_var(--y),_theme(colors.yellow.900)_13.47%,_theme(colors.neutral.900)00_62.24%),linear-gradient(210deg,_theme(colors.neutral.900)_-2.85%,_#090909_100%)] before:-left-px before:-top-px before:size-[calc(100%+2px)] hover:before:bg-[linear-gradient(theme(colors.yellow.500),_theme(colors.yellow.500))]`,
			customColor === 'cyan' && 'before:bg-[radial-gradient(20vw_circle_at_var(--x)_var(--y),_theme(colors.cyan.300)_13.47%,_theme(colors.neutral.300)00_62.24%),linear-gradient(149.04deg,_theme(colors.cyan.600)_13.47%,_theme(colors.neutral.800)00_62.24%)]',
			customColor === 'cyan' && `bg-[radial-gradient(20vw_circle_at_var(--x)_var(--y),_theme(colors.cyan.900)_13.47%,_theme(colors.neutral.900)00_62.24%),linear-gradient(210deg,_theme(colors.neutral.900)_-2.85%,_#090909_100%)] before:-left-px before:-top-px before:size-[calc(100%+2px)] hover:before:bg-[linear-gradient(theme(colors.cyan.500),_theme(colors.cyan.500))]`,
		]"
	>
		<h3
			class="
				mb-3
				text-4xl
				font-bold
			"
			:class="textColor"
		>
			{{ data.title }}
		</h3>
		<p
			v-if="data.description"
			class="text-lg"
			:class="{
				'text-neutral-200': exposed,
				'text-neutral-400': !exposed,

			}"
		>
			{{ data.description }}
		</p>
		<ul class="mt-10">
			<li
				v-for="item, itemIndex in data.items"
				:key="itemIndex"
				class="
					text-lg
					font-bold
					mb-2
					flex
					gap-3
					items-center
				"
				:class="{
					'text-neutral-200': exposed,
					'text-neutral-500': !exposed,
				}"
			>
				<svg
					width="15"
					height="16"
					viewBox="0 0 15 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					:class="textColor"
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
</template>
