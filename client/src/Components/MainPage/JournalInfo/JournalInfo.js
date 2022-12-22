import React from "react";
import { apiUrl, API_URL } from "../../../config/config";
import Container from "../../UI/Container/Container";
import "./JournalInfo.css"

const JournalInfo = (props) => {
    return (
        <Container>
            <div className="JournalInfo">
                <div className="JournalInfo__main">
                    <img className="JournalInfo__main_img" src={`${apiUrl}/uploads/journalImage.png`} alt="journal" />
                    <div className="JournalInfo__main_info">
                        <p>
                            Научный журнал «Supply Chain Management» издается c 2023 года. Учредитель
                            (издатель) журнала - Казахстанско-Немецкий университет. Журнал выходит c
                            периодичностью 1 раз в 3 месяца (4 выпуска в год). 
                        </p>
                        { props.showMore ? 
                            <p className="JournalInfo__hidden_text">
                                Тематическая направленность:
                                <br/>1. Транспорт, транспортная инженерия
                                <br/>2. Логистика на транспорте, организация перевозок<br/>
                                <br/>ISSN №
                                <br/>ISSN №
                                <br/><br/>Периодичность: 4 раза в год<br/>
                                <br/>Журнал зарегистрирован в Комитете информации и архивов.
                                <br/>Свидетельство o постановке на переучет периодического печатного издания 
                                <br/><a className="JournalInfo__main_link" href = "https://vestnik.alt.edu.kz/public/site/docs/Свидетельство%20о%20постановке%20на%20учет%20в%20КИ.pdf" >Свидетельство о постановке на учет в КИ</a>
                                <br/><a className="JournalInfo__main_link" href = "https://vestnik.alt.edu.kz/public/site/docs/справка%20от%20нцгнтэ.pdf" >Справка от НЦГНТЭ</a>
                                <br/><br/>Издатель: Казахстанско-Немецкий университет
                            </p>
                            : null
                            } 
                        <button className="JournalInfo__showMore" onClick={props.showMoreClick}>Показать больше ...</button>
                    </div>
                    
                </div>
                
            </div>
        </Container>
    )
}

export default JournalInfo;