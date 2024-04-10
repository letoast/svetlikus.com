import { type VariantProps, cva } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva(
	'ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded text-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default: 'text-primary-foreground bg-primary hover:bg-primary/90',
				destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
				outline:
          'bg-background hover:bg-accent hover:text-accent-foreground border border-primary hover:bg-primary',
				secondary:
          'text-secondary-foreground bg-secondary hover:bg-secondary/80',
				ghost: 'hover:bg-accent hover:text-accent-foreground',
				link: 'text-primary underline-offset-4 hover:underline',
			},
			size: {
				default: 'px-4 py-2',
				sm: 'rounded px-3',
				lg: 'rounded px-8',
				icon: 'size-10',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
