import React from "react";
import style from "./SignUpInfo.module.sass";
import {Button, FormControl, TextField} from "@material-ui/core";
import {useFormik} from "formik";
import {setPersonalDataAC} from "../store/personalInfo-reducer";
import {useDispatch} from "react-redux";

type PersonalInfoType = {
    setStep: (step: number) => void
}

export const PersonalInfo = ({setStep}: PersonalInfoType) => {

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            sex: '',
            birthday: '',
            favoriteOcean: '',
            hobby: ''
        },
        // validate: (values) => {
        //     const errors: FormikErrorType = {};
        //     if (!values.mobilePhone) {
        //         errors.mobilePhone = 'Required';
        //     } else if (!mobilePhoneRegExp.test(values.mobilePhone)) {
        //         errors.mobilePhone = 'Invalid mobile phone';
        //     }
        //     if (!values.email) {
        //         errors.email = 'Required';
        //     } else if (!emailRegExp.test(values.email)) {
        //         errors.email = 'Invalid email address';
        //     }
        //     if (!values.password) {
        //         errors.password = 'Required';
        //     } else if (values.password.length < +minLength) {
        //         errors.password = 'Minimum number of characters 8';
        //     } else if (values.password.length > +maxLength) {
        //         errors.password = 'Maximum number of characters 20';
        //     }
        //     if (!values.confirmPassword) {
        //         errors.confirmPassword = 'Required';
        //     } else if (values.password !== values.confirmPassword) {
        //         errors.confirmPassword = 'Invalid confirm password';
        //     }
        //     return errors;
        // },
        onSubmit: values => {
            dispatch(setPersonalDataAC( values ))
            setStep(1)
        },
    })

    return (
        <div className={style.wrapperSignUp}>
            <form onSubmit={formik.handleSubmit}>
                <FormControl>
                    {/*<TextField variant="outlined"*/}
                    {/*           type='tel'*/}
                    {/*           placeholder='+375 __ ___ __ __'*/}
                    {/*           name="mobilePhone"*/}
                    {/*           value={formik.values.mobilePhone}*/}
                    {/*           onChange={formik.handleChange}*/}
                    {/*           label="Mobile phone"*/}
                    {/*           helperText={formik.errors.mobilePhone}*/}
                    {/*           margin="dense"*/}
                    {/*/>*/}
                    {/*<TextField variant="outlined"*/}
                    {/*           name="email"*/}
                    {/*           value={formik.values.email}*/}
                    {/*           onChange={formik.handleChange}*/}
                    {/*           label="Email"*/}
                    {/*           helperText={formik.errors.email}*/}
                    {/*           margin="dense"*/}
                    {/*/>*/}

                    {/*<Button className={style.submitButton} type={'submit'} variant={'contained'} color={'primary'}>*/}
                    {/*    Next*/}
                    {/*</Button>*/}
                    <button onClick={()=>setStep(1)}>sdljvhnosdl</button>
                </FormControl>
            </form>
        </div>
    )
}