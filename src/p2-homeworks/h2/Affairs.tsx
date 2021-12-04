import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (affairID: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))


    const setAll = () => {
        props.setFilter('all')

    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div className={s.wrapper}>
        <div className={s.affairsContainer}>
            {mappedAffairs}
        </div>

        <div className={s.buttonsContainer}>
            <button className={props.filter === 'all' ? s.activeFilter : ''} onClick={setAll}>All</button>
            <button className={props.filter === 'high' ? s.activeFilter : ''}onClick={setHigh}>High</button>
            <button className={props.filter === 'middle' ? s.activeFilter : ''}onClick={setMiddle}>Middle</button>
            <button className={props.filter === 'low' ? s.activeFilter : ''}onClick={setLow}>Low</button>
        </div>

        </div>
    )
}

export default Affairs
