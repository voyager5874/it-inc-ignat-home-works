export type ColorThemesListType = 'default' | 'dark' | 'lime';
export type ShapesListType = 'default' | 'rounded' | 'rectangular';

const initState = {
    colorTheme: 'default' as ColorThemesListType,
    controlsShape: 'smooth' as ShapesListType,
};

type themeReducerStateType = typeof initState;

export const themeReducer = (state: themeReducerStateType = initState, action: themeReducerActionsType): themeReducerStateType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME":
            return {...state, colorTheme: action.theme};
        case "CHANGE-CONTROLS-SHAPE":
            return {...state, controlsShape: action.shape};
        default:
            return state;
    }
};

// export const changeThemeC = (): any => {}; // fix any

type themeReducerActionsType = ReturnType<typeof changeColorThemeC> | ReturnType<typeof changeControlsShapeC>;


export const changeColorThemeC = (theme: ColorThemesListType) => {
    return {
        type: 'CHANGE-THEME',
        theme,
    } as const
};

export const changeControlsShapeC = (shape: ShapesListType) => {
    return {
        type: 'CHANGE-CONTROLS-SHAPE',
        shape,
    } as const
};


