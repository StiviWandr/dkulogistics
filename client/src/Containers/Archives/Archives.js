import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import JournalInfo from "../../Components/MainPage/JournalInfo/JournalInfo";
import Container from "../../Components/UI/Container/Container";
import Title from "../../Components/UI/Title/Title";
import { getJournals } from "../../Store/journalSlice";
import './Archives.css'

const Archives = () =>{
    const dispatch = useDispatch()
    const journals = useSelector(state=> state.journals.journals)
    const [years, setYears] = useState([]);
    useEffect(()=>{
        dispatch(getJournals())
    }, [dispatch])
    useEffect(()=>{
        const allYears = [];
        for(let i = 0; i< journals.length; i++){
            if(!allYears.includes(journals[i].year)){
                allYears.push(journals[i].year)
            }
        }
        console.log(allYears);
        setYears(allYears)
    }, [journals])
    return(
        <div className="Archives__wrapper">
            <Container>
                <h2 className="Archives__title">Архивы</h2>
                {years?.map(year => {
                    return(
                        <div className="Archives__year">
                            <Title>{year}</Title>
                            {journals?.map(journal => {
                                if(journal.year === year){
                                    return(
                                        <div>кек</div>
                                    )
                                }
                            })}
                        </div>
                    )
                })}
            </Container>
        </div>
    )
}

export default Archives;