import useWebSocket from "react-use-websocket";
import {WebSocketCurrency} from "../models/currency.ts";
import {useEffect, useRef} from "react";
import {getWebSocketCurrencies} from "../utils.ts";

const url = "wss://ws.coincap.io/prices?assets=";

export const useCoincapWebSocket = (currencies: string) => {
    const {lastJsonMessage} = useWebSocket<WebSocketCurrency>(url + currencies);
    const cacheRef = useRef<WebSocketCurrency[]>([]);

    useEffect(() => {
        if (lastJsonMessage !== null) {
            const parsed = getWebSocketCurrencies(lastJsonMessage);
            cacheRef.current = [...cacheRef.current, ...parsed.currencies];
        }
    }, [lastJsonMessage]);

    return {getCached: () => cacheRef, reset: () => cacheRef.current = []}
}