import React from 'react';

import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

import {Routes as Routers, Route} from 'react-router-dom';
import MainPage from '../Containers/MainPage/MainPage';
import Login from '../Containers/Login/Login';
import Register from '../Containers/Register/Register';
const Routes = ({user}) =>{
    return (
        <Routers>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={(
                <ProtectedRoute
                    isAllowed={!user}
                    redirectedPath='/'
                >
                    <Register/>
                </ProtectedRoute>
            )}/>
        </Routers>
    )
}

export default Routes;