<script setup lang="ts">

</script>
<template>
	<div>
		<LayoutHomeHero class="pb-36 pt-52" />
		<LayoutCarousel class="py-14" />
		<LayoutClients class="py-14" />
		<section class="py-14">
			<CommonExposedText
				:data="{
					kicker: 'Process',
					title: 'Creative proccess that fits straight in to your workflow',
					description: 'Turn design requests into the engine that propels your brand, content & revenue forward.'
				}"
				:kicker-color="'text-blue-600'"
				class="pb-10"
			/>
			<div class="container grid grid-cols-12 gap-x-8 gap-y-6">
				<CommonProcessCard
					v-for="cardIndex in 6"
					:key="cardIndex"
					:card-number="`0${cardIndex}`"
					title="Application & Integration"
					description="Seamless application and integration of our design work into your brand by providing comprehensive support and guidance throughout the implementation process."
				/>
				<Button
					class="col-span-2 col-start-6 mt-8"
				>
					Let’s Talk!
				</Button>
			</div>
		</section>
		<section class="py-14">
			<CommonExposedText
				:data="{
					kicker: 'Services',
					title: 'What’s coming your way?',
					description: 'Delivering everything from branding to flawless design execution.'
				}"
				:kicker-color="'text-emerald-400'"
				class="pb-10"
			/>
			<div class="container grid grid-cols-12 gap-x-8 gap-y-6">
				<CommonServicesCard
					:data="{
						title: 'Branding',
						description: 'Boosting your reach through design of unique brand touch points aimed to immerse your audiences in your brand’s story.',
						items: [
							'Brand Strategies',
							'Brand Experience',
							'Brand Identity',
							'Design Strategy',
							'Brand Marketing'
						]
					}"
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
							'Concept'
						]
					}"
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
							'Mentoring'
						]
					}"
				/>
				<Button
					class="col-span-2 col-start-6 mt-8"
				>
					Let’s Talk!
				</Button>
			</div>
		</section>
		<LayoutClients class="py-14" />
		<section class="py-14">
			<CommonExposedText
				:data="{
					kicker: 'Work',
					title: 'Check what we delivered',
					description: 'As creatives ourselves, we know that what you really want to see is the work that’s actually live. Here’s a showcase of some of our recent projects.',
					cta: {
						text: 'See all projects',
						link: '#'
					}
				}"
				:kicker-color="'text-cyan-400'"
				class="pb-10"
			/>
		</section>
	</div>
</template>
