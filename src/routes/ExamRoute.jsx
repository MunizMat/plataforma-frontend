import React from "react";
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from "react-redux";
import Iniciada from "../pages/Avaliacao/Iniciada";


export function ExamRoute(){
    const isInProgress = useSelector((state) => state.exam.simulado);
    return(
        isInProgress ? <Navigate to="/avaliacao/iniciada" /> : <Outlet />
    )
}