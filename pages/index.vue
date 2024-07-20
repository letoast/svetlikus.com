<script setup lang="ts">
import tailwindConfig from '#tailwind-config'

const { $directus, $readItems } = useNuxtApp()
const { localeProperties } = useI18n()

const { data: page, error, refresh } = await useAsyncData('page', async () => {
	return await $directus.request($readItems('svetlikus_pages', {
		filter: {
			_and: [
				{
					translations: {
						languages_code: { _eq: localeProperties.value.iso },
						slug: { _eq: 'home' },
					},
				},
			],
		},
		deep: {
			translations: {
				_limit: 1,
				_filter: {
					languages_code: {
						_eq: localeProperties.value.iso,
					},
				},
			},
		},
		fields: [{
			translations: [{
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
		limit: 1,
	}))
}, {
	transform: (data) => {
		return data?.[0].translations[0].blocks
	},
})
</script>

<template>
	<div>
		<Blocks
			v-if="page?.length"
			:blocks="page"
		/>
	</div>
</template>
