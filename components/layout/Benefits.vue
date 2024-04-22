<template>
	<section>
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
</template>
