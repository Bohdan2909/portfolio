import React from 'react';
import s from './Footer.module.css'
import styledContainer from '../../common/styles/Container.module.css'
import {Title} from '../Title/Title';

const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${styledContainer.container} ${s.footerContainer}`}>
                <Title titleOne={'Bohdan'} titleTwo={'Atamaniuk'} />
                <div className={s.footerSocial}>
                    <div className={s.footerSocialItems}></div>
                    <div className={s.footerSocialItems}></div>
                    <div className={s.footerSocialItems}></div>
                    <div className={s.footerSocialItems}></div>
                </div>
                <div className={s.rightReserved}>&#169;2022 All rights reserved</div>
            </div>
        </div>
    );
};

export default Footer;