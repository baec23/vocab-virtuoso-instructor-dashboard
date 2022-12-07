import React from 'react';
import {StudyClass} from "../../../model/StudyClass";
import ClassSelectionCard from "./ClassSelectionCard";

interface Props {
    classes: StudyClass[] | undefined
    selectedClass: StudyClass | undefined
    setSelectedClass: React.Dispatch<React.SetStateAction<undefined>>
}

function ClassSelector({classes, selectedClass, setSelectedClass}: Props) {
    return (
        <div>
            {classes.map((studyClass) => (
                <ClassSelectionCard key={studyClass.id} studyClass={studyClass}/>
            ))}
        </div>
    );
}

export default ClassSelector;