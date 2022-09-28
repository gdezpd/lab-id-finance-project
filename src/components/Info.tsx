import React from "react";
import {SignUpInfo} from "./SignUpInfo";
import {PersonalInfo} from "./PersonalInfo";
import style from './Info.module.sass'

export const Info = () => {

    return (
        <div className={style.wrapperInfo}>
            <div className={style.titleInfo}> Fill the form</div>
            <SignUpInfo/>
            <PersonalInfo/>
        </div>
    )
}