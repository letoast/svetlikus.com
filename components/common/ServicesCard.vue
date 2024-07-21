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
</script>

<template>
	<div
		ref="cardRef"
		:style="{
			'--x': `${x}px`,
			'--y': `${y}px`,
		}"
		class="
			group relative col-span-12 rounded-lg p-8
			before:absolute before:z-[-1] before:rounded-lg before:transition-all before:duration-300 before:content-['']
			hover:cursor-default
			lg:col-span-4
		"
		:class="[
			customColor === 'rose' && 'before:bg-[radial-gradient(var(--circle-size)_circle_at_var(--x)_var(--y),_theme(colors.rose.500)_0%,_theme(colors.neutral.300)00_62.24%),linear-gradient(149.04deg,_theme(colors.rose.600)_13.47%,_theme(colors.neutral.800)00_62.24%)]',
			customColor === 'rose' && `
				bg-[radial-gradient(var(--circle-size)_circle_at_var(--x)_var(--y),_theme(colors.rose.950)_0%,_theme(colors.rose.950)00_62.24%),linear-gradient(210deg,_theme(colors.neutral.900)_-2.85%,_#090909_100%)]
				before:-left-px before:-top-px before:size-[calc(100%+2px)] before:bg-[radial-gradient(var(--circle-size)_circle_at_var(--x)_var(--y),_theme(colors.rose.500)_13.47%,_theme(colors.rose.500)00_62.24%),linear-gradient(149.04deg,_theme(colors.rose.900)_13.47%,_theme(colors.rose.950)00_62.24%)]
				hover:before:bg-[linear-gradient(theme(colors.rose.700),_theme(colors.rose.500))]
			`,
			customColor === 'yellow' && 'before:bg-[radial-gradient(var(--circle-size)_circle_at_var(--x)_var(--y),_theme(colors.yellow.300)_0%,_theme(colors.neutral.300)00_62.24%),linear-gradient(149.04deg,_theme(colors.yellow.600)_13.47%,_theme(colors.neutral.800)00_62.24%)]',
			customColor === 'yellow' && `
				bg-[radial-gradient(var(--circle-size)_circle_at_var(--x)_var(--y),_theme(colors.yellow.900)_0%,_theme(colors.neutral.900)00_62.24%),linear-gradient(210deg,_theme(colors.neutral.900)_-2.85%,_#090909_100%)]
				before:-left-px before:-top-px before:size-[calc(100%+2px)]
				hover:before:bg-[linear-gradient(theme(colors.yellow.500),_theme(colors.yellow.500))]
			`,
			customColor === 'cyan' && 'before:bg-[radial-gradient(var(--circle-size)_circle_at_var(--x)_var(--y),_theme(colors.cyan.300)_0%,_theme(colors.neutral.300)00_62.24%),linear-gradient(149.04deg,_theme(colors.cyan.600)_13.47%,_theme(colors.neutral.800)00_62.24%)]',
			customColor === 'cyan' && `
				bg-[radial-gradient(var(--circle-size)_circle_at_var(--x)_var(--y),_theme(colors.cyan.900)_0%,_theme(colors.neutral.900)00_62.24%),linear-gradient(210deg,_theme(colors.neutral.900)_-2.85%,_#090909_100%)]
				before:-left-px before:-top-px before:size-[calc(100%+2px)]
				hover:before:bg-[linear-gradient(theme(colors.cyan.500),_theme(colors.cyan.500))]
			`,
		]"
	>
		<h3
			class="mb-3 text-4xl font-bold"
			:class="textColor"
		>
			{{ data.title }}
		</h3>
		<p
			v-if="data.description"
			class="text-lg text-neutral-200"
		>
			{{ data.description }}
		</p>
		<ul class="mt-10">
			<li
				v-for="item, itemIndex in data.items"
				:key="itemIndex"
				class="mb-2 flex items-baseline gap-3 text-lg font-bold text-neutral-200"
			>
				<CommonIconsCheckmark
					:class="textColor"
				/>
				{{ item }}
			</li>
		</ul>
	</div>
</template>
