import {FC, useEffect, useState} from 'react';
import {Currency, WebSocketCurrency} from "../../models/currency.ts";
import "./live-table.css"
import "./../topTable/top-table.css"
import {useCoincapWebSocket} from "../../hooks/useCoincapWebSocket.ts";
import {useSpring} from 'react-spring';
import {cn} from "../../utils.ts";
import {TableRow} from "../ui/table/TableRow.tsx";
import {TableHeader} from "../ui/table/TableHeader.tsx";

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
            return undefined;
        }
        return currency.price > currentPrice ? updateUp : updateDown;
    }

    return (
        <div className={cn(className, "table")}>
            <TableHeader/>
            {data.map(currency => (
                <TableRow
                    key={currency.name.toLowerCase()}
                    style={getAnimation(currency.name.toLowerCase(), currency.priceUsd)}
                    currency={currency}
                />
            ))}
        </div>
    );
}

export default LiveTable;