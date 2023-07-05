import { cn } from '@/lib/utils'
import { ButtonElementProps } from '@/components/button/types'

export const ButtonElement = ({ placement, hasMargin, size, children }: ButtonElementProps) => (
    <div
        className={cn({
            'mr-3': hasMargin && (!size || size === 'md' || size === 'lg' || size === 'xl') && placement === 'left',
            'ml-3': hasMargin && (!size || size === 'md' || size === 'lg' || size === 'xl') && placement === 'right',
            'mr-2': hasMargin && size === 'sm' && placement === 'left',
            'ml-2': hasMargin && size === 'sm' && placement === 'right',
            'mr-1': hasMargin && size === 'xs' && placement === 'left',
            'ml-1': hasMargin && size === 'xs' && placement === 'right',
        })}
    >
        {children}
    </div>
)
