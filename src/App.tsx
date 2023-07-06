import './i18n';
import { Button } from "@/components/button/Button";
import { Select } from "@/components";
import { TableContainer } from "@/components/table/TableContainer";
import { TableHead } from "@/components/table/TableHead";
import { TableColumnProps } from "@/components/table/types";
import { TableBody } from "@/components/table/TableBody";
import { TableRow } from "@/components/table/TableRow";

type User = {
    id: string
    name: string
}

function App() {

    const data: User[] = [
        { id: '1', name: 'User1' },
        { id: '2', name: 'User2' },
    ]

    const columns: TableColumnProps<User>[] = [
        {
            label: 'ID',
            Cell: ({ id }) => (
                <div>#{id}</div>
            ),
        },
        {
            label: 'Name',
            alwaysVisible: true,
            Cell: ({ name }) => (
                <div>{name}</div>
            ),
        },
    ]

    return (
        <div className="px-32 py-16">

            <TableContainer>
                <TableHead columns={columns}/>
                <TableBody>
                    {data.map((item) => (
                        <TableRow columns={columns} item={item}></TableRow>
                    ))}
                </TableBody>
            </TableContainer>

            <Button>Test</Button>
            <Select<any>
                isMulti
                options={[
                    { label: ' Label1', value: 'label1' },
                    { label: ' Label2', value: 'label2' }
                ]}
            />
        </div>
    );
}

export default App;
