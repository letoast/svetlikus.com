<template>
	<section>
		<CommonExposedText
			:data="{
				kicker: 'Process',
				title: 'Creative proccess that fits straight in to your workflow',
				description: 'Turn design requests into the engine that propels your brand, content & revenue forward.',
			}"
			:kicker-color="'text-blue-600'"
			class="pb-10"
		/>
		<div
			class="
				container
				grid
				grid-cols-12
				gap-x-8
				gap-y-6
			"
		>
			<CommonProcessCard
				v-for="card, cardIndex in [
					{
						title: 'Let’s Talk!',
						description: `We meet for a coffee where we'll listen and discuss your brand's vision and pain points, setting the stage for collaboration.`,
					},
					{
						title: 'Subscribe',
						description: 'Once you subscribe we align with how we can help you, we’ll define and refine a plan, devise a brief and start working on making your brand stand out and make the right impression.',
					},
					{
						title: 'Design',
						description: 'We will bring your product or brand story to life. We’re not just about the creation, we’re about the delivery too. Expect friendly faces and people that make things perfectly possible.',
					},
					{
						title: 'Review & Refine',
						description: 'We tune into your feedback to align with your unique requirements and objectives, ensuring a tailored and impactful visual representation of your brand.',
					},
					{
						title: 'Application & Integration',
						description: 'Seamless application and integration of our design work into your brand by providing comprehensive support and guidance throughout the implementation process.',
					},
					{
						title: 'Continuous support',
						description: 'Continuous support & regularly assess brand building progress, collect feedback from both parties, and make necessary adjustments to optimize collaboration and deliver even cooler stuff.',
					},
				]"
				:key="cardIndex"
				:card-number="`0${cardIndex + 1}`"
				:title="card.title"
				:description="card.description"
			/>
			<Button
				class="
					col-span-2
					col-start-6
					mt-8
				"
			>
				Let’s Talk!
			</Button>
		</div>
	</section>
</template>
