import { cn } from '@/lib/utils'
import { TableRowCellProps, TableRowProps } from "./types";

export function TableRow<Item>({ item, columns, className, children, ...props }: TableRowProps<Item>) {
    return (
        <tr className={cn('relative ', {})}{...props}>
            {columns?.map((column, key) => (
                <TableCell key={key} item={item} {...column}/>
            ))}

            <td></td>

        </tr>
    )
}

function TableCell<Item>({ className, alwaysVisible, item, Cell, field }: TableRowCellProps<Item>) {
    return (
        <td
            className={cn(
                'table-cell-container whitespace-nowrap px-4 py-2 transition',
                {
                    'hidden lg:table-cell': !alwaysVisible,
                },
                className
            )}
        >
            {/*@ts-ignore*/}
            {Cell ? Cell(item) : item[field] ?? '-'}
        </td>
    )
}
