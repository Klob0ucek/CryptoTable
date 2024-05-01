import {Currency} from "./currency.ts";

export enum SortBy {
    Rank = "rank",
    Name = "name",
    Symbol = "symbol",
    Price = "price",
    Change = "change"
}

export enum Order {
    Asc = "Asc",
    Desc = "Desc"
}

export function sortCurrencies(data: Currency[], sortBy: SortBy, order: Order): Currency[] {
    const sortFunction = (a: Currency, b: Currency): number => {
        let comparisonValue: number;

        switch (sortBy) {
            case SortBy.Rank:
                comparisonValue = a.rank - b.rank;
                break;
            case SortBy.Name:
                comparisonValue = a.name.localeCompare(b.name);
                break;
            case SortBy.Symbol:
                comparisonValue = a.symbol.localeCompare(b.symbol);
                break;
            case SortBy.Price:
                comparisonValue = a.priceUsd - b.priceUsd;
                break;
            case SortBy.Change:
                comparisonValue = a.changePercent24Hr - b.changePercent24Hr;
                break;
            default:
                comparisonValue = 0;
        }

        return order === Order.Asc ? comparisonValue : -comparisonValue;
    };

    return [...data].sort(sortFunction);
}