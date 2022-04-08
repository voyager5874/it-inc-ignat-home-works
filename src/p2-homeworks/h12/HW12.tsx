import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeColorThemeC, ColorThemesListType} from "./bll/themeReducer";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";

const themes = ['default', 'dark', 'lime'];

function HW12() {
    const theme = useSelector<AppStoreType, ColorThemesListType>(
        state => state.uiStyle.colorTheme);
const dispatch = useDispatch();
    // useDispatch, onChangeCallback
    const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(changeColorThemeC(event.currentTarget.value as ColorThemesListType))
    };

    return (
        <div className={s[theme]}>
            <hr/>
            <h3>homework 12</h3>
            <div className={s[theme + '-text']}>
                <SuperSelect options={themes} value={theme} onChange={handleThemeChange}/>
            </div>


            <hr/>
        </div>
    );
}

export default HW12;
