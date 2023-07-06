import React from 'react'

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    isInvalid?: boolean
    isDisabled?: boolean
    classNameContainer?: string
}
