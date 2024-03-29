import React, { useState } from "react"
import JournalInfo from "../../Components/MainPage/JournalInfo/JournalInfo";
import Container from "../../Components/UI/Container/Container";
import './MainPage.css'

const MainPage = () =>{
    const [showMore, setShowMore] = useState(false);

    return(
        <div className="MainPage__wrapper">
            <Container>
                <JournalInfo
                    showMore = {showMore}
                    showMoreClick = {()=>setShowMore(!showMore)}
                />
            </Container>
        </div>
    )
}

export default MainPage;