import React, {useState} from 'react'
import './App.sass'
import style from './Header.module.sass'
import logo from '../assets/image/logo.svg'
import {Info} from "../components/Info";
import {BreadCrumbs} from "../components/BreadСrumbs";

function App() {

    const [location, setLocation] = useState(['step 1'])

    return <div className="App">

        <div className={style.container}>
            <header className={style.header}>
                <div className={style.headerWrapper}>
                    <img src={logo} alt="logo" className={style.headerLogo}/>
                    <div className={style.headerTitle}>Lab ID FINANCE</div>
                </div>
            </header>

            <main className={style.main}>
                <BreadCrumbs/>
                <Info/>
            </main>

            <footer className={style.footer}></footer>
        </div>
    </div>
}

export default App



