import React from "react";
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from "react-redux";


export function PrivateRoute(){
    const auth = useSelector((state) => state.auth);
    console.log(auth);
    return(
        auth.user.token ? <Outlet /> : <Navigate to="/login" />
    )
}