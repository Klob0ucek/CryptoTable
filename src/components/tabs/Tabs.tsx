import {FC} from "react";
import {Button} from "../ui/button/Button.tsx";
import {cn} from "../../utils.ts";
import "./tabs.css"
import {TabOptions} from "../../models/fiterOptions.ts";

type TabsProps = {
    className?: string;
    setPage: (tab: TabOptions) => void;
}

const Tabs: FC<TabsProps> = ({setPage, className}) => {
    const currenciesPage = () => {
        setPage(TabOptions.Top);
    }

    const liveFeedPage = () => {
        setPage(TabOptions.Live);
    }

    return (
        <nav className={cn(className, "tabs")}>
            <Button onClick={currenciesPage} label="All Currencies" className="tabs__button"/>
            <Button onClick={liveFeedPage} label="See Live Updates" className="tabs__button"/>
        </nav>
    );
}

export default Tabs;
