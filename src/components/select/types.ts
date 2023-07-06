import { UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { Props } from 'react-select'

export type SelectProps<Option, GQLData = unknown, GQLVar = unknown> = Props<Option> & {
    isInvalid?: boolean
    isString?: boolean
    size?: 'sm'
    useQuery?: {
        query<Option, GQLError = unknown>(
            variables: GQLVar,
            options?: UseQueryOptions<GQLData, GQLError, GQLData>
        ): UseQueryResult
        variables: (search: string) => GQLVar
        options: (data: GQLData) => any
    }
    loadOptions?: (inputValue: string, callback: (options: any) => void) => any
}
