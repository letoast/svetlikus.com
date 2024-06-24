import { createDirectus, rest, readItem, readItems, readOpenApiSpec } from '@directus/sdk'

const directus = createDirectus('https://svetlikus.ciriltrcek.com').with(rest())

export default defineNuxtPlugin(async () => {
	return {
		provide: { directus, readItem, readItems },
	}
})
