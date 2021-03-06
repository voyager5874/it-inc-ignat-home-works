import React, {DetailedHTMLProps, InputHTMLAttributes, HTMLAttributes, useState} from 'react'
import SuperInputText from '../../../h4/common/c1-SuperInputText/SuperInputText'
import s from './SuperEditableSpan.module.css'
import {FaRegEdit} from "react-icons/all";
import {IconContext} from "react-icons";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperEditableSpanType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string

    spanProps?: DefaultSpanPropsType // пропсы для спана
}

const SuperEditableSpan: React.FC<SuperEditableSpanType> = (
    {
        autoFocus, // игнорировать изменение этого пропса
        onBlur,
        onEnter,
        spanProps, spanClassName,
        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [showIcon, setShowIcon] = useState<boolean>(false)
    const {children, onDoubleClick, className, ...restSpanProps} = spanProps || {}

    const onEnterCallback = () => {

        setEditMode(false) // выключить editMode при нажатии Enter
        onEnter && onEnter()
    }
    const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
        setEditMode(false) // выключить editMode при нажатии за пределами инпута

        onBlur && onBlur(e)
    }
    const onDoubleClickCallBack = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        setEditMode(true) // включить editMode при двойном клике

        onDoubleClick && onDoubleClick(e)
    }

    const handleDisplayingEditIcon = () => {
        setShowIcon(!showIcon)
    }

    // const spanClassName = `${s.editableSpan} ${className}`
    const spanFinalClassName = `${s.span} ${spanClassName} ${showIcon ? s.highlighted : ''}`

    return (
        <>
            {editMode
                ? (
                    <SuperInputText
                        autoFocus // пропсу с булевым значением не обязательно указывать true
                        onBlur={onBlurCallback}
                        onEnter={onEnterCallback}
                        className={s.input}
                        {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
                    />
                ) : (
                    <span
                        onMouseEnter={handleDisplayingEditIcon}
                        onMouseLeave={handleDisplayingEditIcon}
                        onDoubleClick={onDoubleClickCallBack}
                        className={spanFinalClassName}

                        {...restSpanProps}
                    >

                        {/*если нет захардкодженного текста для спана, то значение инпута*/}
                        <span>{children || restProps.value}</span>


                        {showIcon && <IconContext.Provider
                            value={{style: {cursor: 'pointer', marginLeft: '10px', paddingTop: '4px'}}}>
                            <FaRegEdit onClick={() => setEditMode(true)} />
                        </IconContext.Provider>}

                    </span>
                )
            }
        </>
    )
}

export default SuperEditableSpan
