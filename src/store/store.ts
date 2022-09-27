import {combineReducers, createStore} from "redux";

import {signUpReducer} from "./signUp-reducer";

const rootReducer = combineReducers({
    signUp: signUpReducer
})
export const store = createStore(rootReducer);
export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;
