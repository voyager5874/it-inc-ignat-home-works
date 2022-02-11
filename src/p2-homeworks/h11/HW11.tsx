import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './HW11.module.css'

function HW11() {
    const MIN_VALUE = 0
    const MAX_VALUE = 500
    const [value1, setValue1] = useState(10)
    const [value2, setValue2] = useState(70)



    const doubleRangeChangeHandler = (value: [number, number]) => {
        setValue1(value[0])
        setValue2(value[1])
    }


    return (
        <div>
            <hr/>
            <h3>
                homework 11
            </h3>


            {/*should work (должно работать)*/}
            <div className={s.superRangeContainer}>
                <span className={s.sliderValue}>{value1}</span>
                <SuperRange
                    max={MAX_VALUE}
                    onChangeRange={setValue1}
                    value={value1}
                />
            </div>

            <div className={s.doubleRangeContainer}>
                <span className={s.sliderValue}>{value1}</span>
                <SuperDoubleRange
                    value={[value1, value2]}
                    max={MAX_VALUE}
                    min={MIN_VALUE}
                    onChangeRange={doubleRangeChangeHandler}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span className={s.sliderValue}>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
