const initialState = {
    mobilePhone: '',
    email: '',
    password: '',
    confirmPassword: '',
}

type InitialStateType = typeof initialState

export const signUpReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case 'SIGN-UP/SET-DATA':
            console.log('signUpReducer', {action})
            return {
                ...state,
                mobilePhone: action.mobilePhone,
                email: action.email,
                password: action.password,
                confirmPassword: action.confirmPassword
            }
        // case "SIGNUP/SET-EMAIL":
        //     return {...state, email: action.email}
        // case "SIGNUP/SET-PASSWORD":
        //     return {...state, password: action.password}
        // case "SIGNUP/SET-CONFIRM-PASSWORD":
        //     return {...state, confirmPassword: action.confirmPassword}
        default:
            return state
    }
}

export const setDataAC = ({mobilePhone, email, password, confirmPassword}: SetDataType) => ({
    type: "SIGN-UP/SET-DATA",
    mobilePhone,
    email,
    password,
    confirmPassword
} as const)
// export const setMobilePhoneAC = (mobilePhone: string) => ({type: "SIGNUP/SET-MOBILE-PHONE", mobilePhone} as const)
// export const setEmailAC = (email: string) => ({type: "SIGNUP/SET-EMAIL", email} as const)
// export const setPasswordAC = (password: string) => ({type: "SIGNUP/SET-PASSWORD", password} as const)
// export const setConfirmPasswordAC = (confirmPassword: string) => ({type: "SIGNUP/SET-CONFIRM-PASSWORD", confirmPassword} as const)

type SetDataType = {
    mobilePhone: string, email: string, password: string, confirmPassword: string
}

export type AppActionsType =
    | ReturnType<typeof setDataAC>
// | ReturnType<typeof setEmailAC>
// | ReturnType<typeof setPasswordAC>
// | ReturnType<typeof setConfirmPasswordAC>