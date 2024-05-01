import React from "react";
import {cn} from "../../../utils.ts";
import {Order, SortBy} from "../../../models/fiterOptions.ts";
import {Button} from "../button/Button.tsx";
import "./filter.css"

interface FilterProps {
    className?: string;
    setSortBy: (sort: SortBy) => void;
    order: Order
    setOrder: (order: Order) => void
}

export const Filter: React.FC<FilterProps> = ({className, setSortBy, order, setOrder}) => {
    const handleSortChange = (event: any) => {
        setSortBy(event.target.value);
    };

    const handleOrderChange = () => {
        setOrder(order === Order.Asc ? Order.Desc : Order.Asc)
    }

    return (
        <div className={cn(className, "filter")}>
            <select onChange={handleSortChange} className="filter__select">
                <option value={SortBy.Rank}>Rank</option>
                <option value={SortBy.Name}>Name</option>
                <option value={SortBy.Symbol}>Symbol</option>
                <option value={SortBy.Price}>Price</option>
                <option value={SortBy.Change}>Change</option>
            </select>
            <Button label={order} onClick={handleOrderChange} className="filter__button"/>
        </div>
    );
};
