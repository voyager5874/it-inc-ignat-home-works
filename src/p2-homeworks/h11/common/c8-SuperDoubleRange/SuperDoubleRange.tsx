import React, {useCallback, useEffect, useRef, useState} from 'react'
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

    const [minVal, setMinVal] = useState(value[0]);
    const [maxVal, setMaxVal] = useState(value[1]);

    const minValRef = useRef<HTMLInputElement>(null);
    const maxValRef = useRef<HTMLInputElement>(null);
    const range = useRef<HTMLDivElement>(null);

    const getPercent = useCallback(
        (value: number) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    useEffect(() => {
        if (maxValRef.current) {
            const minPercent = getPercent(minVal);
            const maxPercent = getPercent(+maxValRef.current.value);

            if (range.current) {
                range.current.style.left = `${minPercent}%`;
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [minVal, getPercent]);


    useEffect(() => {
        if (minValRef.current) {
            const minPercent = getPercent(+minValRef.current.value);
            const maxPercent = getPercent(maxVal);

            if (range.current) {
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [maxVal, getPercent]);

    //make sure that minVal does not exceed maxVal
    const leftThumbMoveHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        //maxVal - 1 maintains difference between minVal and maxVal
        const value = Math.min(+event.currentTarget.value, maxVal - 1);
        setMinVal(value);
        event.target.value = value.toString();
        onChangeRange && onChangeRange([minVal, maxVal])
    }
//make sure that maxVal does not fall below minVal
    const rightThumbMoveHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(+event.currentTarget.value, minVal + 1);
        setMaxVal(value);
        event.target.value = value.toString();
        onChangeRange && onChangeRange([minVal, maxVal])
    }

    //fix for left thumb unable to move when both thumbs pressed to the right (right thumb is above by default)
    const leftThumbClassName = minVal > max - 100 ? `${styles.thumb} ${styles.thumbZindex5}`
        : `${styles.thumb} ${styles.thumbZindex3}`


    return (
        <div className={styles.container}>
            <input
                type="range"
                min={min}
                max={max}
                value={minVal}
                ref={minValRef}
                onChange={leftThumbMoveHandler}
                className={leftThumbClassName}
            />
            <input
                type="range"
                min={min}
                max={max}
                value={maxVal}
                ref={maxValRef}
                onChange={rightThumbMoveHandler}
                className={`${styles.thumb} ${styles.thumbZindex4}`}
            />
            <div className={styles.slider}>
                <div className={styles.sliderTrack}/>
                {/*ref is for colorizing the bar between thumbs*/}
                <div ref={range} className={styles.sliderRange}/>
            </div>
        </div>
    )
}

export default SuperDoubleRange
