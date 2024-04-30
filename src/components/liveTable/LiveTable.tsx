import {FC, useEffect, useState} from 'react';
import {Currency, WebSocketCurrency} from "../../models/currency.ts";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "../ui/table/table.tsx";
import "./live-table.css"
import {useCoincapWebSocket} from "../../hooks/useCoincapWebSocket.ts";
import {animated, useSpring} from 'react-spring';

type CurrencyTableProps = {
    data: Currency[];
    className?: string;
};

const LiveTable: FC<CurrencyTableProps> = ({data, className}) => {
    const live = ["bitcoin","ethereum","tether","bnb","solana"]
    const [cachedData, setCachedData] = useState<WebSocketCurrency[]>([]);
    const {getCached, reset} = useCoincapWebSocket(live.join(","));

    const updateUp = useSpring({
        from: { animation: 'updatedUp 700ms ease-in-out' },
        config: { duration: 700 }
    });

    const updateDown = useSpring({
        from: { animation: 'updatedDown 700ms ease-in-out' },
        config: { duration: 700 }
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCachedData(getCached().current);
            reset();
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const getAnimation = (keyName: string, currentPrice: number) => {
        const currency = cachedData.filter(c => c.name === keyName).at(0);
        if (currency === undefined || currency.price === currentPrice){
            return {};
        }
        return currency.price > currentPrice ? updateUp : updateDown;
    }

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
                        style={getAnimation(currency.name.toLowerCase(), currency.priceUsd)}>
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
                            {Number(currency.priceUsd).toPrecision(6)} $
                        </TableCell>
                        <TableCell>
                            {Number(currency.changePercent24Hr).toFixed(6)} %
                        </TableCell>
                    </TableRowAnimated>
                ))}
            </TableBody>
        </Table>
    );
}

export default LiveTable;