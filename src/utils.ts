import { type ClassValue, clsx } from "clsx";
import {LiveCurrencies} from "./models/currency.ts";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function getAllKeys(obj: LiveCurrencies): Array<keyof LiveCurrencies> {
  return Object.keys(obj) as Array<keyof LiveCurrencies>;
}