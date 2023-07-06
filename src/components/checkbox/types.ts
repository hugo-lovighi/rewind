import React from 'react'
import { VariantProps } from 'class-variance-authority'

import { checkboxVariants } from './Checkbox'

export type CheckboxProps = VariantProps<typeof checkboxVariants> &
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'required'> & {
        color?: 'primary' | 'blue'
        size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
        checked?: boolean
        className?: string
    }

