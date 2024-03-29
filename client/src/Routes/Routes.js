import React from 'react';

import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

import {Routes as Routers, Route} from 'react-router-dom';
import MainPage from '../Containers/MainPage/MainPage';
import Login from '../Containers/Login/Login';
import Register from '../Containers/Register/Register';
import About from '../Containers/About/About';
import SendArticle from '../Containers/SendArticle/SendArticle'
import Archives from '../Containers/Archives/Archives';
import UploadArticle from '../Containers/UploadArticle/UploadArticle';
import CreateJournal from '../Containers/CreateJournal/CreateJournal';
const Routes = ({user}) =>{
    return (
        <Routers>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/login' element={(
                <ProtectedRoute
                    isAllowed={!user}
                    redirectedPath='/'
                >
                    <Login/>
                </ProtectedRoute>
            )}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/archive' element={<Archives/>}/>
            <Route path='/register' element={(
                <ProtectedRoute
                    isAllowed={!user}
                    redirectedPath='/'
                >
                    <Register/>
                </ProtectedRoute>
            )}/>
            <Route path='/sendarticle' element={(
                <ProtectedRoute
                    isAllowed={!user}
                    redirectedPath='/login'
                >
                    <SendArticle />
                </ProtectedRoute>
            )}/>
             <Route path='/admin/uploadarticle' element={(
                <ProtectedRoute
                    isAllowed={(!user && !user?.role !== "admin")}
                    redirectedPath='/'
                >
                    <UploadArticle/>
                </ProtectedRoute>
            )}/>
            <Route path='/admin/createjournal' element={(
                <CreateJournal
                    isAllowed={(!user && !user?.role !== "admin")}
                    redirectedPath='/'
                >
                    <UploadArticle/>
                </CreateJournal>
            )}/>
        </Routers>
    )
}

export default Routes;