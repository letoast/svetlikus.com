<script setup lang="ts">
const route = useRoute()

const { $directus, $readItem, $readItems, $blocks, $locales, $initData } = useNuxtApp()
const { localeProperties } = useI18n()

const { data: projects } = await useAsyncData('projectIds', async () => {
	return await $directus.request($readItems('svetlikus_projects', {
		fields: [
			'id',
			{
				tags: [{
					svetlikus_projects_tags_id: [
						'color',
						{
							translations: ['title'],
						},
					],
				}],
			},
			{
				translations: ['slug', 'title', 'description', { image: ['id', 'title', 'description'] }],
			},
		],
		deep: {
			translations: {
				_filter: {
					_and: [
						{
							languages_code: { _eq: localeProperties.value.iso },
						},
					],
				},
			},
		},
	}))
})

const currentIndex = projects.value?.findIndex(page => page?.translations?.[0]?.slug === route?.params?.slug)
if (currentIndex === -1) {
	throw createError({
		statusCode: 404,
		statusMessage: 'Not found',
	})
}
const pageId = projects.value[currentIndex]?.id

const nextProject = projects.value?.[currentIndex + 1]

const { data: project } = await useAsyncData('projectId', async () => {
	return await $directus.request($readItem('svetlikus_projects', pageId, {
		limit: 1,
		deep: {
			translations: {
				// blocks: {
				// 	_filter: {
				// 		item: {
				// 			status: {
				// 				_eq: 'published',
				// 			},
				// 		},
				// 	},
				// },
				_filter: {
					languages_code: {
						_eq: localeProperties.value.iso,
					},
				},
			},
		},
		fields: [
			'id',
			{
				logo: ['id', 'title', 'description'],
			},
			{
				full_width_image: ['id', 'title', 'description'],
			},
			{
				tags: [{
					svetlikus_projects_tags_id: [
						'color',
						{
							translations: ['*'],
						},
					],
				}],
			},
			{
				translations: [
					'title',
					'project_link',
					'slug',
					'description',
					{
						image: ['id', 'title', 'description'],
					},
					{
						testimonial: ['*', 'translations.*'],
					},
					{
						blocks: $blocks,
					}],
			}],
	}))
}, {
	transform: (data) => {
		return {
			...data,
			translations: data?.translations?.[0],
		}
	},
})

useSeoMeta({
	title: project.value?.translations?.title,
	description: project.value?.translations?.description,
	image: `${$directus.url}assets/${project.value?.translations?.image}?format=auto`,
})
</script>

<template>
	<div>
		<section class="mb-14">
			<div class="container">
				<div
					class="
						grid grid-cols-12 gap-y-8
						lg:gap-x-8
					"
				>
					<div
						class="
							order-2 col-span-12 flex flex-col justify-center gap-4
							md:order-1 md:col-span-6
						"
					>
						<img
							v-if="project?.logo"
							:src="`${$directus.url}assets/${project?.logo.id}?format=auto`"
							class="w-40"
							loading="lazy"
							:alt="project?.logo.title"
						>
						<h1
							class="
								text-3xl font-bold leading-normal text-neutral-300
								lg:text-5xl
							"
						>
							{{ project?.translations?.title }}
						</h1>
						<div
							class="flex max-w-lg flex-wrap gap-3"
						>
							<CommonTag
								v-for="item, index in project?.tags"
								:key="index"
								:color="item?.svetlikus_projects_tags_id?.color"
							>
								{{ item?.svetlikus_projects_tags_id?.translations?.[0].title }}
							</CommonTag>
						</div>

						<div
							class="
								prose font-book max-w-lg text-neutral-400
								lg:prose-xl
							"
							v-html="project?.translations?.description"
						/>
						<CommonCTA
							:cta="{
								text: $locales?.single_project_company_website_button_label,
								link: project?.translations?.project_link,
								target: '_blank',
							}"
						/>
					</div>
					<div
						class="
							order-1 col-span-12
							md:order-2 md:col-span-6
						"
					>
						<div
							class="aspect-square overflow-hidden rounded-lg"
						>
							<img
								v-if="project?.translations?.image"
								:src="`${$directus.url}assets/${project?.translations?.image.id}?format=auto`"
								class="size-full rounded-lg object-cover"
								loading="lazy"
								:alt="project?.translations?.image.title"
							>
						</div>
					</div>
				</div>
			</div>
		</section>
		<div
			v-if="project?.translations?.testimonial"
			class="container mb-14"
		>
			<div class="grid grid-cols-12">
				<div
					class="col-span-12 overflow-hidden rounded-xl border border-neutral-100/20 bg-[linear-gradient(135deg,_rgba(234,_234,_234,_0.1)_0%,_rgba(234,_234,_234,_0.005)_100%)] p-6"
				>
					<div
						class="
							flex flex-col items-center gap-8
							lg:flex-row
						"
					>
						<div
							ref="emblaRef"
							class="relative w-full overflow-hidden"
						>
							<div
								class="flex"
							>
								<div
									v-for="item, index in [project?.translations.testimonial]"
									:key="index"
									class="
										flex max-w-full flex-shrink-0 flex-grow flex-col gap-8
										lg:basis-full lg:flex-row lg:items-center
									"
								>
									<div
										class="
											flex items-center gap-4
											lg:max-w-[30%] lg:flex-shrink-0 lg:flex-grow
										"
									>
										<img
											v-if="item?.image"
											:src="`${$directus.url}assets/${item?.image}?format=auto`"
											:alt="item?.name"
											class="h-20 w-20 rounded-md object-cover"
											loading="lazy"
										>
										<div>
											<p
												class="
													prose font-bold text-gray-200
													lg:prose-xl
												"
											>
												{{ item?.name }}
											</p>
											<p
												class="text-md font-book text-white text-opacity-50"
											>
												{{ item?.translations?.[0].position }}
											</p>
											<UIcon
												v-for="star, index in item?.rating"
												:key="index"
												name="gravity-ui:star-fill"
												class="me-1 text-gray-300"
											/>
										</div>
									</div>
									<ClientOnly>
										<div
											class="
												prose font-book flex items-start
												lg:prose-xl lg:w-full
											"
											v-html="item?.translations?.[0]?.quote"
										/>
									</ClientOnly>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<img
			v-if="project?.full_width_image"
			:src="`${$directus.url}assets/${project?.full_width_image.id}`"
			class="mb-14 w-full"
			loading="lazy"
			:alt="project?.full_width_image.title"
		>
		<div
			class="container"
		>
			<div
				class="rounded-3xl border-gradient-br-neutral-500-neutral-950 gradient-border-2"
			>
				<div
					class="
						grid rounded-3xl bg-[linear-gradient(135deg,_rgba(234,_234,_234,_0.005)_0%,_rgba(234,_234,_234,_0.1)_100%)] px-4 pt-4
						lg:px-10 lg:pt-10
					"
				>
					<Blocks
						v-if="project?.translations?.blocks?.length"
						:blocks="project?.translations.blocks"
					/>
				</div>
			</div>
		</div>
		<div
			v-if="nextProject"
			class="container mb-20 mt-12"
		>
			<div class="mb-5 flex items-center justify-end px-4">
				<CommonCTA
					v-if="$initData?.all_projects_page?.translations?.[0]?.slug"
					:label="$locales?.view_all_projects_button_label"
					:to="$initData?.all_projects_page?.translations?.[0]?.slug"
					color="secondary"
				/>
			</div>
			<div
				:style="{
					'--bg-image': `url('${$directus.url + 'assets/' + nextProject?.translations?.[0]?.image?.id}')`,
				}"
				class="overflow-hidden rounded-xl border-gradient-tr-cyan-500-neutral-950 gradient-border-2"
			>
				<div
					class="
						h-full w-full overflow-hidden rounded-xl bg-[linear-gradient(to_right_bottom,theme(colors.neutral.950),_theme(colors.neutral.950/60%)),var(--bg-image)] bg-cover bg-center bg-no-repeat p-6 py-8
						lg:bg-[linear-gradient(to_right,theme(colors.neutral.950)_30%,_theme(colors.neutral.950/0)),var(--bg-image)] lg:p-16 lg:py-24
					"
				>
					<div class="flex max-w-xl flex-col items-start gap-4 text-neutral-200">
						<div class="flex flex-col items-start gap-1">
							<span
								class="
									text-lg font-bold text-neutral-400
									lg:text-xl
								"
							>
								{{ $locales?.next_project }}
							</span>
							<h3
								class="
									text-3xl font-bold text-neutral-100
									lg:text-5xl
								"
							>
								{{ nextProject?.translations?.[0]?.title }}
							</h3>
						</div>
						<div class="flex flex-wrap gap-3">
							<CommonTag
								v-for="item, index in projects[currentIndex + 1]?.tags"
								:key="index"
								:color="item?.svetlikus_projects_tags_id?.color"
							>
								{{ item?.svetlikus_projects_tags_id?.translations?.[0].title }}
							</CommonTag>
						</div>
						<p
							class="prose prose-xl"
							v-html="nextProject?.translations?.[0]?.description"
						/>
						<CommonCTA
							:cta="{
								text: $locales?.view_project_button_label,
								link: `/projects/${nextProject?.translations?.[0]?.slug}`,
							}"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
