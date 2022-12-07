import {api} from "./configs/axiosConfig";
import {AxiosResponse} from "axios";

interface LoginRequestParams {
    username: string,
    password: string
}

interface RegisterRequestParams {
    username: string,
    password: string,
}

export const AuthApi = {
    login: async function ({username, password}: LoginRequestParams) {
        const response = await api.request({
            url: "/login",
            method: "POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            params: {
                "username": username,
                "password": password
            }
        })
        return response.data;
    },
    logout: async function () {

    },
    register: async function (username: string, password: string) {
        const response: AxiosResponse<unknown> = await api.request({})
    },

}