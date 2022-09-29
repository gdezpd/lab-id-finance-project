import sсhema from "../sсhema.json";
import {HobbiesType} from "../components/PersonalInfo";

const hobbesArray = sсhema.hobby.anyOf
const oceanArray = sсhema.ocean.oneOf
//const hobbies = Object.fromEntries(hobbesArray.map((name) => ({[name]: false})))


const hobbies = Object.assign({}, ...hobbesArray.map((name) => ({[name]: false})))
const favoriteOcean = oceanArray.map((ocean) => ocean)


const initialState = {
    openModal: false,
    firstName: '',
    lastName: '',
    gender: '',
    favoriteOcean: '',
    hobbies,
}

type InitialStateType = typeof initialState

export const personalInfoReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case 'PERSONAL-INFO/SET-DATA':
            return {
                ...state,
                lastName: action.lastName,
                firstName: action.firstName,
                // hobbies: action.gender,
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

export const setPersonalDataAC = ({
                                      firstName, lastName, gender,
                                      // birthday,
                                      favoriteOcean,
                                      // hobbies
                                  }: DataTypes
) => ({
    type: "PERSONAL-INFO/SET-DATA", firstName, lastName, gender,
    // birthday,
    favoriteOcean,
    // hobbies
} as const)
export const setOpenModalAC = (value: boolean) => ({
    type: "PERSONAL-INFO/OPEN-MODAL",
    value
} as const)
// export const setPersonalHobbiesAC = (payload: HobbiesType) => ({
//     type: "PERSONAL-INFO/SET-HOBBIES",
//     payload
// } as const)

type DataTypes = {
    firstName: string,
    lastName: string,
    gender: string,
    // birthday: BirthdayType,
    favoriteOcean: string,
    // hobbies: HobbiesTypeArray
}

export type AppActionsType =
    | ReturnType<typeof setPersonalDataAC>
    | ReturnType<typeof setOpenModalAC>