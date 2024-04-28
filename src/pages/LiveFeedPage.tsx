import {FC, useEffect, useState} from "react";
import {useCurrencies} from "../hooks/useCurrencies.ts";
import CurrencyTable from "../components/currencyTable/CurrencyTable.tsx";
import CurrencyTableLoader from "../components/currencyTable/CurrencyTableLoader.tsx";
import {connectToWebSocket} from "../websocket/coincapWebSocket.ts";

const LiveFeedPage: FC<{}> = () => {
    const { data, isFetching} = useCurrencies({limit: 5, offset: 0});
    const [websocket, setWebSocket] = useState<WebSocket>();

    const onMessage = (data: any) => {
        console.log(data)
    }

    useEffect(() => {
        if (data && !isFetching && !websocket) {
            const currencies = data.data.map(c => c.name.toLowerCase()).join(',');
            console.log(currencies)
            setWebSocket(connectToWebSocket(currencies, onMessage));
        }
    }, [data, isFetching, websocket]);

    return (
        <main>
            <section>
                <h1>Top Cryptocurrencies</h1>
            </section>
            {data && !isFetching ? (
                <CurrencyTable data={data.data}/>
            ) : (
                <CurrencyTableLoader/>
            )}
        </main>
    );
};

export default LiveFeedPage;