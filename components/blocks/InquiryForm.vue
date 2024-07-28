<script setup lang="ts">
import type { FormKitSchemaDefinition } from '@formkit/core'
import { FormKit, FormKitSchema } from '@formkit/vue'

const { $directus, $createItem, $locales } = useNuxtApp()

const props = defineProps<{
	data: unknown
	container: boolean
}>()

const schema = props.data?.form.map(item => ({
	...item,
	$formkit: item.type,
	...(item?.required ? { validation: 'required' } : {}),
}))

const submitted = ref(false)

async function sendInquiry(form: object) {
	try {
		await $directus.request($createItem('svetlikus_inquiries', {
			data: form,
		}))
		submitted.value = true
	}
	catch (error) {
		console.log(error)
	}
}
</script>

<template>
	<section>
		<div
			:class="{
				container: container,
			}"
		>
			<div class="flex justify-center">
				<div class="w-full max-w-prose">
					<FormKit
						v-if="!submitted"
						type="form"
						:submit-label="data?.submit_label"
						@submit="sendInquiry"
					>
						<FormKitSchema :schema="schema" />
					</FormKit>
					<div
						v-else
						class="text-center"
						v-html="$locales?.successfully_submitted"
					/>
				</div>
			</div>
		</div>
	</section>
</template>
