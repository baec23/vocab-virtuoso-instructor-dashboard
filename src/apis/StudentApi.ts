import {api} from "./configs/axiosConfig";
import {AxiosResponse} from "axios";

interface Student{

}
export const StudentApi = {
    getAllStudents: async function(){
        const response : AxiosResponse<Student[]> = await api.request({

        })
    }
}