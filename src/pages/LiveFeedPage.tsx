import {FC} from "react";
import WebSocketData from "../components/WebSocketData.tsx";

const LiveFeedPage: FC<{}> = () => {

    return (
        <main >
            <WebSocketData/>
        </main>
    );
};

export default LiveFeedPage;