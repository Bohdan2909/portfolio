import style from './Nav.module.css';
import React from 'react';
import styleContainer from './../../../common/styles/Container.module.css'

export const Nav = () => {
    return (

            <div className={style.nav}>
                <a href="src/components/Header/Nav/Nav#">Home</a>
                <a href="src/components/Header/Nav/Nav#">Skills</a>
                <a href="src/components/Header/Nav/Nav#">Works</a>
                <a href="src/components/Header/Nav/Nav#">Contacts</a>
            </div>


    );
};