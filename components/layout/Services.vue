<template>
	<section>
		<CommonExposedText
			:data="{
				kicker: 'Services',
				title: 'What’s coming your way?',
				description: 'Delivering everything from branding to flawless design execution.',
			}"
			:kicker-color="'text-emerald-400'"
			class="pb-10"
		/>
		<div
			class="container grid grid-cols-12 items-baseline gap-x-8 gap-y-6"
		>
			<CommonServicesCard
				:data="{
					title: 'Branding',
					description: 'Boosting your reach through design of unique brand touch points aimed to immerse your audiences in your brand’s story.',
					items: [
						'Brand Strategies',
						'Brand Experience',
						'Brand Identity',
						'Design Strategy',
						'Brand Marketing',
					],
				}"
				custom-color="cyan"
			/>
			<CommonServicesCard
				:exposed="true"
				:data="{
					title: 'Design',
					description: 'Captivate your target audience with shaped experiences desiged with simplicity and style on any medium.',
					items: [
						'Graphic & Web',
						'Product & Packaging',
						'Event & Interior',
						'3D Visualisation',
						'Visual Identity',
						'Concept',
					],
				}"
				custom-color="rose"
			/>
			<CommonServicesCard
				:data="{
					title: 'Consulting',
					description: `We'll tear apart your existing brand and help you to elevate your performance and achieve exceptional results.`,
					items: [
						'Workshops',
						'Business Consultancy',
						'Creative Direction',
						'Design Management',
						'Mentoring',
					],
				}"
				custom-color="yellow"
			/>
			<UButton
				class="col-span-2 col-start-6 mt-8"
			>
				Let’s Talk!
			</UButton>
		</div>
	</section>
</template>
