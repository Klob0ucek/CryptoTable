const url = "wss://ws.coincap.io/prices?assets=";

export function connectToWebSocket(currencies: string, onMessage: (data: any) => void) {
    console.log(url + currencies);
    const ws = new WebSocket(url + currencies);

    ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        onMessage(data);
    };

    ws.onerror = (error) => {
        console.log(error);
    };

    return ws;
}