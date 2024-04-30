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

    const updateUp = useSpring({
        from: { animation: 'updatedUp 500ms ease-in-out' },
        config: { duration: 500 }
    });

    const updateDown = useSpring({
        from: { animation: 'updatedDown 500ms ease-in-out' },
        config: { duration: 500 }
    });

    useEffect(() => {
        if (lastMessage !== null) {
            const parsed = getWebSocketCurrencies(JSON.parse(lastMessage.data));
            setAnimate(parsed.currencies);
        }
    }, [lastMessage]);

    const getAnimation = (keyName: string, currentPrice: number) => {
        const currency = animate.filter(c => c.name === keyName).at(0);
        if (currency === undefined || currency.price === currentPrice){
            return {};
        }
        console.log(keyName);
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

export default CurrencyTable;