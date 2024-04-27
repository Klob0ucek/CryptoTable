import axios from "axios";
import { ReqPagination } from "../models/request";
import {ApiRespTop} from "../models/response.ts";
import {Currency} from "../models/currency.ts";

const axiosInstance = axios.create({
    baseURL: "https://api.coincap.io/v2",
});

async function getTop({ limit, offset }: ReqPagination) {
    const resp = await axiosInstance.get<ApiRespTop<Currency>>("/assets", {
        params: { limit, offset },
    });
    return resp.data;
}

const CoincapApi = {
    get: axiosInstance.get,
    getTop,
};

export default CoincapApi;
