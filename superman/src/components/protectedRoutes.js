import React from 'react'
import { userAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom';

function protectedRoutes({ children }) {
    const { user } = userAuth();

    if (!user) {
        return <Navigate to='/Eshop' />

    }
    return children

}
export default protectedRoutes