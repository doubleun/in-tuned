import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**!Tailwind Merge class style helper */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
