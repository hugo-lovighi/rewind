import { TableContainerProps } from './types'

export const TableContainer = ({  children }: TableContainerProps) => {
    return (
        <div className="overflow-x-auto">
            <div className="inline-block min-w-full pt-4">
                <div className="overflow-hidden rounded-xl border-2">
                    <table className="min-w-full divide-y divide-gray-200 bg-white">{children}</table>

                    {/*{pagination && (*/}
                    {/*    <Pagination onChange={onChange} pagination={pagination} className="border-t bg-white p-4" />*/}
                    {/*)}*/}
                </div>
            </div>
        </div>
    )
}
