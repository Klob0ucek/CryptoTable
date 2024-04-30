import {FC, useEffect, useState} from 'react';
import {Currency, WebSocketCurrency} from "../../models/currency.ts";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "../ui/table/table.tsx";
import "./live-table.css"
import {useCoincapWebSocket} from "../../hooks/useCoincapWebSocket.ts";
import {getWebSocketCurrencies} from "../../utils.ts";
import { useSpring, animated } from 'react-spring';

type CurrencyTableProps = {
    data: Currency[];
    className?: string;
};

const CurrencyTable: FC<CurrencyTableProps> = ({data, className}) => {
    const live = ["bitcoin","ethereum","tether","bnb","solana"];
    const [animate, setAnimate] = useState<WebSocketCurrency[]>([])
    const { lastMessage } = useCoincapWebSocket(live.join(","));
    const animation = useSpring({
        from: { backgroundColor: 'green' },
        to: { backgroundColor: 'green' },
        config: { duration: 500 }
    });

    useEffect(() => {
        if (lastMessage !== null) {
            const parsed = getWebSocketCurrencies(JSON.parse(lastMessage.data));
            parsed.currencies.map(c => console.log(c.name));
            setAnimate(parsed.currencies);
        }
    }, [lastMessage]);

    const TableRowAnimated = animated(TableRow);

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
                    <TableRowAnimated
                        key={currency.name.toLowerCase()}
                        style={animate.map(c => c.name).includes(currency.name.toLowerCase()) ? animation : {}}>
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
                    </TableRowAnimated>
                ))}
            </TableBody>
        </Table>
    );
}

export default CurrencyTable;