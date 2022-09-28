import React, {ChangeEvent, useState} from "react";
import style from './SignUpInfo.module.sass'
import {TextField} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {setConfirmPasswordAC, setEmailAC, setMobilePhoneAC, setPasswordAC} from "../store/signUp-reducer";

export const SignUpInfo = () => {

    const mobilePhone = useSelector<AppRootStateType, string>(state => state.signUp.mobilePhone)
    const email = useSelector<AppRootStateType, string>(state => state.signUp.email)
    const password = useSelector<AppRootStateType, string>(state => state.signUp.password)
    const confirmPassword = useSelector<AppRootStateType, string>(state => state.signUp.confirmPassword)

    let [error, setError] = useState<string | null>(null)

    const dispatch = useDispatch()

    const mobilePhoneOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMobilePhoneAC(e.currentTarget.value))
    }
    const emailOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setEmailAC(e.currentTarget.value))
    }
    const passwordOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setPasswordAC(e.currentTarget.value))
    }
    const confirmPasswordOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setConfirmPasswordAC(e.currentTarget.value))
    }

    return (
        <div className={style.wrapperSignUp}>
            <TextField variant="outlined"
                       error={!!error}
                       value={mobilePhone}
                       onChange={mobilePhoneOnChangeHandler}
                       label="Mobile phone"
                       helperText={error}
            />
            <TextField variant="outlined"
                       error={!!error}
                       value={email}
                       onChange={emailOnChangeHandler}
                       label="Email"
                       helperText={error}
            />
            <TextField variant="outlined"
                       error={!!error}
                       value={password}
                       onChange={passwordOnChangeHandler}
                       label="Password"
                       helperText={error}
            />
            <TextField variant="outlined"
                       error={!!error}
                       value={confirmPassword}
                       onChange={confirmPasswordOnChangeHandler}
                       label="Repeat Password"
                       helperText={error}
            />
            <div>
                <button>Next</button>
            </div>
        </div>
    )
}