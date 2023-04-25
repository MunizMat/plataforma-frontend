import React from "react";
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from "react-redux";


export function MyRoute(){
    const isInProgress = useSelector((state) => state.exam.simulado.isInProgress);
    return(

        isInProgress ? <Navigate to="/avaliacao/iniciada" /> : <Outlet />
    )
}