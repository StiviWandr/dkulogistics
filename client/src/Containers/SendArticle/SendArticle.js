import React, { useState } from "react";
import Container from "../../Components/UI/Container/Container";
import FormCommentInput from "../../Components/UI/Forms/FormCommentInput/FormCommentInput";
import FormInput from "../../Components/UI/Forms/FormInput/FormInput";
import Text from "../../Components/UI/Text/Text";
import Title from "../../Components/UI/Title/Title";
import "./SendArticle.css"
const SendArticle = () =>{
    const [articleState, setArticleState] = useState({
        title: "",
        authors: "",
    })

    return (
        <Container>
            <div className="SendArticle">
                <Title>
                    Отправка статьи
                </Title>
                <form className="SendArticle__form">
                    <FormInput
                        label="Название статьи"
                        value={articleState.title}
                        onChange = {(e)=>{setArticleState({...articleState, title: e.target.value})}}
                    />
                    <FormInput
                        label="Полные имена авторов"
                        value={articleState.title}
                        onChange = {(e)=>{setArticleState({...articleState, title: e.target.value})}}
                    />
                    <FormCommentInput
                        label="Аннотация"
                        value={articleState.title}
                        onChange = {(e)=>{setArticleState({...articleState, title: e.target.value})}}
                    />
                    <FormInput
                        label="Название статьи"
                        value={articleState.title}
                        onChange = {(e)=>{setArticleState({...articleState, title: e.target.value})}}
                    />
                </form>
                <Title>
                    Авторские права
                </Title>
                <Text>
                Авторы, публикующие в данном журнале, соглашаются со следующим:
                <ol>
                    <li>Авторы сохраняют за собой авторские права на работу и предоставляют журналу право первой публикации работы на условиях лицензии Creative Commons Attribution License, которая позволяет другим распространять данную работу с обязательным сохранением ссылок на авторов оригинальной работы и оригинальную публикацию в этом журнале.</li>
                    <li>Авторы сохраняют право заключать отдельные контрактные договорённости, касающиеся не-эксклюзивного распространения версии работы в опубликованном здесь виде (например, размещение ее в институтском хранилище, публикацию в книге), со ссылкой на ее оригинальную публикацию в этом журнале.</li>
                    <li>Авторы имеют право размещать их работу в сети Интернет (например в институтском хранилище или персональном сайте) до и во время процесса рассмотрения ее данным журналом, так как это может привести к продуктивному обсуждению и большему количеству ссылок на данную работу (См. The Effect of Open Access).</li>

                </ol>
                </Text>
                <Title>
                    Заявление о конфиденциальности
                </Title>
                <Text>
                    Имена и адреса электронной почты, введенные на сайте этого журнала, будут использованы исключительно для целей, обозначенных этим журналом, и не будут использованы для каких-либо других целей или предоставлены другим лицам и организациям.
                </Text>
            </div>
        </Container>
        
    )
}

export default SendArticle;