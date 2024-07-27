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
						v-if="$initData?.linked_in_link"
						:href="$initData.linked_in_link"
						target="_blank"
						title="LinkedIn"
					>
						<Icon
							name="mdi:linkedin"
							size="24"
						/>
					</a>
					<a
						v-if="$initData?.instagram_link"
						:href="$initData.instagram_link"
						target="_blank"
						title="Instagram"
					>
						<Icon
							name="mdi:instagram"
							size="24"
						/>
					</a>
					<a
						v-if="$initData?.youtube_link"
						:href="$initData.youtube_link"
						target="_blank"
						title="YouTube"
					>
						<Icon
							name="mdi:youtube"
							size="24"
						/>
					</a>
					<a
						v-if="$initData?.facebook_link"
						:href="$initData.facebook_link"
						target="_blank"
						title="Facebook"
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
