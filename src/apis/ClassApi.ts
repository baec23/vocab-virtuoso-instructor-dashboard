import {api} from "./configs/axiosConfig";
import {AxiosResponse} from "axios";
import {Student} from "../model/Student";
import {StudyClass} from "../model/StudyClass";

export const ClassApi = {
    getAllClasses: async function(){
        const response : AxiosResponse<StudyClass[]> = await api.request({
            url: "/class/all",
            method: "GET",
            headers: {"Content-Type": "application/json"},
            params: {
                "username": username,
                "password": password
            }
        });
        return response.data;
    }
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
}