import { createDirectus, rest, readItem, readItems, readSingleton } from '@directus/sdk'
import type { CustomDirectusTypes } from '../types'


const directus = createDirectus<CustomDirectusTypes>('https://svetlikus.datalog.si').with(rest())

export default defineNuxtPlugin(async () => {
	return {
		provide: { directus, readItem, readItems, readSingleton },
	}
})
