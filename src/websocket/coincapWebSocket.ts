const url = "wss://ws.coincap.io/prices?assets=bitcoin,ethereum,monero,litecoin";

export function connectToWebSocket(onMessage: (data: any) => void) {
    const ws = new WebSocket(url);

    ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        onMessage(data);
    };

    ws.onerror = (error) => {
        console.log(error);
    };

    return ws;
}