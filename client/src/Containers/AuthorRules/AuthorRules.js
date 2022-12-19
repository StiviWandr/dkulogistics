import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Check from "../../Components/About/Check/Check";
import Copy from "../../Components/About/Copy/Copy";
import Goals from "../../Components/About/Goals/Goals";
import OpenSource from "../../Components/About/OpenSource/OpenSource";
import Period from "../../Components/About/Period/Period";
import SciencePublic from "../../Components/About/SciencePublic/SciencePublic";
import SendingRules from "../../Components/About/SendingRules/SendingRules";
import Container from "../../Components/UI/Container/Container";
import './About.css'
const AuthorRules =(props)=>{
    
    const executeScroll = (elementID, yOffset) => {
        const element = document.getElementById(elementID);
        const _yOffset = yOffset || 0;
        
        if (element) {
            const y = element.getBoundingClientRect().top + window.pageYOffset + _yOffset;
            window.scrollTo({top: y, behavior: 'smooth'});
        }
    }
    function useQuery() {
        const { search } = useLocation();
        return React.useMemo(() => new URLSearchParams(search), [search]);
    }
    const query = useQuery();
    useEffect(()=>{
        const title = query.get('title')
        setTimeout(()=>{
            executeScroll(title, -250);
        }, 500)
        
        
    }, [query]) 
    return(
        <div className="About__Wrapper">
            <Container>
                <div className="About__info">
                    <div className="About__info_content">
                        <h1 className="About__main_title">Supply Chain Management</h1>
                        <p className="About__paragraph">Научный журнал «Supply Chain Management» издается с 2023 года. Учредитель (издатель) журнала - Казахстанско-Немецкий университет. Журнал выходит с периодичностью 1 раз в 3 месяца (4 выпуска в год).</p>
                        <Goals/>
                        <Period/>
                        <OpenSource/>
                        <Check />
                        <SciencePublic/>
                        <SendingRules/>
                        <Copy/>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default AuthorRules;