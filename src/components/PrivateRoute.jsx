import React from "react";
import { Navigate, Outlet } from 'react-router-dom';


export function PrivateRoute(){
    let isLoggedIn = false;
    return(
        isLoggedIn ? <Outlet /> : <Navigate to="/login" />
    )
}