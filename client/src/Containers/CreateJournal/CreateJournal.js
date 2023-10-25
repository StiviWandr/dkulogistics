import React, { useEffect, useState } from 'react'
import Container from "../../Components/UI/Container/Container";
import Text from "../../Components/UI/Text/Text";
import Title from "../../Components/UI/Title/Title";
import { useDispatch, useSelector} from "react-redux";
import "./CreateJournal.css"
import { createJournal, sendRequestForArticle, setJournalSent, setRequestSent } from "../../Store/journalSlice";
import ModalWindow from "../../Components/UI/ModalWindow/ModalWindow";
import FormSelect from "../../Components/UI/Forms/FormSelect/FormSelect";
import Error from '../../Components/UI/Error/Error';
export default function CreateJournal() {
    const dispatch = useDispatch();
    const currentYear = new Date().getFullYear();
    const prevYear = currentYear - 1;
    const nextYear = currentYear + 1;
    const state = useSelector(state=>state)
    const showModal = useSelector(state=>state.journals.journalSent)
    const journalError = useSelector(state=>state.journals.journalError)
    const [journal, setjounal] = useState({
        year: "",
        period: ""
    })
    const onSubmit = async (e) => {
        e.preventDefault()
        await dispatch(createJournal({data: journal}))

    }
    useEffect(() => {
        console.log(showModal, journalError);
        console.log(state);
    }, [showModal, journalError, state])
    
    return (
        <div>
            <Container>
                <div className="UploadArticle">
                    <Title>
                        Создать журнал
                    </Title>
                    <form className="UploadArticle__form" onSubmit={onSubmit}>
                        <FormSelect
                            placeholder = "Год журнала"
                            onChange={(e)=>setjounal({...journal, year:e.value})}
                            options = {[
                                {value:prevYear, label: prevYear},
                                {value:currentYear, label: currentYear},
                                {value:nextYear, label: nextYear},
                            ]}
                        />
                        <FormSelect
                            placeholder = "Номер выпуска"
                            onChange={(e)=>setjounal({...journal, period:e.value})}
                            options = {[
                                {value:1, label: 1},
                                {value:2, label: 2},
                                {value:3, label: 3},
                                {value:4, label: 4},
                            ]}
                        />
                        <Error>{journalError}</Error>
                        
                        <button className="LoginForm--submit_button">Отправить</button>
                    </form>
                    <ModalWindow modalStatus = {showModal} 
                        bgOnClick = {()=>{dispatch(setJournalSent(false))}}
                    >
                        <Title>Успешно!</Title>
                        <Text>Журнал создан</Text>
                    </ModalWindow>
                </div>
            
            </Container>
        </div>
    )
}
