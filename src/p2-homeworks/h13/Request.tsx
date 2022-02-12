import React, {useState} from 'react';
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from './Request.module.css'
import {requestAPI} from "./requestAPI";

const Request = () => {
    const[response, setResponse] = useState('')
    const [checkboxValue, setCheckBoxValue] = useState(true)


    const sendPostRequest = () => {
        requestAPI.makePostRequest(checkboxValue)
            .then(res => setResponse(JSON.stringify(res.data)))
            .catch(error => setResponse(error))
    }

    return (
        <div className={s.container}>
            <textarea className={s.textField} value={response}/>
            <SuperCheckbox
                onChangeChecked={setCheckBoxValue}
                checked={checkboxValue}
                className={'sliderCheckbox'}
                spanClassName={'elevatedSpan'}
            >
                switch it
            </SuperCheckbox>
            <SuperButton
                onClick={sendPostRequest}
                className={'greenButton'}> make request
            </SuperButton>
        </div>
    );
};

export default Request;