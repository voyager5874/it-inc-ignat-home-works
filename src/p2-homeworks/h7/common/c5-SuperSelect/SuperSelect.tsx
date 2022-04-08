import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import s from './SuperSelect.module.css'
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../h10/bll/store";
import {ColorThemesListType} from "../../../h12/bll/themeReducer";

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption, value,
        ...restProps
    }
) => {
    const colorTheme = useSelector<AppStoreType, ColorThemesListType>(state => state.uiStyle.colorTheme)
    const combinedClassName = `${s.select} ${s[colorTheme]}`

    const mappedOptions: any[] = options ? options.map((item, index) =>
            <option
                key={index}
                value={item}
            >
                {item}
            </option>)
        : []

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // onChange, onChangeOption
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    return (
        <select className={combinedClassName} value={value} onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
