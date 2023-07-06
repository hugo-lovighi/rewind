'use client'

import { Switch as HeadlessSwitch } from '@headlessui/react'

import { SwitchLabelProps } from '@/components/switch/types'

export const SwitchLabel = ({ passive = false, className, children }: SwitchLabelProps) => (
    <HeadlessSwitch.Label passive={passive} className={className}>
        {children}
    </HeadlessSwitch.Label>
)
