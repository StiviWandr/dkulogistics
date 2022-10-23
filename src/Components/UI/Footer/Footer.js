import React from "react";
import './Footer.css'

const Footer = () =>{
    return (
        <div className="Footer_wrapper">
            <div className="container">
                <div className="Footer">
                    <div className="footer--contacts">
                        <h3 className="footer--links-title">Контакты</h3>
                        <div className="social_media">
                            <a href='#' className="social_media-link facebook"></a>
                            <a href='#' className="social_media-link youtube"></a>
                            <a href='#' className="social_media-link instagram"></a>
                            <a href='#' className="social_media-link vk"></a>
                        </div>
                        <div className="footer--contacts-text phone">+7-(727)-355-05-51</div>
                        <div className="footer--contacts-text phone">+7-(700)-355-05-51</div>
                        <div className="footer--contacts-text email">E-Mail: info@dku.kz</div>
                        
                    </div>
                    <div className="footer--links">
                        <h3 className="footer--links-title">Университет</h3>
                        <a href="#" className="footer--links-link">Об университете</a>
                        <a href="#" className="footer--links-link">История</a>
                        <a href="#" className="footer--links-link">Cooperation</a>
                        <a href="#" className="footer--links-link">Администрация</a>
                        <a href="#" className="footer--links-link">Вакансии</a>
                        <a href="#" className="footer--links-link">СМИ о нас</a>
                        <a href="#" className="footer--links-link">Связь с Германией</a>
                        <a href="#" className="footer--links-link">Видео туры</a>
                        <a href="#" className="footer--links-link">Анти-коррупция</a>
                    </div>
                    <div className="footer--links">
                        <h3 className="footer--links-title">Science and transfer</h3>
                        <a href="#" className="footer--links-link">Центр исследований и  образования</a>
                        <a href="#" className="footer--links-link">Гранты и конференции</a>
                        <a href="#" className="footer--links-link">DKU talks</a>
                        <a href="#" className="footer--links-link">Лаборатории</a>
                        <a href="#" className="footer--links-link">Центр регистрации</a>
                        <a href="#" className="footer--links-link">Научные проекты</a>
                    </div>
                    <div className="footer--links">
                        <h3 className="footer--links-title">Наука и передача</h3>
                        <a href="#" className="footer--links-link">Jooble</a>
                        <a href="#" className="footer--links-link">Блог президента</a>
                        <a href="#" className="footer--links-link">События</a>
                    </div>
                </div>
                
            </div>
            <div className="copyright--wrapper">
                <div className="container">
                    <div className="copyright">© 2022 Deutsch-Kasachische Universität</div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer;