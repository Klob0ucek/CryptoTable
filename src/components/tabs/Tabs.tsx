import {FC} from "react";
import {Button} from "../ui/button/Button.tsx";
import {cn} from "../../utils.ts";

type TabsProps = {
    className?: string;
    setPage: (data: string) => void;
}
const Tabs: FC<TabsProps> = ({setPage, className}) => {
    const currenciesPage = () => {
        setPage('currencies');
    }

    const liveFeedPage = () => {
        setPage('live');
    }

    return (
        <nav className={cn(className, "tabs")}>
            <Button onClick={currenciesPage} label="All Currencies" className="tabs__button"/>
            <Button onClick={liveFeedPage} label="See Live Updates" className="tabs__button"/>
        </nav>
    );
}

export default Tabs;
