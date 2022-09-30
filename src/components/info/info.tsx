import React from "react";
import {SignUpInfo} from "../sign-up-info/sign-up-info";
import {PersonalInfo} from "../personal-info/personal-info";
import style from './info.module.sass'
import CompleteModal from "./complete";

type InfoType = {
    step: number
    setStep: (step: number) => void
}

export const Info = ({step, setStep}: InfoType) => {

    return (
        <div className={style.wrapperInfo}>

            <div className={style.titleInfo}> Fill the form</div>
            {step === 1
                ? <SignUpInfo setStep={setStep}/>
                : <PersonalInfo setStep={setStep}/>
            }
            <CompleteModal setStep={setStep}/>
        </div>
    )
}