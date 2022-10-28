import React from "react";
import { Link } from "react-router-dom";
import './AnonymousMenu.css'
const AnonymousMenu = () =>{
    return (
        <div className="AnonymousMenu">
            <Link to="/login" className="AnonymousMenu--link login">Вход</Link>
            <Link to='/register' className="AnonymousMenu--link signup">Регистрация</Link>
        </div>
    )
}

export default AnonymousMenu;