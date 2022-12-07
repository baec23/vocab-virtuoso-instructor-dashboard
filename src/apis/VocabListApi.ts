import {AxiosResponse} from "axios";
import {api} from "./configs/axiosConfig";
import {VocabList} from "../model/VocabList";

export const VocabListApi = {
    getAllVocabLists: async function () {
        const response: AxiosResponse<VocabList[]> = await api.request({
            url: "/vocab-list/all",
            method: "GET",
            headers: {"Content-Type": "application/json"},
        });
        return response.data;
    },
}