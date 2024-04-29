import {FC} from "react";
import {useCurrencies} from "../hooks/useCurrencies.ts";
import CurrencyTableLoader from "../components/currencyTable/CurrencyTableLoader.tsx";
import "./page.css"
import LiveTable from "../components/liveTable/LiveTable.tsx";

const LiveFeedPage: FC<{}> = () => {
    const { data, isFetching} = useCurrencies({limit: 5, offset: 0});

    return (
        <main className="page">
            <section className="page__header">
                <h1>Top Cryptocurrencies</h1>
            </section>
            {data && !isFetching ? (
                <LiveTable data={data.data} className="page__body"/>
            ) : (
                <CurrencyTableLoader className="page__body"/>
            )}
        </main>
    );
};

export default LiveFeedPage;