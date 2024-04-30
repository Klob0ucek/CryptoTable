export type Currency = {
    id: string,
    rank: number,
    symbol: string,
    name: string,
    supply: number,
    maxSupply?: number,
    marketCapUsd: number,
    volumeUsd24Hr: number,
    priceUsd: number,
    changePercent24Hr: number,
    vwap24Hr: number,
    explorer: string
}

export type WebSocketMessage = {
    currencies: WebSocketCurrency[];
}

export type WebSocketCurrency = {
    name: string;
    price: number;
}