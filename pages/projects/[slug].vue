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
			{
				tags: ['*'],
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
		return data?.translations?.[0]
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
							col-span-12 flex flex-col justify-center gap-4
							md:col-span-6
						"
					>
						<div
							class="flex flex-wrap gap-3"
						>
							<CommonTag
								v-for="item, index in project.tags"
								:key="index"
								:color="item?.svetlikus_projects_tags_id?.color"
							>
								{{ item?.svetlikus_projects_tags_id?.translations?.[0].title }}
							</CommonTag>
						</div>
						<h3
							class="text-3xl font-bold text-neutral-300"
						>
							{{ project?.title }}
						</h3>
						<div
							class="text-lg font-book text-neutral-400"
							v-html="project?.description"
						/>
						<CommonCTA
							:cta="{
								text: 'Company website',
								link: project?.project_link,
								target: '_blank',
							}"
						/>
					</div>
					<div
						class="md:col-span-6"
					>
						<div
							class="overflow-hidden rounded-lg"
						>
							<img
								:src="`${$directus.url}assets/${project?.image}`"
								class="aspect-video size-full object-cover"
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
				v-if="project?.blocks?.length"
				:blocks="project.blocks"
			/>
		</div>
	</div>
</template>
