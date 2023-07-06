import React from 'react'

export type SwitchProps = {
    value?: boolean
    className?: string
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    isDisabled?: boolean
    onChange?: (checked: boolean) => void
}

export type SwitchLabelProps = {
    passive?: boolean
    className?: string
    children: React.ReactNode
}
