import React from "react";
import {cn} from "../../utils.ts";
import {Currency} from "../../models/currency.ts";
import {TableRow} from "../ui/table/TableRow.tsx";
import {TableHeader} from "../ui/table/TableHeader.tsx";
import "./top-table.css"

interface TableProps {
    currencies: Currency[];
    className?: string;
}

export const TopTable: React.FC<TableProps> = ({className, currencies}) => {
    return (
        <div className={cn(className, "table")}>
            <TableHeader key={"header"}/>
            {currencies.map(currency => (
                <TableRow currency={currency} key={currency.name}/>
            ))}
        </div>
    );
};