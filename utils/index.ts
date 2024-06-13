import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const lerp = (x, y, a) => x * (1 - a) + y * a

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}
