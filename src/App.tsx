import React from 'react';
import style from './App.module.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Skills from './components/Skills/Skills';
import Works from './components/Works/Works';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';

export function App() {
    return (
        <div className={style.app}>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Contacts/>
            <Footer/>
        </div>
    );
}


