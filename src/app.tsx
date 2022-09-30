import React, {useState} from 'react'
import style from './app.module.sass'
import logo from './assets/image/logo.svg'
import {Info} from "./components/info/info";
import {BreadCrumbs} from "./components/bread-crumbs/bread-crumbs";

function App() {
    const [step, setStep] = useState<number>(1)
    return <div className={style.container}>
        <header className={style.header}>
            <div className={style.headerWrapper}>
                <img src={logo} alt="logo" className={style.headerLogo}/>
                <div className={style.headerTitle}>Lab ID FINANCE</div>
            </div>
        </header>

        <main className={style.main}>
            <BreadCrumbs step={step}/>
            <Info step={step} setStep={setStep}/>
        </main>

        <footer className={style.footer}>
            <div className={style.footerLogo}>Copyright © 2012 — 2022 ID Finance</div>
            <div className={style.footerLinks}>
                <div><a href="https://idfinance.com/es/aviso-legal/">Aviso legal</a></div>
                <div><a href="https://idfinance.com/es/politica-de-cookies/">Política de cookies</a></div>
                <div><a href="https://idfinance.com/es/politica-de-privacidad/">Politica de privacidad</a></div>
                <div><a href="https://idfinance.com/es/linea-etica/">Línea Ética</a></div>
            </div>
        </footer>
    </div>
}

export default App



