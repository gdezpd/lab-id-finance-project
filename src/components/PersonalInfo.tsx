import React from "react";
import style from "./PersonalInfo.module.sass";
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormHelperText,
    FormLabel,
    InputLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    TextField
} from "@material-ui/core";
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import sсhema from "../sсhema.json";
import {setPersonalDataAC} from "../store/personalInfo-reducer";

type PersonalInfoType = {
    setStep: (step: number) => void
}
export type HobbiesType = {
    [key: string]: boolean
}

type FormikErrorType = {
    firstName?: string,
    lastName?: string,
    gender?: string,
    birthdayData?: string,
    favoriteOcean?: string,
    arrayHobbies?: string,
}
export const PersonalInfo = ({setStep}: PersonalInfoType) => {

    const dispatch = useDispatch()
    const oceanArray = sсhema.ocean.oneOf
    const arrayHobbies = useSelector<AppRootStateType, HobbiesType>(state => state.personalInfo.hobbies)

    const minLengthFirstName = sсhema.firstName.minLength
    const maxLengthFirstName = sсhema.firstName.maxLength
    const minLengthLastName = sсhema.lastName.minLength
    const maxLengthLastName = sсhema.lastName.maxLength
    const minAge = sсhema.birthday.minAge
    const maxAge = sсhema.birthday.maxAge


    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            gender: '',
            birthdayData: '2000-01-01',
            favoriteOcean: '',
            ...arrayHobbies,
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.firstName) {
                errors.firstName = 'Required'
            } else if (values.firstName.length <= +minLengthFirstName) {
                errors.firstName = 'Minimum length 2'
            } else if (values.firstName.length >= +maxLengthFirstName) {
                errors.firstName = 'Maximum length 30'
            }
            if (!values.lastName) {
                errors.lastName = 'Required'
            } else if (values.lastName.length <= +minLengthLastName) {
                errors.lastName = 'Minimum length 2'
            } else if (values.lastName.length > +maxLengthLastName) {
                errors.lastName = 'Maximum length 30'
            }
            if (!values.gender) {
                errors.gender = 'Required';
            }
            if (!values.birthdayData) {
                errors.birthdayData = 'Required';
            } else if (result <= +minAge) {
                errors.birthdayData = 'Min age 18';
            } else if (result >= +maxAge) {
                errors.birthdayData = 'Max age 90';
            }
            // if (!values.arrayHobbies) {
            //     errors.arrayHobbies = 'Required';
            // } else if (Object.values(arrayHobbies).find(t => t === true)) {
            //     errors.arrayHobbies = 'Min 1 hobby';
            // }
            if (!values.favoriteOcean) {
                errors.favoriteOcean = 'Required';
            }
            return errors;
        },
        onSubmit: values => {

            // const hobbies = {}
            // ///
            // const data = {
            //     ...hobbies,
            //     date: {brithDay: values}
            // }
            // //   for()
            console.log('values', values)

            dispatch(setPersonalDataAC(values))
            setStep(3)
        },
    })

    function _calculateAge(birthday: Date) {
        const ageDifMs = Date.now() - birthday.getTime();
        const ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    let result = _calculateAge(new Date(formik.values.birthdayData))

    return (
        <div className={style.wrapperPersonalInfo}>
            <form onSubmit={formik.handleSubmit}>
                <FormControl>
                    <div className={style.firstName}>
                        <TextField
                            // style={{width: '120px'}}
                            variant="outlined"
                            name="firstName"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            label="First name"
                            helperText={formik.errors.firstName}
                            margin="dense"
                        />
                    </div>
                    <div className={style.lastName}>
                        <TextField
                            variant="outlined"
                            name="lastName"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            label="Last name"
                            helperText={formik.errors.lastName}
                            margin="dense"
                        />
                    </div>
                    <div className={style.gender}>
                        <FormLabel id="demo-radio-buttons-group-label" style={{fontSize: '15px'}}>Gender</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="row-demo-radio-buttons-group-label"
                            defaultValue
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="female" name="gender"
                                              control={<Radio onChange={formik.handleChange} size="small"/>}
                                              label="Female"/>
                            <FormControlLabel value="male" name="gender"
                                              control={<Radio onChange={formik.handleChange} size="small"/>}
                                              label="Male"/>
                            <FormControlLabel value="other" name="gender"
                                              control={<Radio onChange={formik.handleChange} size="small"/>}
                                              label="Other"/>
                            <FormHelperText>{formik.errors.gender}</FormHelperText>
                        </RadioGroup>
                    </div>

                    <div className={style.birthDay}>
                        <TextField
                            type='date'
                            variant="outlined"
                            name="birthdayData"
                            value={formik.values.birthdayData}
                            onChange={formik.handleChange}
                            helperText={formik.errors.birthdayData}
                            // defaultValue={someDate.someDate}
                            margin="normal"
                            size="small"
                        />
                    </div>

                    <div className={style.favoriteOcean}>
                        <Box sx={{minWidth: 120}}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Ocean</InputLabel>
                                <Select
                                    name="favoriteOcean"
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={formik.values.favoriteOcean}
                                    label="Favorite ocean"
                                    onChange={formik.handleChange}
                                >
                                    {oceanArray.map((ocean) => <MenuItem key={ocean} value={ocean}>{ocean}</MenuItem>)}
                                </Select>

                            </FormControl>
                            <FormHelperText>{formik.errors.favoriteOcean} </FormHelperText>
                        </Box>
                    </div>

                    <div className={style.hobbies}>
                        <Box sx={{display: 'flex'}}>
                            <FormControl sx={{m: 1}} component="fieldset" variant="outlined">
                                <FormLabel component="legend">Hobby</FormLabel>
                                <FormGroup>
                                    {Object.keys(arrayHobbies).map((h, i) => {
                                        return <FormControlLabel
                                            key={i}
                                            control={
                                                <Checkbox
                                                    name={h}
                                                    value={h[i]}
                                                    onChange={formik.handleChange}
                                                    size="small"
                                                />}
                                            label={h}
                                        />
                                    })}
                                </FormGroup>
                            </FormControl>
                        </Box>
                    </div>

                    <Button style={{margin: '5px 0'}} onClick={() => setStep(1)} variant={'contained'}
                            color={'primary'}>
                        Change SignUp
                    </Button>

                    <Button style={{margin: '5px 0'}} type={'submit'} variant={'contained'} color={'primary'}>
                        Complete
                    </Button>

                </FormControl>
            </form>
        </div>
    )
}