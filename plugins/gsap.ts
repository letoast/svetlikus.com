import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin((nuxtApp) => {
	gsap.registerPlugin(ScrollTrigger)

	return {
		provide: {
			gsap,
		},
	}
})

declare module '#app' {
	interface NuxtApp {
		$gsap: typeof gsap
	}
}
