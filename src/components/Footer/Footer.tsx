import React from 'react';
import s from './Footer.module.css'
import styledContainer from '../../common/styles/Container.module.css'

const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${styledContainer.container} ${s.footerContainer}`}>
                <h2>Bohdan Atamaniuk</h2>
                <div className={s.footerSocial}>
                    <div className={s.footerSocialItems}></div>
                    <div className={s.footerSocialItems}></div>
                    <div className={s.footerSocialItems}></div>
                    <div className={s.footerSocialItems}></div>
                    <div className={s.footerSocialItems}></div>
                    <div className={s.footerSocialItems}></div>
                </div>
                <div>&#169;2022 All rights reserved</div>
            </div>
        </div>
    );
};

export default Footer;