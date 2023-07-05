import React from 'react'
import { VariantProps } from 'class-variance-authority'

import { buttonVariants } from '@/components/button/Button'

export type ButtonProps = VariantProps<typeof buttonVariants> &
    React.ButtonHTMLAttributes<HTMLButtonElement> & {
    left?: React.ReactNode
    right?: React.ReactNode
    text?: string
    isLoading?: boolean
    isDisabled?: boolean
}

export type ButtonElementProps = Pick<ButtonProps, 'size'> & {
    placement: 'right' | 'left'
    hasMargin: boolean
    children?: React.ReactNode
}
