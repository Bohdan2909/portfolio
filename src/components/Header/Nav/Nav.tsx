import style from './Nav.module.scss';
import React from 'react';
import styleContainer from '../../../common/styles/Container.module.scss'

export const Nav = () => {
    return (

        <div className={style.nav}>
            <a href={'/'}>Home</a>
            <a href={'#skills'}>Skills</a>
            <a href={'#works'}>Works</a>
            <a href={'#contacts'}>Contacts</a>
        </div>


    );
};