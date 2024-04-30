import {Currency} from "../../../models/currency.ts";
import {cn} from "../../../utils.ts";
import "./table-row.css"
import {animated, SpringValue} from "react-spring";

interface TableRowProps {
    currency: Currency;
    className?: string;
    style?:  {animation: SpringValue<string>};
}

export const TableRow: React.FC<TableRowProps> = ({className, currency, style}) => {
    return (
        <animated.section className={cn(className, "table-row")} style={style}>
            <div className="table-row__rank table-row__cell">{currency.rank}</div>
            <div className="table-row__id table-row__cell">
                <div className="table-row__id-symbol table-row__cell">{currency.symbol}</div>
                <div className="table-row__id-name table-row__cell">{currency.name}</div>
            </div>
            <div className="table-row__price table-row__cell">{Number(currency.priceUsd).toFixed(6)}$</div>
            <div className="table-row__update table-row__cell">{Number(currency.changePercent24Hr).toFixed(6)}%</div>
        </animated.section>
    );
};
