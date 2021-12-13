import React from 'react'
import s from './Greeting.module.css'


type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (event: React.ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : '' // need to fix with (?:)

    return (
        <div className={s.container}>
            <div>Users total: {totalUsers}</div>
            <div className={s.inputContainer}>
                <input value={name} onChange={setNameCallback} className={inputClass}/>
                {/*<SuperInputText value={name} onChange={setNameCallback} className={inputClass}/>*/}
                <button onClick={addUser}>add</button>
            </div>

            <span className={s.errorMessage}>{error}</span>

        </div>
    )
}

export default Greeting
