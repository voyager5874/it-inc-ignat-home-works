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


    const [leftThumbPos, setLeftThumbPos] = useState(value[0])
    const [rightThumbPos, setRightThumbPos] = useState(value[1])

    const getBarFillPercent = (value: number) => Math.round(((value - min) / (max - min)) * 100)
    const [barFillState, setBarFillState] = useState([getBarFillPercent(leftThumbPos), getBarFillPercent(rightThumbPos) - getBarFillPercent(leftThumbPos)])

    //make sure that minVal does not exceed maxVal
    const leftThumbMoveHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newLeftThumbPos = Number(event.currentTarget.value)
        if (newLeftThumbPos < rightThumbPos) {
            onChangeRange && onChangeRange([newLeftThumbPos, rightThumbPos])
            const leftEdge = getBarFillPercent(newLeftThumbPos)
            const rightEdge = getBarFillPercent(rightThumbPos) - leftEdge
            setBarFillState([leftEdge, rightEdge])
            setLeftThumbPos(newLeftThumbPos)
        }
        return
    }

//make sure that maxVal does not fall below minVal
    const rightThumbMoveHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newRightThumbValue = Number(event.currentTarget.value)
        if (newRightThumbValue > leftThumbPos) {
            onChangeRange && onChangeRange([leftThumbPos, newRightThumbValue])
            const leftEdge = getBarFillPercent(leftThumbPos);
            const rightEdge = getBarFillPercent(newRightThumbValue) - leftEdge;
            setBarFillState([leftEdge, rightEdge])
            setRightThumbPos(newRightThumbValue)
        }
        return
    }

    //fix for left thumb unable to move when both thumbs pressed to the right (right thumb is above by default)
    const leftThumbClassName = leftThumbPos > max - 100 ? `${styles.thumb} ${styles.thumbZindex5}`
        : `${styles.thumb} ${styles.thumbZindex3}`


    return (
        <div className={styles.container}>
            <input
                type="range"
                min={min}
                max={max}
                value={leftThumbPos}
                onChange={leftThumbMoveHandler}
                className={leftThumbClassName}
            />
            <input
                type="range"
                min={min}
                max={max}
                value={rightThumbPos}
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
