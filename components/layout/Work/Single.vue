<template>
	<div class="col-span-6">
		<div
			class="overflow-hidden rounded-lg"
		>
			<img
				src="/slide.png"
				class="size-full object-cover"
			>
		</div>
	</div>
	<div
		class="col-span-4 flex flex-col justify-center gap-4"
	>
		<div
			class="flex flex-wrap gap-3"
		>
			<CommonTag
				v-for="item in 8"
				:key="item"
				:color="item % 2 === 0 ? 'rose' : item % 3 === 0 ? 'yellow' : 'cyan'"
			>
				Brand Heart
			</CommonTag>
		</div>
		<h3
			class="text-3xl font-bold text-neutral-300"
		>
			EK Water Blocks
		</h3>
		<p
			class="text-lg font-book text-neutral-400"
		>
			We held pivotal roles within design, with goal to enhance the brand's visual identity and contribute to its global recognition.
		</p>
		<CommonCTA
			:cta="{
				text: 'View Case Study',
				link: '/work/ek-water-blocks',
			}"
		/>
	</div>
</template>
