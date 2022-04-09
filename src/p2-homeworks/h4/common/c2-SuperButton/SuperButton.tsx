import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../h10/bll/store";
import {ColorThemesListType, ShapesListType} from "../../../h12/bll/themeReducer";

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        red, className,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const colorTheme = useSelector<AppStoreType, ColorThemesListType>(
        state => state.uiStyle.colorTheme);

    const shapeConfig = useSelector<AppStoreType, ShapesListType>(
        state => state.uiStyle.controlsShape);

    // const finalClassName = `${red ? s.red : s.default} ${className}` //или по умолчанию или стиль "красный" плюс стиль из пропсов
    const finalClassName = `${s.default} ${className}  ${red ? s.redButton : '' } ${s[colorTheme]} ${s[shapeConfig]}`

    return (
        <button
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
