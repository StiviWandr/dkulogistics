import React, {useRef} from 'react'
import Text from '../../Text/Text'
import "./FileUploader.css"
const FileUploader = (props) => {
    const fileInput = useRef(null)

    const handleFileInput = (e) => {
        fileInput.current && fileInput.current.click()
    }

    return (
        <div className="file-uploader">
            <Text>Выбранный файл: {props.FileName}</Text>
            <input ref={fileInput} type="file" onChange={props.FileInput}/>
            <button type='button' onClick={handleFileInput} className="FileInput__button">Загрузить файл</button>
        </div>
    )
}
export default FileUploader;