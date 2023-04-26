import React from "react";
import { Navigate, Outlet  } from 'react-router-dom';
import { useSelector } from "react-redux";


export function PrivateRoute(){
    const auth = useSelector((state) => state.auth);

    return(
        auth.isLoggedIn ? <Outlet /> : <Navigate to="/login" />
    )
}