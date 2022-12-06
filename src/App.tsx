import React, {createContext, useEffect, useState} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import MyClasses from "./pages/MyClasses/MyClasses";
import MyStudents from "./pages/MyStudents/MyStudents";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Login from "./pages/Login/Login";
import {User} from "./model/User";

export const CurrUserContext = createContext<User | undefined>(undefined);

function App() {
    const [currUser, setCurrUser] = useState<User | undefined>();

    useEffect(() => {

        return () => {
        };
    }, []);


    return (
        <BrowserRouter>
            <CurrUserContext.Provider value={currUser}>
                <div className="App">
                    <div className="main">
                        <Navbar/>
                        <div className="content">
                            <Routes>
                                <Route path="/login" element={<Login setCurrUser={setCurrUser}/>}/>
                                <Route path="/" element={<ProtectedRoute user={currUser}><Home/></ProtectedRoute>}/>
                                <Route path="/my-classes"
                                       element={<ProtectedRoute user={currUser}><MyClasses/></ProtectedRoute>}/>
                                <Route path="/my-students"
                                       element={<ProtectedRoute user={currUser}><MyStudents/></ProtectedRoute>}/>
                            </Routes>
                        </div>
                    </div>
                </div>
            </CurrUserContext.Provider>
        </BrowserRouter>
    );
}

export default App;
