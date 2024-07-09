<script setup lang="ts">
import tailwindConfig from '#tailwind-config'

const { $directus, $readItems } = useNuxtApp()

const { data: page, error, refresh } = await useLazyAsyncData('page', async () => {
	return await $directus.request($readItems('svetlikus_pages', {
		deep: {
			translations: {
				_filter: {
					_and: [
						{
							languages_code: { _eq: 'en-US' },
						},
						{
							slug: { _eq: 'home' },
						},
					],
				},
			},
		},
		fields: ['*.*.*.*.*.*.*'],
		limit: 1,
	}))
}, {
	transform: (data) => {
		return data?.[0].translations[0].blocks
	},
})
</script>

<template>
	<div>
		<Blocks :blocks="page" />
		<!-- <BlocksHero
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
			class="pb-18 pt-24"
		/>
		<BlocksCarousel class="py-14" />
		<BlocksClients
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
		<BlocksServices class="py-14" />
		<BlocksWork class="py-14" />
		<BlocksProcess class="py-14" />
		<BlocksPricing class="py-14" />
		<BlocksBenefits class="py-14" />
		<BlocksMarquee class="py-14" /> -->
	</div>
</template>
