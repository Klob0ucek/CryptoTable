import {FC} from 'react';
import {Currency} from "../../models/currency.ts";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "../ui/table/table.tsx";

type CurrencyTableProps = {
    data: Currency[];
    className?: string;
};

const CurrencyTable: FC<CurrencyTableProps> = ({data, className}) => {
    return (
        <Table className={className}>
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
                {data.map((currency) => (
                    <TableRow key={currency.id}>
                        <TableCell>
                            {currency.rank}
                        </TableCell>
                        <TableCell>
                            {currency.symbol}
                        </TableCell>
                        <TableCell >
                            {currency.name}
                        </TableCell>
                        <TableCell>
                            {Number(currency.priceUsd).toFixed(6)} $
                        </TableCell>
                        <TableCell>
                            {Number(currency.changePercent24Hr).toPrecision(7)} %
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default CurrencyTable;