import React, { useState } from "react";
import './Login.css'
import {Link} from "react-router-dom"
import shownPass from '../../assets/shownPass.svg'
import hiddenPass from '../../assets/hiddenPass.svg'
const Login = () => {
    const [passwordInputType, setPasswordInputType] = useState("password");
    const [showPassImg, setShowPassImg] = useState(shownPass)

    const togglePassShowing = (e)=>{
        e.preventDefault();
        passwordInputType==='password'?setPasswordInputType('text'):setPasswordInputType('password')
    }
    return(
        <div className="Login_wrapper">
            <div className="Login">
                <div className="LoginForm">
                    <h6 className="LoginForm--title">Вход в аккаунт</h6>
                    <form className='LoginForm--form'>
                        <div className="LoginForm--form-group">
                            <input className = "LoginForm--form-input" type="text" placeholder=" "></input>
                            <label className="LoginForm--form-label">Логин</label>
                            {/* <div className="LoginForm--form-input_error"></div> */}
                        </div>
                        <div className="LoginForm--form-group">
                            <input className = "LoginForm--form-input" type={passwordInputType} placeholder=" "></input>
                            <label className="LoginForm--form-label">Пароль</label>
                            <button className="LoginForm--showPassword_button" onClick={togglePassShowing}>
                                <img className="showPass" src={passwordInputType==='password'?hiddenPass:shownPass}/>
                            </button>
                            {/* <div className="LoginForm--form-input_error"></div> */}
                        </div>
                        
                        <button className="LoginForm--submit_button">Войти</button>
                        <div className="account_group_login">
                            <Link className="account_group--link forgotPassword">Напомнить пароль</Link>
                            <Link to='/register' className="account_group--link register">Регистрация</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;
