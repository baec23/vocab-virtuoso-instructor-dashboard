import {Student} from "./Student";
import {VocabList} from "./VocabList";

export interface StudyClass {
    id: string | undefined,
    instructorId: string,
    name: string,
    students: Student[],
    vocabLists: VocabList[]

}