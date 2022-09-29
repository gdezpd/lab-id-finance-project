import sсhema from "../sсhema.json";
import {HobbiesType} from "../components/PersonalInfo";

const hobbesArray = sсhema.hobby.anyOf
const oceanArray = sсhema.ocean.oneOf
//const hobbies = Object.fromEntries(hobbesArray.map((name) => ({[name]: false})))


const hobbies = Object.assign({}, ...hobbesArray.map((name) => ({[name]: false})))
const favoriteOcean = oceanArray.map((ocean) => ocean)


const initialState = {
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
                // hobbies: (() => {
                //     return [["sdsd"]: false]
                // }()),
                favoriteOcean: action.favoriteOcean,
                // [action.task.todoListId]: [action.task, ...{...state}[action.task.todoListId]]
                // [hobbies]: {action.hobbies === hobbies ? hobbies},
                gender: action.gender
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