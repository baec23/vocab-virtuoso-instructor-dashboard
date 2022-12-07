import React from 'react';
import {StudyClass} from "../../../model/StudyClass";

interface Props {
    studyClass: StudyClass
}

function ClassSelectionCard({studyClass}: Props) {
    return (
        <div className="my-classes__selector__card">
            <h2>{studyClass.name}</h2>
        </div>
    );
}

export default ClassSelectionCard;