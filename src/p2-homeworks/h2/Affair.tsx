import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (affairID: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix
    // let priorityClass = props.affair.priority === 'low' ? s.low: props.affair.priority === 'middle' ? s.middle : s.high;
    return (
        <div className={s.affair}>
            <span>{props.affair.name}</span>
            {/*<span className={priorityClass}>({props.affair.priority})</span>*/}
            <span className={s[props.affair.priority]}>({props.affair.priority})</span>
            <button className={s.deleteButton} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair

// ${props.affair.priority}
// s.low
