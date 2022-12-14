const initialState = {
    mobilePhone: '',
    email: '',
    password: '',
    confirmPassword: '',
}

export const signUpReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case 'SIGN-UP/SET-DATA':
            return {
                ...state,
                mobilePhone: action.mobilePhone,
                email: action.email,
                password: action.password,
                confirmPassword: action.confirmPassword
            }
        case 'SIGN-UP/SET-NULL-DATA':
            return {
                ...state,
                mobilePhone: '',
                email: '',
                password: '',
                confirmPassword: ''
            }
        default:
            return state
    }
}

// ActionCreator
export const setDataAC = ({mobilePhone, email, password, confirmPassword}: SetDataType) => ({
    type: "SIGN-UP/SET-DATA",
    mobilePhone,
    email,
    password,
    confirmPassword
} as const)
export const setNullDataAC = () => ({
    type: "SIGN-UP/SET-NULL-DATA",
} as const)

// Types
type InitialStateType = typeof initialState

type SetDataType = {
    mobilePhone: string, email: string, password: string, confirmPassword: string
}

export type AppActionsType =
    | ReturnType<typeof setDataAC>
    | ReturnType<typeof setNullDataAC>