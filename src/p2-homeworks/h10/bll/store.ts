import {loadingReducer} from './loadingReducer'
import {combineReducers, createStore} from "redux";

const rootReducer = combineReducers({
    loading: loadingReducer,

})

export const store = createStore(rootReducer)

//
export type AppStoreType = ReturnType<typeof rootReducer>
//
// // @ts-ignore
// window.store = store // for dev
