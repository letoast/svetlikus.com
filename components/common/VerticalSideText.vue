<script setup lang="ts">
const { $initData } = useNuxtApp()
</script>

<template>
	<div
		class="
			pointer-events-none invisible fixed left-1/2 top-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2
			lg:visible
		"
	>
		<div
			class="container flex content-end"
		>
			<div class="ml-auto">
				<div
					class="pointer-events-auto flex flex-col items-center gap-4 translate-x-[calc(100%_+_1rem)]"
				>
					<a
						v-if="$initData?.data?.linked_in_link"
						:href="$initData?.data.linked_in_link"
						target="_blank"
					>
						<Icon
							name="mdi:linkedin"
							size="24"
						/>
					</a>
					<a
						v-if="$initData?.data?.instagram_link"
						:href="$initData?.data.instagram_link"
						target="_blank"
					>
						<Icon
							name="mdi:instagram"
							size="24"
						/>
					</a>
					<a
						v-if="$initData?.data?.youtube_link"
						:href="$initData?.data.youtube_link"
						target="_blank"
					>
						<Icon
							name="mdi:youtube"
							size="24"
						/>
					</a>
					<a
						v-if="$initData?.data?.facebook_link"
						:href="$initData?.data.facebook_link"
						target="_blank"
					>
						<Icon
							name="ri:facebook-fill"
							size="24"
						/>
					</a>
					<span
						class="rotate-180 vertical-writing-lr orientation-mixed"
					>
						Follow us* —
					</span>
				</div>
			</div>
		</div>
	</div>
</template>
