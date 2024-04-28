import { useQuery} from "@tanstack/react-query";
import CoincapApi from "../api/coincapApi.ts";
import {ReqPagination} from "../models/request.ts";
export const useCurrencies = (page: ReqPagination) => {
    return useQuery({
        queryKey: ['currencies'],
        queryFn: () => CoincapApi.getTop(page)
    })
}