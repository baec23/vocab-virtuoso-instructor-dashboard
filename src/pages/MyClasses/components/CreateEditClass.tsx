import React, {useState} from 'react';
import {useMutation, useQuery} from "react-query";
import LoginForm from "../../Login/components/LoginForm";
import {ClassApi} from "../../../apis/ClassApi";
import {StudentApi} from "../../../apis/StudentApi";
import {VocabListApi} from "../../../apis/VocabListApi";
import {StudyClass} from "../../../model/StudyClass";


function CreateEditClass() {
    const [studyClassName, setStudyClassName] = useState("");
    const [addedStudents, setAddedStudents] = useState([]);
    const [addedVocabLists, setAddedVocabLists] = useState([]);

    const {data: allStudents} = useQuery("allStudents", StudentApi.getAllStudents)
    const {data: allVocabLists} = useQuery("allStudents", VocabListApi.getAllVocabLists)

    const saveMutation = useMutation(ClassApi.saveClass, {
        onSuccess: (data) => {
        },
        onError: (error) => {
        }
    });

    function handleSave() {
        const studyClass: StudyClass = {
           id: undefined,
           instructorId: "a",
           name: studyClassName,
           students: addedStudents,
           vocabLists: addedVocabLists
        }
        saveMutation.mutate(studyClass);
    }

    return (
        <div>

        </div>
    );
}

export default CreateEditClass;