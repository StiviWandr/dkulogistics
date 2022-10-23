import React from 'react';

import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

import {Routes as Routers, Route} from 'react-router-dom';
import MainPage from '../Containers/MainPage/MainPage';

const Routes = () =>{
    return (
        <Routers>
            <Route path='/' element={<MainPage/>}/>
            
        </Routers>
    )
}

export default Routes;