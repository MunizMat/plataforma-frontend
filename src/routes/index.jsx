import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Espaco from "../pages/Espaco";
import { PrivateRoute } from "./PrivateRoute";
import { MyRoute } from "./MyRoute";
import { ExamRoute } from "./ExamRoute";
import FormAvaliacao from "../pages/Avaliacao";
import Iniciada from "../pages/Avaliacao/Iniciada";

export function MyRoutes(){
    return(
        <Routes>
            <Route exact element={<ExamRoute />}>
                <Route exact path="/" element={<Home />} />
                <Route exact path="login" element={<Login />} />
                <Route exact path="register" element={<Register />} />
            </Route>
            <Route exact element={<PrivateRoute />}>
                <Route exact element={<ExamRoute />}>
                    <Route exact path="espaco" element={<Espaco />}/>
                    <Route exact path="avaliacao" element={<FormAvaliacao />}/>
                    <Route exact path="avaliacao/iniciada" element={<Iniciada />} />
                </Route>
            </Route>
        </Routes>
    )
}