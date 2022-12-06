import {api} from "./configs/axiosConfig";
import {AxiosResponse} from "axios";
import {User} from "../model/User";
export const AuthApi = {
    login: async function(username: string, password: string) : Promise<User>{
        const response : AxiosResponse<User> = await api.request({

        })
        return response.data;
    },
    logout: async function(){

    },
    register: async function(username: string, password: string){
        const response : AxiosResponse<unknown> = await api.request({

        })
    },
}