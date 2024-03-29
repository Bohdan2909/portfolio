import React from 'react';
import {Nav} from './Nav/Nav';
import styleContainer from '../../common/styles/Container.module.scss';
import style from './Header.module.scss'

const Header = () => {
    return (
        <div className={style.header}>
            <div className={`${styleContainer.container} ${style.headerContainer}`}>
                <Nav/>
            </div>
        </div>
    );
};

export default Header;



