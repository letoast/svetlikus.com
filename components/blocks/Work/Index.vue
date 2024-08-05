<script setup lang="ts">
import { ScrollTrigger } from 'gsap/ScrollTrigger'

defineProps<{
	data: unknown
	container: boolean
}>()

const { $gsap } = useNuxtApp()

const exposedText = ref(null)
const sectionRef = ref(null)
const ctaWrapperRef = ref(null)
const hitBottom = ref(false)

onNuxtReady(() => {
	const mm = $gsap.matchMedia(document)

	mm.add('(min-width: 800px)', () => {
		ScrollTrigger.create({
			trigger: sectionRef.value,
			start: 'top top',
			end: `bottom top+=${exposedText.value?.clientHeight || 0 - ctaWrapperRef.value?.clientHeight || 0}px`,
			pinSpacing: false,
			pin: exposedText.value,
			// markers: true,
			onEnter: () => {
				hitBottom.value = false
			},
			onEnterBack: () => {
				hitBottom.value = false
			},
			onLeave: () => {
				hitBottom.value = true
			},
			onLeaveBack: () => {
				hitBottom.value = true
			},
		})
	})
})

// onMounted(() => {
// 	ScrollTrigger.create({
// 		trigger: sectionRef.value,
// 		start: 'top top',
// 		end: 'bottom 150px',
// 		pin: unrefElement(exposedText),
// 	})
// })
</script>

<template>
	<section>
		<div ref="sectionRef">
			<div
				ref="exposedText"
				class="z-40 bg-gradient-to-b from-neutral-950 from-80% pb-20 pt-10"
				:class="hitBottom ? 'to-80%' : 'to-100%'"
			>
				<CommonExposedText
					:data="{
						kicker: data?.kicker,
						title: data?.title,
						description: data?.lead,
					}"
					:kicker-color="'text-cyan-400'"
					:container
				/>
				<div
					class="col-span-12 flex justify-center pt-4"
				>
					<CommonCTA
						v-if="data?.cta"
						class="col-span-2 col-start-6"
						color="secondary"
						:to="data?.cta?.href"
						:label="data?.cta?.label"
						:variant="data?.cta?.variant"
					/>
				</div>
			</div>
			<div
				:class="{
					container: container,
				}"
			>
				<div
					class="
						flex flex-col gap-y-14
						lg:gap-y-20
					"
				>
					<CommonScrollTrigger
						v-for="project, index in data?.projects?.filter(project => project?.svetlikus_projects_id)"
						:key="index"
						v-slot="{ isVisible }"
					>
						<CommonFadeMoveUp :start-now="isVisible">
							<div
								class="
									group grid grid-cols-12 gap-y-8
									lg:gap-x-8
								"
							>
								<BlocksWorkSingle
									:data="project"
								/>
							</div>
						</CommonFadeMoveUp>
					</CommonScrollTrigger>
				</div>
			</div>
			<div
				ref="ctaWrapperRef"
				class="col-span-12 flex justify-center pt-4"
			>
				<CommonCTA
					v-if="data.cta_2"
					class="col-span-2 col-start-6 mt-8"
					color="secondary"
					:to="data?.cta_2?.href"
					:label="data?.cta_2?.label"
				/>
			</div>
		</div>
	</section>
</template>
