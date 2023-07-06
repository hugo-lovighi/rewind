import React from 'react'
import { VariantProps } from 'class-variance-authority'

import { inputVariants } from '@/components/input/Input'

export type InputProps = VariantProps<typeof inputVariants> &
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'required'> & {
        isInvalid?: boolean
        isDisabled?: boolean
        isFixed?: boolean
        left?: React.ReactNode
        right?: React.ReactNode
        wrapperClassName?: string
    }

export type InputElementProps = Pick<InputProps, 'size'> &
    React.PropsWithChildren & {
        placement: 'left' | 'right'
        className?: string
    }

export type InputSearchProps = Omit<InputProps, 'onChange'> & {
    isLoading?: boolean
    onChange: (inputValue: string) => void
}
