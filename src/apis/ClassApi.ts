import {api} from "./configs/axiosConfig";
import {AxiosResponse} from "axios";
import {StudyClass} from "../model/StudyClass";

export const ClassApi = {
    getAllClasses: async function () {
        const response: AxiosResponse<StudyClass[]> = await api.request({
            url: "/class/all",
            method: "GET",
            headers: {"Content-Type": "application/json"},
        });
        return response.data;
    },
    saveClass: async function (studyClass: StudyClass) {
        const response: AxiosResponse<StudyClass[]> = await api.request({
            url: "/class",
            method: "POST",
            headers: {"Content-Type": "application/json"},
            data: {studyClass}
        });
        return response.data;
    }
}