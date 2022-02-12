import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperCheckbox.module.css'

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperCheckboxPropsType = DefaultInputPropsType & {
    onChangeChecked?: (checked: boolean) => void
    spanClassName?: string

}

const SuperCheckbox: React.FC<SuperCheckboxPropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeChecked,
        className, spanClassName,
        children, // в эту переменную попадёт текст, типизировать не нужно так как он затипизирован в React.FC

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // сделайте так чтоб работал onChange и onChangeChecked
        onChange // если есть пропс onChange
        && onChange(e) // то передать ему е (поскольку onChange не обязателен)
        onChangeChecked // если есть пропс onChange
        && onChangeChecked(e.currentTarget.checked) // то передать ему е (поскольку onChange не обязателен)

    }

    const finalInputClassName = `${className ? s[className] : s.checkbox}`
    const spanStyle = spanClassName ? s[spanClassName] : s.defaultSpan

    return (
        <label className={`${s.checkboxWrapper}`}>
            <input
                type={'checkbox'}
                onChange={onChangeCallback}
                className={finalInputClassName}

                {...restProps} // отдаём инпуту остальные пропсы если они есть (checked например там внутри)
            />
            {children && <span className={spanStyle}>{children}</span>}
        </label> // благодаря label нажатие на спан передастся в инпут. Если приходит какое-то содержимое (children), то рисуется спан с этим содержимым
        // In JSX expressions that contain both an opening tag and a closing tag, the content between those tags is passed as a special prop: props.children
    )
}

export default SuperCheckbox
