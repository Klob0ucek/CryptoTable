import React from "react";
import {cn} from "../../../utils.ts";
import {Currency} from "../../../models/currency.ts";
import {TableRow} from "./TableRow.tsx";
import {TableHeader} from "./TableHeader.tsx";
import "./table.css"

interface TableProps {
    currencies: Currency[];
    className?: string;
}

export const Table: React.FC<TableProps> = ({className, currencies}) => {
    return (
        <div className={cn(className, "table")}>
            <TableHeader/>
            {currencies.map(currency => (
                <TableRow currency={currency} key={currency.name}/>
            ))}
        </div>
    );
};