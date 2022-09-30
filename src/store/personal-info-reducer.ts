import schema from "../schema.json";

const hobbesArray = schema.hobby.anyOf
const hobbies = Object.assign({}, ...hobbesArray.map((name) => ({[name]: false})))

const initialState = {
    openModal: false,
    firstName: '',
    lastName: '',
    birthdayData: '',
    gender: '',
    favoriteOcean: '',
    hobbies,
    dataHobbiesKey: '',
}

type InitialStateType = typeof initialState

export const personalInfoReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case 'PERSONAL-INFO/SET-DATA':
            return {
                ...state,
                firstName: action.firstName,
                lastName: action.lastName,
                birthdayData: action.birthdayData,
                gender: action.gender,
                favoriteOcean: action.favoriteOcean,
                hobbies: action.dataHobbies,
                dataHobbiesKey: action.dataHobbiesKey,
            }
        case 'PERSONAL-INFO/SET-NULL-DATA':
            return {
                ...state,
                firstName: '',
                lastName: '',
                birthdayData: '',
                gender: '',
                favoriteOcean: '',
                hobbies,
            }
        case 'PERSONAL-INFO/OPEN-MODAL':
            return {
                ...state, openModal: action.value
            }
        default:
            return state
    }
}

// ActionCreator
export const setPersonalDataAC = ({
  firstName,
  lastName,
  gender,
  birthdayData,
  favoriteOcean,
  dataHobbies, dataHobbiesKey
}: PersonalDataType
    ) => ({
        type: "PERSONAL-INFO/SET-DATA",
        firstName,
        lastName,
        gender,
        birthdayData,
        favoriteOcean,
        dataHobbies,
        dataHobbiesKey
    } as const)

export const setNullPersonalDataAC = () => ({
    type: "PERSONAL-INFO/SET-NULL-DATA",
} as const)


export const setOpenModalAC = (value: boolean) => ({
    type: "PERSONAL-INFO/OPEN-MODAL",
    value
} as const)

//Types
export type HobbiesType = {
    [key: string]: boolean | string
}

type PersonalDataType = {
    firstName: string,
    lastName: string,
    gender: string,
    birthdayData: string,
    favoriteOcean: string,
    dataHobbies: HobbiesType,
    dataHobbiesKey: string
}

export type FormDataType = {
    firstName: string,
    lastName: string,
    gender: string,
    birthdayData: string,
    favoriteOcean: string,
    dataHobbiesKey: string
}

export type AppActionsType =
    | ReturnType<typeof setPersonalDataAC>
    | ReturnType<typeof setNullPersonalDataAC>
    | ReturnType<typeof setOpenModalAC>