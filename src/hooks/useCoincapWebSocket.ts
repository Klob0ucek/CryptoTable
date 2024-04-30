import useWebSocket from "react-use-websocket";
import {WebSocketCurrency} from "../models/currency.ts";

const url = "wss://ws.coincap.io/prices?assets=";

export const useCoincapWebSocket = (currencies: string) => {
    return useWebSocket<WebSocketCurrency>(url + currencies)
}