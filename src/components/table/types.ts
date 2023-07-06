import React from 'react'

export type TableContainerProps = React.PropsWithChildren

export type TableHeadProps<Item> = {
    columns: TableColumnProps<Item>[]
}

export type TableColumnProps<Item> = {
    field?: string
    Cell?: (item: Item) => React.ReactNode
    label?: string
    className?: string
    alwaysVisible?: boolean
}

export type TableBodyProps = React.InputHTMLAttributes<HTMLTableSectionElement> & {
    isFetching?: boolean
}

export type TableRowProps<Item> = React.HTMLAttributes<HTMLTableRowElement> & Pick<TableHeadProps<Item>, 'columns'> & {
    item: Item
}

export type TableRowCellProps<Item> = TableColumnProps<Item> & Pick<TableRowProps<Item>, 'item'>