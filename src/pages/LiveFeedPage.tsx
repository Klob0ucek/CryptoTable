import React from "react";
import {useCurrencies} from "../hooks/useCurrencies.ts";
import "./page.css"
import LiveTable from "../components/liveTable/LiveTable.tsx";

const LiveFeedPage: React.FC = () => {
    const { data, isFetching} = useCurrencies({limit: 5, offset: 0});

    return (
        <main className="page">
            <section className="page__header">
                <h1 className="page__header-name">Live CryptoTable</h1>
            </section>

            {data && !isFetching ? (
                <LiveTable data={data.data} className="page__body"/>
            ) : (
                <div className="page__body">
                    Data loading ...
                </div>
            )}

            <footer className="page__footer">
                {"Data are loaded from "}
                <a href="https://coincap.io/">CoinCap</a>
            </footer>
        </main>
    );
};

export default LiveFeedPage;