import {loadingReducer} from './loadingReducer'
import {combineReducers, createStore} from "redux";
import {themeReducer} from "../../h12/bll/themeReducer";

const rootReducer = combineReducers({
    loading: loadingReducer,
    uiStyle: themeReducer,

})

export const store = createStore(rootReducer)

//
export type AppStoreType = ReturnType<typeof rootReducer>
//
// // @ts-ignore
// window.store = store // for dev
