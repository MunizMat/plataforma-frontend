import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Espaco from "../pages/Espaco";
import { PrivateRoute } from "../components/PrivateRoute";

export function MyRoutes(){
    return(
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact element={<PrivateRoute />}>
                <Route exact path="/espaco" element={<Espaco />}/>
            </Route>
        </Routes>
    )
}