import {VocabWord} from "./VocabWord";

export interface VocabList{
    id: string | undefined,
    name: string,
    vocabWords: VocabWord[]
}