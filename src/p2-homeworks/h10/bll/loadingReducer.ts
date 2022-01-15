export type LoadingStateType = {
    isLoading: boolean
}

const initState: LoadingStateType = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: SetLoadingStatusActionType): LoadingStateType => { // fix any
    switch (action.type) {
        case 'SET-LOADING-STATUS': {
            let stateCopy = {...state}
            stateCopy.isLoading = action.payload.isLoading
            return stateCopy
        }

        default: return state
    }
}


type SetLoadingStatusActionType = {
    type:'SET-LOADING-STATUS'
    payload:{
        isLoading: boolean
    }
}



export const setLoadingStatusAC = (newLoadingStatus: boolean): SetLoadingStatusActionType => {
    return {
        type: 'SET-LOADING-STATUS',
        payload: {
            isLoading: newLoadingStatus,
        }
    } as const
}


// fix any