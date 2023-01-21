import React from 'react';
import style from './Main.module.scss'
import styleContainer from '../../common/styles/Container.module.scss'
import avatar from './../../assets/avatar.jpeg'

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.wrapper}`}>
                <div className={style.description}>
                    <p className={style.name}>BOHDAN <span>ATAMANIUK</span></p>
                    <p className={style.react}><span>React</span> Developer</p>
                    <button className={style.btnMore}>Learn More</button>
                </div>
                <div className={style.avatar}>
                    <img className={style.avatarImg} src={avatar} alt="avatar"/>
                </div>
            </div>
        </div>
    );
};

export default Main;