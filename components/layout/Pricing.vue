<script setup lang="ts">
const data = ref({
	items: [
		{
			title: 'Design Sprint',
			description: 'When you need extra help on short notice. Perfect to test our service on a short-form design project.',
			price: '€1,950',
			pricePeriod: '/week',
			pricePeriodSuperscript: '+VAT',
			items: [
				'One design at a time',
				'Design delivery in few business days',
				'One user',
				'As many revisions as you need',
				'Fixed weekly investment fee',
				'Pause or cancel as you like',
				'Simple task managment',
			],
			cta: {
				text: 'Get Started',
				link: '#',
			},
		},
		{
			title: 'Design Bonanza',
			description: 'Flexibility you need to handle multiple design requests for a flat monthly rate. Perfect to propel your business forward!',
			price: '€6,950',
			pricePeriod: '/month',
			pricePeriodSuperscript: '+VAT',
			items: [
				'Work on two designs at a time',
				'Design delivery in few business days',
				'No user limits',
				'As many revisions as you need',
				'Pause or cancel as you like',
				'Seamless support from start to finish line',
				'Simple task managment',
				'Exclusive access to Brand Strategy Workshop',
			],
			cta: {
				text: 'Let\'s talk!',
				link: '#',
			},
			exposed: true,
		},
		{
			title: 'Bespoke project',
			description: 'For single big scope projects or workshops we’ll give you a detailed quote covering everything from design to delivery — with no hidden charges. Tell us what you need.',
			items: [
				'Power ups unlocked',
				'Tailor made offer',
				'Custom payment plans',
				'Initial consultancy',
			],
			cta: {
				text: 'Inquire',
				link: '#',
			},
		},
	],
})
</script>

<template>
	<section>
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
					items-end
				"
			>
				<div
					v-for="item, index in data.items"
					:key="index"
					class="
						col-span-4
						w-full
						relative
					"
				>
					<CommonPricingCard
						:data="item"
					/>
				</div>
			</div>
		</div>
	</section>
</template>
