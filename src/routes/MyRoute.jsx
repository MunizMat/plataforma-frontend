import React from "react";
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from "react-redux";


export function MyRoute(){
    const exam = useSelector((state) => state.exam);
    return(

        exam.simulado ? <Outlet /> : <Navigate to='espaco'/>
    )
}