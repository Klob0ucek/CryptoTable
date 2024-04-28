import {FC} from 'react';
import {Currency} from "../models/currency.ts";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "./ui/table.tsx";

type CurrencyTableProps = {
    data: Currency[];
};

const CurrencyTable: FC<CurrencyTableProps> = (props) => {
    const { data } = props;
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead >Rank</TableHead>
                    <TableHead >Symbol</TableHead>
                    <TableHead >Name</TableHead>
                    <TableHead >Price</TableHead>
                    <TableHead >Last 24 hours</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data?.map((currency) => (
                    <TableRow key={currency.id}>
                        <TableCell >
                            {currency.rank}
                        </TableCell>
                        <TableCell >
                            {currency.symbol}
                        </TableCell>
                        <TableCell >
                            {currency.name}
                        </TableCell>
                        <TableCell >
                            {currency.priceUsd} $
                        </TableCell>
                        <TableCell>
                            {currency.changePercent24Hr}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default CurrencyTable;