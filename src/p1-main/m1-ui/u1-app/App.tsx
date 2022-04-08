import React from 'react'
import s from './App.module.css'
import HW5 from "../../../p2-homeworks/h5/HW5";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../p2-homeworks/h10/bll/store";
import {ColorThemesListType} from "../../../p2-homeworks/h12/bll/themeReducer";

function App() {
    const currentColorTheme = useSelector<AppStoreType, ColorThemesListType>(state =>
        state.uiStyle.colorTheme)
    return (
        <div className={`${s.default} ${s[currentColorTheme]}`}>
            <h1 style={{marginTop: 0}}>react homeworks:</h1>
            <HW5/>
        </div>
    )
}

export default App
