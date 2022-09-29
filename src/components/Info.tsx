import React, {useState} from "react";
import {SignUpInfo} from "./SignUpInfo";
import {PersonalInfo} from "./PersonalInfo";
import style from './Info.module.sass'

export const Info = () => {

    const [step, setStep] = useState<number>(1)

    return (
        <div className={style.wrapperInfo}>
            <div className={style.titleInfo}> Fill the form</div>
            <PersonalInfo setStep={setStep}/>
            {/*{step === 1*/}
            {/*    ? <SignUpInfo setStep={setStep}/>*/}
            {/*    : <PersonalInfo setStep={setStep}/>}*/}
        </div>
    )
}