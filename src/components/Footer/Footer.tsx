import React from 'react';
import s from './Footer.module.scss'
import styledContainer from '../../common/styles/Container.module.scss'
import {Title} from '../Title/Title';
import gitHub from './../../assets/github.svg'
import telegram from './../../assets/telegram.svg'
import linkedin from './../../assets/linkedin.svg'
import facebook from './../../assets/facebook.svg'


const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${styledContainer.container} ${s.footerContainer}`}>
                <Title titleOne={'Bohdan'} titleTwo={'Atamaniuk'} />
                <div className={s.footerSocial}>
                    <div className={s.footerSocialItems}>
                        <a href="https://github.com/Bohdan2909">
                            <img className={s.footerImg} src={gitHub} alt="gitHub"/>
                        </a>
                        <div className={s.footerSocialIcon}>GitHub</div>
                    </div>
                    <div className={s.footerSocialItems}>
                        <a href="https://t.me/bogdan12334">
                            <img className={`${s.footerImg} ${s.footerTelegram}`} src={telegram} alt="telegram"/>
                        </a>
                        <div className={s.footerSocialIcon}>Telegram</div>
                    </div>
                    <div className={s.footerSocialItems}>
                        <a href="https://www.linkedin.com/feed/">
                            <img className={`${s.footerImg} ${s.footerLinkedin}`} src={linkedin} alt="linkedin"/>
                        </a>
                        <div className={s.footerSocialIcon}>Linkedin</div>
                    </div>
                    <div className={s.footerSocialItems}>
                        <a href="https://www.facebook.com/profile.php?id=100009331212772">
                            <img className={s.footerImg} src={facebook} alt="facebook"/>
                        </a>
                        <div className={s.footerSocialIcon}>Facebook</div>
                    </div>
                </div>
                <div className={s.rightReserved}>&#169;2022 All rights reserved</div>
            </div>
        </div>
    );
};

export default Footer;