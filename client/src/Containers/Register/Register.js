import React, { useState } from "react";
import './Register.css'
import {Link, useNavigate} from "react-router-dom"
import shownPass from '../../assets/shownPass.svg'
import hiddenPass from '../../assets/hiddenPass.svg'
import { useDispatch, useSelector } from "react-redux";
import {registerUser} from '../../Store/userSlice.js'
const Register = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate('/');
    const state = useSelector(state=>state);
    const [passwordInputType, setPasswordInputType] = useState("password");
    const [showPassImg, setShowPassImg] = useState(shownPass)
    const [registerState, setRegisterState] = useState({
        name: '',
        email:'',
        birthDate: '',
        password: '', 
        passwordRepeat: '',
        phone: ''
    })
    const [dirtyState, setDirtyState]=useState({
        name: false,
        email: false,
        birthDate: false,
        password: false, 
        passwordRepeat: false,
        phone: false
    })
    const [errorState, setErrorState]=useState({
        nameError: 'Поле не может быть пустым',
        emailError:'Поле не может быть пустым',
        birthDateError: 'Поле не может быть пустым',
        passwordError: 'Поле не может быть пустым', 
        passwordRepeatError: 'Поле не может быть пустым',
        phoneError: 'Поле не может быть пустым'
    })

    const submitHandler = async e => {
        e.preventDefault();
        dispatch(registerUser({userData: {...registerState},
            navigate,}))
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
            case 'birthDate': 
                setRegisterState({...registerState, birthDate: e.target.value})
                e.target.value===''?
                setErrorState({...errorState, birthDateError: 'Поле не может быть пустым'})
                :
                setErrorState({...errorState, birthDateError: ''})
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
            default:
                return errorState;
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
            case 'birthDate': 
                setDirtyState({...dirtyState, birthDate: true})
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
            default:
                return dirtyState;

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
                            <input name='birthDate' 
                                onBlur={e=>{blurHandler(e)}} 
                                value={registerState.birthDate}
                                onChange={(e)=>{textHandler(e)}} 
                                className = "RegisterForm--form-input" 
                                type='date' placeholder=" "
                            />
                            <label className="RegisterForm--form-label">Дата рождения</label>
                            <div className="success_icon"></div>
                            {
                                (dirtyState.birthDate && errorState.birthDateError!=='')?
                                <div className="RegisterForm--form-input_error">{errorState.birthDateError}</div>:null
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
                                <img className="showPass" alt="showPass" src={passwordInputType==='password'?hiddenPass:shownPass}/>
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
                        <div className="RegisterForm--form-input_error">{state.users.registerError}</div>
                        
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
