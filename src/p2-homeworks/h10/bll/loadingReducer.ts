export type LoadingStateType = {
    isLoading: boolean
}

const initState: LoadingStateType = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: SetLoadingStatusActionType): LoadingStateType => { // fix any
    switch (action.type) {
        case 'LOADING-ACTIVE': {
            let stateCopy = {...state}
            stateCopy.isLoading = action.payload.isLoading
            return stateCopy
        }
        case 'LOADING-NOT-ACTIVE': {
            let stateCopy = {...state}
            stateCopy.isLoading = action.payload.isLoading
            return stateCopy
        }

        default: return state
    }
}


type SetLoadingStatusActionType = {
    type:'LOADING-ACTIVE' | 'LOADING-NOT-ACTIVE'
    payload:{
        isLoading: boolean
    }
}



export const setLoadingTrueAC = (): SetLoadingStatusActionType => {
    return {
        type: 'LOADING-ACTIVE',
        payload: {
            isLoading: true,
        }
    } as const
}

export const setLoadingFalseAC = (): SetLoadingStatusActionType => {
    return {
        type: 'LOADING-NOT-ACTIVE',
        payload: {
            isLoading: false,
        }
    } as const
}
// fix any