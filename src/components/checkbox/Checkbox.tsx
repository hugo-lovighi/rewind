import { forwardRef } from 'react'
import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { CheckboxProps } from './types'

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ color, size, className, ...props }, ref) => {
    return <input ref={ref} type="checkbox" className={cn(checkboxVariants({ size, color, className }))} {...props} />
})

export const checkboxVariants = cva(
    [
        'rounded border-gray-300 bg-transparent transition-all',
        'hover:cursor-pointer hover:border-gray-400',
        'focus:ring-2',
        //
    ],
    {
        defaultVariants: {
            size: 'md',
            color: 'primary',
        },
        variants: {
            size: {
                xs: 'h-2 w-2',
                sm: 'h-3 w-3',
                md: 'h-4 w-4',
                lg: 'h-5 w-5',
                xl: 'h-6 w-6',
            },
            color: {
                primary: 'text-primary-600 focus:ring-primary-600/50',
                blue: 'text-blue-600 focus:ring-blue-600/50',
            },
        },
    }
)
