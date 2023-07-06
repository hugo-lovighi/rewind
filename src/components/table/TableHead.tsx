import { cn } from '@/lib/utils'
import { TableColumnProps, TableHeadProps } from "./types";

export function TableHead<Item>({ columns }: TableHeadProps<Item>) {
    return (
        <thead className="text-left text-xs uppercase text-gray-500">
        <tr>
            {columns?.map((column, key) => (
                <TableCell key={key} {...column} />
            ))}
            <th className="hidden w-0 lg:table-cell"/>
            <th className="w-0"/>
        </tr>
        </thead>
    )
}

function TableCell<Item>({ className, alwaysVisible, label }: TableColumnProps<Item>) {
    return (
        <th className={cn('p-4 font-extrabold', { 'hidden lg:table-cell': !alwaysVisible }, className)}>
            {label ?? null}
        </th>
    )
}
