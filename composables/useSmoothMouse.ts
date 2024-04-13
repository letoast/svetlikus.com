export function useSmoothMouse() {
	const { x, y } = useMouse({ type: 'client' })
	const smoothMouse = ref([x.value, y.value])


	const { pause, resume, isActive } = useRafFn(() => {
		smoothMouse.value[0] = lerp(smoothMouse.value[0], x.value, 0.1)
		smoothMouse.value[1] = lerp(smoothMouse.value[1], y.value, 0.1)
	})

	watchEffect(() => {
		if (Math.abs(smoothMouse.value[0] - x.value) < 3 && Math.abs(smoothMouse.value[1] - y.value) < 3 && isActive.value) {
			pause()
		}
		else {
			resume()
		}
	})

	return smoothMouse
}
