import {Instructor} from "./Instructor";
import {Student} from "./Student";
import {VocabList} from "./VocabList";

export interface StudyClass{
    id: string,
    name: string,
    instructor: Instructor,
    students: Student[],
    vocabLists: VocabList[]

}