import {FC, useEffect, useState} from "react";
import {useCurrencies} from "../hooks/useCurrencies.ts";
import CurrencyTable from "../components/currencyTable/CurrencyTable.tsx";
import CurrencyTableLoader from "../components/currencyTable/CurrencyTableLoader.tsx";
import {connectToWebSocket} from "../websocket/coincapWebSocket.ts";
import "./page.css"

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

        return () => {
            if (websocket) {
                websocket.close();
            }
        };
    }, [data, isFetching, websocket]);

    return (
        <main className="page">
            <section className="page__header">
                <h1>Top Cryptocurrencies</h1>
            </section>
            {data && !isFetching ? (
                <CurrencyTable data={data.data} className="page__body"/>
            ) : (
                <CurrencyTableLoader className="page__body"/>
            )}
        </main>
    );
};

export default LiveFeedPage;