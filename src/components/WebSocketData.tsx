import {useState} from 'react';
import {connectToWebSocket} from "../websocket/coincapWebSocket.ts";

function WebSocketData() {
    const [socket, setSocket] = useState<WebSocket>()

    const printData = (data: any) => {
        console.log(data);
    }

    const closeConnection = () => {
        socket?.close()
        setSocket(undefined);
    }

    return (
        <span>
            <button onClick={() => setSocket(connectToWebSocket(printData))}> Start websocket connection</button>
            <button onClick={closeConnection}>End connection</button>
        </span>
    );
}

export default WebSocketData;