import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import imagesLoaded from 'imagesloaded'

export default defineNuxtPlugin((nuxtApp) => {
	gsap.registerPlugin(ScrollTrigger)
	gsap.registerPlugin(ScrollToPlugin)

	onNuxtReady(() => {
		imagesLoaded(document.body, () => {
			ScrollTrigger.refresh()
		})
	})

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
