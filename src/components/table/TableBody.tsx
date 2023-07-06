import { cn } from '@/lib/utils'
import { TableBodyProps } from './types'

export const TableBody = ({ isFetching, className, children, ...props }: TableBodyProps) => {
    return (
        <tbody
            className={cn('divide-y divide-gray-200 transition', { 'opacity-50': isFetching }, className)}
            {...props}
        >
            {children}
        </tbody>
    )
}
