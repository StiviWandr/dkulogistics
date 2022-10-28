import React, { useState } from "react";
import './Register.css'
import {Link, useNavigate} from "react-router-dom"
import shownPass from '../../assets/shownPass.svg'
import hiddenPass from '../../assets/hiddenPass.svg'
import { registerUser } from "../../Store/userSlice";
import { useDispatch } from "react-redux";
const Register = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate('/');
    const [passwordInputType, setPasswordInputType] = useState("password");
    const [showPassImg, setShowPassImg] = useState(shownPass)
    const [registerState, setRegisterState] = useState({
        name: '',
        email:'',
        login: '',
        birthdate: '',
        password: '', 
        passwordRepeat: '',
        phone: ''
    })
    const [dirtyState, setDirtyState]=useState({
        name: false,
        email: false,
        login: false,
        birthdate: false,
        password: false, 
        passwordRepeat: false,
        phone: false
    })
    const [errorState, setErrorState]=useState({
        nameError: 'Поле не может быть пустым',
        emailError:'Поле не может быть пустым',
        loginError: 'Поле не может быть пустым',
        birthdateError: 'Поле не может быть пустым',
        passwordError: 'Поле не может быть пустым', 
        passwordRepeatError: 'Поле не может быть пустым',
        phoneError: 'Поле не может быть пустым'
    })

    const submitHandler = async e => {
        e.preventDefault();
        await dispatch(registerUser({
            userData: {...registerState},
            navigate,
        }));
    }


    const togglePassShowing = (e)=>{
        e.preventDefault();
        passwordInputType==='password'?setPasswordInputType('text'):setPasswordInputType('password')
    }

    const textHandler = (e)=>{
        switch(e.target.name){
            case 'email': 
                setRegisterState({...registerState, email: e.target.value})
                e.target.value===''?
                setErrorState({...errorState, emailError: 'Поле не может быть пустым'})
                :
                setErrorState({...errorState, emailError: ''})
                break;
            case 'name': 
                setRegisterState({...registerState, name: e.target.value})
                e.target.value===''?
                setErrorState({...errorState, nameError: 'Поле не может быть пустым'})
                :
                setErrorState({...errorState, nameError: ''})
                break;
            case 'birthdate': 
                setRegisterState({...registerState, birthdate: e.target.value})
                e.target.value===''?
                setErrorState({...errorState, birthdateError: 'Поле не может быть пустым'})
                :
                setErrorState({...errorState, birthdateError: ''})
                break;
            case 'login': 
                setRegisterState({...registerState, login: e.target.value})
                e.target.value===''?
                setErrorState({...errorState, loginError: 'Поле не может быть пустым'})
                :
                setErrorState({...errorState, loginError: ''})
                break;
            case 'password': 
                setRegisterState({...registerState, password: e.target.value})
                e.target.value===''?
                setErrorState({...errorState, passwordError: 'Поле не может быть пустым'})
                :
                setErrorState({...errorState, passwordError: ''})
                break;
            case 'passwordRepeat': 
                setRegisterState({...registerState, passwordRepeat: e.target.value})
                e.target.value===''?
                setErrorState({...errorState, passwordRepeatError: 'Поле не может быть пустым'})
                :
                setErrorState({...errorState, passwordRepeatError: ''})
                break;
            case 'phone': 
                setRegisterState({...registerState, phone: e.target.value})
                e.target.value===''?
                setErrorState({...errorState, phoneError: 'Поле не может быть пустым'})
                :
                setErrorState({...errorState, phoneError: ''})
                break;
        }
    }
    const blurHandler = (e) =>{
        switch(e.target.name){
            case 'email': 
                setDirtyState({...dirtyState, email: true})
                break;
            case 'name': 
                setDirtyState({...dirtyState, name: true})
                break;
            case 'birthdate': 
                setDirtyState({...dirtyState, birthdate: true})
                break;
            case 'login': 
                setDirtyState({...dirtyState, login: true})
                break;
            case 'password': 
                setDirtyState({...dirtyState, password: true})
                break;
            case 'passwordRepeat': 
                setDirtyState({...dirtyState, passwordRepeat: true})
                break;
            case 'phone': 
                setDirtyState({...dirtyState, phone: true})
                break;

        }
    }
    return(
        <div className="Register_wrapper">
            <div className="Register">
                <div className="RegisterForm">
                    <h6 className="RegisterForm--title">Регистрация</h6>
                    <form onSubmit={submitHandler} className='RegisterForm--form'>
                        <div className="RegisterForm--form-group">
                            <input name="name" 
                                onBlur={e=>{blurHandler(e)}} 
                                onChange={(e)=>{textHandler(e)}} 
                                value={registerState.name}
                                className = "RegisterForm--form-input"
                                type="text" placeholder=" "></input>
                            <label className="RegisterForm--form-label">ФИО</label>
                            <div className="success_icon"></div>
                            {
                                (dirtyState.name && errorState.nameError!=='')?
                                <div className="RegisterForm--form-input_error">{errorState.nameError}</div>:null
                            }
                            
                        </div>
                        <div className="RegisterForm--form-group">
                            <input name='birthdate' 
                                onBlur={e=>{blurHandler(e)}} 
                                value={registerState.birthdate}
                                onChange={(e)=>{textHandler(e)}} 
                                className = "RegisterForm--form-input" 
                                type='date' placeholder=" "
                            />
                            <label className="RegisterForm--form-label">Дата рождения</label>
                            <div className="success_icon"></div>
                            {
                                (dirtyState.birthdate && errorState.birthdateError!=='')?
                                <div className="RegisterForm--form-input_error">{errorState.birthdateError}</div>:null
                            }
                            
                        </div>
                        <div className="RegisterForm--form-group">
                            <input name='login' 
                                onBlur={e=>{blurHandler(e)}} 
                                value={registerState.login}
                                onChange={(e)=>{textHandler(e)}} 
                                className = "RegisterForm--form-input" 
                                type='text' placeholder=" "
                            />
                            <label className="RegisterForm--form-label">Логин</label>
                            <div className="success_icon"></div>
                            {
                                (dirtyState.login && errorState.loginError!=='')?
                                <div className="RegisterForm--form-input_error">{errorState.loginError}</div>:null
                            }
                            
                        </div>
                        <div className="RegisterForm--form-group">
                            <input 
                                name='password' 
                                onBlur={e=>{blurHandler(e)}} 
                                value={registerState.password}
                                onChange={(e)=>{textHandler(e)}} 
                                className = "RegisterForm--form-input" 
                                type={passwordInputType} placeholder=" "
                            />
                            <label className="RegisterForm--form-label">Пароль</label>
                            <button className="LoginForm--showPassword_button" onClick={togglePassShowing}>
                                <img className="showPass" src={passwordInputType==='password'?hiddenPass:shownPass}/>
                            </button>
                            {
                                (dirtyState.password && errorState.passwordError!=='')?
                                <div className="RegisterForm--form-input_error">{errorState.passwordError}</div>:null
                            }
                            
                        </div>
                        <div className="RegisterForm--form-group">
                            <input 
                                name='passwordRepeat' 
                                value={registerState.passwordRepeat}
                                onChange={(e)=>{textHandler(e)}} 
                                onBlur={e=>{blurHandler(e)}} 
                                className = "RegisterForm--form-input" 
                                type={passwordInputType} placeholder=" "
                            />
                            <label className="RegisterForm--form-label">Повторите ваш пароль</label>
                            <div className="success_icon"></div>
                            {
                                (dirtyState.passwordRepeat && errorState.passwordRepeatError!=='')?
                                <div className="RegisterForm--form-input_error">{errorState.passwordRepeatError}</div>:null
                            }
                            
                        </div>
                        <div className="RegisterForm--form-group">
                            <input 
                                name='phone' 
                                value={registerState.phone}
                                onChange={(e)=>{textHandler(e)}} 
                                onBlur={e=>{blurHandler(e)}} 
                                className = "RegisterForm--form-input" 
                                type='tel' placeholder=" "
                            />
                            <label className="RegisterForm--form-label">Номер телефона</label>
                            <div className="success_icon"></div>
                            {
                                (dirtyState.phone && errorState.phoneError!=='')?
                                <div className="RegisterForm--form-input_error">{errorState.phoneError}</div>:null
                            }
                            
                        </div>
                        <div className="RegisterForm--form-group">
                            <input 
                                name='email' 
                                onBlur={e=>{blurHandler(e)}}
                                value={registerState.email}
                                onChange={(e)=>{textHandler(e)}}  
                                className = "RegisterForm--form-input" 
                                type='email' placeholder=" "
                            />
                            <label className="RegisterForm--form-label">Email</label>
                            <div className="success_icon"></div>
                            {
                                (dirtyState.email && errorState.emailError!=='')?
                                <div className="RegisterForm--form-input_error">{errorState.emailError}</div>:null
                            }
                            
                        </div>
                        
                        <button type="submit" className="RegisterForm--submit_button">Зарегестрироваться</button>
                        <div className="account_group">
                            
                            <Link to='/login' className="account_group--link register">Уже зарегестрированы?</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;
