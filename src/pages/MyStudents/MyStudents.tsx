import React from 'react';
import {StudentApi} from "../../apis/StudentApi";
import {useQuery} from "react-query";

function MyStudents() {

    const {data: allStudents, status} = useQuery("allStudents", StudentApi.getAllStudents);

    switch (status) {
        case "loading":
            return (
                <div>
                    <h2>Loading...</h2>
                </div>
            );
        case "error":
            return (
                <div>
                    <h2>Error!</h2>
                </div>
            );
        case "success":
            return (
                <div>
                    {
                        allStudents.map((student) => (
                            <h2>{student.name}</h2>
                        ))
                    }
                </div>
            );
        default:
            return (
                <div></div>
            )
    }
}

export default MyStudents;