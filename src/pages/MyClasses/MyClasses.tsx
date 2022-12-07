import React, {useState} from 'react';
import "./MyClasses.css";
import ClassSelector from "./components/ClassSelector";

function MyClasses() {
    const [selectedClass, setSelectedClass] = useState(undefined);

    return (
        <div className="my-classes">
            <ClassSelector classes={} selectedClass={selectedClass} setSelectedClass={setSelectedClass}/>
        </div>
    );
}

export default MyClasses;