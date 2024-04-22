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
		<section class="py-14">
			<CommonExposedText
				:data="{
					kicker: 'BENEFITS',
					title: 'Superior designs, conveniently delivered',
					description: 'Enjoy the full suite of benefits at fixed monthly fee. Subscribe and recieve elite designs, delivered with flexibility and precision.',
				}"
				:kicker-color="'text-rose-600'"
				class="pb-10"
			/>
			<div
				class="
					container
					grid
					grid-cols-12
					gap-x-8
					gap-y-8
				"
			>
				<div
					v-for="item in 8"
					:key="item"
					class="
						col-span-3
						flex
						flex-col
						gap-4
						items-center
					"
				>
					<CommonIconsTerminal />
					<p
						class="
							text-2xl
							font-bold
							leading-[28.80px]
							text-center
							text-neutral-300
						"
					>
						Endless Requests
					</p>
					<p
						class="
							text-lg
							font-book
							leading-[21.60px]
							text-center
							text-neutral-500
						"
					>
						Plan and request as much design as you’d like tailor made for you.
					</p>
				</div>
			</div>
		</section>
	</div>
</template>
