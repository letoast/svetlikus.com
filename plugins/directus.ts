import { createDirectus, rest, readItem, readItems, readSingleton } from '@directus/sdk'
import type { CustomDirectusTypes } from '../types'


const directus = createDirectus<CustomDirectusTypes>('https://svetlikus.datalog.si').with(rest())

async function getPage(slug: string, locale: string) {
	return await directus.request(readItems('svetlikus_pages', {
		filter: {
			_and: [
				{
					translations: {
						languages_code: { _eq: locale },
						slug: { _eq: slug },
					},
				},
			],
		},
		deep: {
			translations: {
				_limit: 1,
				_filter: {
					languages_code: {
						_eq: locale,
					},
				},
			},
		},
		fields: [
			{
				translations: [{
					blocks: [
						'collection',
						'custom_id',
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
}

export default defineNuxtPlugin(async () => {
	return {
		provide: { directus, readItem, readItems, readSingleton, getPage },
	}
})
