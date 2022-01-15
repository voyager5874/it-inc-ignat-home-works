import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW10.module.css'
import './HW10.css'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {setLoadingFalseAC, setLoadingTrueAC} from "./bll/loadingReducer";

function HW10() {
    debugger
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading) //state для редюсера надо всегда делать объектом?
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(setLoadingTrueAC())
        setTimeout(()=>{
            dispatch(setLoadingFalseAC())
        },10000)
        console.log('loading...')
    };

    debugger

    const random = (min: number, max:number) => Math.floor(Math.random() * (max - min)) + min;
    // const exampleComplexClass = `${s.input} ${onEnter ? s.superInput : ''} ${error ? s.errorInput : ''} ${className}`
    // let processIndicatorClass = `s.dotsBars${random(1, 11)}` //не работает
    let processIndicatorClass = `dots-bars-${random(1, 11)}`

    return (
        <div>
            <hr/>
            <h3>
                homework 10
            </h3>
            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div className={processIndicatorClass}></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
