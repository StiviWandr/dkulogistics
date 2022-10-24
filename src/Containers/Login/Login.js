import React from "react";

const Login = () => {
    return(
        <div className="Login_wrapper">
            <div className="Login">
                <div className="LoginForm">
                    <h6 className="LoginForm--title">
                        <form className='LoginForm--form'>
                            <div className="LoginForm--form-group">
                                <input className = "LoginForm--form-input" type="text" placeholder=" "></input>
                                <label className="LoginForm--form-label">Логин</label>
                                {/* <div className="LoginForm--form-input_error"></div> */}
                            </div>
                            <div className="LoginForm--form-group">
                                <input className = "LoginForm--form-input" type="password" placeholder=" "></input>
                                <label className="LoginForm--form-label">Пароль</label>
                                <button className="LoginForm--showPassword_button"></button>
                                {/* <div className="LoginForm--form-input_error"></div> */}
                            </div>
                            
                            <button className="LoginForm--submit_button">Войти</button>
                        </form>
                    </h6>
                </div>
            </div>
        </div>
    )
}

export default Login;
