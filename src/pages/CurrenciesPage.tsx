import {FC, useMemo, useState} from "react";
import CurrencyTable from "../components/currencyTable/CurrencyTable.tsx";
import {useCurrencies} from "../hooks/useCurrencies.ts";
import CurrencyTableLoader from "../components/currencyTable/CurrencyTableLoader.tsx";
import "./page.css"
import TextInput from "../components/ui/textinput/TextInput.tsx";

const CurrenciesPage: FC<{}> = () => {
    const [query, setQuery] = useState('');
    const { data, isFetching } = useCurrencies({limit: 100, offset: 0});

    const filteredData = useMemo(() => {
        if (!data) return [];
        return data.data.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
    }, [data, query]);

    return (
        <main className="page">
            <section className="page__header">
                <h1 className="page__header-name">Top Cryptocurrencies</h1>
                <TextInput placeholder="Search..." onChange={(e) => setQuery(e.target.value)} initialText={query} className="page__header-input"/>
            </section>

            {data && !isFetching ? (
                <CurrencyTable data={filteredData} className="page__body"/>
            ) : (
                <CurrencyTableLoader className="page__body"/>
            )}
        </main>
    );
};

export default CurrenciesPage;