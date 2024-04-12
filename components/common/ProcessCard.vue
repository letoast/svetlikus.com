<script setup lang="ts">
withDefaults(defineProps<{
	cardNumber: string
	kickerColor?: string
	title: string
	description?: string
}>(),
{
	kickerColor: 'text-zinc-600',
	description: undefined,
	cta: undefined,
})

const parentEl = useParentElement()
const grandParentEl = useParentElement(parentEl)
const cardRef = ref<HTMLElement | null>(null)

const { x, y } = useMouse({ target: grandParentEl, type: 'client' })
const { top, left } = useElementBounding(cardRef)
</script>

<template>
	<div
		ref="cardRef"
		:style="{
			'--x': `${x - left}px`,
			'--y': `${y - top}px`,
		}"
		class="
      group
      relative
      col-span-6
      rounded-lg
      bg-[radial-gradient(15vw_circle_at_var(--x)_var(--y),_theme(colors.zinc.900)_0,_theme(colors.zinc.950)_100%)]
      px-6
      py-8

      before:absolute
      before:left-[-2px]
      before:top-[-2px]
      before:z-[-1]
      before:size-[calc(100%+4px)]
      before:rounded-lg
      before:bg-zinc-800
      before:content-['']

      after:absolute
      after:left-[-2px]
      after:top-[-2px]
      after:z-[-1]
      after:size-[calc(100%+4px)]
      after:rounded-lg
      after:bg-[radial-gradient(15vw_circle_at_var(--x)_var(--y),_theme(colors.blue.600)_0,_transparent_100%)]
      after:transition-all
      after:duration-300
      after:content-['']

      hover:cursor-default
      hover:bg-[radial-gradient(15vw_circle_at_var(--x)_var(--y),_theme(colors.blue.950)_0,_theme(colors.zinc.950)_100%)]
  "
	>
		<div
			class="
       pointer-events-none
       mb-4
       flex
       items-end
       justify-between
   "
		>
			<h3
				class="
        text-4xl
        font-bold
        text-zinc-300
        transition-all
        duration-300

        group-hover:text-blue-600
    "
			>
				{{ title }}
			</h3>
			<span
				class="
        block
        text-7xl
        font-semibold
        text-zinc-950
        transition-all
        duration-300
        text-stroke-zinc-500

        group-hover:text-blue-600
        group-hover:text-stroke-blue-600
    "
			>{{ cardNumber }}</span>
		</div>

		<p
			class="
       pointer-events-none
       text-lg
       text-zinc-400
   "
		>
			{{ description }}
		</p>
	</div>
</template>
