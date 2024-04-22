<template>
	<section>
		<div
			class="
				flex
				flex-col
				gap-1
			"
		>
			<NuxtMarquee class="py-1">
				<LayoutMarqueeItem
					v-for="item in 20"
					:key="item"
				/>
			</NuxtMarquee>
			<NuxtMarquee
				direction="right"
				class="py-1"
			>
				<LayoutMarqueeItem
					v-for="item in 20"
					:key="item"
				/>
			</NuxtMarquee>
			<NuxtMarquee class="py-1">
				<LayoutMarqueeItem
					v-for="item in 20"
					:key="item"
				/>
			</NuxtMarquee>
		</div>
	</section>
</template>
