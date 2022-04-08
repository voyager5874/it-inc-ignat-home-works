import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW8.module.css'
// import {UserType} from "../h3/HW3";

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<Array<UserType>>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: any) => (
        <div key={p._id}
        className={s.userLineWrapper}>
            <span>{p.name}</span>
            <span>{p.age}</span>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'}))
    const check = (age:number) => setPeople(homeWorkReducer(initialPeople, {type: 'check', payload: age}))

    return (
        <div className={s.taskContent}>
            <hr style={{width:"90%"}}/>
            <h3>homework 8</h3>
            {/*should work (должно работать)*/}
            <div className={s.usersTableWrapper}>
                {finalPeople}
            </div>
            <div className={s.controlsWrapper}>
                <SuperButton onClick={sortUp}>sort up</SuperButton>
                <SuperButton onClick={sortDown}>sort down</SuperButton>
                <SuperButton onClick={()=>check(18)}>check 18</SuperButton>
            </div>

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr style={{width:"90%"}}/>
        </div>
    )
}

export default HW8
