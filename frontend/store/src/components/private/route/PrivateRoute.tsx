import { Navigate, Outlet } from 'react-router-dom';
import React from "react";
import { useAuth } from "../../../contexts/AuthContext.tsx";

interface PrivateRouteProps {
    isAuthenticated: boolean;
}

const PrivateRoute = () => {
    const {isAuthenticated} = useAuth();
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;