import React from "react";
import './ModalWindow.css'
const ModalWindow = (props) =>{
    const openStatusStyle = {
        'opacity': 1,
        'backdropFilter': 'blur(5px)',
        'animation': 'openModal linear .25s'
    }
    const closeStatusStyle = {
        'opacity': 0,
        'display': "none",
        'backdropFilter': 'blur(0px)',
        'animation': 'closeModal linear .5s'
    }
    return(
        <div>
            <div className='ModalWindow__Background' onClick={props.bgOnClick} style={props.modalStatus ? openStatusStyle : closeStatusStyle}>
                <div className='ModalWindow__body' >
                    <div className="ModalWindow__body__content" style={{width: `${props.contentWidth}`}}>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}

/*
    props.bgOnClick - событие по клику на фон
    props.modalStatus - статус модального окна (закрытое / открытое)
    props.children - элемент для того, чтобы внутрь этого контейнера можно было вставлять другие html - элементы
*/


export default ModalWindow;