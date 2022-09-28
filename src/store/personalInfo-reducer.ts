const initialState = {
    firstName: '',
    lastName: '',
    sex: '',
    birthday: '',
    favoriteOcean: '',
    hobby: '',
}

type InitialStateType = typeof initialState

export const personalInfoReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case 'PERSONAL-INFO/SET-DATA':
            return {...state}
        default:
            return state
    }
}

export const setPersonalDataAC = ({firstName, lastName, sex, birthday, favoriteOcean, hobby}: DataTypes
) => ({type: "PERSONAL-INFO/SET-DATA", firstName, lastName, sex, birthday, favoriteOcean, hobby} as const)

type DataTypes = {
    firstName: string,
    lastName: string,
    sex: string,
    birthday: string,
    favoriteOcean: string,
    hobby: string
}

export type AppActionsType =
    | ReturnType<typeof setPersonalDataAC>