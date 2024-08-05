import { createDirectus, rest, readItem, readItems, readSingleton, createItem } from '@directus/sdk'
import type { CustomDirectusTypes } from '../types'


const directus = createDirectus<CustomDirectusTypes>('https://svetlikus.datalog.si').with(rest())

const blocks = [
	'collection',
	'custom_id',
	'no_vertical_padding',
	{
		item: [
			'*',
			{
				image: ['id', 'title', 'description', 'width', 'height'],
				images: [
					'lead',
					{
						directus_files_id: ['id', 'title', 'description', 'width', 'height'],
					},
				],
				clients: [{
					svetlikus_clients_id: [
						'title',
						'url',
						{
							image: ['id', 'title', 'description', 'width', 'height'],
						},
					],
				}],
				projects: [{
					svetlikus_projects_id: [
						'status',
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
									image: ['id', 'title', 'description', 'width', 'height'],
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
							image: ['id', 'title', 'description', 'width', 'height'],
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
						image: ['id', 'title', 'description', 'width', 'height'],
					},
				],
				before: ['id', 'title', 'description', 'width', 'height'],
				after: ['id', 'title', 'description', 'width', 'height'],
			},
		],
	},
]

async function getPage(slug: string, locale: string) {
	return await directus.request(readItems('svetlikus_pages', {
		filter: {
			translations: {
				languages_code: { _eq: locale },
				slug: { _eq: slug },
			},
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
					'seo_image',
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
		provide: { directus, readItem, readItems, readSingleton, createItem, getPage, blocks },
	}
})

declare module '#app' {
	interface NuxtApp {
		$directus: typeof directus
		$readItem: typeof readItem
		$readItems: typeof readItems
		$readSingleton: typeof readSingleton
		$createItem: typeof createItem
		$getPage: typeof getPage
		$blocks: typeof blocks
	}
}
