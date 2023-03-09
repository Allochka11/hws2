const initState:StateType = {
    themeId: 1,
}
export type StateType = {
    themeId: number
}

export const themeReducer = (state = initState, action: ActionType): StateType => { // fix any

    switch (action.type) {

        case 'SET_THEME_ID' : {
            return {...state, themeId: action.id}
        }

        default:
            return state
    }
}

type ActionType = {
    type: 'SET_THEME_ID'
    id:number
}


export const changeThemeId = (id: number): ActionType => ({ type: 'SET_THEME_ID', id }) // fix any
