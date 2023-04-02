import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import Login from "../pages/Login";

export function MyRoutes(){
    return(
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
        </Routes>
    )
}