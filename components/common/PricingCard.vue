<script setup lang="ts">
// import tv from 'tailwind-variants'

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
		above_info?: string
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
const visible = useElementVisibility(cardRef)

const x = ref(smoothMouse.value[0] - left.value)
const y = ref(smoothMouse.value[1] - top.value)

const { pause, resume } = watchPausable([smoothMouse.value, top], () => {
	x.value = smoothMouse.value[0] - left.value
	y.value = smoothMouse.value[1] - top.value
})

watch(visible, (isVisible) => {
	if (isVisible) {
		resume()
	}
	else {
		pause()
	}
}, {
	immediate: true,

})

// const { } = tv({
// 	slots: {

// 	}
// })
</script>

<template>
	<div
		class="flex flex-col items-end gap-2"
	>
		<span
			v-if="data?.above_info"
			:class="data.exposed ? 'text-purple-500' : 'text-neutral-100'"
			class="block text-base font-medium uppercase leading-[19.20px]"
		>
			{{ data?.above_info }}
		</span>
		<div
			ref="cardRef"
			:style="{
				'--x': `${x}px`,
				'--y': `${y}px`,
			}"
			class="
				relative flex flex-col gap-3 rounded-lg p-10
				before:absolute before:z-[-1] before:rounded-lg before:transition-all before:duration-300 before:content-['']
			"
			:class="{
				'bg-[radial-gradient(var(--circle-size)_circle_at_var(--x)_var(--y),_theme(colors.purple.950)_0%,_theme(colors.purple.950)00_62.24%),linear-gradient(210deg,_theme(colors.purple.950)_-2.85%,_#090909_100%)] shadow-2xl shadow-purple-600 before:-left-px before:-top-px before:size-[calc(100%+2px)] before:bg-[radial-gradient(var(--circle-size)_circle_at_var(--x)_var(--y),_theme(colors.purple.500)_0%,_theme(colors.neutral.300)00_62.24%),linear-gradient(149.04deg,_theme(colors.purple.600)_13.47%,_theme(colors.neutral.800)00_62.24%)] hover:before:bg-[linear-gradient(theme(colors.purple.700),_theme(colors.purple.500))]': data.exposed,
				'bg-[radial-gradient(var(--circle-size)_circle_at_var(--x)_var(--y),_theme(colors.neutral.900)_0%,_theme(colors.neutral.900)00_62.24%),linear-gradient(210deg,_theme(colors.neutral.900)_-2.85%,_#090909_100%)] before:-left-px before:-top-px before:size-[calc(100%+2px)] before:bg-[radial-gradient(var(--circle-size)_circle_at_var(--x)_var(--y),_theme(colors.neutral.300)_0%,_theme(colors.neutral.300)00_62.24%),linear-gradient(149.04deg,_theme(colors.neutral.600)_13.47%,_theme(colors.neutral.800)00_62.24%)] hover:before:bg-[linear-gradient(theme(colors.neutral.500),_theme(colors.neutral.500))]': !data.exposed,
			}"
		>
			<h3
				class="text-3xl font-bold leading-[33.60px]"
				:class="data.exposed ? 'text-purple-500' : 'text-neutral-100'"
			>
				{{ data.title }}
			</h3>
			<p
				class="
					prose font-book leading-[21.60px] text-neutral-300
					lg:prose-lg
				"
			>
				{{ data.description }}
			</p>
			<p
				class="flex items-baseline gap-3 text-lg font-semibold text-neutral-100"
			>
				<span
					class="inline-block text-4xl"
				>{{ data.price }}</span>
				<span class="inline-block">{{ data.pricePeriod }} <sup>{{ data.pricePeriodSuperscript }}</sup></span>
			</p>
			<hr
				class="border"
				:class="{
					'border-purple-800': data.exposed,
					'border-neutral-800': !data.exposed,
				}"
			>
			<p
				class="
					prose font-book leading-[21.60px] text-neutral-400
					lg:prose-md
				"
			>
				What’s included?
			</p>
			<ul class="">
				<li
					v-for="item, itemIndex in data?.items"
					:key="itemIndex"
					class="prose mb-2 flex items-baseline gap-3 text-neutral-200"
				>
					<CommonIconsCheckmark
						:class="data.exposed ? 'text-purple-500' : 'text-neutral-100'"
					/>
					{{ item?.description }}
				</li>
			</ul>
		</div>
	</div>
</template>
