export default defineNuxtRouteMiddleware((to, from) => {
	if (to.hash && import.meta.client) {
		const { $gsap } = useNuxtApp()
		$gsap.to(window, {
			scrollTo: to.hash,
			duration: 0.5,
		})
		// window.scrollTo(0, 0)
	}
})
