import {cn} from "../../../utils.ts";
import "./table-row.css"
import "./table-header.css"
import React from "react";

interface TableHeaderProps {
    className?: string;
}

export const TableHeader: React.FC<TableHeaderProps> = ({className}) => {
    return (
        <>
            <header className={cn(className, "table-row__header table-row")}>
                <div className="table-row__rank table-row__cell table-row__header">Rank</div>
                <div className="table-row__id table-row__cell table-row__header">
                    <div className="table-row__id-symbol table-row__cell table-row__header">Symbol</div>
                    <div className="table-row__id-name table-row__cell table-row__header">Name</div>
                </div>
                <div className="table-row__price table-row__cell table-row__header">Price</div>
                <div className="table-row__update table-row__cell table-row__header">24h Change</div>
            </header>
            <hr className="table-row__divider table-row__divider-header"/>
        </>

    );
};
