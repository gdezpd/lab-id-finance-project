import React from "react";
import style from './sign-up-info.module.sass'
import {Button, FormControl, TextField} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {setDataAC} from "../../store/sign-up-reducer";
import {useFormik} from "formik";
import schema from '../../schema.json'

type FormikErrorType = {
    mobilePhone?: string
    email?: string
    password?: string
    confirmPassword?: string
}

type SignUpInfoType = {
    setStep: (step: number) => void
}

export const SignUpInfo = (props: SignUpInfoType) => {

    const dispatch = useDispatch()

    const mobilePhone = useSelector<AppRootStateType, string>(state => state.signUp.mobilePhone)
    const email = useSelector<AppRootStateType, string>(state => state.signUp.email)
    const password = useSelector<AppRootStateType, string>(state => state.signUp.password)
    const confirmPassword = useSelector<AppRootStateType, string>(state => state.signUp.confirmPassword)

    const initialValues = {
        mobilePhone,
        email,
        password,
        confirmPassword
    }

    const minLength = schema.password.minLength
    const maxLength = schema.password.maxLength
    const mobilePhoneRegExp = new RegExp(schema.mobilePhone.regExp)
    const emailRegExp = new RegExp(schema.email.regExp)

    const formik = useFormik({
        initialValues,
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.mobilePhone) {
                errors.mobilePhone = 'Required';
            } else if (!mobilePhoneRegExp.test(values.mobilePhone)) {
                errors.mobilePhone = 'Invalid mobile phone';
            }
            if (!values.email) {
                errors.email = 'Required';
            } else if (!emailRegExp.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < +minLength) {
                errors.password = 'Minimum number of characters 8';
            } else if (values.password.length > +maxLength) {
                errors.password = 'Maximum number of characters 20';
            }
            if (!values.confirmPassword) {
                errors.confirmPassword = 'Required';
            } else if (values.password !== values.confirmPassword) {
                errors.confirmPassword = 'Invalid confirm password';
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(setDataAC(values))
            props.setStep(2)
        },
    })
    return (
        <div className={style.wrapperSignUp}>
            <form onSubmit={formik.handleSubmit} className={style.wrapperForm}>
                <FormControl className={style.wrapperFormControl}>
                    <TextField
                        variant="outlined"
                        type='tel'
                        placeholder='+375 __ ___ __ __'
                        name="mobilePhone"
                        value={formik.values.mobilePhone}
                        onChange={formik.handleChange}
                        label="Mobile phone"
                        error={formik.errors.mobilePhone ? true : false}
                        helperText={formik.errors.mobilePhone}
                        margin="dense"
                    />
                    <TextField variant="outlined"
                               name="email"
                               value={formik.values.email}
                               onChange={formik.handleChange}
                               label="Email"
                               error={formik.errors.email ? true : false}
                               helperText={formik.errors.email}
                               margin="dense"
                    />
                    <TextField variant="outlined"
                               name="password"
                               type='password'
                               value={formik.values.password}
                               onChange={formik.handleChange}
                               label="Password"
                               error={formik.errors.password ? true : false}
                               helperText={formik.errors.password}
                               margin="dense"
                    />
                    <TextField variant="outlined"
                               name="confirmPassword"
                               type='password'
                               value={formik.values.confirmPassword}
                               onChange={formik.handleChange}
                               label="Confirm password"
                               error={formik.errors.confirmPassword ? true : false}
                               helperText={formik.errors.confirmPassword}
                               margin="dense"
                    />
                    <Button className={style.submitButton} type={'submit'} variant={'contained'} color={'primary'}>
                        Next
                    </Button>
                </FormControl>
            </form>
        </div>
    )
}