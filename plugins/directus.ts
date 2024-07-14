import { createDirectus, rest, readItem, readItems, readSingleton } from '@directus/sdk'

const directus = createDirectus('https://svetlikus.datalog.si').with(rest())

export default defineNuxtPlugin(async () => {
	return {
		provide: { directus, readItem, readItems, readSingleton },
	}
})
