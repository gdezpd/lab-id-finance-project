import sсhema from "../sсhema.json";

const hobbesArray = sсhema.hobby.anyOf
const oceanArray = sсhema.ocean.oneOf
//const hobbies = Object.fromEntries(hobbesArray.map((name) => ({[name]: false})))


const hobbies = Object.assign({}, ...hobbesArray.map((name) => ({[name]: false})))
const favoriteOcean = oceanArray.map((ocean) => ocean)


const initialState: InitialStateType = {
    openModal: false,
    firstName: '',
    lastName: '',
    birthdayData: '',
    gender: '',
    favoriteOcean: '',
    hobbies,
}

// type InitialStateType = typeof initialState

type InitialStateType = {
    openModal: boolean,
    firstName: string,
    lastName: string,
    birthdayData: string,
    gender: string,
    favoriteOcean: string,
    hobbies: HobbiesType,
}
export const personalInfoReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case 'PERSONAL-INFO/SET-DATA':
            return {
                ...state,
                lastName: action.lastName,
                firstName: action.firstName,
                hobbies: action.dataHobbies,
                favoriteOcean: action.favoriteOcean,
                gender: action.gender
            }
        case 'PERSONAL-INFO/OPEN-MODAL':
            return {
                ...state, openModal: action.value
            }
        // case "PERSONAL-INFO/SET-HOBBIES":
        //     return {...state, action.payload}
        default:
            return state
    }
}
type PersonalDataType = {
    firstName: string,
    lastName: string,
    gender: string,
    birthdayData: string,
    favoriteOcean: string,
    dataHobbies: HobbiesType,
}

type ACType = PersonalDataType & {type: "PERSONAL-INFO/SET-DATA"}

export const setPersonalDataAC  = ({
        firstName, lastName, gender,
        birthdayData,
        favoriteOcean,
        dataHobbies }: PersonalDataType
): ACType => ({
    type: "PERSONAL-INFO/SET-DATA",
    firstName,
    lastName,
    gender,
    birthdayData,
    favoriteOcean,
    dataHobbies
})

export const setOpenModalAC = (value: boolean) => ({
    type: "PERSONAL-INFO/OPEN-MODAL",
    value
} as const)
// export const setPersonalHobbiesAC = (payload: HobbiesType) => ({
//     type: "PERSONAL-INFO/SET-HOBBIES",
//     payload
// } as const)

export type HobbiesType = {
    [key: string]: boolean | string
}

export type FormDataType = {
    firstName: string,
    lastName: string,
    gender: string,
    birthdayData: string,
    favoriteOcean: string,
}
export type DataTypes = FormDataType & { dataHobbies: HobbiesType }

export type AppActionsType =
    | ACType
    | ReturnType<typeof setOpenModalAC>