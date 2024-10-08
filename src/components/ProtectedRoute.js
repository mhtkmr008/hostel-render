import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute=({isAuthenticated,children})=>{
    if(!isAuthenticated)
    {
        alert("please Login through Credentials");
        return <Navigate to="/login"></Navigate>
    }

    return children;
}

export default ProtectedRoute;