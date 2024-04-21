<script setup lang="ts">
import tailwindConfig from '#tailwind-config'
</script>

<template>
	<div>
		<LayoutHomeHero
			:data="{
				titleStarString: 'forward',
				title: 'Propel your brand forward',
				lead: 'On-demand design services for a monthly fee delivered by industry professionals. Solving design for Founders and CEOs.',
				cta_primary: {
					text: 'See Plans',
					link: '#',
				},
				cta_secondary: {
					text: 'Let’s Talk!',
					link: '#',
				},

			}"
			class="
				pb-18
				pt-24
			"
		/>
		<LayoutCarousel class="py-14" />
		<LayoutClients
			:clients="[
				{
					image: '/logos/fino.svg',
					title: 'fino',
				},
				{
					image: '/logos/zivabowl.svg',
					title: 'Živabowl',
				},
				{
					image: '/logos/novus.svg',
					title: 'Novus',
				},
				{
					image: '/logos/voga.svg',
					title: 'VOGA',
				},
				{
					image: '/logos/alphacool.svg',
					title: 'Alphacool',
				},
				{
					image: '/logos/bragg.svg',
					title: 'Bragg',
				},
				{
					image: '/logos/valkyrie.svg',
					title: 'Valkyrie',
				},
			]"
			class="py-14"
		/>
		<section class="py-14">
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
				class="
					container
					grid
					grid-cols-12
					gap-x-8
					gap-y-6
				"
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
		<LayoutWork class="py-14" />
		<section class="py-14">
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

		<section
			class="py-14"
		>
			<CommonExposedText
				:data="{
					kicker: 'Pricing',
					title: 'Collaboration plans that cover all your needs',
					description: 'Simplicity and transparency define our pricing. No hidden surprises or restrictions. Enjoy continuous support whenever you need it.',
					cta: {
						text: 'See all projects',
						link: '#',
					},
				}"
				:kicker-color="'text-purple-500'"
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
					<div
						v-for="col in 3"
						:key="col"
						class="
							col-span-4
							w-full
							h-20
							relative
						"
					>
						<div
							class="
								p-10
								gradient-border-1
								rounded-xl
								border-gradient-tl-purple-neutral-950
							"
						>
							dsfdsf
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
