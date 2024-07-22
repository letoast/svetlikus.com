<script setup lang="ts">
const route = useRoute()

const { $directus, $readItem, $readItems, $blocks } = useNuxtApp()
const { localeProperties } = useI18n()

const { data: pageIds } = await useAsyncData('projectIds', async () => {
	return await $directus.request($readItems('svetlikus_projects', {
		fields: ['id', {
			translations: ['slug'],
		}],
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

const { data: project } = await useAsyncData('projectId', async () => {
	const pageId = pageIds.value?.find(page => page?.translations?.[0]?.slug === route?.params?.slug)?.id

	return await $directus.request($readItem('svetlikus_projects', pageId, {
		limit: 1,
		deep: {
			translations: {
				_filter: {
					languages_code: {
						_eq: localeProperties.value.iso,
					},
				},
			},
		},
		fields: [
			'id',
			'logo',
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
					class="grid grid-cols-12 gap-x-8 gap-y-8"
				>
					<div
						class="
							order-2 col-span-12 flex flex-col justify-center gap-4
							md:order-1 md:col-span-6
						"
					>
						<img
							v-if="project?.logo"
							:src="`${$directus.url}assets/${project?.logo}?format=auto`"
							class="w-40"
							loading="lazy"
						>
						<h1
							class="text-5xl font-bold leading-loose text-neutral-300"
						>
							{{ project?.translations?.title }}
						</h1>
						<div
							class="flex max-w-lg flex-wrap gap-3"
						>
							<CommonTag
								v-for="item, index in project.tags"
								:key="index"
								:color="item?.svetlikus_projects_tags_id?.color"
							>
								{{ item?.svetlikus_projects_tags_id?.translations?.[0].title }}
							</CommonTag>
						</div>

						<div
							class="text-lg font-book max-w-lg text-neutral-400"
							v-html="project?.translations?.description"
						/>
						<CommonCTA
							:cta="{
								text: 'Company website',
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
								class="size-full object-cover"
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
			class="container mb-14 grid grid-cols-12"
		>
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
						class="relative overflow-hidden"
					>
						<div
							class="flex"
						>
							<div
								v-for="item in [project?.translations.testimonial]"
								:key="item"
								class="
									flex flex-shrink-0 flex-grow flex-col gap-8
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
											class="text-lg font-bold text-gray-200"
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
									<p
										class="text-lg font-book w-full"
										v-html="item?.translations?.[0]?.quote"
									/>
								</ClientOnly>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div
			class="container grid rounded-3xl border-gradient-br-neutral-500-neutral-950 gradient-border-2"
		>
			<Blocks
				v-if="project?.translations?.blocks?.length"
				:blocks="project?.translations.blocks"
			/>
		</div>
	</div>
</template>
