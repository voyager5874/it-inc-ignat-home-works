import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import s from './HW6.module.css'
import {FaRegEdit} from "react-icons/all";

function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        let defaultValue = 'nothing to restore'
        let storedValue = restoreState<string>('editable-span-value', defaultValue)
        setValue(storedValue)
        if (storedValue === defaultValue) setTimeout(()=>setValue(''), 1000)
    }

    return (
        <div>
            <hr/>
            <h3>homework 6</h3>
<div className={s.contentWrapper}>
    {/*should work (должно работать)*/}
    <div className={s.textFieldWrapper}>
        {/*<FaRegEdit />*/}
        <SuperEditableSpan
            value={value}
            onChangeText={setValue}
            spanProps={{children: value ? undefined : 'enter text...'}}
        />
    </div>
    <div className={s.buttonsWrapper}>
        <SuperButton onClick={save}>save</SuperButton>
        <SuperButton onClick={restore}>restore</SuperButton>
    </div>


    {/*<hr/>*/}
    {/*/!*для личного творчества, могу проверить*!/*/}
    {/*/!*<AlternativeSuperEditableSpan/>*!/*/}
    {/*<hr/>*/}
</div>

        </div>
    )
}

export default HW6
