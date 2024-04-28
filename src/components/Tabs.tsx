import {FC} from "react";

type TabsProps = {
    setPage: (data: string) => void;
}
const Tabs: FC<TabsProps> = ({setPage}) => {
    const currenciesPage = () => {
        setPage('currencies');
    }

    const liveFeedPage = () => {
        setPage('live');
    }

    return (
        <div>
            <button onClick={currenciesPage}> All Currencies</button>
            <button onClick={liveFeedPage}> See Live Updates</button>
        </div>
    );
}

export default Tabs;
