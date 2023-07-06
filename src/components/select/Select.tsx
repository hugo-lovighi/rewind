'use client'

import { ReactElement, Ref, forwardRef, useMemo, useState } from 'react'
import { omit } from 'lodash'
import { useTranslation } from 'react-i18next'
import ReactSelect from 'react-select'
import AsyncSelect from 'react-select/async'
import ReactSelectBase from 'react-select/base'
import { GroupBase } from 'react-select/dist/declarations/src/types'
import { useDebouncyFn } from 'use-debouncy'

import { cn } from '@/lib/utils'
import { SelectProps } from '@/components/select/types'

const Select = forwardRef(
    <Option, GQLData = unknown, GQLVar = unknown>(
        {
            id,
            isInvalid,
            size,
            className,
            isLoading,
            options,
            placeholder,
            useQuery,
            ...props
        }: SelectProps<Option, GQLData, GQLVar>,
        ref: Ref<ReactSelectBase<Option>>
    ) => {
        const { t } = useTranslation()
        const [search, setSearch] = useState<string>('')
        const [isTyping, setIsTyping] = useState(false)

        // handle GraphQL query
        const queryResult = useQuery?.query(useQuery?.variables(search))

        const wait = !!useQuery ? 300 : 0
        const isSelectLoading = isLoading || queryResult?.isLoading
        const Component = props.loadOptions ? AsyncSelect : ReactSelect

        const selectOptions = useMemo(
            () =>
                // @ts-ignore
                (!!useQuery ? useQuery.options(queryResult.data) : options?.map(transformOptionValue))
                    // avoid react select error with an object having "options" param
                    ?.map((option: any) => omit(option, ['options'])),
            [options, queryResult?.data]
        )

        const handleInputChange = useDebouncyFn((value) => {
            setSearch(value)
            setIsTyping(false)
        }, wait)

        return (
            <Component
                ref={ref}
                inputId={id}
                menuPlacement="auto"
                options={selectOptions}
                data-invalid={isInvalid}
                isLoading={isSelectLoading}
                classNamePrefix="react-select"
                noOptionsMessage={() => t('no_result')}
                placeholder={placeholder ?? t('select') + '...'}
                onInputChange={(newValue) => {
                    setIsTyping(true)
                    handleInputChange(newValue)
                }}
                menuIsOpen={
                    wait !== 0 && (isTyping || isSelectLoading || (search === '' && !selectOptions?.length))
                        ? false
                        : undefined
                }
                className={cn(
                    'react-select-container w-full',
                    {
                        'is--invalid': isInvalid,
                        'is--sm': size === 'sm',
                    },
                    className
                )}
                {...props}
            />
        )
    }
)

// transform string options to react select standard format
// example: ['js', 'php'] => [{ label: 'js', value: 'js' }, { label: 'php', value: 'php' }]
export const transformOptionValue = (o: any) => (typeof o !== 'object' ? { label: o, value: o } : o)

// redeclare Select to keep using generic with forwardRef function
export default Select as <Option, GQLData = unknown, GQLVar = unknown>(
    props: SelectProps<Option, GQLData, GQLVar> & {
        ref?: Ref<ReactSelectBase<Option, boolean, GroupBase<Option>>>
    }
) => ReactElement
