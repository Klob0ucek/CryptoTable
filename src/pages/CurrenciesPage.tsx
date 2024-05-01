import React, { useMemo, useState} from "react";
import {useCurrencies} from "../hooks/useCurrencies.ts";
import "./page.css"
import TextInput from "../components/ui/textinput/TextInput.tsx";
import {TopTable} from "../components/topTable/TopTable.tsx";
import {Filter} from "../components/ui/Filter/Filter.tsx";
import {Order, SortBy, sortCurrencies} from "../models/fiterOptions.ts";

const CurrenciesPage: React.FC = () => {
    const { data, isFetching} = useCurrencies({limit: 100, offset: 0});

    const [query, setQuery] = useState('');
    const  [sortBy, setSortBy] = useState<SortBy>(SortBy.Rank);
    const  [order, setOrder] = useState<Order>(Order.Asc)

    const filteredData = useMemo(() => {
        if (!data) return [];
        return sortCurrencies(data.data.filter(item => item.name.toLowerCase()
                                       .includes(query.toLowerCase())), sortBy, order);
    }, [data, query, order, sortBy]);


    return (
        <main className="page">
            <section className="page__header">
                <h1 className="page__header-name">Top Cryptocurrencies</h1>
                <div className="page__header-input">
                    <TextInput placeholder="Search..." onChange={(e) => setQuery(e.target.value)} initialText={query} />
                    <Filter setSortBy={setSortBy} order={order} setOrder={setOrder}></Filter>
                </div>
            </section>

            {data && !isFetching ? (
                <TopTable currencies={filteredData} className="page__body"/>
            ) : (
                <div className="page__body">
                    Data are loading
                </div>
            )}

            <footer className="page__footer">
                {"Data are loaded from "}
                <a href="https://coincap.io/">CoinCap</a>
                {" API"}
            </footer>
        </main>
    );
};

export default CurrenciesPage;