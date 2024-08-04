export function useSmoothMouse() {
	// const { pixelRatio } = useDevicePixelRatio()
	const { x, y } = useMouse({ type: 'client' })
	const smoothMouse = ref([x.value, y.value])
	// const { x: scrollX, y: scrollY } = useWindowScroll()
	const { width, height } = useWindowSize()
	const device = useDevice()


	// const { pause, resume, isActive } = useRafFn(() => {
	// 	smoothMouse.value[0] = lerp(smoothMouse.value[0], x.value, pixelRatio.value / 10)
	// 	smoothMouse.value[1] = lerp(smoothMouse.value[1], y.value, pixelRatio.value / 10)
	// }, {
	// 	fpsLimit: 60,
	// })

	// watchEffect(() => {
	// 	if (Math.abs(smoothMouse.value[0] - x.value) < 3 && Math.abs(smoothMouse.value[1] - y.value) < 3 && isActive.value) {
	// 		pause()
	// 	}
	// 	else {
	// 		resume()
	// 	}
	// })

	// watchEffect(() => {
	// 	smoothMouse.value[0] = x.value
	// 	smoothMouse.value[1] = y.value
	// }, {
	// 	flush: 'post',
	// })

	// watchThrottled([x, y, scrollX, scrollY], () => {
	// 	smoothMouse.value[0] = device.isMobileOrTablet ? width.value / 2 : x.value
	// 	smoothMouse.value[1] = device.isMobileOrTablet ? height.value / 2 : y.value
	// }, {
	// 	throttle: 100,
	// })
	useRafFn(() => {
	// 	smoothMouse.value[0] = lerp(smoothMouse.value[0], x.value, pixelRatio.value / 10)
	// 	smoothMouse.value[1] = lerp(smoothMouse.value[1], y.value, pixelRatio.value / 10)
		smoothMouse.value[0] = device.isMobileOrTablet ? width.value / 2 : x.value
		smoothMouse.value[1] = device.isMobileOrTablet ? height.value / 2 : y.value
	}, {
		fpsLimit: 20,
	})

	return smoothMouse
}
