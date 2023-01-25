import React, { useState } from "react";
import Container from "../../Components/UI/Container/Container";
import FileUploader from "../../Components/UI/Forms/FileUploader/FileUploader";
import FormCommentInput from "../../Components/UI/Forms/FormCommentInput/FormCommentInput";
import FormInput from "../../Components/UI/Forms/FormInput/FormInput";
import Text from "../../Components/UI/Text/Text";
import Title from "../../Components/UI/Title/Title";
import { useDispatch, useSelector} from "react-redux";
import "./UploadArticle.css"
import { sendRequestForArticle, setRequestSent } from "../../Store/journalSlice";
import ModalWindow from "../../Components/UI/ModalWindow/ModalWindow";
import FormSelect from "../../Components/UI/Forms/FormSelect/FormSelect";
const UploadArticle = () =>{
    const dispatch = useDispatch()
    const [articleState, setArticleState] = useState({
        title: "",
        authors: "",
        annotation: ""
    })
    const [selectedFile, setSelectedFile] = useState(null);
    const showModal = useSelector(state=>state.journals.requestSent)
    const onSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("title", articleState.title)
        formData.append("authors", articleState.authors)
        formData.append("annotation", articleState.title)
        formData.append("file", selectedFile)
        dispatch(sendRequestForArticle(formData))
        dispatch(setRequestSent(true))
    }
    const currentYear = new Date().getFullYear();
    const prevYear = currentYear - 1;
    const nextYear = currentYear + 1;
    return (
        <Container>
            <div className="UploadArticle">
                <Title>
                    Загрузить статью
                </Title>
                <form className="UploadArticle__form" onSubmit={onSubmit}>
                    <FormInput
                        required
                        label="Название статьи"
                        value={articleState.title}
                        onChange = {(e)=>{setArticleState({...articleState, title: e.target.value})}}
                    />
                    <FormInput
                        required
                        label="Полные имена авторов"
                        value={articleState.authors}
                        onChange = {(e)=>{setArticleState({...articleState, authors: e.target.value})}}
                    />
                    <FormCommentInput
                        required
                        label="Аннотация"
                        value={articleState.annotation}
                        onChange = {(e)=>{setArticleState({...articleState, annotation: e.target.value})}}
                    />
                    <FormSelect
                        placeholder = "Год журнала"
                        options = {[
                            {value:prevYear, label: prevYear},
                            {value:currentYear, label: currentYear},
                            {value:nextYear, label: nextYear},
                        ]}
                    />
                    <FormSelect
                        placeholder = "Номер выпуска"
                        options = {[
                            {value:1, label: 1},
                            {value:2, label: 2},
                            {value:3, label: 3},
                            {value:4, label: 4},
                        ]}
                    />
                    <FileUploader
                        FileName={selectedFile? selectedFile.name :  "Файл не выбран"}
                        FileInput={(e) => {
                            setSelectedFile(e.target.files[0])}
                        }
                    />
                    
                    <button className="LoginForm--submit_button">Отправить</button>
                </form>
                <ModalWindow modalStatus = {showModal} 
                    bgOnClick = {()=>{dispatch(setRequestSent(false))}}
                >
                    <Title>Успешно!</Title>
                    <Text>Статья загружена</Text>
                </ModalWindow>
            </div>
            
        </Container>
        
    )
}

export default UploadArticle;