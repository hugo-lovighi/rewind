import { cn } from '@/lib/utils'
import { TextareaProps } from './types'
import { forwardRef } from "react"

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    (
        {
            isInvalid = false,
            isDisabled = false,
            className,
            classNameContainer,
            ...props
        },
        ref
    ) => {
        return (
            <div className={cn('relative w-full text-gray-300', classNameContainer)}>
            <textarea
                ref={ref}
                disabled={isDisabled}
                className={cn(
                    'block w-full rounded-lg border-gray-200 bg-white text-gray-900 placeholder-gray-400 transition',
                    'hover:border-gray-300',
                    'disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none',
                    {
                        'focus:border-transparent focus:ring-2 focus:ring-primary-600': !isInvalid,
                        'border-transparent ring-2 ring-red-400 focus:border-transparent focus:ring-2 focus:ring-red-500': isInvalid,
                    },
                    className
                )}
                {...props}
            />
            </div>
        )
    }
)