import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'

const Footer = () =>{
    return (
        <div className="Footer_wrapper">
            <div className="container">
                <div className="Footer">
                    <div className="footer--contacts">
                        <h3 className="footer--links-title">Контакты</h3>
                        <div className="footer--contacts-text phone">+7-(727)-355-05-51</div>
                        <div className="footer--contacts-text phone">вн.230, 218</div>
                        <div className="footer--contacts-text email">E-Mail: logcentre@dku.kz</div>
                        
                    </div>
                    <div className="footer--links">
                        <h3 className="footer--links-title">Политика журнала</h3>
                        <Link to = "/about?title=goals" className="footer--links-link">Цели и задачи</Link>
                        <Link to = "#" className="footer--links-link">Разделы журнала</Link>
                        <Link to = "#" className="footer--links-link">Периодичность</Link>
                        <Link to = "#" className="footer--links-link">Политика свободного доступа</Link>
                        <Link to = "#" className="footer--links-link">Архивация</Link>
                        <Link to = "#" className="footer--links-link">Рецензирование</Link>
                        <Link to = "#" className="footer--links-link">Этика научных публикаций</Link>
                        <Link to = "#" className="footer--links-link">Учредитель</Link>
                        <Link to = "#" className="footer--links-link">Плата за публикацию</Link>
                        <Link to = "#" className="footer--links-link">Заимствования и плагиат</Link>
                        <Link to = "#" className="footer--links-link">Политика размещения препринтов и постпринтов</Link>

                    </div>
                    <div className="footer--links">
                        <h3 className="footer--links-title">Прием статей</h3>
                        <Link to = "/sendarticle" className="footer--links-link">Отправка статей</Link>
                        <Link to = "/about?title=sendarticlesrules" className="footer--links-link">Правила для авторов</Link>
                        <Link to = "/about?title=" className="footer--links-link">Авторские права</Link>
                        <Link to = "/about?title=" className="footer--links-link">Приватность</Link>
                        
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