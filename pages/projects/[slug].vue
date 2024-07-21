<script setup lang="ts">
const route = useRoute()

const { $directus, $readItem, $readItems } = useNuxtApp()
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
					'image',
					{
						testimonial: ['*'],
					},
					{
						blocks: [
							'collection',
							{
								item: [
									'*',
									{
										images: ['directus_files_id'],
										clients: [{
											svetlikus_clients_id: ['*'],
										}],
										projects: [{
											svetlikus_projects_id: [
												{
													tags: [{
														svetlikus_projects_tags_id: [
															'color',
															{
																translations: ['*'],
															},
														],
													}],
													translations: [
														'description',
														'image',
														'project_link',
														'slug',
														'title',
													],
												}],
										}],
										testimonials: [{
											svetlikus_testimonials_id: [
												'image',
												'name',
												'rating',
												{
													translations: ['*'],
												},
											],
										}],
										cta: ['*'],
										cta_2: ['*'],
									},
								],
							},
						],
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
</script>

<template>
	<div>
		<section class="mb-10">
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
								:src="`${$directus.url}assets/${project?.translations?.image}?format=auto`"
								class="size-full object-cover"
								loading="lazy"
							>
						</div>
					</div>
				</div>
			</div>
		</section>

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
