import React, {ChangeEvent, useState} from 'react'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import s from './HW4.module.css'
import SuperButton from './common/c2-SuperButton/SuperButton'
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'

function HW4() {
    const [text, setText] = useState<string>('')
    const error = text ? '' : 'error'

    const showAlert = () => {
        if (error) {
            alert('введите текст...')
        } else {
            alert(text) // если нет ошибки показать текст
        }
    }

    const [checked, setChecked] = useState<boolean>(false)
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)

    return (
        <div>
            <hr/>
            <h3>homework 4</h3>
            <div className={s.column}>
                <SuperInputText
                    value={text}
                    onChangeText={setText}
                    onEnter={showAlert}
                    error={error}
                    spanClassName={`${s.testSpanError} ${s.hw4Item}` }
                />

                <SuperInputText
                    className={`${s.blue} ${s.hw4Item}`} // проверьте, рабоет ли смешивание классов
                />

                {/*----------------------------------------------------*/}

                <SuperButton className={s.hw4Item}>
                    I am a green button
                </SuperButton>

                <SuperButton
                    red // пропсу с булевым значением не обязательно указывать true
                    onClick={showAlert}
                    className={s.hw4Item}
                >
                    delete {/*// название кнопки попадёт в children*/}
                </SuperButton>

                <SuperButton disabled className={s.hw4Item}>
                    disabled
                </SuperButton>

                {/*----------------------------------------------------*/}

                <SuperCheckbox
                    className={'sliderCheckbox'}
                    spanClassName={'elevatedSpan'}
                    checked={checked}
                    onChangeChecked={setChecked}
                >
                    I am a child of SuperCheckbox {/*// этот текст попадёт в children*/}
                </SuperCheckbox>
                {/*In JSX expressions that contain both an opening tag and a closing tag, the content between those tags is passed as a special prop: props.children*/}

                {/*// onChange тоже должен работать*/}
                <SuperCheckbox
                    checked={checked}
                    onChange={testOnChange}
                />
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperInputText/>*/}
            {/*<AlternativeSuperButton/>*/}
            {/*<AlternativeSuperCheckbox/>*/}
            <hr/>
        </div>
    )
}

export default HW4
