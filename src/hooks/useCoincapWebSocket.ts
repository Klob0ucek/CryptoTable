import useWebSocket from "react-use-websocket";

const url = "wss://ws.coincap.io/prices?assets=";

export const useCoincapWebSocket = (currencies: string) => {
    return useWebSocket(url + currencies)
}