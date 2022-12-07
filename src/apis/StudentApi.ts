import {api} from "./configs/axiosConfig";
import {AxiosResponse} from "axios";
import {Student} from "../model/Student";

export const StudentApi = {
    getAllStudents: async function(){
        const response : AxiosResponse<Student[]> = await api.request({
        });
        return response.data;
    }
}