'use client'

import { useMemo } from 'react'
import { Switch as HeadlessSwitch } from '@headlessui/react'

import { cn } from '@/lib/utils'
import { SwitchProps } from '@/components/switch/types'

export const Switch = (props: SwitchProps) => {
    const { value, size = 'md', className, onChange } = props
    const layout = useMemo(() => handleLayout({ size, value }), [size, value])

    return (
        <HeadlessSwitch checked={value} onChange={onChange} className={cn(layout.switch, className)}>
            <span aria-hidden="true" className={layout.cursor}/>
        </HeadlessSwitch>
    )
}

const handleLayout = ({ size, value }: Pick<SwitchProps, 'size' | 'value'>) => ({
    switch: cn(
        'relative inline-flex flex-shrink-0 cursor-pointer rounded-full border-4 border-transparent transition',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75',
        {
            'bg-gray-indigo-400/50': !value,
            'bg-primary-600': value,
            'h-6 w-10': size === 'xs',
            'h-7 w-12': size === 'sm',
            'h-8 w-14': size === 'md',
            'h-9 w-16': size === 'lg',
            'h-10 w-18': size === 'xl',
        }
    ),
    cursor: cn('pointer-events-none inline-block transform rounded-full bg-white shadow-md ring-0 transition', {
        'translate-x-0': !value,
        'translate-x-4': size === 'xs' && value,
        'translate-x-5': size === 'sm' && value,
        'translate-x-6': size === 'md' && value,
        'translate-x-7': size === 'lg' && value,
        'translate-x-8': size === 'xl' && value,
        'h-4 w-4': size === 'xs',
        'h-5 w-5': size === 'sm',
        'h-6 w-6': size === 'md',
        'h-7 w-7': size === 'lg',
        'h-8 w-8': size === 'xl',
    }),
})
