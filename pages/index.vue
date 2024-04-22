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
		<LayoutServices class="py-14" />
		<LayoutWork class="py-14" />
		<LayoutProcess class="py-14" />
		<LayoutPricing class="py-14" />
		<LayoutBenefits class="py-14" />
		<LayoutMarquee class="py-14" />
	</div>
</template>
