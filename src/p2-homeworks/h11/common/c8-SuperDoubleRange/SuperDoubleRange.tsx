import React, {useState} from 'react'
import styles from "./SuperDoubleRange.module.css"

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value: [number, number]
    max: number
    min: number


    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        min, max,
        ...restProps
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    const getBarFillPercent = (leftThumbPos: number, rightThumbPos: number) => {
        const barFillLeftShift = Math.round(((leftThumbPos - min) / (max - min)) * 100)
        const barFillWidth = Math.round(((rightThumbPos - min) / (max - min)) * 100) - barFillLeftShift
        return [barFillLeftShift, barFillWidth]
    }

    const [barFillState, setBarFillState] = useState(getBarFillPercent(value[0], value[1]))

    //make sure minVal does not exceed maxVal
    const leftThumbMoveHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newLeftThumbPos = Number(event.currentTarget.value)
        if (newLeftThumbPos < value[1]) {
            onChangeRange && onChangeRange([newLeftThumbPos, value[1]])
            setBarFillState(getBarFillPercent(newLeftThumbPos, value[1]))
        }
        return
    }

    //make sure maxVal does not fall below minVal
    const rightThumbMoveHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newRightThumbValue = Number(event.currentTarget.value)
        if (newRightThumbValue > value[0]) {
            onChangeRange && onChangeRange([value[0], newRightThumbValue])
            setBarFillState(getBarFillPercent(value[0], newRightThumbValue))
        }
        return
    }

    //fix for left thumb unable to move when both thumbs pressed to the right (right thumb is above by default)
    const leftThumbClassName = value[0] > max - 100 ? `${styles.thumb} ${styles.thumbZindex5}`
        : `${styles.thumb} ${styles.thumbZindex3}`


    return (
        <div className={styles.container}>
            <input
                type="range"
                min={min}
                max={max}
                value={value[0]}
                onChange={leftThumbMoveHandler}
                className={leftThumbClassName}
            />
            <input
                type="range"
                min={min}
                max={max}
                value={value[1]}
                onChange={rightThumbMoveHandler}
                className={`${styles.thumb} ${styles.thumbZindex4}`}
            />
            <div className={styles.slider}>
                <div className={styles.sliderTrack}/>
                <div style={{left: `${barFillState[0]}%`, width: `${barFillState[1]}%`}}
                     className={styles.sliderRange}/>
            </div>
        </div>
    )
}

export default SuperDoubleRange
