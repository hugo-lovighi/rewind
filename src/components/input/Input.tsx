import { forwardRef } from 'react'
import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { InputElement } from '@/components/input/InputElement'
import { InputProps } from '@/components/input/types'

export const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            type = 'text',
            size,
            left,
            right,
            isInvalid = false,
            isDisabled = false,
            isFixed = false,
            className,
            wrapperClassName,
            ...props
        },
        ref
    ) => {
        const hasRight = !!right
        const hasLeft = !!left
        return (
            <>
                <div className={cn('relative w-full text-gray-300', wrapperClassName)}>
                    {left && (
                        <InputElement placement="left" size={size}>
                            {left}
                        </InputElement>
                    )}
                    {right && (
                        <InputElement placement="right" size={size}>
                            {right}
                        </InputElement>
                    )}

                    <input
                        ref={ref}
                        type={type}
                        disabled={isDisabled}
                        className={cn(inputVariants({ isInvalid, isFixed, size, hasLeft, hasRight, className }))}
                        {...props}
                    />
                </div>
            </>
        )
    }
)

export const inputVariants = cva(
    [
        'block w-full rounded-lg border-gray-200 text-gray-900 placeholder-gray-400 transition',
        'hover:border-gray-300',
        'focus:ring-2 focus:ring-primary-600 focus:border-transparent',
        'disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed',
    ],
    {
        defaultVariants: {
            size: 'md',
        },
        variants: {
            isInvalid: {
                true: 'border-transparent ring-2 ring-red-400 focus:border-transparent focus:ring-2 focus:ring-red-500',
            },
            isFixed: {
                true: 'pointer-events-none border-transparent bg-gray-indigo-100/50',
            },
            hasRight: {
                false: '',
            },
            hasLeft: {
                true: '',
            },
            size: {
                xs: 'h-8 px-2',
                sm: 'h-9 px-3',
                md: 'h-10 px-4',
                lg: 'h-12 px-4',
                xl: 'h-14 px-4',
            },
        },
        compoundVariants: [
            {
                size: ['xs', 'sm'],
                hasLeft: true,
                className: 'pl-8',
            },
            {
                size: ['md', 'lg', 'xl'],
                hasLeft: true,
                className: 'pl-10 sm:pl-12',
            },
            {
                size: ['xs', 'sm'],
                hasRight: true,
                className: 'pr-8',
            },
            {
                size: ['md', 'lg', 'xl'],
                hasRight: true,
                className: 'pr-10 sm:pr-12',
            },
        ],
    }
)
