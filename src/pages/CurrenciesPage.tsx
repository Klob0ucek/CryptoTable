import {FC, useState} from "react";
import CurrencyTable from "../components/CurrencyTable.tsx";
import {useCurrencies} from "../hooks/useCurrencies.ts";
import {Currency} from "../models/currency.ts";

const CurrenciesPage: FC<{}> = () => {
    const [query, setQuery] = useState('');
    const { data, isFetching, refetch } = useCurrencies({limit: 100, offset: 0});

    const search = (data: Currency[]) => {
        return data.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
    }

    const handleReloadClick = () => {
        refetch();
    };

    return (
        <main>
            <section>
                <h1>Top Cryptocurrencies</h1>
                <button onClick={handleReloadClick}>Reload Data</button>
            </section>
            <input type="text" placeholder="Search..." onChange={(e) => setQuery(e.target.value)}/>
            {data && !isFetching ? (
                <CurrencyTable data={search(data.data)}/>
            ) : (
                <div>sooo empty</div>
            )}
        </main>
    );
};

export default CurrenciesPage;