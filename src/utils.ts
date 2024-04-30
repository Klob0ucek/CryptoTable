import { type ClassValue, clsx } from "clsx";
import {WebSocketCurrency} from "./models/currency.ts";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export const getWebSocketCurrencies = (data: any) => {
  const result: WebSocketCurrency[] = [];

  if (data.bitcoin != undefined){
    result.push({name: "bitcoin", price: data.bitcoin});
  }

  if (data.ethereum != undefined){
    result.push({name: "ethereum", price: data.ethereum});
  }

  if (data.solana != undefined){
    result.push({name: "solana", price: data.solana});
  }

  if (data.tether != undefined){
    result.push({name: "tether", price: data.tether});
  }

  if (data.bnb != undefined){
    result.push({name: "bnb", price: data.bnb});
  }

  return {currencies: result};
}