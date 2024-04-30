import {FC} from 'react';
import {Currency} from "../../models/currency.ts";
import {Table} from "../ui/table/Table.tsx";

type CurrencyTableProps = {
    data: Currency[];
    className?: string;
};

const CurrencyTable: FC<CurrencyTableProps> = ({data, className}) => {
    return (
        <Table className={className} currencies={data}/>
    );
}

export default CurrencyTable;