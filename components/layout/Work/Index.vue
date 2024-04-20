<template>
	<section>
		<CommonExposedText
			:data="{
				kicker: 'Work',
				title: 'Check what we delivered',
				description: 'As creatives ourselves, we know that what you really want to see is the work that’s actually live. Here’s a showcase of some of our recent projects.',
				cta: {
					text: 'See all projects',
					link: '#',
				},
			}"
			:kicker-color="'text-cyan-400'"
			class="pb-10"
		/>
		<div class="container">
			<div
				class="
					grid
					grid-cols-12
					gap-x-8
					gap-y-8
				"
			>
				<LayoutWorkSingle />
				<LayoutWorkSingle />
				<LayoutWorkSingle />
			</div>
		</div>
	</section>
</template>
