// вот вам функция для сохранения объектов в память браузера
// (данные в этом хранилище сохраняться даже при перезагрузке компа):
export function saveState<T>(key: string, state: T) {
    const stateAsString = JSON.stringify(state) //добаляет лишие кавычки
    localStorage.setItem(key, stateAsString)
}

// и вот вам функция для получения сохранённого объекта в памяти браузера:
export function restoreState<T>(key: string, defaultState: T) {
    let state = defaultState
    const stateAsString = localStorage.getItem(key)
    if (stateAsString !== null){
        debugger
        let cleanString = stateAsString.slice(1, stateAsString.length - 2).trim() //избавляюсь от лишних кавычек, чтобы работал trim()
        if(cleanString) {
            state = JSON.parse(stateAsString) as T
        }

    }

    return state
}

// ---------------------------------------------------------------------------------------------------------------
// пример использования:
type StateType = {
    x: string
    y: number
}

// сохраняем объект типа StateType в ячейке 'test'
saveState<StateType>('test', {x: 'A', y: 1})

// получем в переменную state объект из ячейки 'test' или дэфолтный объект если ячейка пуста
const state: StateType = restoreState<StateType>('test', {x: '', y: 0})
