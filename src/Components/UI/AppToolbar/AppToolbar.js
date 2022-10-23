import React from "react";
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from "../../../assets/dku_headerlogo.svg"
import './AppToolbar.css'
import AnonymousMenu from "./Menus/AnonymousMenu/AnonymousMenu";
const AppToolbar = ({user}) =>{
    return (
        
        <div className="AppToolbar_Wrapper">
            
                <div className="AppToolbar">
                    <div className="AppToolbar--body-wrapper">
                        <div className="container">
                            <div className="AppToolbar--body">
                                <div className="header_info">
                                    <div className="AppToolbar--body-logo">
                                        <Logo/>
                                    </div>
                                    <div className="AppToolbar--phone">+7 (727) 355-05-51</div>
                                    <div className="search_block">
                                        <input className="search" placeholder="Найти журнал"></input>
                                        <button className="search_button"></button>
                                    </div>
                                </div>
                                
                                {
                                    user?<></>:<AnonymousMenu></AnonymousMenu>
                                }
                            </div>  
                        </div>
                    </div>
                    <div className="AppToolbar--navigation-wrapper">
                        <div className="container">
                            <div className="AppToolbar--navigation">
                                <Link  className="AppToolbar--navigation-link">Главная</Link>
                                <Link  className="AppToolbar--navigation-link">Категории</Link>
                                <Link  className="AppToolbar--navigation-link">О журнале</Link>
                                <Link  className="AppToolbar--navigation-link">Текущий выпуск</Link>
                                <Link  className="AppToolbar--navigation-link">Архивы</Link>
                                <Link  className="AppToolbar--navigation-link">Контакты</Link>
                                <Link  className="AppToolbar--navigation-link">Больше</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default AppToolbar;