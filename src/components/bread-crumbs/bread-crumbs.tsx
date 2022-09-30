import React from "react";
import style from './bread-crumbs.module.sass'

type BreadCrumbsType = {
    step: number
}
export const BreadCrumbs = ({step}: BreadCrumbsType) => {

    const signUpClassName = `${style.signUp} ${step === 1 ? style.isActive : ''}`
    const personalInfoClassName = `${style.personalInfo} ${step === 2 ? style.isActive : ''}`
    return (
        <div className={style.wrapperBreadCrumbs}>
            <div className={signUpClassName}>Sign up info</div>
            <span> &nbsp;---&nbsp; </span>
            <div className={personalInfoClassName}>Personal info</div>
        </div>
    )
}