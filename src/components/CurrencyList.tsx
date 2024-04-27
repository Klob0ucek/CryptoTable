import {useEffect, useState} from 'react';
import CoincapApi from "../api/coincapApi.ts";
import {Currency} from "../models/currency.ts";

function CurrencyList() {
    const [currencies, setCurrencies] = useState<Currency[]>([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await CoincapApi.getTop({ limit: 100, offset: 0 });
            setCurrencies(data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleReloadClick = () => {
        fetchData(); // Reload data when button is clicked
    };

    return (
        <div>
            <h1>Top Cryptocurrencies</h1>
            <button onClick={handleReloadClick}>Reload Data</button>
            {currencies && (
                <ul>
                    {currencies.map(currency => (
                        <li key={currency.id}>{currency.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default CurrencyList;