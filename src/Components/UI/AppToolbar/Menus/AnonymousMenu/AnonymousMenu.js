import React from "react";
import { Link } from "react-router-dom";
import './AnonymousMenu.css'
const AnonymousMenu = () =>{
    return (
        <div className="AnonymousMenu">
            <Link className="AnonymousMenu--link login">Вход</Link>
            <Link className="AnonymousMenu--link signup">Регистрация</Link>
        </div>
    )
}

export default AnonymousMenu;