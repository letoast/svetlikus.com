import { cn } from '@/utils'

export default defineAppConfig({
	ui: {
		primary: 'svetlikus-purple',
		button: {
			base: cn(`
				max-w-full flex-shrink-0 text-ellipsis transition duration-300 ease-out
				disabled:cursor-not-allowed disabled:opacity-75
				focus-visible:outline-0
				focus:outline-none
			`),
			font: 'font-medium',
			rounded: 'rounded-md',
			truncate: 'text-left break-all line-clamp-1',
			block: 'w-full flex justify-center items-center',
			inline: 'inline-flex justify-center items-center',
			size: {
				'2xs': 'text-xs lh-sm',
				'xs': 'text-xs',
				'sm': 'text-lg',
				'md': 'text-md',
				'lg': 'text-lg',
				'xl': 'text-lg',
			},
			gap: {
				'2xs': 'gap-2',
				'xs': 'gap-2',
				'sm': 'gap-2',
				'md': 'gap-2',
				'lg': 'gap-2',
				'xl': 'gap-2',
			},
			padding: {
				'2xs': 'px-6 py-1',
				'xs': 'px-6 py-1',
				'sm': 'px-6 py-1',
				'md': 'px-6 py-2',
				'lg': 'px-6 py-2',
				'xl': 'px-6 py-2',
			},
			square: {
				'2xs': 'p-3',
				'xs': 'p-2',
				'sm': 'p-2',
				'md': 'p-3',
				'lg': 'p-3',
				'xl': 'p-3',
			},
			color: {
				primary: {
					solid: cn(`
						text-white shadow-sm bg-primary-500 ring-1 ring-inset ring-primary
						disabled:bg-primary-500
						focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500
						hover:bg-primary-600 hover:ring-primary-600 hover:shadow-lg hover:shadow-primary-600/30
					`),
					outline: cn(`
						bg-transparent ring-1 ring-inset ring-primary text-primary-500
						disabled:bg-transparent
						focus-visible:ring-2 focus-visible:ring-primary-500
						hover:text-white hover:shadow-lg hover:bg-primary-500 hover:shadow-primary-600/30
					`),
					soft: cn(`
						text-primary-500
						focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500
						hover:bg-primary-100
					`),
					ghost: cn(`
						text-primary-500
						disabled:bg-transparent
						focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500
						hover:bg-transparent
					`),
					link: cn(`
						text-primary-500
						disabled:text-primary-500
						focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500
						hover:text-primary-600
					`),
				},
				secondary: {
					solid: cn(`
						bg-secondary-500 text-neutral-950 shadow-sm ring-1 ring-inset ring-secondary
						disabled:bg-secondary-500
						focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-500
						hover:bg-secondary-600 hover:shadow-lg hover:shadow-secondary-600/30 hover:ring-secondary-600
					`),
					outline: cn(`
						bg-transparent text-secondary-500 ring-1 ring-inset ring-secondary
						disabled:bg-transparent
						focus-visible:ring-2 focus-visible:ring-secondary-500
						hover:bg-secondary-500 hover:text-white hover:shadow-lg hover:shadow-secondary-600/30
					`),
					soft: cn(`
						text-secondary-500
						focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary-500
						hover:bg-secondary-100
					`),
					ghost: cn(`
						text-secondary-500
						disabled:bg-transparent
						focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary-500
						hover:bg-transparent
					`),
					link: cn(`
						text-secondary-500
						disabled:text-secondary-500
						focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary-500
						hover:text-secondary-600
					`),
				},
			},
			variant: {
			},
			icon: {
				base: 'flex-shrink-0',
				loading: '',
				size: {
					'2xs': 'h-4 w-4',
					'xs': 'h-4 w-4',
					'sm': 'h-4 w-4',
					'md': 'h-4 w-4',
					'lg': 'h-4 w-4',
					'xl': 'h-4 w-4',
				},
			},
			default: {
				size: 'md',
				variant: 'solid',
				color: 'primary',
				loadingIcon: 'svg-spinners:180-ring-with-bg',
			},
		},
	},
})
