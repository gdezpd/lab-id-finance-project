export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    mobilePhone: '',
    email: '',
    password: '',
    confirmPassword: '',
}

type InitialStateType = typeof initialState

export const signUpReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case 'SIGNUP/SET-MOBILE-PHONE':
            return {...state, mobilePhone: action.mobilePhone}
        case "SIGNUP/SET-EMAIL":
            return {...state, email: action.email}
        case "SIGNUP/SET-PASSWORD":
            return {...state, password: action.password}
        case "SIGNUP/SET-CONFIRM-PASSWORD":
            return {...state, confirmPassword: action.confirmPassword}
        default:
            return state
    }
}

export const setMobilePhoneAC = (mobilePhone: string) => ({type: "SIGNUP/SET-MOBILE-PHONE", mobilePhone} as const)
export const setEmailAC = (email: string) => ({type: "SIGNUP/SET-EMAIL", email} as const)
export const setPasswordAC = (password: string) => ({type: "SIGNUP/SET-PASSWORD", password} as const)
export const setConfirmPasswordAC = (confirmPassword: string) => ({type: "SIGNUP/SET-CONFIRM-PASSWORD", confirmPassword} as const)


export type AppActionsType =
    | ReturnType<typeof setMobilePhoneAC>
    | ReturnType<typeof setEmailAC>
    | ReturnType<typeof setPasswordAC>
    | ReturnType<typeof setConfirmPasswordAC>