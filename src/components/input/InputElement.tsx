import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { InputElementProps } from '@/components/input/types'

export const InputElement = ({ placement, size, className, children }: InputElementProps) => (
    <div className={cn(inputElementVariants({ size, placement, className }))}>{children}</div>
)

export const inputElementVariants = cva('absolute inset-y-0 flex items-center text-lg', {
    defaultVariants: {
        size: 'md',
    },
    variants: {
        placement: {
            left: 'left-0',
            right: 'right-0',
        },
        size: {
            xs: '',
            sm: '',
            md: '',
            lg: '',
            xl: '',
        },
    },
    compoundVariants: [
        {
            size: ['xs', 'sm'],
            placement: ['left', 'right'],
            className: 'px-2',
        },
        {
            size: ['md', 'lg', 'xl'],
            placement: ['left', 'right'],
            className: 'px-4',
        },
    ],
})
