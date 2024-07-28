import { createDirectus, rest, readItem, readItems, readSingleton } from '@directus/sdk'
import type { CustomDirectusTypes } from '../types'


const directus = createDirectus<CustomDirectusTypes>('https://svetlikus.datalog.si').with(rest())

const blocks = [
	'collection',
	'custom_id',
	{
		item: [
			'*',
			{
				image: ['id', 'title', 'description'],
				images: [
					'lead',
					{
						directus_files_id: ['id', 'title', 'description'],
					},
				],
				clients: [{
					svetlikus_clients_id: [
						'title',
						'url',
						{
							image: ['id', 'title', 'description'],
						},
					],
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
								{
									image: ['id', 'title', 'description'],
								},
								'project_link',
								'slug',
								'title',
							],
						}],
				}],
				testimonials: [{
					svetlikus_testimonials_id: [
						{
							image: ['id', 'title', 'description'],
						},
						'name',
						'rating',
						{
							translations: ['*'],
						},
					],
				}],
				cta: ['*'],
				cta_2: ['*'],
				text_image: [
					'text',
					'direction',
					{
						image: ['id', 'title', 'description'],
					},
				],
				before: ['id', 'title', 'description'],
				after: ['id', 'title', 'description'],
			},
		],
	},
]

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
				translations: [
					'seo_title',
					'seo_description',
					{
						blocks,
					},
				],
			}],
		limit: 1,
	}))
}

export default defineNuxtPlugin(async () => {
	return {
		provide: { directus, readItem, readItems, readSingleton, getPage, blocks },
	}
})
