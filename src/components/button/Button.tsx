'use client'

import { forwardRef } from 'react'
import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { ButtonElement } from '@/components/button/ButtonElement'
import { ButtonProps } from '@/components/button/types'
import { Spinner } from '@/components/loader/Spinner'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({
         type = 'button',
         variant,
         size,
         color,
         left,
         right,
         isLoading,
         isDisabled,
         align,
         text,
         className,
         children,
         ...props
     }, ref) => {
        const hasMargin = !!children || !!text

        return (
            <button
                ref={ref}
                type={type}
                disabled={isDisabled || isLoading}
                className={cn(buttonVariants({ variant, size, color, align, className }))}
                {...props}
            >
                {isLoading && (
                    <>
                        <Spinner className={cn('-ml-1 h-5 w-5', { 'mr-3': text || children })}/>
                        {text || children}
                    </>
                )}
                {!isLoading && left && (
                    <ButtonElement placement="left" hasMargin={hasMargin} size={size}>
                        {left}
                    </ButtonElement>
                )}
                {!isLoading && text}
                {!isLoading && children}
                {!isLoading && right && (
                    <ButtonElement placement="right" hasMargin={hasMargin} size={size}>
                        {right}
                    </ButtonElement>
                )}
            </button>
        )
    }
)

export const buttonVariants = cva(
    [
        'inline-flex flex-shrink-0 items-center rounded-lg font-bold transition',
        'focus:outline-none focus:ring-3',
        'disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed',
    ],
    {
        defaultVariants: {
            variant: 'solid',
            color: 'primary',
            size: 'md',
            align: 'center',
        },
        variants: {
            variant: {
                solid: 'bg-primary-600 text-white active:scale-[0.98] disabled:active:scale-100',
                outline: 'bg-transparent border hover:text-white active:scale-[0.98] disabled:active:scale-100',
                ghost: 'bg-transparent active:scale-[0.98] disabled:active:scale-100',
                link: 'font-normal hover:underline',
            },
            color: {
                primary: 'focus:ring-primary-600/25',
                green: 'focus:ring-green-600/25',
                red: 'focus:ring-red-600/25',
                blue: 'focus:ring-blue-600/25',
                gray: 'text-gray-600 focus:ring-gray-indigo-400/50',
                white: 'text-gray-800',
                none: '',
            },
            size: {
                xs: 'h-8 px-2 text-sm',
                sm: 'h-9 px-3 text-sm',
                md: 'h-10 px-4',
                lg: 'h-12 px-4',
                xl: 'h-14 px-5',
            },
            align: {
                left: 'justify-start',
                center: 'justify-center',
                right: 'justify-start',
            },
        },
        compoundVariants: [
            // Primary
            {
                variant: 'solid',
                color: 'primary',
                className: 'bg-primary-600 hover:bg-primary-800 border',
            },
            {
                variant: 'outline',
                color: 'primary',
                className: 'border-primary-600 text-primary-600 hover:bg-primary-600',
            },
            {
                variant: 'ghost',
                color: 'primary',
                className: 'text-primary-600 hover:bg-primary-600/10',
            },
            {
                variant: 'link',
                color: 'primary',
                className: 'text-primary-600 p-0',
            },
            // Green
            {
                variant: 'solid',
                color: 'green',
                className: 'bg-green-600 hover:bg-green-800',
            },
            {
                variant: 'outline',
                color: 'green',
                className: 'border-green-600 text-green-600 hover:bg-green-600',
            },
            {
                variant: 'ghost',
                color: 'green',
                className: 'text-green-600 hover:bg-green-600/10',
            },
            {
                variant: 'link',
                color: 'green',
                className: 'text-green-600',
            },
            // Red
            {
                variant: 'solid',
                color: 'red',
                className: 'bg-red-600 hover:bg-red-800',
            },
            {
                variant: 'outline',
                color: 'red',
                className: 'border-red-600 text-red-600 hover:bg-red-600',
            },
            {
                variant: 'ghost',
                color: 'red',
                className: 'text-red-600 hover:bg-red-600/10',
            },
            {
                variant: 'link',
                color: 'red',
                className: 'text-red-600',
            },
            // Red
            {
                variant: 'solid',
                color: 'blue',
                className: 'bg-blue-600 hover:bg-blue-800',
            },
            {
                variant: 'outline',
                color: 'blue',
                className: 'border-blue-600 text-blue-600 hover:bg-blue-600',
            },
            {
                variant: 'ghost',
                color: 'blue',
                className: 'text-blue-600 hover:bg-blue-600/10',
            },
            {
                variant: 'link',
                color: 'blue',
                className: 'text-blue-600',
            },
            // Gray
            {
                variant: 'solid',
                color: 'gray',
                className: 'bg-gray-100 hover:bg-gray-indigo-400/30',
            },
            {
                variant: 'outline',
                color: 'gray',
                className: 'border-gray-indigo-100 hover:bg-gray-indigo-100 hover:text-gray-600',
            },
            {
                variant: 'ghost',
                color: 'gray',
                className: 'hover:bg-gray-indigo-400/20 hover:text-gray-900',
            },
            // White
            {
                variant: 'solid',
                color: 'white',
                className: 'bg-white hover:border-gray-300',
            },
            {
                variant: 'outline',
                color: 'white',
                className: 'border-gray-200 hover:bg-white hover:border-gray-300',
            },
            {
                variant: 'ghost',
                color: 'white',
                className: 'hover:bg-white',
            },
            {
                variant: 'link',
                color: 'white',
                className: 'text-white',
            },
        ],
    }
)
