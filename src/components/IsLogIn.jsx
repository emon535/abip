/* eslint-disable react/prop-types */
import { Outlet, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function IsLogIn({user}){
    const { status, role } = useAuth();

    return((status && user === role)? <Outlet /> : <Navigate to="/" />)
}

export default IsLogIn;