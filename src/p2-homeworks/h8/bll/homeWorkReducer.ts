import {UserType} from "../HW8";


// const initialPeople = [
//     {_id: 0, name: 'Кот', age: 3},
//     {_id: 1, name: 'Александр', age: 66},
//     {_id: 2, name: 'Коля', age: 16},
//     {_id: 3, name: 'Виктор', age: 44},
//     {_id: 4, name: 'Дмитрий', age: 40},
//     {_id: 5, name: 'Ирина', age: 55},
// ]

export const homeWorkReducer = (state: Array<UserType>, action: UsersActionsGeneralType): Array<UserType> => { // need to fix any
    switch (action.type) {
        // case 'sort': {
        //     let stateCopy = [...state]
        //     return action.payload === 'up' ? stateCopy.sort((a, b) => b.age - a.age)
        //         : stateCopy.sort((a, b) => a.age - b.age)
        // }

        case 'sort': {
            let stateCopy = [...state]
            const sortByName = (item1:UserType, item2:UserType) =>{
                let x = item1.name.toLowerCase();
                let y = item2.name.toLowerCase();
                if (x < y) {
                    return -1;
                }
                if (x > y) {
                    return 1;
                }
                return 0;
            }
            stateCopy.sort(sortByName)

            return action.payload === 'up' ? stateCopy : stateCopy.reverse()
        }
        case 'check': {
            return state.filter(user => user.age >= action.payload)
        }
        default:
            return state
    }
}


type UsersActionsGeneralType = SortUsersActionType | CheckUsersActionType

type SortUsersActionType = {
    type: 'sort'
    payload: 'up' | 'down'
}

type CheckUsersActionType = {
    type: 'check'
    payload: number
}