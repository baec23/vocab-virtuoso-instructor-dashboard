import React from 'react';
import {StudentApi} from "../../apis/StudentApi";

function MyStudents() {
    StudentApi.getAllStudents().then()
    return (
        <div>
            <h1>Students!</h1>
        </div>
    );
}

export default MyStudents;