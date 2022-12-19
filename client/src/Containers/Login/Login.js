import React, { useState } from "react";
import './Login.css'
import {Link, useNavigate} from "react-router-dom"
import shownPass from '../../assets/shownPass.svg'
import hiddenPass from '../../assets/hiddenPass.svg'
import { loginUser } from "../../Store/userSlice";
import { useDispatch, useSelector } from "react-redux";
const Login = () => {
    const [passwordInputType, setPasswordInputType] = useState("password");
    const [showPassImg, setShowPassImg] = useState(shownPass)
    const navigate = useNavigate();
    const state = useSelector(state=>state);
    const dispatch = useDispatch();
    const [loginState, setLoginState] = useState({
        email:'',
        password: '', 
    })
    console.log(state);
    const [dirtyState, setDirtyState]=useState({
        email: false,
        password: false,
    })
    const [errorState, setErrorState]=useState({
        emailError:'Поле не может быть пустым',
        passwordError: 'Поле не может быть пустым', 
    })
    const textHandler = (e)=>{
        switch(e.target.name){
            case 'email': 
                setLoginState({...loginState, email: e.target.value})
                e.target.value===''?
                setErrorState({...errorState, emailError: 'Поле не может быть пустым'})
                :
                setErrorState({...errorState, emailError: ''})
                break;

            case 'password': 
                setLoginState({...loginState, password: e.target.value})
                e.target.value===''?
                setErrorState({...errorState, passwordError: 'Поле не может быть пустым'})
                :
                setErrorState({...errorState, passwordError: ''})
                break;
            default:
                return errorState;
        }
    }
    const blurHandler = (e) =>{
        switch(e.target.name){
            case 'email': 
                setDirtyState({...dirtyState, email: true})
                break;
            case 'password': 
                setDirtyState({...dirtyState, password: true})
                break;
            default:
                return dirtyState;

        }
    }
    const submitHandler = async e => {
        e.preventDefault();
        dispatch(loginUser({userData: {...loginState},
            navigate,}))
    }
    const togglePassShowing = (e)=>{
        e.preventDefault();
        passwordInputType==='password'?setPasswordInputType('text'):setPasswordInputType('password')
    }
    return(
        <div className="Login_wrapper">
            <div className="Login">
                <div className="LoginForm">
                    <h6 className="LoginForm--title">Вход в аккаунт</h6>
                    <form className='LoginForm--form' onSubmit={submitHandler}>
                        <div className="LoginForm--form-group">
                            <input className = "LoginForm--form-input"
                                name="email"
                                onBlur={e=>{blurHandler(e)}} 
                                onChange={(e)=>{textHandler(e)}} 
                                value={loginState.email}
                                type="text" placeholder=" "></input>
                            <label className="LoginForm--form-label">Email</label>
                            {/* <div className="LoginForm--form-input_error"></div> */}
                        </div>
                        <div className="LoginForm--form-group">
                            <input className = "LoginForm--form-input" 
                                name = "password"
                                onBlur={e=>{blurHandler(e)}} 
                                onChange={(e)=>{textHandler(e)}} 
                                value={loginState.password}
                                type={passwordInputType} placeholder=" "></input>
                            <label className="LoginForm--form-label">Пароль</label>
                            <button className="LoginForm--showPassword_button" onClick={togglePassShowing}>
                                <img className="showPass" src={passwordInputType==='password'? hiddenPass:shownPass}/>
                            </button>
                            
                        </div>
                        <div className="LoginForm--form-input_error">{state.users.loginError}</div>
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
