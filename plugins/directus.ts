import { createDirectus, rest, readItem, readItems, readOpenApiSpec, graphql } from '@directus/sdk'

const directus = createDirectus('https://svetlikus.datalog.si').with(rest())

export default defineNuxtPlugin(async () => {
	return {
		provide: { directus, readItem, readItems },
	}
})
