import React from 'react'
import { PersonalInfo } from '../components/PersonalInfo'
import { SignUpInfo } from '../components/SignUpInfo'
import './App.sass'
import style from './Header.module.sass'


function App() {

    return <div className="App">
        <div className={style.container}>
            <header className={style.header}></header>
            <main className={style.main}>
                <div>
                    <button>Начать</button>
                </div>
                <SignUpInfo/>
                <PersonalInfo/>
            </main>
            <footer className={style.footer}></footer>
        </div>
    </div>
}

export default App



