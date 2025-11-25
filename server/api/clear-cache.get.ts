import { purgeCache } from '@netlify/functions'

export default defineEventHandler(async (event) => {
	if (event.headers.get('Authorization') !== 'sv3tlikus') {
		throw createError({ statusCode: 401 })
	}

	await purgeCache()
	setResponseStatus(event, 202)
})
