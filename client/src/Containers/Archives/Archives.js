import React, { useEffect, useState } from "react"
import JournalInfo from "../../Components/MainPage/JournalInfo/JournalInfo";
import Container from "../../Components/UI/Container/Container";
import './Archives.css'

const Archives = () =>{
    useEffect(()=>{

    }, [])
    return(
        <div className="Archives__wrapper">
            <Container>
                <h2 className="Archives__title">Архивы</h2>
            </Container>
        </div>
    )
}

export default Archives;