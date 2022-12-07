import React, {useState} from 'react';
import "./MyClasses.css";
import ClassSelector from "./components/ClassSelector";
import {useQuery} from "react-query";
function MyClasses() {
    const [selectedClass, setSelectedClass] = useState(undefined);
    useQuery("classes", ClassApi.)

    return (
        <div className="my-classes">
            <ClassSelector classes={} selectedClass={selectedClass} setSelectedClass={setSelectedClass}/>
        </div>
    );
}

export default MyClasses;