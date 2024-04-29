import {FC, useEffect} from 'react';
import {Currency} from "../../models/currency.ts";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "../ui/table/table.tsx";
import "./live-table.css"
import {useCoincapWebSocket} from "../../hooks/useCoincapWebSocket.ts";

// type CurrencyData = {
//     bitcoin?: number;
//     ethereum?: number;
//     tether?: number;
//     bnb?: number;
//     solana?: number;
// };

type CurrencyTableProps = {
    data: Currency[];
    className?: string;
};

const CurrencyTable: FC<CurrencyTableProps> = ({data, className}) => {
    const live = ["bitcoin","ethereum","tether","bnb","solana"];
    const { lastMessage } = useCoincapWebSocket(live.join(","));

    useEffect(() => {
        if (lastMessage !== null) {
            console.log(lastMessage.data);
        }
    }, [lastMessage]);

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
                    <TableRow key={currency.name.toLowerCase()}>
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